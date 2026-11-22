function animate() {
    requestAnimationFrame(animate);
    
    // Cinematic intro - fast spins from space, settle on Toledo
    if (!introComplete) {
        if (!introStartTime) {
            introStartTime = Date.now();
            // Start with 4 full rotations ahead of Toledo
            introStartY = TOLEDO_Y + Math.PI * 8;
            globe.rotation.y = introStartY;
            globe.rotation.x = 0.15;
        }

        const elapsed = Date.now() - introStartTime;
        const totalDuration = 8400; // ~8.4 seconds (40% slower)
        const progress = Math.min(elapsed / totalDuration, 1);

        // Easing - fast start, smooth slowdown
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        // Zoom from deep space to final position (closer on mobile)
        const isMobile = window.innerWidth <= 768;
        const finalZoom = isMobile ? 1.8 : 2.2;
        camera.position.z = 20 - ((20 - finalZoom) * easeOutQuart);

        // Spin from start position to Toledo
        globe.rotation.y = introStartY - (introStartY - TOLEDO_Y) * easeOutQuart;

        // Gradually tilt to correct angle
        globe.rotation.x = 0.15 + (TOLEDO_X - 0.15) * easeOutQuart;

        // Show welcome modal every visit, once the globe visually appears stopped (easing ~99%)
        if (easeOutQuart >= 0.99 && !introModalShown) {
            introModalShown = true;
            showIntroModal();
        }

        if (progress >= 1) {
            // Done - set final values
            camera.position.z = finalZoom;
            globe.rotation.y = TOLEDO_Y;
            globe.rotation.x = TOLEDO_X;
            targetRotationY = TOLEDO_Y;
            targetRotationX = TOLEDO_X;
            introComplete = true;
        } else {
            // Set targets for smooth handoff
            targetRotationY = globe.rotation.y;
            targetRotationX = globe.rotation.x;
        }
    } else {
        // Flights between locations drive the camera directly
        updateFlight();

        // Normal interaction after intro

        // Only auto-rotate if the reader is not dragging, not reading a panel,
        // and not mid-flight
        if (!isUserInteracting && !panelIsOpen && !flight) {
            // Scale rotation speed based on zoom level - slower when zoomed in
            const maxZoom = 4.5;  // zoomed out
            const minZoom = 1.5;  // zoomed in close
            const zoomFactor = (camera.position.z - minZoom) / (maxZoom - minZoom);
            const rotationSpeed = 0.00003 + (zoomFactor * 0.00012); // 0.00003 to 0.00015
            targetRotationY += rotationSpeed;
        }
        
        // Always smooth-lerp toward target rotation
        if (celebrationInProgress) {
            // During celebration: use raw difference to allow full dramatic spin
            globe.rotation.y += (targetRotationY - globe.rotation.y) * 0.05;
        } else {
            // Normal: use shortest angular distance to avoid spinning the long way around
            globe.rotation.y += shortestAngleDiff(globe.rotation.y, targetRotationY) * 0.05;
        }
        globe.rotation.x += (targetRotationX - globe.rotation.x) * 0.05;
        
        // Periodically normalize rotation values to prevent unbounded accumulation
        // This keeps values in a reasonable range without affecting visual appearance
        if (!flight && Math.abs(globe.rotation.y) > Math.PI * 4) {
            const normalize = Math.round(globe.rotation.y / (2 * Math.PI)) * 2 * Math.PI;
            globe.rotation.y -= normalize;
            targetRotationY -= normalize;
        }

    }

    // Sky bounce animation (subtle atmospheric glow around marker)
    if (skyBounceActive && skyBounceSprite && skyBounceStartTime) {
        const elapsed = Date.now() - skyBounceStartTime;
        const duration = 600; // 600ms total animation

        // Update position to follow the marker
        const targetMarker = skyBounceSprite.userData.targetMarker;
        if (targetMarker) {
            const worldPos = new THREE.Vector3();
            targetMarker.getWorldPosition(worldPos);
            // Position slightly in front of marker (toward camera)
            skyBounceSprite.position.copy(worldPos);
            skyBounceSprite.position.multiplyScalar(1.02);
        }

        if (elapsed < duration) {
            const progress = elapsed / duration;

            // Scale: compact expansion from marker
            const baseSize = 0.025; // Smaller start
            const maxSize = 0.06;   // Stays compact
            const scaleEase = Math.sin(progress * Math.PI); // Smooth in-out
            const scale = baseSize + (maxSize - baseSize) * scaleEase;
            skyBounceSprite.scale.set(scale, scale, 1);

            // Opacity: bright pulse
            const opacity = Math.sin(progress * Math.PI) * 0.9; // Max 0.9 opacity - much brighter
            skyBounceSprite.material.opacity = Math.max(0, opacity);
        } else {
            // Animation complete
            skyBounceActive = false;
            skyBounceSprite.visible = false;
            skyBounceSprite.material.opacity = 0;
            skyBounceSprite.userData.targetMarker = null;
        }
    }

    // Marker animations
    markers.forEach((marker, i) => {
        const isDoor = marker.userData.isDoor;
        const useAI = marker.userData.useAIPorthole;
        const baseScale = marker.userData.baseSize * 2; // Original scale
        // AI portholes are square, canvas ones have base
        const baseScaleY = useAI ? marker.userData.baseSize * 2 : (isDoor ? marker.userData.baseSize * 2 : marker.userData.baseSize * 2.2);
        const isBouncing = bouncingMarkerId && marker.userData.id === bouncingMarkerId;

        // Ensure marker is visible (but respect dimming and glowing state)
        marker.visible = true;
        // Don't override opacity for dimmed or glowing markers
        if (!marker.userData.isDimmed && !marker.userData.isGlowing && marker.material.opacity !== undefined) {
            marker.material.opacity = 1.0;
        }

        // Skip scale animations for markers currently in glow animation
        if (marker.userData.isGlowing) return;

        if (isBouncing && bounceStartTime) {
            // Bounce animation - continuous until clicked
            const elapsed = Date.now() - bounceStartTime;
            const cycleDuration = 2500; // Duration of one bounce cycle (slow, gentle)
            const cycleProgress = (elapsed % cycleDuration) / cycleDuration;

            // Continuous bouncing with moderate amplitude (30% scale increase)
            const bounce = 1 + Math.sin(cycleProgress * Math.PI * 2) * 0.3;
            marker.scale.set(baseScale * bounce, baseScaleY * bounce, 1);
        } else if (!hoveredMarker || hoveredMarker !== marker) {
            // Check if this marker's panel is currently open - if so, stay still
            const isPanelOpenForThis = currentLocation && currentLocation.id === marker.userData.id;
            
            if (isPanelOpenForThis) {
                // Panel is open for this location - no animation, stay at base scale
                marker.scale.set(baseScale, baseScaleY, 1);
            } else if (isDoor) {
                // Doors: only pulse when NO panel is open anywhere
                if (currentLocation) {
                    // Some panel is open - doors stay still
                    marker.scale.set(baseScale, baseScaleY, 1);
                } else {
                    // No panel open - doors pulse to attract attention
                    const pulse = 1 + Math.sin(Date.now() * 0.003 + i) * 0.1;
                    marker.scale.set(baseScale * pulse, baseScaleY * pulse, 1);
                }
            } else if (useAI) {
                // AI portholes: very gentle breathing (slower, subtler)
                const breath = 1 + Math.sin(Date.now() * 0.0015 + i * 0.5) * 0.03;
                marker.scale.set(baseScale * breath, baseScaleY * breath, 1);
            }
        }
    });
    

    renderer.render(scene, camera);
}

// ============================================
// CELEBRATION SEQUENCE
// Triggered after completing all three doors
// ============================================

function triggerDoorsCompleteSequence() {
    // Mark guided mode as complete
    markGuidedComplete();

    // Block menu from opening during celebration
    celebrationInProgress = true;

    // Hide menu toggle button during celebration (mobile)
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.style.display = 'none';
    }

    // T+0: Show message + light up all markers at once
    showCelebrationMessage();
    flareAllMarkers();

    // T+400ms: Start spinning to Mediterranean (overlaps with marker flare animation)
    setTimeout(() => {
        spinToMediterranean();
    }, 400);

    // T+800ms: Undim sidebar items (after flare animation completes)
    setTimeout(() => {
        undimSidebarItems();
    }, 800);

    // T+900ms: Spin the sidebar "wheel" so it comes alive with the globe
    setTimeout(() => {
        spinSidebarWheel();
    }, 900);

    // T+5000ms: Fade message
    setTimeout(() => {
        hideCelebrationMessage();
    }, 5000);

    // Note: celebrationInProgress is set to false by endCelebrationSpin()
    // when the flight to the Mediterranean lands
}

function showCelebrationMessage() {
    const msg = document.createElement('div');
    msg.id = 'celebration-message';
    msg.className = 'celebration-message';
    msg.innerHTML = `
        <h2>120+ ports</h2>
        <div class="unexplored-word">unexplored</div>
    `;
    document.body.appendChild(msg);
    requestAnimationFrame(() => {
        msg.classList.add('visible');
    });
}

function hideCelebrationMessage() {
    const msg = document.getElementById('celebration-message');
    if (msg) {
        msg.classList.remove('visible');
        setTimeout(() => msg.remove(), 500);
    }
}

function spinToMediterranean() {
    // Celebration: a high, slow flight to the Med with one extra lap of the
    // globe for drama. Uses the same flight system as location-to-location.
    startFlight({
        lat: MED_COORDS.lat,
        lon: MED_COORDS.lon,
        extraSpin: Math.PI * 2,
        endZ: atmosphereZoomDistance,
        minDuration: 4200,
        minPeakZ: 4.8,
        onLand: endCelebrationSpin
    });
}

function endCelebrationSpin() {
    if (!celebrationInProgress) return;
    // Small delay to let users appreciate the result
    setTimeout(() => {
        celebrationInProgress = false;
        // Auto-open location menu on mobile
        if (window.innerWidth <= 768) {
            const menu = document.getElementById('locationList');
            const overlay = document.getElementById('mobileOverlay');
            if (menu) menu.classList.add('open');
            if (overlay) overlay.classList.add('open');
        }
    }, 1000);
}

// ============================================
// FLIGHT
// Liftoff -> cruise -> descent between two points on the globe.
// Time-based (not per-frame) so it runs the same speed on 60Hz and 120Hz
// screens. Altitude and duration scale with the distance travelled, so a
// short hop stays low and quick while crossing the world climbs high enough
// to see whole continents go by.
// ============================================

// --- Tuning knobs ---
const FLIGHT_MIN_DURATION = 1200;   // ms for the shortest hop
const FLIGHT_EXTRA_DURATION = 2400; // ms added for a flight to the far side of the world
const FLIGHT_MIN_LIFT = 0.3;        // camera rise for the shortest hop
const FLIGHT_EXTRA_LIFT = 3.0;      // extra rise for a flight to the far side
const FLIGHT_MOBILE_LIFT = 1.35;    // phones climb higher (narrow screen shows less globe)
const FLIGHT_MAX_Z = 6.5;           // never fly higher than this
const GLOBE_LON_OFFSET = 1.56;      // matches the texture/centering offset used everywhere

let flight = null;

function smoothstep(edge0, edge1, x) {
    const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
}

// Slow start, fast middle, slow finish: most of the turning happens at altitude
function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

// Great-circle angle between two lat/lon points (radians in, radians out)
function angularDistance(lat1, lon1, lat2, lon2) {
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    return 2 * Math.asin(Math.min(1, Math.sqrt(a)));
}

// opts: { lat, lon (degrees), endZ, extraSpin, minDuration, minPeakZ, onLand }
function startFlight(opts) {
    const isMobile = window.innerWidth <= 768;

    const toX = opts.lat * Math.PI / 180;
    const lonRad = opts.lon * Math.PI / 180;
    let toY = -lonRad - GLOBE_LON_OFFSET;
    // Shortest way around
    while (toY - globe.rotation.y > Math.PI) toY -= 2 * Math.PI;
    while (toY - globe.rotation.y < -Math.PI) toY += 2 * Math.PI;
    toY += opts.extraSpin || 0;

    // How far are we going? (0 = same spot, 1 = opposite side of the world)
    const fromLat = globe.rotation.x;
    const fromLon = -(globe.rotation.y + GLOBE_LON_OFFSET);
    const k = angularDistance(fromLat, fromLon, toX, lonRad) / Math.PI;

    const startZ = camera.position.z;
    const endZ = opts.endZ;
    const lift = (FLIGHT_MIN_LIFT + FLIGHT_EXTRA_LIFT * Math.pow(k, 0.7)) *
                 (isMobile ? FLIGHT_MOBILE_LIFT : 1);
    const peakZ = Math.min(FLIGHT_MAX_Z,
        Math.max(opts.minPeakZ || 0, Math.max(startZ, endZ) + lift));
    const duration = Math.max(opts.minDuration || 0,
        FLIGHT_MIN_DURATION + FLIGHT_EXTRA_DURATION * Math.pow(k, 0.6));

    flight = {
        startTime: Date.now(),
        duration,
        fromY: globe.rotation.y, toY,
        fromX: globe.rotation.x, toX,
        startZ, endZ, peakZ,
        onLand: opts.onLand
    };
}

// Fly to a location, then glow its marker and open its story panel
function flyToLocation(loc) {
    startFlight({
        lat: loc.coords[0],
        lon: loc.coords[1],
        endZ: getZoomDistanceForLocation(loc),
        onLand: () => landAtLocation(loc)
    });
}

function landAtLocation(loc) {
    autoOpenPanel = false;
    const marker = markers.find(m => m.userData.id === loc.id);
    if (!marker) {
        openPanel(loc);
        return;
    }
    triggerSkyBounce(marker);
    // Pause so the reader sees where they landed before the panel slides in
    const isMobile = window.innerWidth <= 768;
    setTimeout(() => openPanel(loc), isMobile ? 1500 : 300);
}

// Called every frame. Returns true while a flight is driving the camera.
function updateFlight() {
    if (!flight) return false;

    // Reader grabbed the globe mid-flight: hand control straight back
    if (isUserInteracting) {
        flight = null;
        autoOpenPanel = false;
        return false;
    }

    const t = Math.min(1, (Date.now() - flight.startTime) / flight.duration);
    const turn = easeInOutQuart(t);

    globe.rotation.y = flight.fromY + (flight.toY - flight.fromY) * turn;
    globe.rotation.x = flight.fromX + (flight.toX - flight.fromX) * turn;

    // Ground level drifts from start height to landing height...
    const ground = flight.startZ + (flight.endZ - flight.startZ) * smoothstep(0, 1, t);
    // ...while the climb rises over the first 40%, cruises, then descends over the last 40%
    const climb = smoothstep(0, 0.4, t) * (1 - smoothstep(0.6, 1, t));
    camera.position.z = ground + (flight.peakZ - ground) * climb;

    // Keep the drag/lerp targets glued to the flight so nothing fights it
    targetRotationY = globe.rotation.y;
    targetRotationX = globe.rotation.x;

    if (t >= 1) {
        const onLand = flight.onLand;
        flight = null;
        if (onLand) onLand();
    }
    return true;
}
