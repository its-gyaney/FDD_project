document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);

            // Initialize mobile menu functionality
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navLinks = document.getElementById('navLinks');

            if (mobileMenuBtn && navLinks) {
                mobileMenuBtn.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
                });

                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.addEventListener('click', () => {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.textContent = '☰';
                    });
                });
            }

            // Profile/Login UI logic
            function updateProfileNav() {
                const loggedInUser = localStorage.getItem('loggedInUser');
                const loginNav = document.getElementById('login-nav-item');
                const profileNav = document.getElementById('profile-nav-item');
                const profileCircle = document.getElementById('profileCircle');
                const profileEmail = document.getElementById('profile-email');
                if (loggedInUser) {
                    if (loginNav) loginNav.style.display = 'none';
                    if (profileNav) profileNav.style.display = '';
                    // Set first letter of email in profile circle and show email in dropdown
                    try {
                        const user = JSON.parse(loggedInUser);
                        if (user && user.email) {
                            if (profileCircle) {
                                const letter = user.email.trim().charAt(0).toUpperCase();
                                profileCircle.textContent = letter;
                            }
                            if (profileEmail) {
                                profileEmail.textContent = user.email;
                            }
                        }
                    } catch(e) {}
                } else {
                    if (loginNav) loginNav.style.display = '';
                    if (profileNav) profileNav.style.display = 'none';
                    if (profileEmail) profileEmail.textContent = '';
                }
            }
            updateProfileNav();
            // Logout handler
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.removeItem('loggedInUser');
                    updateProfileNav();
                    window.location.href = 'index.html';
                });
            }
        });
});