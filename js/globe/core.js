// ============================================
// GLOBE CORE MODULE
// Three.js scene, camera, globe, and textures
// ============================================

// Three.js global objects
let scene, camera, renderer, globe, markers = [], markerSprites = [];
let raycaster, mouse;
let hoveredMarker = null;
let isUserInteracting = false;
let targetRotationX = 0, targetRotationY = 0;
let mouseXOnMouseDown = 0, mouseYOnMouseDown = 0;
let targetRotationXOnMouseDown = 0, targetRotationYOnMouseDown = 0;

// Intro animation state
let introComplete = false;
let introStartTime = null;
let introStartY = 0;

// Panel state - controls whether globe auto-rotates
let panelIsOpen = false;
let currentLocation = null;

// Flag to prevent auto-opening panel when navigating
let skipPanelOpen = false;

// Bounce animation for focused icon
let bouncingMarkerId = null;
let bounceStartTime = null;

// Zoom transition animation
let isTransitioning = false;
let transitionStartTime = null;
let transitionPhase = 'none'; // 'zoom-out', 'zoom-in', 'none'
let targetCameraZ = 1.8;
let currentZoomInDistance = baseZoomInDistance;

// Store density factors globally for zoom calculations
let globalDensityFactors = null;

// Pending rotation/zoom targets
let pendingRotationY = 0;
let pendingRotationX = 0;
let pendingLocation = null;
let pendingZoomLocation = null;

// DOM elements
const tooltip = document.getElementById('tooltip');
const sidePanel = document.getElementById('sidePanel');

// ============================================
// PROGRESS TRACKING (localStorage)
// ============================================

function getProgress() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { doorsVisited: [], introSeen: false, guidedComplete: false };
}

function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function markDoorVisited(locationTitle) {
    const progress = getProgress();
    if (!progress.doorsVisited.includes(locationTitle)) {
        progress.doorsVisited.push(locationTitle);
        saveProgress(progress);
    }
    return allDoorsVisited();
}

function allDoorsVisited() {
    const progress = getProgress();
    return DOORS_REQUIRED.every(d => progress.doorsVisited.includes(d));
}

function markGuidedComplete() {
    const progress = getProgress();
    progress.guidedComplete = true;
    saveProgress(progress);
}

function isGuidedComplete() {
    return getProgress().guidedComplete;
}

// Load video as texture (does NOT autoplay)
function loadVideoTexture(url) {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
            console.warn('Video load timeout:', url);
            resolve(null);
        }, 8000);
        
        const video = document.createElement('video');
        video.crossOrigin = 'anonymous';
        video.loop = false;
        video.muted = true;
        video.playsInline = true;
        video.preload = 'auto';
        video.autoplay = false;
        
        video.onloadeddata = function() {
            clearTimeout(timeout);
            const texture = new THREE.VideoTexture(video);
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            console.log('Loaded video texture (paused):', url);
            videoTextures.push({ video, texture });
            resolve({ texture, video });
        };
        
        video.onerror = () => {
            clearTimeout(timeout);
            console.error('Failed to load video:', url);
            resolve(null);
        };
        
        video.src = url;
    });
}

// Track which textures are currently being loaded to prevent duplicate requests
const textureLoadingPromises = {};

// Lazy load a texture for a specific location when needed
async function lazyLoadTexture(locationTitle, marker) {
    // Already loaded?
    if (locationTextures[locationTitle]) {
        return locationTextures[locationTitle];
    }

    // Already loading? Return the existing promise
    if (textureLoadingPromises[locationTitle]) {
        return textureLoadingPromises[locationTitle];
    }

    // Check if this location has a custom texture URL
    const imageUrl = locationPortholeURLs[locationTitle];
    const videoUrl = locationVideoURLs[locationTitle];

    if (!imageUrl && !videoUrl) {
        return null; // No custom texture for this location
    }

    console.log(`Lazy loading texture for: ${locationTitle}`);

    // Create the loading promise
    textureLoadingPromises[locationTitle] = (async () => {
        let texture = null;

        if (videoUrl) {
            // Load video texture
            const result = await loadVideoTexture(videoUrl);
            if (result && result.texture) {
                texture = result.texture;
                locationVideos[locationTitle] = result.video;
            }
        } else if (imageUrl) {
            // Load image texture
            texture = await loadTextureWithTransparentBlack(imageUrl, 65);
        }

        if (texture) {
            locationTextures[locationTitle] = texture;

            // Update the marker's material if provided
            if (marker) {
                updateMarkerWithTexture(marker, texture, locationTitle);
            }
        }

        // Clean up loading promise
        delete textureLoadingPromises[locationTitle];

        return texture;
    })();

    return textureLoadingPromises[locationTitle];
}

// Update a marker's material with a newly loaded texture
function updateMarkerWithTexture(marker, texture, locationTitle) {
    if (!marker || !texture) return;

    // Always use SpriteMaterial for markers (video plays separately on click)
    if (marker.material) {
        marker.material.map = texture;
        marker.material.needsUpdate = true;
    }

    // AI textures are square - adjust scale from canvas aspect ratio
    const baseSize = marker.userData.baseSize;
    if (baseSize) {
        marker.scale.set(baseSize * 2, baseSize * 2, 1);
    }

    marker.userData.useAIPorthole = true;
    marker.userData.textureLoaded = true;
    console.log(`Applied texture to marker: ${locationTitle}`);
}

// Load image and make black pixels transparent (outside circular porthole)
function loadTextureWithTransparentBlack(url, threshold = 60) {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => {
            console.warn('Image load timeout:', url);
            resolve(null);
        }, 10000);
        
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            clearTimeout(timeout);
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const portholeRadius = Math.min(cx, cy) * 0.88;
            
            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const i = (y * canvas.width + x) * 4;
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    
                    const dx = x - cx;
                    const dy = y - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (r < threshold && g < threshold && b < threshold && dist > portholeRadius) {
                        data[i + 3] = 0;
                    }
                }
            }
            
            ctx.putImageData(imageData, 0, 0);
            
            const texture = new THREE.CanvasTexture(canvas);
            texture.needsUpdate = true;
            console.log('Loaded with circular transparency:', url);
            resolve(texture);
        };
        img.onerror = () => {
            clearTimeout(timeout);
            console.error('Failed to load:', url);
            resolve(null);
        };
        img.src = url;
    });
}

async function init() {
    // Preload AI porthole textures - priority locations first, then rest
    if (USE_AI_PORTHOLES) {
        // Priority: Three doors + Australia (visible early in the experience)
        const priorityLocations = [
            "Toledo, Ohio",
            "Darwin, Australia",
            "Auckland, New Zealand",
            "Sydney, Australia",
            "Melbourne, Australia",
            "Brisbane, Australia",
            "Perth, Australia",
            "Adelaide, Australia",
            "Hobart, Tasmania",
            "Airlie Beach, Australia",
            "Broome, Australia"
        ];

        // Load priority locations first
        console.log('Loading priority textures (doors + Australia)...');
        const priorityPromises = priorityLocations
            .filter(name => locationPortholeURLs[name])
            .map(async (name) => {
                try {
                    const texture = await loadTextureWithTransparentBlack(locationPortholeURLs[name], 65);
                    if (texture) {
                        locationTextures[name] = texture;
                    }
                } catch (e) {
                    console.warn(`Failed to load ${name}:`, e.message);
                }
            });

        await Promise.all(priorityPromises);
        console.log('Priority textures loaded');

        // Load remaining textures - all in parallel with 20s total timeout
        const remainingLocations = Object.keys(locationPortholeURLs)
            .filter(name => !priorityLocations.includes(name));

        console.log(`Loading ${remainingLocations.length} remaining textures...`);

        const remainingPromises = remainingLocations.map(async (name) => {
            try {
                const texture = await loadTextureWithTransparentBlack(locationPortholeURLs[name], 65);
                if (texture) {
                    locationTextures[name] = texture;
                }
            } catch (e) {
                console.warn(`Failed to load ${name}:`, e.message);
            }
        });

        // Wait for all with 20s timeout
        await Promise.race([
            Promise.all(remainingPromises),
            new Promise(resolve => setTimeout(resolve, 20000))
        ]);
        console.log('All textures loaded (or timed out)');

        // Also load Toledo video
        if (locationVideoURLs["Toledo, Ohio"]) {
            try {
                const result = await loadVideoTexture(locationVideoURLs["Toledo, Ohio"]);
                if (result && result.texture) {
                    locationVideos["Toledo, Ohio"] = result.video;
                }
            } catch (e) {
                console.warn('Toledo video failed:', e.message);
            }
        }
    }
    
    // Scene
    scene = new THREE.Scene();
    
    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;
    
    // Initialize rotation targets to Toledo
    targetRotationY = TOLEDO_Y;
    targetRotationX = TOLEDO_X;

    // Renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        premultipliedAlpha: false,  // Fix iPad transparency
        powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a1628, 1); // Match body background
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Handle WebGL context loss/restore
    renderer.domElement.addEventListener('webglcontextlost', (e) => {
        e.preventDefault();
        console.warn('WebGL context lost');
    });
    renderer.domElement.addEventListener('webglcontextrestored', () => {
        console.log('WebGL context restored');
    });

    // Raycaster for interaction
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // Create globe
    createGlobe();
    
    // Create markers
    createMarkers();

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5e6, 1.2);
    sunLight.position.set(5, 2, 5);
    scene.add(sunLight);
    
    const fillLight = new THREE.DirectionalLight(0x4477aa, 0.25);
    fillLight.position.set(-5, -1, -5);
    scene.add(fillLight);
    
    const rimLight = new THREE.DirectionalLight(0x88aaff, 0.15);
    rimLight.position.set(0, 5, -3);
    scene.add(rimLight);

    // Event listeners
    renderer.domElement.addEventListener('mousedown', onMouseDown, false);
    renderer.domElement.addEventListener('mousemove', onMouseMove, false);
    renderer.domElement.addEventListener('mouseup', onMouseUp, false);
    renderer.domElement.addEventListener('mouseleave', onMouseUp, false);
    renderer.domElement.addEventListener('wheel', onMouseWheel, false);
    renderer.domElement.addEventListener('click', onClick, false);
    window.addEventListener('resize', onWindowResize, false);

    // Touch events
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: false });
    renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: false });
    renderer.domElement.addEventListener('touchend', onTouchEnd, false);
    
    // Tap detection for mobile
    let touchStartTime;
    let touchStartPos;
    renderer.domElement.addEventListener('touchstart', (e) => {
        touchStartTime = Date.now();
        touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, false);
    renderer.domElement.addEventListener('touchend', (e) => {
        const touchDuration = Date.now() - touchStartTime;
        const touch = e.changedTouches[0];
        const moveDistance = Math.sqrt(
            Math.pow(touch.clientX - touchStartPos.x, 2) + 
            Math.pow(touch.clientY - touchStartPos.y, 2)
        );
        if (touchDuration < 300 && moveDistance < 10) {
            onTouchTap(e);
        }
    }, false);

    // Build location list
    buildLocationList();

    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1000);

    // Start animation
    animate();

    // Stars
    initStars();

}

// Load textures progressively in background - staggered over 30 seconds for smooth globe animation
function createGlobe() {
    const textureLoader = new THREE.TextureLoader();

    // Use static Earth texture - video caused red flash artifacts
    const earthTexture = textureLoader.load(
        'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
    );
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    console.log('Earth texture initialized');

    const bumpMap = textureLoader.load(
        'https://unpkg.com/three-globe/example/img/earth-topology.png'
    );

    const specularMap = textureLoader.load(
        'https://unpkg.com/three-globe/example/img/earth-water.png'
    );

    const geometry = new THREE.SphereGeometry(1, 128, 128);

    const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        bumpMap: bumpMap,
        bumpScale: 0.015,
        specularMap: specularMap,
        specular: new THREE.Color(0x666666),
        shininess: 25
    });

    globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Inner atmosphere
    const innerAtmoGeometry = new THREE.SphereGeometry(1.01, 64, 64);
    const innerAtmoMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            varying vec3 vNormal;
            varying vec3 vPosition;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                vPosition = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec3 vNormal;
            void main() {
                float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                vec3 atmosphereColor = mix(vec3(0.3, 0.6, 1.0), vec3(0.5, 0.8, 1.0), intensity);
                gl_FragColor = vec4(atmosphereColor, intensity * 1.2);
            }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true,
        depthWrite: false
    });
    const innerAtmosphere = new THREE.Mesh(innerAtmoGeometry, innerAtmoMaterial);
    globe.add(innerAtmosphere);
    
    // Middle atmosphere
    const midAtmoGeometry = new THREE.SphereGeometry(1.08, 64, 64);
    const midAtmoMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            varying vec3 vNormal;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec3 vNormal;
            void main() {
                float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
                vec3 glowColor = vec3(0.35, 0.55, 0.95);
                gl_FragColor = vec4(glowColor, intensity * 0.7);
            }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true,
        depthWrite: false
    });
    const midAtmosphere = new THREE.Mesh(midAtmoGeometry, midAtmoMaterial);
    globe.add(midAtmosphere);
    
    // Outer atmosphere
    const outerAtmoGeometry = new THREE.SphereGeometry(1.18, 64, 64);
    const outerAtmoMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            varying vec3 vNormal;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec3 vNormal;
            void main() {
                float intensity = pow(0.55 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
                vec3 glowColor = vec3(0.25, 0.4, 0.8);
                gl_FragColor = vec4(glowColor, intensity * 0.35);
            }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true,
        depthWrite: false
    });
    const outerAtmosphere = new THREE.Mesh(outerAtmoGeometry, outerAtmoMaterial);
    globe.add(outerAtmosphere);
}
