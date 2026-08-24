// ============================================
// HOVER MODULE
// Globe marker hover: highlights the marker and turns the sidebar "wheel"
// to the hovered location. (The old floating tooltip card was retired in
// favor of the sidebar wheel — see cueSidebarForHover in sidebar.js.)
// ============================================

function checkHover(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(markers);

    if (intersects.length > 0) {
        const marker = intersects[0].object;

        if (marker.userData.title) {
            hoveredMarker = marker;
            cueSidebarForHover(marker.userData.id); // turn the sidebar "wheel"
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
        clearSidebarCue(); // wheel returns to rest when leaving the globe's markers
        document.body.style.cursor = isUserInteracting ? 'grabbing' : 'grab';
    }
}
