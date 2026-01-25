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

    const isVideo = locationVideoURLs.hasOwnProperty(locationTitle);

    if (isVideo) {
        // Use shader material for video
        marker.material = createVideoChromaMaterial(texture);
    } else {
        // Use sprite material for static images
        if (marker.material) {
            marker.material.map = texture;
            marker.material.needsUpdate = true;
        }
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
    // PROGRESSIVE LOADING: Globe shows immediately, textures load in background
    console.log('Initializing with progressive texture loading');
    
    // Scene
    scene = new THREE.Scene();
    
    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;
    
    // Initialize rotation targets to Toledo
    targetRotationY = TOLEDO_Y;
    targetRotationX = TOLEDO_X;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a1628, 1); // Match body background to prevent flash
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

    // Start progressive texture loading in background (after globe is visible)
    if (USE_AI_PORTHOLES) {
        setTimeout(() => {
            progressivelyLoadTextures();
        }, 1500); // Wait for globe to be fully visible
    }
}

// Load textures progressively in background - small batches to avoid freezing
async function progressivelyLoadTextures() {
    const BATCH_SIZE = 4; // Load 4 textures at a time
    const BATCH_DELAY = 100; // ms between batches

    const locationNames = Object.keys(locationPortholeURLs);
    console.log(`Progressive loading: ${locationNames.length} textures in batches of ${BATCH_SIZE}`);

    for (let i = 0; i < locationNames.length; i += BATCH_SIZE) {
        const batch = locationNames.slice(i, i + BATCH_SIZE);

        // Load this batch in parallel
        await Promise.all(batch.map(async (name) => {
            // Skip if already loaded
            if (locationTextures[name]) return;

            const url = locationPortholeURLs[name];
            try {
                const texture = await loadTextureWithTransparentBlack(url, 65);
                if (texture) {
                    locationTextures[name] = texture;

                    // Find and update the marker
                    const marker = markers.find(m => m.userData.title === name);
                    if (marker && !marker.userData.textureLoaded) {
                        updateMarkerWithTexture(marker, texture, name);
                    }
                }
            } catch (e) {
                console.warn(`Failed to load texture for ${name}:`, e);
            }
        }));

        // Small delay between batches to keep UI responsive
        if (i + BATCH_SIZE < locationNames.length) {
            await new Promise(resolve => setTimeout(resolve, BATCH_DELAY));
        }
    }

    // Also load video textures
    for (const [name, url] of Object.entries(locationVideoURLs)) {
        if (locationTextures[name]) continue;

        try {
            const result = await loadVideoTexture(url);
            if (result && result.texture) {
                locationTextures[name] = result.texture;
                locationVideos[name] = result.video;

                const marker = markers.find(m => m.userData.title === name);
                if (marker && !marker.userData.textureLoaded) {
                    updateMarkerWithTexture(marker, result.texture, name);
                }
            }
        } catch (e) {
            console.warn(`Failed to load video for ${name}:`, e);
        }
    }

    console.log('Progressive texture loading complete');
}

function createGlobe() {
    const textureLoader = new THREE.TextureLoader();

    // Create video element for animated Earth texture
    const video = document.createElement('video');
    video.src = 'https://res.cloudinary.com/de5jbyhxx/video/upload/v1769115184/GSFC_20170403_Blue_m12564_Marble_orig_orcvyx.mp4';
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.playbackRate = 0.5; // Half speed
    video.play();

    // Create video texture with manual update control
    const earthTexture = new THREE.VideoTexture(video);
    earthTexture.minFilter = THREE.LinearFilter;
    earthTexture.magFilter = THREE.LinearFilter;
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    // Disable automatic updates - we'll control it manually
    earthTexture.generateMipmaps = false;

    // Store reference for manual update control
    window.earthVideo = video;
    window.earthTexture = earthTexture;
    window.earthVideoSafeTime = 0; // Track when it's safe to update again

    // When video loops or seeks, pause updates briefly
    video.addEventListener('seeking', () => {
        window.earthVideoSafeTime = Date.now() + 2000;
    });
    video.addEventListener('ended', () => {
        window.earthVideoSafeTime = Date.now() + 2000;
    });

    // Handle video errors - reset the video to recover
    video.addEventListener('error', (e) => {
        console.warn('Earth video error, resetting:', e);
        window.earthVideoSafeTime = Date.now() + 3000;
        video.currentTime = 0;
        video.play().catch(() => {});
    });

    // Periodically check video health and reset if stalled
    setInterval(() => {
        if (video.paused && !document.hidden) {
            console.log('Earth video stalled, restarting');
            window.earthVideoSafeTime = Date.now() + 2000;
            video.play().catch(() => {});
        }
    }, 5000);

    console.log('Earth video texture initialized');

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
