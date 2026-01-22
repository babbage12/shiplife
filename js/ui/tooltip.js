// ============================================
// TOOLTIP MODULE
// Hover tooltips for location markers
// ============================================

function showTooltip(loc, marker) {
    document.getElementById('tooltipTag').textContent = loc.tag;
    document.getElementById('tooltipTitle').textContent = loc.title;
    document.getElementById('tooltipDesc').textContent = loc.shortDesc;
    
    updateTooltipPosition(marker);
    tooltip.classList.add('visible');
}

function updateTooltipPosition(marker) {
    const markerWorldPos = new THREE.Vector3();
    marker.getWorldPosition(markerWorldPos);
    
    const screenPos = markerWorldPos.clone().project(camera);
    
    const x = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-screenPos.y * 0.5 + 0.5) * window.innerHeight;
    
    const offsetY = marker.userData.isDoor ? 85 : 70;
    
    tooltip.style.left = x + 'px';
    tooltip.style.top = (y + offsetY) + 'px';
}

function hideTooltip() {
    tooltip.classList.remove('visible');
}

function checkHover(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(markers);
    
    if (intersects.length > 0) {
        const marker = intersects[0].object;
        
        if (marker.userData.title) {
            hoveredMarker = marker;
            showTooltip(marker.userData, marker);
            document.body.style.cursor = 'pointer';
            
            // Highlight marker
            const baseScale = marker.userData.baseSize * 2;
            const useAI = marker.userData.useAIPorthole;
            const baseScaleY = useAI ? marker.userData.baseSize * 2 : (marker.userData.isDoor ? marker.userData.baseSize * 2 : marker.userData.baseSize * 2.2);
            marker.scale.set(baseScale * 1.3, baseScaleY * 1.3, 1);
        }
    } else {
        if (hoveredMarker) {
            const baseScale = hoveredMarker.userData.baseSize * 2;
            const useAI = hoveredMarker.userData.useAIPorthole;
            const baseScaleY = useAI ? hoveredMarker.userData.baseSize * 2 : (hoveredMarker.userData.isDoor ? hoveredMarker.userData.baseSize * 2 : hoveredMarker.userData.baseSize * 2.2);
            hoveredMarker.scale.set(baseScale, baseScaleY, 1);
        }
        hoveredMarker = null;
        hideTooltip();
        document.body.style.cursor = isUserInteracting ? 'grabbing' : 'grab';
    }
}
