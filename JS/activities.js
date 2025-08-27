// activities.js
// Handles enroll/booking button logic for clubs and events

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('loginModal');
    const closeBtn = document.getElementById('modalClose');
    function showModal() {
        if (modal) modal.classList.add('active');
    }
    function hideModal() {
        if (modal) modal.classList.remove('active');
    }
    function handleActionClick(e) {
        e.preventDefault();
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            if (e.target.classList.contains('enrollbutton')) {
                alert('Enroll successful!');
            } else if (e.target.classList.contains('bookbutton')) {
                alert('Booking successful!');
            }
        } else {
            showModal();
        }
    }
    document.querySelectorAll('.enrollbutton, .bookbutton').forEach(btn => {
        btn.addEventListener('click', handleActionClick);
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
