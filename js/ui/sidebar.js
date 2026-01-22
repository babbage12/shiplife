// ============================================
// SIDEBAR MODULE
// Location list and mobile menu
// ============================================

function buildLocationList() {
    const list = document.getElementById('locationList');
    
    // Doors first
    const doors = locations.filter(l => l.isDoor);
    const others = locations.filter(l => !l.isDoor);
    
    [...doors, ...others].forEach(loc => {
        const config = getIconConfig(loc.title);
        
        const item = document.createElement('div');
        item.className = `location-item ${loc.isDoor ? 'door' : ''}`;
        item.setAttribute('data-style', config.style);
        
        // Create icon container
        const iconDiv = document.createElement('div');
        iconDiv.className = 'icon';
        
        // Create canvas for custom icon
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        renderSidebarIcon(canvas, config);
        iconDiv.appendChild(canvas);
        
        // Create name
        const nameDiv = document.createElement('div');
        nameDiv.className = 'name';
        nameDiv.textContent = loc.title;
        
        item.appendChild(iconDiv);
        item.appendChild(nameDiv);
        
        item.onclick = () => {
            skipPanelOpen = true; // User must click icon to open story
            focusLocation(loc);
            closeMobileMenu();
        };
        list.appendChild(item);
    });
    
    // Update locations count in panel hint
    const countEl = document.getElementById('locationsCount');
    if (countEl) {
        countEl.textContent = locations.length + ' places';
    }
    
    // Setup sidebar scroll hint
    setupSidebarScrollHint();
}

function setupSidebarScrollHint() {
    const list = document.getElementById('locationList');
    const hint = document.getElementById('sidebarScrollHint');
    if (!list || !hint) return;
    
    let scrollTimeout;
    let hasReachedBottom = false;
    
    // Show hint initially after a short delay
    setTimeout(() => {
        if (list.scrollHeight > list.clientHeight && !hasReachedBottom) {
            hint.classList.add('visible');
        }
    }, 1000);
    
    list.addEventListener('scroll', () => {
        // Hide while scrolling
        hint.classList.remove('visible');
        
        // Check if near bottom
        const nearBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 50;
        if (nearBottom) {
            hasReachedBottom = true;
        }
        
        // Show again after stopping (if not at bottom)
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (!hasReachedBottom && list.scrollHeight > list.clientHeight) {
                hint.classList.add('visible');
            }
        }, 1500);
    });
}
function focusLocation(loc) {
    // Close panel immediately when navigating to new location
    closePanel();

    const lon = loc.coords[1]; // longitude (negative = west)
    const lat = loc.coords[0]; // latitude (positive = north)

    // Convert longitude to radians, with offset to match globe texture
    const lonRad = lon * (Math.PI / 180);

    // The globe rotation Y increases as we go west (negative longitude)
    const targetY = -lonRad - 1.55;

    // Start zoom-out transition, then rotate, then zoom-in
    isTransitioning = true;
    transitionPhase = 'zoom-out';
    transitionStartTime = Date.now();

    // Store target rotation for after zoom-out
    pendingRotationY = targetY;
    pendingRotationX = lat * (Math.PI / 180);
    pendingLocation = loc;
    pendingZoomLocation = loc;

    console.log(loc.title, '- lon:', lon, 'lat:', lat, 'targetY:', targetY.toFixed(2));
}

function toggleMobileMenu() {
    const menu = document.getElementById('locationList');
    const toggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('mobileOverlay');
    
    menu.classList.toggle('open');
    toggle.classList.toggle('open');
    overlay.classList.toggle('open');
}

// Close mobile menu when location selected
function closeMobileMenu() {
    const menu = document.getElementById('locationList');
    const toggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('mobileOverlay');
    
    menu.classList.remove('open');
    toggle.classList.remove('open');
    overlay.classList.remove('open');
}
