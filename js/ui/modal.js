// ============================================
// MODAL MODULE
// Intro modal and Director's Commentary modal
// ============================================

// ============================================
// INTRO MODAL - First-time visitor welcome
// ============================================

function showIntroModal() {
    document.getElementById('introModal').classList.add('active');

    // Start Toledo bouncing immediately so user sees it above the modal
    const toledoDoor = locations.find(l => l.title === 'Toledo, Ohio');
    if (toledoDoor) {
        triggerBounce(toledoDoor.id);
    }
}

function closeIntroModal() {
    document.getElementById('introModal').classList.remove('active');
    const progress = getProgress();
    progress.introSeen = true;
    saveProgress(progress);
}

// Close intro modal when first door is opened (called from panel.js)
function closeIntroModalIfOpen() {
    const modal = document.getElementById('introModal');
    if (modal && modal.classList.contains('active')) {
        closeIntroModal();
    }
}

// ============================================
// DIRECTOR'S COMMENTARY
// ============================================

function openCommentaryModal() {
    document.getElementById('commentaryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCommentaryModal(event) {
    if (event.target === document.getElementById('commentaryModal')) {
        document.getElementById('commentaryModal').classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('commentaryModal');
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});
