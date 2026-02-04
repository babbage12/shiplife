// ============================================
// CAROUSEL MODULE
// World tour slideshow functionality
// + Story carousel support for inline carousels
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

// ============================================
// STORY CAROUSEL - inline carousels in rich content
// Supports multiple independent instances
// ============================================

const storyCarousels = [];

function initStoryCarousels() {
    // Clean up previous instances
    storyCarousels.forEach(sc => {
        if (sc.interval) clearInterval(sc.interval);
    });
    storyCarousels.length = 0;

    const carousels = document.querySelectorAll('.story-carousel:not([data-initialized])');
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;

        const dotsContainer = carousel.querySelector('.carousel-dots');
        if (!dotsContainer) return;

        // State for this carousel instance
        const state = {
            el: carousel,
            slides: slides,
            dots: null,
            current: 0,
            interval: null
        };

        // Clear existing dots/arrows
        dotsContainer.innerHTML = '';
        carousel.querySelectorAll('.carousel-arrow').forEach(a => a.remove());

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dotsContainer.appendChild(dot);
        });
        state.dots = dotsContainer.querySelectorAll('.carousel-dot');

        function goTo(index) {
            state.slides[state.current].classList.remove('active');
            state.dots[state.current].classList.remove('active');
            state.current = index;
            if (state.current >= state.slides.length) state.current = 0;
            if (state.current < 0) state.current = state.slides.length - 1;
            state.slides[state.current].classList.add('active');
            state.dots[state.current].classList.add('active');
        }

        function resetTimer() {
            if (state.interval) clearInterval(state.interval);
            state.interval = setInterval(() => goTo(state.current + 1), 5000);
        }

        // Dot click handlers
        state.dots.forEach((dot, i) => {
            dot.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                goTo(i);
                resetTimer();
            });
        });

        // Arrow buttons
        const prevArrow = document.createElement('button');
        prevArrow.className = 'carousel-arrow prev';
        prevArrow.innerHTML = '‹';
        prevArrow.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            goTo(state.current - 1);
            resetTimer();
        });

        const nextArrow = document.createElement('button');
        nextArrow.className = 'carousel-arrow next';
        nextArrow.innerHTML = '›';
        nextArrow.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            goTo(state.current + 1);
            resetTimer();
        });

        carousel.appendChild(prevArrow);
        carousel.appendChild(nextArrow);

        // Swipe support
        let touchStartX = 0;
        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
                goTo(state.current + (diff > 0 ? 1 : -1));
                resetTimer();
            }
        }, { passive: true });

        // Pause on hover
        carousel.addEventListener('mouseenter', () => {
            if (state.interval) clearInterval(state.interval);
        });
        carousel.addEventListener('mouseleave', () => resetTimer());

        // Mark initialized and start
        carousel.setAttribute('data-initialized', 'true');
        resetTimer();
        storyCarousels.push(state);
    });
}

// Initialize carousels when panel opens (observe for panel open)
const carouselObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('open')) {
            setTimeout(() => {
                initCarousel();
                initStoryCarousels();
            }, 100);
        }
    });
});

const sidePanelEl = document.getElementById('sidePanel');
if (sidePanelEl) {
    carouselObserver.observe(sidePanelEl, { attributes: true, attributeFilter: ['class'] });
}
