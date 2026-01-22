// ============================================
// AUDIO MODULE
// Background music control with fade in/out
// ============================================

let musicFadeInterval = null;

function playBackgroundMusic(doorId) {
    const trackUrl = doorAudioTracks[doorId];
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    if (!trackUrl || !backgroundMusic) {
        return;
    }
    
    // Stop any existing fade
    if (musicFadeInterval) {
        clearInterval(musicFadeInterval);
        musicFadeInterval = null;
    }
    
    // Set the source
    backgroundMusic.src = trackUrl;
    
    // Start at zero volume
    backgroundMusic.currentTime = 0;
    backgroundMusic.volume = 0;
    
    // Play and fade in
    backgroundMusic.play().then(() => {
        const startTime = Date.now();
        musicFadeInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / MUSIC_FADE_DURATION, 1);
            backgroundMusic.volume = progress * MUSIC_MAX_VOLUME;
            
            if (progress >= 1) {
                clearInterval(musicFadeInterval);
                musicFadeInterval = null;
            }
        }, 50);
    }).catch(err => {
        console.error('Audio playback failed:', err.name, err.message);
    });
}

function stopBackgroundMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (!backgroundMusic || backgroundMusic.paused) return;
    
    // Stop any existing fade
    if (musicFadeInterval) {
        clearInterval(musicFadeInterval);
        musicFadeInterval = null;
    }
    
    // Fade out
    const startVolume = backgroundMusic.volume;
    const startTime = Date.now();
    
    musicFadeInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / MUSIC_FADE_DURATION, 1);
        backgroundMusic.volume = startVolume * (1 - progress);
        
        if (progress >= 1) {
            clearInterval(musicFadeInterval);
            musicFadeInterval = null;
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
    }, 50);
}
