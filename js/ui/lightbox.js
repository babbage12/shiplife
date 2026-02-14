// ============================================
// LIGHTBOX MODULE
// Image viewer for story photos
// ============================================

function openLightbox(imgSrc, caption) {
    const lightbox = document.getElementById('lightbox');

    // Remove width constraint for lightbox - serve original size
    // (c_limit prevents upscaling, only downscales if larger than 1600)
    let fullSizeSrc = imgSrc;
    if (imgSrc.includes('res.cloudinary.com')) {
        // Remove w_### to get original size, or use c_limit to cap without upscaling
        fullSizeSrc = imgSrc.replace(/w_\d+,?/, '').replace(/,,/, ',');
    }

    document.getElementById('lightboxImage').src = fullSizeSrc;
    document.getElementById('lightboxCaption').textContent = caption || '';
    lightbox.classList.add('active');
}

function closeLightbox(event) {
    // Only close if clicking the overlay or close button, not the image
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        document.getElementById('lightbox').classList.remove('active');
    }
}

// Escape key to close lightbox
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('lightbox').classList.contains('active')) {
        document.getElementById('lightbox').classList.remove('active');
    }
});

function attachImageClickHandlers() {
    // Story images in panel
    document.querySelectorAll('.story-image').forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.dataset.caption || this.alt || '');
        });
    });
    
    // Gallery thumbnails
    document.querySelectorAll('.gallery-thumb').forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.dataset.caption || this.alt || '');
        });
    });
}
