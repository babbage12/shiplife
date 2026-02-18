// ============================================
// SIDEBAR MODULE
// Location list and mobile menu
// ============================================

function buildLocationList() {
    const list = document.getElementById('locationList');
    const doorsComplete = isGuidedComplete();

    // Check if a location has a complete story panel (1+ sections, 4+ images)
    function isCompletePanel(loc) {
        if (!loc.richContent) return false;
        // Count <h3 sections (matches both <h3> and <h3 class="...">)
        const h3Sections = (loc.richContent.match(/<h3[\s>]/g) || []).length;
        const storyImages = (loc.richContent.match(/story-image/g) || []).length;
        const inlineImages = (loc.richContent.match(/inline-image/g) || []).length;
        return h3Sections >= 1 && (storyImages + inlineImages) >= 4;
    }

    // Check if a location is a song panel
    function isSongPanel(loc) {
        if (!loc.richContent) return false;
        return loc.richContent.includes('song-panel');
    }

    // Doors first, then complete story panels, then others (not songs), then songs at bottom
    const doors = locations.filter(l => l.isDoor);
    const completePanels = locations.filter(l => !l.isDoor && isCompletePanel(l) && !isSongPanel(l))
        .sort((a, b) => a.title.localeCompare(b.title));
    const incomplete = locations.filter(l => !l.isDoor && !isCompletePanel(l) && !isSongPanel(l))
        .sort((a, b) => a.title.localeCompare(b.title));
    const songPanels = locations.filter(l => !l.isDoor && isSongPanel(l))
        .sort((a, b) => a.title.localeCompare(b.title));

    // Helper to create a location item
    function createLocationItem(loc) {
        const config = getIconConfig(loc.title);

        const item = document.createElement('div');
        item.className = `location-item ${loc.isDoor ? 'door' : ''}`;
        item.setAttribute('data-style', config.style);
        item.setAttribute('data-location-id', loc.id);

        // Dim non-door entries during guided mode
        if (!loc.isDoor && !doorsComplete) {
            item.classList.add('dimmed');
        }

        // Create icon container
        const iconDiv = document.createElement('div');
        iconDiv.className = 'icon';

        // Store emoji for mobile fallback (via CSS ::before pseudo-element)
        const emoji = loc.icon || '📍';
        iconDiv.setAttribute('data-emoji', emoji);

        // Create canvas for custom icon (desktop)
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        renderSidebarIcon(canvas, config);
        iconDiv.appendChild(canvas);

        // Create name container
        const nameDiv = document.createElement('div');
        nameDiv.className = 'name';

        if (loc.isDoor) {
            // Two-line entry for chapter locations
            const doorIndex = doors.findIndex(d => d.id === loc.id);
            const chapterLabel = document.createElement('span');
            chapterLabel.className = 'chapter-label';
            chapterLabel.textContent = `Chapter ${doorIndex + 1}`;

            const locationName = document.createElement('span');
            locationName.className = 'location-name';
            locationName.textContent = loc.title;

            nameDiv.appendChild(chapterLabel);
            nameDiv.appendChild(locationName);
        } else {
            nameDiv.textContent = loc.title;
        }

        item.appendChild(iconDiv);
        item.appendChild(nameDiv);

        item.onclick = () => {
            autoOpenPanel = true; // Open panel after globe rotates to location
            focusLocation(loc);
            closeMobileMenu();
        };
        return item;
    }

    // Helper to create section divider
    function createDivider(label) {
        const divider = document.createElement('div');
        divider.className = 'sidebar-divider';
        divider.innerHTML = `<span>${label}</span>`;
        return divider;
    }

    // Add chapters
    doors.forEach(loc => list.appendChild(createLocationItem(loc)));

    // Add complete story panels with divider
    if (completePanels.length > 0) {
        list.appendChild(createDivider(`Stories (${completePanels.length})`));
        completePanels.forEach(loc => list.appendChild(createLocationItem(loc)));
    }

    // Add incomplete locations with divider
    if (incomplete.length > 0) {
        list.appendChild(createDivider(`More Locations (${incomplete.length})`));
        incomplete.forEach(loc => list.appendChild(createLocationItem(loc)));
    }

    // Add song panels at the bottom
    if (songPanels.length > 0) {
        list.appendChild(createDivider(`Songs (${songPanels.length})`));
        songPanels.forEach(loc => list.appendChild(createLocationItem(loc)));
    }
    
    // Update locations count in panel hint
    const countEl = document.getElementById('locationsCount');
    if (countEl) {
        countEl.textContent = locations.length + ' places';
    }
    
    // Setup sidebar scroll hint
    setupSidebarScrollHint();

    // Update skip hint visibility
    updateSkipHintVisibility();
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

    // Set rotation targets - globe will smooth lerp to these
    targetRotationY = -lonRad - 1.55;
    targetRotationX = lat * (Math.PI / 180);

    // Start bridge animation (soft cinematic bump)
    isBridging = true;
    bridgeStartTime = Date.now();
    bridgeStartZ = camera.position.z;

    // Store for panel open after rotation settles
    pendingLocation = loc;

    console.log(loc.title, '- lon:', lon, 'lat:', lat, 'targetY:', targetRotationY.toFixed(2), 'introComplete:', introComplete);
}

function toggleMobileMenu() {
    const menu = document.getElementById('locationList');
    const toggle = document.getElementById('menuToggle');
    const overlay = document.getElementById('mobileOverlay');

    // If opening the menu, close the story panel first
    const isOpening = !menu.classList.contains('open');
    if (isOpening && panelIsOpen) {
        closePanel();
    }

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

// Undim sidebar items when all doors are visited
function undimSidebarItems() {
    document.querySelectorAll('.location-item.dimmed').forEach(item => {
        item.classList.remove('dimmed');
    });
}

// Start guided journey - close modal and let user click Toledo
function startGuidedJourney() {
    const introModal = document.getElementById('introModal');
    if (introModal) {
        introModal.classList.remove('active');
        // Mark intro as seen
        const progress = getProgress();
        progress.introSeen = true;
        saveProgress(progress);
    }
}

// Skip guided tour - trigger celebration and unlock everything
function skipGuidedTour() {

    // Close intro modal if open
    const introModal = document.getElementById('introModal');
    if (introModal && introModal.classList.contains('active')) {
        introModal.classList.remove('active');
        // Mark intro as seen
        const progress = getProgress();
        progress.introSeen = true;
        saveProgress(progress);
    }

    // Trigger the celebration sequence (this also marks guided as complete)
    triggerDoorsCompleteSequence();

    // Undim all sidebar items
    undimSidebarItems();
}

// Update skip hint visibility based on guided mode state
function updateSkipHintVisibility() {
    const skipLink = document.getElementById('skipIntroLink');
    if (skipLink) {
        skipLink.classList.toggle('hidden', isGuidedComplete());
    }
}
