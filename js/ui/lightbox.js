// ============================================
// LIGHTBOX MODULE
// Image viewer for story photos with navigation
// Supports pinch-to-zoom (mobile) and scroll zoom (desktop)
// ============================================

// Track current gallery for navigation
let currentGalleryImages = [];
let currentImageIndex = 0;

// Zoom state
let currentScale = 1;
let currentTranslateX = 0;
let currentTranslateY = 0;
let initialPinchDistance = 0;
let initialScale = 1;
let lastTouchX = 0;
let lastTouchY = 0;
let isPanning = false;
let isZooming = false;

function resetZoom() {
    currentScale = 1;
    currentTranslateX = 0;
    currentTranslateY = 0;
    const lightboxImage = document.getElementById('lightboxImage');
    if (lightboxImage) {
        lightboxImage.style.transform = 'translate(-50%, -50%) scale(1)';
    }
}

function applyTransform() {
    const lightboxImage = document.getElementById('lightboxImage');
    if (lightboxImage) {
        lightboxImage.style.transform = `translate(calc(-50% + ${currentTranslateX}px), calc(-50% + ${currentTranslateY}px)) scale(${currentScale})`;
    }
}

function openLightbox(imgSrc, caption, galleryImages, index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    // Reset zoom when opening
    resetZoom();

    // Store gallery info for navigation
    if (galleryImages && galleryImages.length > 0) {
        currentGalleryImages = galleryImages;
        currentImageIndex = index || 0;
        // Show/hide nav arrows based on gallery size
        updateNavArrows();
    } else {
        // Single image, no navigation
        currentGalleryImages = [];
        currentImageIndex = 0;
        hideNavArrows();
    }

    // Remove width constraint for lightbox - serve original size
    let fullSizeSrc = imgSrc;
    if (imgSrc.includes('res.cloudinary.com')) {
        fullSizeSrc = imgSrc.replace(/w_\d+,?/, '').replace(/,,/, ',');
    }

    // Show loading state - hide old image until new one loads
    lightbox.classList.add('loading');
    lightboxImage.style.opacity = '0';

    // Set up load handler before changing src
    lightboxImage.onload = function() {
        lightbox.classList.remove('loading');
        lightboxImage.style.opacity = '1';
    };

    // Handle failed image loads - stop spinner, show error state
    lightboxImage.onerror = function() {
        lightbox.classList.remove('loading');
        lightboxImage.style.opacity = '1';
        document.getElementById('lightboxCaption').textContent = 'Image failed to load';
    };

    lightboxImage.src = fullSizeSrc;
    document.getElementById('lightboxCaption').textContent = caption || '';
    lightbox.classList.add('active');
}

function showLightboxImage(index) {
    if (currentGalleryImages.length === 0) return;

    // Wrap around
    if (index < 0) index = currentGalleryImages.length - 1;
    if (index >= currentGalleryImages.length) index = 0;

    currentImageIndex = index;
    const img = currentGalleryImages[index];

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

    // Reset zoom when changing images
    resetZoom();

    let fullSizeSrc = img.src;
    if (fullSizeSrc.includes('res.cloudinary.com')) {
        fullSizeSrc = fullSizeSrc.replace(/w_\d+,?/, '').replace(/,,/, ',');
    }

    // Show loading state
    lightbox.classList.add('loading');
    lightboxImage.style.opacity = '0';

    lightboxImage.onload = function() {
        lightbox.classList.remove('loading');
        lightboxImage.style.opacity = '1';
    };

    // Handle failed image loads
    lightboxImage.onerror = function() {
        lightbox.classList.remove('loading');
        lightboxImage.style.opacity = '1';
        document.getElementById('lightboxCaption').textContent = 'Image failed to load';
    };

    lightboxImage.src = fullSizeSrc;
    document.getElementById('lightboxCaption').textContent = img.caption || '';
    updateNavArrows();
}

function lightboxPrev(event) {
    event.stopPropagation();
    if (currentGalleryImages.length > 1) {
        showLightboxImage(currentImageIndex - 1);
    }
}

function lightboxNext(event) {
    event.stopPropagation();
    if (currentGalleryImages.length > 1) {
        showLightboxImage(currentImageIndex + 1);
    }
}

function updateNavArrows() {
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    if (prevBtn && nextBtn) {
        if (currentGalleryImages.length > 1) {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
    }
}

function hideNavArrows() {
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
}

function closeLightbox(event) {
    // Only close if clicking the overlay or close button, not the image or arrows
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        document.getElementById('lightbox').classList.remove('active');
        currentGalleryImages = [];
        currentImageIndex = 0;
        resetZoom();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        currentGalleryImages = [];
        currentImageIndex = 0;
        resetZoom();
    } else if (e.key === 'ArrowLeft') {
        lightboxPrev(e);
    } else if (e.key === 'ArrowRight') {
        lightboxNext(e);
    }
});

// ============================================
// ZOOM FUNCTIONALITY
// ============================================

// Mouse wheel zoom (desktop)
document.addEventListener('wheel', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    e.preventDefault();

    const zoomIntensity = 0.1;
    const delta = e.deltaY > 0 ? -zoomIntensity : zoomIntensity;

    currentScale = Math.min(Math.max(1, currentScale + delta), 5);

    // Reset position if zoomed out to 1
    if (currentScale === 1) {
        currentTranslateX = 0;
        currentTranslateY = 0;
    }

    applyTransform();
}, { passive: false });

// Double-tap to zoom (mobile)
let lastTapTime = 0;
document.addEventListener('click', function(e) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    if (!lightbox.classList.contains('active')) return;
    if (e.target !== lightboxImage) return;

    const now = Date.now();
    if (now - lastTapTime < 300) {
        // Double tap detected
        if (currentScale > 1) {
            resetZoom();
        } else {
            currentScale = 2.5;
            applyTransform();
        }
    }
    lastTapTime = now;
});

// Touch handlers for pinch-to-zoom and pan
document.addEventListener('touchstart', function(e) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    if (!lightbox.classList.contains('active')) return;

    if (e.touches.length === 2) {
        // Pinch start
        isZooming = true;
        isPanning = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialPinchDistance = Math.sqrt(dx * dx + dy * dy);
        initialScale = currentScale;
        e.preventDefault();
    } else if (e.touches.length === 1 && currentScale > 1) {
        // Pan start (only when zoomed in)
        isPanning = true;
        lastTouchX = e.touches[0].clientX;
        lastTouchY = e.touches[0].clientY;
    }
}, { passive: false });

document.addEventListener('touchmove', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (e.touches.length === 2 && isZooming) {
        // Pinch zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const scale = (distance / initialPinchDistance) * initialScale;
        currentScale = Math.min(Math.max(1, scale), 5);

        if (currentScale === 1) {
            currentTranslateX = 0;
            currentTranslateY = 0;
        }

        applyTransform();
        e.preventDefault();
    } else if (e.touches.length === 1 && isPanning && currentScale > 1) {
        // Pan when zoomed
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        currentTranslateX += touchX - lastTouchX;
        currentTranslateY += touchY - lastTouchY;

        lastTouchX = touchX;
        lastTouchY = touchY;

        applyTransform();
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchend', function(e) {
    if (e.touches.length < 2) {
        isZooming = false;
    }
    if (e.touches.length === 0) {
        isPanning = false;
    }
});
