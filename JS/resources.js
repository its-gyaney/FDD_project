// resources.js
// Restricts access to resource links if not logged in

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('loginModal');
    const closeBtn = document.getElementById('modalClose');
    function showModal() {
        if (modal) modal.classList.add('active');
    }
    function hideModal() {
        if (modal) modal.classList.remove('active');
    }
    function handleResourceClick(e) {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser) {
            e.preventDefault();
            showModal();
        }
        // else allow navigation
    }
    document.querySelectorAll('.resource-link, .study-material-link, .blog-link, .feedback-link, .request-link').forEach(link => {
        link.addEventListener('click', handleResourceClick);
    });
    if (closeBtn) {
        closeBtn.addEventListener('click', hideModal);
    }
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) hideModal();
        });
    }
});
