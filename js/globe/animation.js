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

        // Show modal early when globe visually appears stopped (easing ~99%)
        if (easeOutQuart >= 0.99 && !introModalShown) {
            introModalShown = true;
            const userProgress = getProgress();
            if (!userProgress.guidedComplete && !userProgress.introSeen) {
                showIntroModal();
            } else {
                showTapHint();
            }
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
        // Handle zoom transition animation
        if (isTransitioning) {
            const elapsed = Date.now() - transitionStartTime;
            
            if (transitionPhase === 'zoom-out') {
                // Store starting Z on first frame
                if (transitionStartZ === null) {
                    transitionStartZ = camera.position.z;
                }

                const progress = Math.min(elapsed / zoomOutDuration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out for smoother motion

                // Smoothly zoom out from start position to zoomOutDistance
                camera.position.z = transitionStartZ + (zoomOutDistance - transitionStartZ) * easeOut;

                if (progress >= 1) {
                    // Switch to zoom-in phase - apply pending rotation
                    targetRotationY = pendingRotationY;
                    targetRotationX = pendingRotationX;
                    transitionPhase = 'zoom-in';
                    transitionStartTime = Date.now();
                    transitionStartZ = null; // Reset for next transition

                    // Calculate zoom distance based on target location's density
                    currentZoomInDistance = getZoomDistanceForLocation(pendingZoomLocation || pendingLocation);
                }
            } else if (transitionPhase === 'zoom-in') {
                const progress = Math.min(elapsed / zoomInDuration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                
                // Zoom in (closer for dense areas)
                camera.position.z = zoomOutDistance - (zoomOutDistance - currentZoomInDistance) * easeOut;
                
                // Check if globe rotation has settled (close enough to target)
                // Tighter threshold (0.01 rad = ~0.5 degrees) to ensure globe is truly still
                const yDiff = celebrationInProgress
                    ? Math.abs(targetRotationY - globe.rotation.y)
                    : Math.abs(shortestAngleDiff(globe.rotation.y, targetRotationY));
                const rotationSettled =
                    yDiff < 0.01 &&
                    Math.abs(globe.rotation.x - targetRotationX) < 0.01;

                if (progress >= 1 && rotationSettled) {
                    isTransitioning = false;
                    transitionPhase = 'none';
                    camera.position.z = currentZoomInDistance;
                    pendingZoomLocation = null;

                    // Trigger bounce animation for the target location
                    if (pendingLocation) {
                        const loc = pendingLocation;
                        pendingLocation = null;

                        // Find the marker for this location and trigger sky bounce
                        // Small delay to ensure globe is fully settled before bloom appears
                        const targetMarker = markers.find(m => m.userData.id === loc.id);
                        if (targetMarker) {
                            setTimeout(() => triggerSkyBounce(targetMarker), 50);
                        }

                        if (autoOpenPanel) {
                            autoOpenPanel = false;
                            // Auto-open panel after brief pause to see the icon
                            setTimeout(() => openPanel(loc), 400);
                        } else {
                            triggerBounce(loc.id);
                        }
                    }

                    // End celebration when spin completes
                    if (celebrationInProgress) {
                        // Small delay to let users appreciate the result
                        setTimeout(() => {
                            celebrationInProgress = false;
                            // Show menu toggle button again (mobile)
                            const menuToggle = document.getElementById('menuToggle');
                            if (menuToggle) {
                                menuToggle.style.display = '';
                            }
                        }, 1000);
                    }
                }
            }
        }

        // Handle bridge animation (soft bump during location transitions)
        if (isBridging) {
            const elapsed = Date.now() - bridgeStartTime;
            const progress = Math.min(elapsed / bridgeDuration, 1);

            // Sine curve for smooth arc: rises to peak at midpoint, settles at end
            // sin(0) = 0, sin(π/2) = 1, sin(π) = 0
            const arcProgress = Math.sin(progress * Math.PI);

            // Calculate camera position: start -> peak -> default
            const peakZ = bridgeStartZ + bridgeBumpHeight;
            const targetZ = defaultZoomDistance;

            if (progress < 0.5) {
                // Rising phase: from start toward peak
                camera.position.z = bridgeStartZ + (peakZ - bridgeStartZ) * (arcProgress);
            } else {
                // Settling phase: from peak toward default
                const settleProgress = (progress - 0.5) * 2; // 0 to 1 for second half
                const easeOut = 1 - Math.pow(1 - settleProgress, 2);
                camera.position.z = peakZ - (peakZ - targetZ) * easeOut;
            }

            if (progress >= 1) {
                isBridging = false;
                camera.position.z = defaultZoomDistance;
            }
        }

        // Normal interaction after intro

        // Only auto-rotate if:
        // - User is not dragging
        // - Panel is not open (user is not reading)
        // - Not transitioning
        // - Not bridging
        if (!isUserInteracting && !panelIsOpen && !isTransitioning && !isBridging) {
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
        if (Math.abs(globe.rotation.y) > Math.PI * 4) {
            const normalize = Math.round(globe.rotation.y / (2 * Math.PI)) * 2 * Math.PI;
            globe.rotation.y -= normalize;
            targetRotationY -= normalize;
        }

        // Check if rotation has settled after sidebar/icon navigation (no zoom transition)
        // This handles the sequence: rotate → sky bounce → panel open
        if (pendingLocation && !isTransitioning) {
            const yDiff = Math.abs(shortestAngleDiff(globe.rotation.y, targetRotationY));
            const xDiff = Math.abs(globe.rotation.x - targetRotationX);
            const rotationSettled = yDiff < 0.01 && xDiff < 0.01;

            if (rotationSettled) {
                const loc = pendingLocation;
                pendingLocation = null;

                // Find the marker and trigger sky bounce
                const targetMarker = markers.find(m => m.userData.id === loc.id);
                if (targetMarker) {
                    triggerSkyBounce(targetMarker);

                    // Open panel after sky bounce animation starts (slight delay)
                    setTimeout(() => openPanel(loc), 300);
                } else {
                    // No marker found, just open panel
                    openPanel(loc);
                }
            }
        }

        // Update tooltip position to stay anchored to hovered marker
        if (hoveredMarker && tooltip.classList.contains('visible')) {
            updateTooltipPosition(hoveredMarker);
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

    // T+5000ms: Fade message
    setTimeout(() => {
        hideCelebrationMessage();
    }, 5000);

    // Note: celebrationInProgress is set to false in animation loop
    // when spin completes (isTransitioning becomes false)
}

function showCelebrationMessage() {
    const msg = document.createElement('div');
    msg.id = 'celebration-message';
    msg.className = 'celebration-message';
    msg.innerHTML = `
        <h2>The world is yours.</h2>
        <p>120+ ports of call await.</p>
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
    // Convert Mediterranean coords to globe rotation
    const targetRotationX = MED_COORDS.lat * Math.PI / 180;
    const lonRad = MED_COORDS.lon * (Math.PI / 180);
    const baseTargetY = -lonRad - 1.55;

    // Add extra spin for drama (1 full rotation + target)
    const targetY = baseTargetY + Math.PI * 2;

    // Start zoom-out transition, then rotate, then zoom-in
    isTransitioning = true;
    transitionPhase = 'zoom-out';
    transitionStartTime = Date.now();

    // Store target rotation for after zoom-out
    pendingRotationY = targetY;
    pendingRotationX = targetRotationX;
    pendingLocation = null;
    pendingZoomLocation = null;
}

// ============================================
// TAP HINT
// ============================================

// Show tap/click hint after intro (works on both mobile and desktop)
// Only shows for returning visitors - first-time visitors see the intro modal instead
function showTapHint() {
    const hint = document.getElementById('mobileTapHint');
    if (!hint) return;

    // Don't show this hint during guided mode - intro modal handles it
    if (!isGuidedComplete()) return;

    // Show immediately
    hint.classList.add('visible');

    // Hide hint when user interacts or after 5 seconds
    const hideHint = () => {
        hint.classList.remove('visible');
        document.removeEventListener('touchstart', hideHint);
        document.removeEventListener('click', hideHint);
    };

    document.addEventListener('touchstart', hideHint, { once: true });
    document.addEventListener('click', hideHint, { once: true });
    setTimeout(hideHint, 5000);
}

