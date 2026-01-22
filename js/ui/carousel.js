// ============================================
// CAROUSEL MODULE
// World tour slideshow functionality
// ============================================

let carouselInitialized = false;
let carouselInterval = null;
let currentSlide = 0;
let carouselSlides = null;
let carouselDots = null;

function goToSlide(index) {
    if (!carouselSlides || !carouselDots) return;
    carouselSlides[currentSlide].classList.remove('active');
    carouselDots[currentSlide].classList.remove('active');
    currentSlide = index;
    if (currentSlide >= carouselSlides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = carouselSlides.length - 1;
    carouselSlides[currentSlide].classList.add('active');
    carouselDots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function resetCarouselTimer() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, 4000);
}

function initCarousel() {
    const carousel = document.getElementById('worldCarousel');
    if (!carousel) return;
    
    // Prevent duplicate initialization
    if (carouselInitialized) {
        resetCarouselTimer();
        return;
    }
    
    carouselSlides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    
    // Clear any existing dots and arrows
    dotsContainer.innerHTML = '';
    const existingArrows = carousel.querySelectorAll('.carousel-arrow');
    existingArrows.forEach(a => a.remove());
    
    currentSlide = 0;
    
    // Create dots
    carouselSlides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
    });
    
    carouselDots = dotsContainer.querySelectorAll('.carousel-dot');
    
    // Add click handlers to dots
    carouselDots.forEach((dot, i) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            goToSlide(i);
            resetCarouselTimer();
        });
    });
    
    // Create arrow buttons
    const prevArrow = document.createElement('button');
    prevArrow.className = 'carousel-arrow prev';
    prevArrow.innerHTML = '‹';
    prevArrow.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        prevSlide();
        resetCarouselTimer();
    });
    
    const nextArrow = document.createElement('button');
    nextArrow.className = 'carousel-arrow next';
    nextArrow.innerHTML = '›';
    nextArrow.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        nextSlide();
        resetCarouselTimer();
    });
    
    carousel.appendChild(prevArrow);
    carousel.appendChild(nextArrow);
    
    // Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) { // minimum swipe distance
            if (diff > 0) {
                nextSlide(); // swipe left = next
            } else {
                prevSlide(); // swipe right = prev
            }
            resetCarouselTimer();
        }
    }, { passive: true });
    
    // Pause on hover (desktop)
    carousel.addEventListener('mouseenter', function() {
        if (carouselInterval) clearInterval(carouselInterval);
    });
    carousel.addEventListener('mouseleave', function() {
        resetCarouselTimer();
    });
    
    // Start auto-rotation
    resetCarouselTimer();
    carouselInitialized = true;
}

// Initialize carousel when panel opens (observe for panel open)
const carouselObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('open')) {
            setTimeout(initCarousel, 100);
        }
    });
});

const sidePanelEl = document.getElementById('sidePanel');
if (sidePanelEl) {
    carouselObserver.observe(sidePanelEl, { attributes: true, attributeFilter: ['class'] });
}
