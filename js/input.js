// ============================================
// INPUT MODULE
// Mouse and touch event handlers
// ============================================

function onMouseDown(event) {
    event.preventDefault();
    isUserInteracting = true;
    
    // Hide tooltip when user starts interacting
    hideTooltip();
    
    mouseXOnMouseDown = event.clientX;
    mouseYOnMouseDown = event.clientY;
    
    // Capture current TARGET rotation (not globe rotation) for smooth continuation
    targetRotationXOnMouseDown = targetRotationX;
    targetRotationYOnMouseDown = targetRotationY;
}

function onMouseMove(event) {
    if (isUserInteracting) {
        targetRotationY = targetRotationYOnMouseDown + (event.clientX - mouseXOnMouseDown) * 0.002;
        targetRotationX = targetRotationXOnMouseDown + (event.clientY - mouseYOnMouseDown) * 0.002;
        targetRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX));
    }
    
    checkHover(event);
}

function onMouseUp() {
    isUserInteracting = false;
}

function onMouseWheel(event) {
    event.preventDefault();
    camera.position.z += event.deltaY * 0.002;
    camera.position.z = Math.max(1.2, Math.min(4, camera.position.z));
}

// Touch events
let touchStartX, touchStartY;
let initialPinchDistance = null;
let initialCameraZ = null;

function onTouchStart(event) {
    // Hide tooltip when user starts interacting
    hideTooltip();
    
    if (event.touches.length === 1) {
        isUserInteracting = true;
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        targetRotationXOnMouseDown = targetRotationX;
        targetRotationYOnMouseDown = targetRotationY;
    } else if (event.touches.length === 2) {
        // Pinch zoom start
        isUserInteracting = true;
        initialPinchDistance = getPinchDistance(event.touches);
        initialCameraZ = camera.position.z;
    }
}

function onTouchMove(event) {
    event.preventDefault();
    
    if (event.touches.length === 1 && isUserInteracting && !initialPinchDistance) {
        // Single finger drag to rotate
        targetRotationY = targetRotationYOnMouseDown + (event.touches[0].clientX - touchStartX) * 0.002;
        targetRotationX = targetRotationXOnMouseDown + (event.touches[0].clientY - touchStartY) * 0.002;
        targetRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX));
    } else if (event.touches.length === 2 && initialPinchDistance) {
        // Pinch to zoom
        const currentDistance = getPinchDistance(event.touches);
        const scale = initialPinchDistance / currentDistance;
        camera.position.z = Math.max(1.2, Math.min(4, initialCameraZ * scale));
    }
}

function onTouchEnd(event) {
    if (event.touches.length === 0) {
        isUserInteracting = false;
        initialPinchDistance = null;
        initialCameraZ = null;
    } else if (event.touches.length === 1) {
        // Switched from pinch to single touch
        initialPinchDistance = null;
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        targetRotationXOnMouseDown = targetRotationX;
        targetRotationYOnMouseDown = targetRotationY;
    }
}

function getPinchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

// Mobile tap to select location
function onTouchTap(event) {
    if (event.changedTouches.length === 1) {
        const touch = event.changedTouches[0];
        mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(markers);

        if (intersects.length > 0) {
            const marker = intersects[0].object;
            if (marker.userData.title) {
                const loc = marker.userData;

                // LAZY LOAD: Trigger texture loading for this marker
                if (USE_AI_PORTHOLES && !marker.userData.textureLoaded) {
                    lazyLoadTexture(loc.title, marker);
                }
                
                // Check if we're switching to a different location
                const isSwitching = currentLocation && currentLocation.id !== loc.id;
                
                // Close previous door's iris if switching (only for doors)
                if (isSwitching && currentLocation && currentLocation.isDoor) {
                    startIrisAnimation(currentLocation.id, 0, null);
                }
                
                // If switching, trigger globe rotation
                if (isSwitching) {
                    closePanel();
                    const lon = loc.coords[1];
                    const lat = loc.coords[0];
                    isTransitioning = true;
                    transitionPhase = 'zoom-out';
                    transitionStartTime = Date.now();
                    pendingRotationY = getTargetY(lon);
                    pendingRotationX = lat * (Math.PI / 180);
                    pendingLocation = null;
                    pendingZoomLocation = loc; // Track for dynamic zoom
                }
                
                // Check if this location has a video animation
                const hasVideo = locationVideos[loc.title];
                
                // Helper function to open panel (now triggers midway through animation)
                const openPanelForLocation = () => {
                    // Start background music for doors (if configured)
                    if (loc.isDoor && doorAudioTracks[loc.id]) {
                        playBackgroundMusic(loc.id);
                    }
                    
                    if (hasVideo) {
                        // Play video and open panel midway through
                        const video = locationVideos[loc.title];
                        video.currentTime = 0; // Reset to start
                        video.play();
                        console.log('Playing video animation for:', loc.title);
                        
                        // Open panel after 40% of video duration (or 400ms minimum)
                        const panelDelay = Math.max(400, (video.duration * 0.4) * 1000);
                        setTimeout(() => openPanel(loc), panelDelay);
                    } else {
                        // No video - open panel immediately
                        openPanel(loc);
                    }
                };
                
                // Doors have iris animation, regular icons don't
                // But skip iris animation for AI texture markers (no canvas to animate)
                const hasAITexture = marker.userData.useAIPorthole;

                if (loc.isDoor && !hasAITexture) {
                    const currentOpen = getMarkerOpenAmount(loc.id);

                    if (currentOpen < 0.5) {
                        // Iris is closed - start animation and open panel midway
                        const delay = isSwitching ? 600 : 0;
                        setTimeout(() => {
                            startIrisAnimation(loc.id, 1, null); // No callback - we'll use timeout

                            // Open panel after 200ms (roughly halfway through iris animation)
                            setTimeout(() => openPanelForLocation(), 200);
                        }, delay);
                    } else {
                        // Iris already open - handle video/panel
                        if (isSwitching) {
                            setTimeout(() => openPanelForLocation(), 800);
                        } else {
                            openPanelForLocation();
                        }
                    }
                } else if (loc.isDoor && hasAITexture) {
                    // Door with AI texture - no iris animation needed, just open panel
                    if (isSwitching) {
                        setTimeout(() => openPanelForLocation(), 800);
                    } else {
                        openPanelForLocation();
                    }
                } else {
                    // Regular icons - no iris animation
                    if (isSwitching) {
                        setTimeout(() => openPanelForLocation(), 800);
                    } else {
                        openPanelForLocation();
                    }
                }
            }
        }
    }
}

function onClick(event) {
    if (hoveredMarker) {
        const loc = hoveredMarker.userData;

        // LAZY LOAD: Trigger texture loading for this marker
        if (USE_AI_PORTHOLES && !hoveredMarker.userData.textureLoaded) {
            lazyLoadTexture(loc.title, hoveredMarker);
        }

        // Check if we're switching to a different location
        const isSwitching = currentLocation && currentLocation.id !== loc.id;
        
        // Close previous door's iris if switching (only for doors)
        if (isSwitching && currentLocation && currentLocation.isDoor) {
            startIrisAnimation(currentLocation.id, 0, null);
        }
        
        // If switching, trigger globe rotation
        if (isSwitching) {
            closePanel();
            const lon = loc.coords[1];
            const lat = loc.coords[0];
            isTransitioning = true;
            transitionPhase = 'zoom-out';
            transitionStartTime = Date.now();
            pendingRotationY = getTargetY(lon);
            pendingRotationX = lat * (Math.PI / 180);
            pendingLocation = null;
            pendingZoomLocation = loc; // Track for dynamic zoom
        }
        
        // Check if this location has a video animation
        const hasVideo = locationVideos[loc.title];
        
        // Helper function to open panel (now triggers midway through animation)
        const openPanelForLocation = () => {
            // Start background music for doors (if configured)
            if (loc.isDoor && doorAudioTracks[loc.id]) {
                playBackgroundMusic(loc.id);
            }
            
            if (hasVideo) {
                // Play video and open panel midway through
                const video = locationVideos[loc.title];
                video.currentTime = 0; // Reset to start
                video.play();
                console.log('Playing video animation for:', loc.title);
                
                // Open panel after 40% of video duration (or 400ms minimum)
                const panelDelay = Math.max(400, (video.duration * 0.4) * 1000);
                setTimeout(() => openPanel(loc), panelDelay);
            } else {
                // No video - open panel immediately
                openPanel(loc);
            }
        };
        
        // Doors have iris animation, regular icons don't
        // But skip iris animation for AI texture markers (no canvas to animate)
        const hasAITexture = hoveredMarker.userData.useAIPorthole;

        if (loc.isDoor && !hasAITexture) {
            const currentOpen = getMarkerOpenAmount(loc.id);

            if (currentOpen < 0.5) {
                // Iris is closed - start animation and open panel midway
                const delay = isSwitching ? 600 : 0;
                setTimeout(() => {
                    startIrisAnimation(loc.id, 1, null); // No callback - we'll use timeout

                    // Open panel after 200ms (roughly halfway through iris animation)
                    setTimeout(() => openPanelForLocation(), 200);
                }, delay);
            } else {
                // Iris already open - handle video/panel
                if (isSwitching) {
                    setTimeout(() => openPanelForLocation(), 800);
                } else {
                    openPanelForLocation();
                }
            }
        } else if (loc.isDoor && hasAITexture) {
            // Door with AI texture - no iris animation needed, just open panel
            if (isSwitching) {
                setTimeout(() => openPanelForLocation(), 800);
            } else {
                openPanelForLocation();
            }
        } else {
            // Regular icons - no iris animation
            if (isSwitching) {
                setTimeout(() => openPanelForLocation(), 800);
            } else {
                openPanelForLocation();
            }
        }
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
