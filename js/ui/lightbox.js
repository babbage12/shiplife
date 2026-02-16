// ============================================
// LIGHTBOX MODULE
// Image viewer for story photos with navigation
// ============================================

// Track current gallery for navigation
let currentGalleryImages = [];
let currentImageIndex = 0;

function openLightbox(imgSrc, caption, galleryImages, index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');

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
    } else if (e.key === 'ArrowLeft') {
        lightboxPrev(e);
    } else if (e.key === 'ArrowRight') {
        lightboxNext(e);
    }
});
