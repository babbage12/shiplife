// ============================================
// PANEL MODULE
// Side panel open/close/expand functionality
// ============================================


function triggerBounce(locationId) {
    bouncingMarkerId = locationId;
    bounceStartTime = Date.now();
}

// Track current location for next door navigation

function openPanel(loc) {
    try {
        currentLocation = loc;

        // Stop any bouncing animation when panel opens
        bouncingMarkerId = null;
        bounceStartTime = null;

        // Hide tooltip when opening panel
        hideTooltip();

        // Preload hero image before showing panel content
        const panelImage = document.getElementById('panelImage');

        if (loc.image) {
            // Hide current image while loading new one
            panelImage.style.opacity = '0';

            const preloadImg = new Image();
            preloadImg.onload = () => {
                panelImage.src = loc.image;
                panelImage.style.opacity = '1';
            };
            preloadImg.onerror = () => {
                panelImage.src = loc.image; // Try anyway
                panelImage.style.opacity = '1';
            };
            preloadImg.src = loc.image;
        }

        panelImage.style.setProperty('--image-position', loc.imagePosition || 'center');
        document.getElementById('panelImageCaption').textContent = loc.imageCaption || '';
        document.getElementById('panelTag').textContent = loc.tag;
        document.getElementById('panelTitle').textContent = loc.title;
        
        const paragraphs = loc.fullDesc.split('\n\n');
        
        // Show first paragraph as preview (truncated if too long)
        let preview = paragraphs[0];
        if (preview.length > 150) {
            preview = preview.substring(0, 150) + '...';
        }
        document.getElementById('panelPreview').textContent = preview;
        
        // Check if location has rich HTML content
        let fullContent;
        if (loc.useRichContent && loc.richContent) {
            fullContent = loc.richContent;
        } else {
            // Default: Full text for expanded view
            fullContent = paragraphs.map(p => `<p>${p}</p>`).join('');
        }
        
        // Support both single image and array of images
        if (loc.storyImages && loc.storyImages.length > 0) {
            fullContent += '<div class="story-gallery">';
            loc.storyImages.forEach(img => {
                fullContent += `<img src="${img}" class="story-image" alt="Story photo">`;
            });
            fullContent += '</div>';
        } else if (loc.storyImage) {
            fullContent += `<img src="${loc.storyImage}" class="story-image" alt="Story photo">`;
        }
        document.getElementById('panelText').innerHTML = fullContent;
        
        // Attach click handlers to story images for lightbox
        attachImageClickHandlers();
        
        // Update next door button based on current location
        updateNextDoorButton(loc);
        
        // Update three doors navigation
        updateThreeDoorsNav(loc);
        
        // Reset expanded state when opening new location
        sidePanel.classList.remove('expanded');
        sidePanel.classList.add('open');
        panelIsOpen = true; // Stop auto-rotation while reading
        
        // Reset scroll position to top
        sidePanel.scrollTop = 0;
        
        // Hide scroll hint until panel fully opens
        document.getElementById('scrollHintBottom').classList.remove('visible');
    } catch (error) {
        console.error('Error opening panel:', error);
        // Reset panel state on error
        sidePanel.classList.remove('expanded');
        sidePanel.classList.add('open');
        panelIsOpen = true;
    }
}

function updateNextDoorButton(loc) {
    const nextDoorHint = document.getElementById('nextDoorHint');
    const nextDoorText = document.getElementById('nextDoorText');
    
    // Find doors
    const doors = locations.filter(l => l.isDoor);
    const doorIndex = doors.findIndex(d => d.id === loc.id);
    
    if (loc.isDoor && doorIndex < doors.length - 1) {
        // This is a door and there's a next door
        const nextDoor = doors[doorIndex + 1];
        const nextDoorNum = doorIndex + 2;
        nextDoorText.textContent = `Continue to Door #${nextDoorNum}`;
        nextDoorHint.style.display = '';
        nextDoorHint.dataset.nextDoorId = nextDoor.id;
    } else {
        // Last door or not a door - hide the next door button
        nextDoorHint.style.display = 'none';
    }
}

function goToNextDoor() {
    const nextDoorHint = document.getElementById('nextDoorHint');
    const nextDoorId = parseInt(nextDoorHint.dataset.nextDoorId);
    const nextDoor = locations.find(l => l.id === nextDoorId);
    
    if (nextDoor) {
        // Close panel and rotate globe to next door
        // User must click the icon to open the door
        closePanel();
        focusLocation(nextDoor);
    }
}

function goToDoor(doorNum) {
    const doors = locations.filter(l => l.isDoor);
    const targetDoor = doors[doorNum - 1]; // doorNum is 1-indexed
    
    if (targetDoor) {
        closePanel();
        focusLocation(targetDoor);
    }
}

function updateThreeDoorsNav(loc) {
    const nav = document.getElementById('threeDoorsNav');
    const buttons = nav.querySelectorAll('.door-nav-btn');
    const labels = [
        document.getElementById('doorLabel1'),
        document.getElementById('doorLabel2'),
        document.getElementById('doorLabel3')
    ];
    
    // Show nav only for door locations, hide for others
    if (loc && loc.isDoor) {
        nav.classList.remove('hidden');
        
        // Find which door this is (1, 2, or 3)
        const doors = locations.filter(l => l.isDoor);
        const currentDoorIndex = doors.findIndex(d => d.id === loc.id);
        const currentDoorNum = currentDoorIndex + 1;
        
        // Update button states
        buttons.forEach((btn, i) => {
            const doorNum = i + 1;
            if (doorNum === currentDoorNum) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update labels based on current door
        labels.forEach((label, i) => {
            const doorNum = i + 1;
            label.classList.remove('active-label');
            
            if (doorNum === currentDoorNum) {
                label.textContent = 'viewing';
                label.classList.add('active-label');
            } else if (doorNum < currentDoorNum) {
                label.textContent = `back to ${doorNum}`;
            } else {
                label.textContent = `skip to ${doorNum}`;
            }
        });
    } else {
        // Hide nav for non-door locations
        nav.classList.add('hidden');
    }
}

function viewAllLocations() {
    closePanel();
    // On mobile, open the locations menu; on desktop, list is already visible
    if (window.innerWidth <= 768) {
        setTimeout(toggleMobileMenu, 300);
    }
}

// Lightbox functions
function openLightbox(imgSrc, caption) {
    document.getElementById('lightboxImg').src = imgSrc;
    document.getElementById('lightboxCaption').textContent = caption || '';
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    // Only close if clicking the background or close button, not the image
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Attach click handlers to story images when panel content changes
function attachImageClickHandlers() {
    const storyImages = document.querySelectorAll('.panel-text .story-image, .panel-text .gallery-thumb');
    storyImages.forEach(img => {
        img.onclick = function() {
            // Get caption from data-caption attribute first, then fall back to next sibling
            let caption = img.dataset.caption || '';
            if (!caption) {
                const nextEl = img.parentElement?.nextElementSibling;
                if (nextEl && nextEl.classList.contains('photo-caption-inline')) {
                    caption = nextEl.textContent;
                }
            }
            openLightbox(img.src, caption);
        };
    });
}

function closePanel() {
    // Stop background music with fade out
    stopBackgroundMusic();
    
    // Pause video playback if current location has video
    if (currentLocation && locationVideos[currentLocation.title]) {
        const video = locationVideos[currentLocation.title];
        video.pause();
        video.currentTime = 0; // Reset to beginning for next open
        console.log('Paused and reset video for:', currentLocation.title);
    }
    
    sidePanel.classList.remove('open');
    sidePanel.classList.remove('expanded');
    panelIsOpen = false; // Resume auto-rotation
    currentLocation = null;
}

function expandPanel() {
    sidePanel.classList.add('expanded');
}

// Swipe up to expand panel on mobile
let panelTouchStartY = 0;
sidePanel.addEventListener('touchstart', function(e) {
    panelTouchStartY = e.touches[0].clientY;
}, { passive: true });

sidePanel.addEventListener('touchend', function(e) {
    const touchEndY = e.changedTouches[0].clientY;
    const swipeDistance = panelTouchStartY - touchEndY;
    
    // If swiped up more than 50px and panel is not expanded, expand it
    if (swipeDistance > 50 && !sidePanel.classList.contains('expanded')) {
        expandPanel();
    }
    // If swiped down more than 50px and panel is expanded, collapse it
    else if (swipeDistance < -50 && sidePanel.classList.contains('expanded')) {
        sidePanel.classList.remove('expanded');
    }
}, { passive: true });

// Scroll hint visibility based on scroll position
const scrollHintBottom = document.getElementById('scrollHintBottom');
let scrollTimeout = null;

sidePanel.addEventListener('scroll', function() {
    const scrollTop = sidePanel.scrollTop;
    const scrollHeight = sidePanel.scrollHeight;
    const clientHeight = sidePanel.clientHeight;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    
    // Hide hint while scrolling
    scrollHintBottom.classList.remove('visible');
    
    // Clear any existing timeout
    if (scrollTimeout) clearTimeout(scrollTimeout);
    
    // If not at the bottom, show hint again after user stops scrolling
    if (distanceFromBottom > 100) {
        scrollTimeout = setTimeout(() => {
            scrollHintBottom.classList.add('visible');
        }, 2000); // Reappear after 2 seconds of no scrolling
    }
}, { passive: true });

// Show scroll hint when panel opens (desktop) or expands (mobile)
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
            const isOpen = sidePanel.classList.contains('open');
            const isExpanded = sidePanel.classList.contains('expanded');
            const isMobile = window.innerWidth <= 768;
            
            // On mobile: show only when expanded
            // On desktop: show when open
            if ((isMobile && isExpanded && isOpen) || (!isMobile && isOpen)) {
                // Small delay to let panel open/expand first
                setTimeout(() => {
                    scrollHintBottom.classList.add('visible');
                }, 500);
            } else if (!isOpen) {
                // Panel closed - hide hint
                scrollHintBottom.classList.remove('visible');
            }
        }
    });
});
observer.observe(sidePanel, { attributes: true });
