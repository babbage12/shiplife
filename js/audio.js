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

// ============================================
// MUSIC PLAYER MODULE
// Panel-specific music player controls
// ============================================

let currentMusicPlayer = null;

function toggleMusic(button, audioUrl) {
    const playerContainer = button.closest('.music-player');
    const audio = playerContainer.querySelector('audio');
    const progressBar = playerContainer.querySelector('.music-player-progress-bar');
    const timeDisplay = playerContainer.querySelector('.music-player-time');
    const playIcon = button.querySelector('svg');

    // If this is a new audio source, load it
    if (!audio.src || audio.src !== audioUrl) {
        audio.src = audioUrl;
    }

    if (audio.paused) {
        // Stop any other playing music player
        if (currentMusicPlayer && currentMusicPlayer !== audio) {
            currentMusicPlayer.pause();
            const otherButton = currentMusicPlayer.parentElement.querySelector('.music-player-play-btn');
            otherButton.classList.remove('playing');
            otherButton.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
        }

        audio.play();
        button.classList.add('playing');
        playIcon.outerHTML = '<svg viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>';
        currentMusicPlayer = audio;

        // Update progress bar
        audio.addEventListener('timeupdate', function updateProgress() {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = progress + '%';

            const currentMin = Math.floor(audio.currentTime / 60);
            const currentSec = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
            const totalMin = Math.floor(audio.duration / 60);
            const totalSec = Math.floor(audio.duration % 60).toString().padStart(2, '0');

            timeDisplay.textContent = `${currentMin}:${currentSec} / ${totalMin}:${totalSec}`;
        });

        // Reset button when finished
        audio.addEventListener('ended', function() {
            button.classList.remove('playing');
            playIcon.outerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
            progressBar.style.width = '0%';
            currentMusicPlayer = null;
        });
    } else {
        audio.pause();
        button.classList.remove('playing');
        playIcon.outerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    }
}

function seekMusic(event, progressContainer) {
    const playerContainer = progressContainer.closest('.music-player');
    const audio = playerContainer.querySelector('audio');

    if (!audio.src) return;

    const rect = progressContainer.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;

    audio.currentTime = percentage * audio.duration;
}
