// ============================================
// MAIN MODULE
// Application initialization and stars background
// ============================================

function initStars() {
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const stars = [];
    for (let i = 0; i < 300; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.3,
            twinkle: Math.random() * Math.PI
        });
    }
    
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            const opacity = star.opacity + Math.sin(Date.now() * 0.001 + star.twinkle) * 0.2;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(245, 240, 232, ${Math.max(0.1, opacity)})`;
            ctx.fill();
        });
        requestAnimationFrame(drawStars);
    }
    
    drawStars();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize when DOM is ready
init();

// Show initial state in debug panel
setTimeout(() => {
    const progress = getProgress();
    debugLog('--- PAGE LOADED ---');
    debugLog('guidedComplete: ' + progress.guidedComplete);
    debugLog('doorsVisited: ' + progress.doorsVisited.length + '/3');
    if (progress.guidedComplete) {
        debugLog('⚠️ Already complete - tap "Clear Progress" to test again');
    }
}, 500);
