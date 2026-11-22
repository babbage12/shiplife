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

    // Focus the primary button so user can click immediately without double-clicking
    setTimeout(() => {
        const primaryBtn = document.querySelector('.intro-choice-btn.primary');
        if (primaryBtn) {
            primaryBtn.focus();
        }
    }, 100);
}

function closeIntroModal() {
    document.getElementById('introModal').classList.remove('active');
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

// True while a history entry exists for the open commentary, so the
// phone's back button closes the pop-up instead of leaving the site.
let commentaryHistoryPushed = false;

function isCommentaryOpen() {
    const modal = document.getElementById('commentaryModal');
    return !!(modal && modal.classList.contains('active'));
}

function openCommentaryModal() {
    // Keep the side panel open so the reader can pick up where they left off
    const modal = document.getElementById('commentaryModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Always start the story at the top
    const box = modal.querySelector('.commentary-modal');
    if (box) box.scrollTop = 0;

    if (!commentaryHistoryPushed) {
        history.pushState({ commentaryOpen: true }, '');
        commentaryHistoryPushed = true;
    }
}

// Hide the pop-up without touching history (used by the back button handler)
function hideCommentaryModal() {
    document.getElementById('commentaryModal').classList.remove('active');
    document.body.style.overflow = '';
}

// User closed the pop-up (X, end button, outside tap, Escape):
// hide it and drop the history entry we pushed when it opened.
function dismissCommentary() {
    if (!isCommentaryOpen()) return;
    hideCommentaryModal();
    if (commentaryHistoryPushed) {
        commentaryHistoryPushed = false;
        closingFromCode = true; // tell the popstate handler to ignore this one
        history.back();
    }
}

function closeCommentaryModal(event) {
    if (event.target === document.getElementById('commentaryModal')) {
        dismissCommentary();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isCommentaryOpen()) {
        dismissCommentary();
    }
});
