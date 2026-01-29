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

        if (progress >= 1) {
            // Done - set final values
            camera.position.z = finalZoom;
            globe.rotation.y = TOLEDO_Y;
            globe.rotation.x = TOLEDO_X;
            targetRotationY = TOLEDO_Y;
            targetRotationX = TOLEDO_X;
            introComplete = true;

            // Show tap/click hint after intro
            showTapHint();
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
                const progress = Math.min(elapsed / zoomOutDuration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 2);
                
                // Zoom out
                const startZ = camera.position.z;
                camera.position.z = startZ + (zoomOutDistance - startZ) * easeOut * 0.1;
                
                if (progress >= 1) {
                    // Switch to rotate phase - apply pending rotation
                    targetRotationY = pendingRotationY;
                    targetRotationX = pendingRotationX;
                    transitionPhase = 'zoom-in';
                    transitionStartTime = Date.now();
                    
                    // Calculate zoom distance based on target location's density
                    currentZoomInDistance = getZoomDistanceForLocation(pendingZoomLocation || pendingLocation);
                }
            } else if (transitionPhase === 'zoom-in') {
                const progress = Math.min(elapsed / zoomInDuration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                
                // Zoom in (closer for dense areas)
                camera.position.z = zoomOutDistance - (zoomOutDistance - currentZoomInDistance) * easeOut;
                
                // Check if globe rotation has settled (close enough to target)
                // Use shortestAngleDiff since rotation values may differ by full rotations
                const rotationSettled = 
                    Math.abs(shortestAngleDiff(globe.rotation.y, targetRotationY)) < 0.05 &&
                    Math.abs(globe.rotation.x - targetRotationX) < 0.05;
                
                if (progress >= 1 && rotationSettled) {
                    isTransitioning = false;
                    transitionPhase = 'none';
                    camera.position.z = currentZoomInDistance;
                    pendingZoomLocation = null;
                    
                    // Trigger bounce animation for the target location
                    if (pendingLocation) {
                        triggerBounce(pendingLocation.id);
                        // Panel no longer auto-opens - user must click icon
                        pendingLocation = null;
                    }
                }
            }
        }
        
        // Normal interaction after intro
        
        // Only auto-rotate if:
        // - User is not dragging
        // - Panel is not open (user is not reading)
        // - Not transitioning
        if (!isUserInteracting && !panelIsOpen && !isTransitioning) {
            // Scale rotation speed based on zoom level - slower when zoomed in
            const maxZoom = 4.5;  // zoomed out
            const minZoom = 1.5;  // zoomed in close
            const zoomFactor = (camera.position.z - minZoom) / (maxZoom - minZoom);
            const rotationSpeed = 0.00003 + (zoomFactor * 0.00012); // 0.00003 to 0.00015
            targetRotationY += rotationSpeed;
        }
        
        // Always smooth-lerp toward target rotation
        // Use shortest angular distance to avoid spinning the long way around
        globe.rotation.y += shortestAngleDiff(globe.rotation.y, targetRotationY) * 0.05;
        globe.rotation.x += (targetRotationX - globe.rotation.x) * 0.05;
        
        // Periodically normalize rotation values to prevent unbounded accumulation
        // This keeps values in a reasonable range without affecting visual appearance
        if (Math.abs(globe.rotation.y) > Math.PI * 4) {
            const normalize = Math.round(globe.rotation.y / (2 * Math.PI)) * 2 * Math.PI;
            globe.rotation.y -= normalize;
            targetRotationY -= normalize;
        }
        
        // Update tooltip position to stay anchored to hovered marker
        if (hoveredMarker && tooltip.classList.contains('visible')) {
            updateTooltipPosition(hoveredMarker);
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
        
        // Billboard video meshes to face camera
        if (marker.userData.isVideoMesh) {
            marker.lookAt(camera.position);
        }
        
        // Ensure marker is visible and fully opaque
        marker.visible = true;
        if (marker.material.opacity !== undefined) {
            marker.material.opacity = 1.0;
        }
        
        if (isBouncing && bounceStartTime) {
            // Bounce animation - continuous until clicked
            const elapsed = Date.now() - bounceStartTime;
            const cycleDuration = 1600; // Duration of one bounce cycle (slow, gentle)
            const cycleProgress = (elapsed % cycleDuration) / cycleDuration;

            // Continuous bouncing with larger amplitude (50% scale increase)
            const bounce = 1 + Math.sin(cycleProgress * Math.PI * 2) * 0.5;
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
    
    // Update video textures each frame - smart update to prevent glitching
    videoTextures.forEach(({ texture, video }) => {
        // Update texture if:
        // 1. Video is actively playing (for animation)
        // 2. Video is paused but we haven't shown the current frame yet (for static display)
        const isPlaying = !video.paused && !video.ended;
        const isReady = video.readyState >= 2;

        if (isReady) {
            if (isPlaying) {
                // Video is playing - update every frame
                texture.needsUpdate = true;
            } else if (!texture.userData?.lastFrameShown || texture.userData.lastFrameShown !== video.currentTime) {
                // Video paused/ended - update once to show current frame, then stop
                texture.needsUpdate = true;
                texture.userData = texture.userData || {};
                texture.userData.lastFrameShown = video.currentTime;
            }
        }
    });

    renderer.render(scene, camera);
}

// Show tap/click hint after intro (works on both mobile and desktop)
function showTapHint() {
    const hint = document.getElementById('mobileTapHint');
    if (!hint) return;

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

