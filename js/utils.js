// ============================================
// UTILITY FUNCTIONS
// Helper functions used across the application
// ============================================

// Convert latitude/longitude to 3D vector position on globe
function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    
    return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
    );
}

// Shortest angle difference calculation (for smooth rotation)
function shortestAngleDiff(current, target) {
    const diff = target - current;
    const fullRotation = Math.PI * 2;
    return ((diff + fullRotation / 2) % fullRotation) - fullRotation / 2;
}

// Convert longitude to target Y rotation for globe
function getTargetY(lon) {
    // Interpolation points mapping longitude to globe Y rotation
    if (lon <= -83.54) {
        return -0.10;
    } else if (lon <= -41.89) {
        const t = (lon - (-83.54)) / (-41.89 - (-83.54));
        return -0.10 + t * (-0.87 - (-0.10));
    } else if (lon <= 5.37) {
        const t = (lon - (-41.89)) / (5.37 - (-41.89));
        return -0.87 + t * (-1.65 - (-0.87));
    } else if (lon <= 9.21) {
        const t = (lon - 5.37) / (9.21 - 5.37);
        return -1.65 + t * (4.60 - (-1.65));
    } else if (lon <= 12.50) {
        const t = (lon - 9.21) / (12.50 - 9.21);
        return 4.60 + t * (4.50 - 4.60);
    } else if (lon <= 14.51) {
        const t = (lon - 12.50) / (14.51 - 12.50);
        return 4.50 + t * (4.42 - 4.50);
    } else if (lon <= 130.85) {
        const t = (lon - 14.51) / (130.85 - 14.51);
        return 4.42 + t * (2.44 - 4.42);
    } else if (lon <= 151.21) {
        const t = (lon - 130.85) / (151.21 - 130.85);
        return 2.44 + t * (2.10 - 2.44);
    } else if (lon <= 153.03) {
        const t = (lon - 151.21) / (153.03 - 151.21);
        return 2.10 + t * (8.30 - 2.10);
    } else if (lon <= 167.90) {
        const t = (lon - 153.03) / (167.90 - 153.03);
        return 8.30 + t * (8.10 - 8.30);
    } else if (lon <= 174.78) {
        const t = (lon - 167.90) / (174.78 - 167.90);
        return 8.10 + t * (8.01 - 8.10);
    } else if (lon <= 176.17) {
        const t = (lon - 174.78) / (176.17 - 174.78);
        return 8.01 + t * (7.93 - 8.01);
    } else {
        const t = (lon - 176.17) / (176.91 - 176.17);
        return 7.93 + t * (7.90 - 7.93);
    }
}

// Calculate density factor for each location based on nearby neighbors
function calculateDensityFactors() {
    const densityFactors = new Map();
    const proximityThreshold = 15;
    const minScale = 0.5;
    const maxNeighbors = 6;
    
    locations.forEach(loc => {
        if (loc.isDoor) {
            densityFactors.set(loc.id, 1.0);
            return;
        }
        
        let neighborCount = 0;
        locations.forEach(other => {
            if (other.id === loc.id) return;
            
            const lat1 = loc.coords[0], lon1 = loc.coords[1];
            const lat2 = other.coords[0], lon2 = other.coords[1];
            const dLat = Math.abs(lat2 - lat1);
            const dLon = Math.abs(lon2 - lon1);
            const distance = Math.sqrt(dLat * dLat + dLon * dLon);
            
            if (distance < proximityThreshold) {
                neighborCount++;
            }
        });
        
        const densityRatio = Math.min(neighborCount / maxNeighbors, 1.0);
        const scaleFactor = 1.0 - (densityRatio * (1.0 - minScale));
        
        densityFactors.set(loc.id, scaleFactor);
    });
    
    globalDensityFactors = densityFactors;
    return densityFactors;
}

// Calculate zoom distance for a location
function getZoomDistanceForLocation(loc) {
    if (!globalDensityFactors || !loc) return baseZoomInDistance;
    
    const doorSize = 0.040;
    const doorZoom = baseZoomInDistance;
    
    let iconSize;
    if (loc.isDoor) {
        iconSize = doorSize;
    } else {
        const densityFactor = globalDensityFactors.get(loc.id) || 1.0;
        const manualOverride = 1.0;
        iconSize = 0.029 * densityFactor * manualOverride;
    }
    
    const fullProportionalZoom = doorZoom * (iconSize / doorSize);
    const blendFactor = 0.5;
    const zoomDistance = doorZoom - (doorZoom - fullProportionalZoom) * blendFactor;
    const minZoom = 1.20;
    
    return Math.max(zoomDistance, minZoom);
}

// Get pinch distance for touch events
function getPinchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}
