// ============================================
// MODAL MODULE
// Director's Commentary modal
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
