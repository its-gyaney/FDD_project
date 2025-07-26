 // Mobile Menu Toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navLinks = document.getElementById('navLinks');

            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                
                // Change icon based on menu state
                if (navLinks.classList.contains('active')) {
                    mobileMenuBtn.textContent = '✕';
                } else {
                    mobileMenuBtn.textContent = '☰';
                }
            });

            // Close menu when a link is clicked (for mobile)
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.textContent = '☰';
                });
            });

            // Auth Tabs Functionality
            const authTabs = document.querySelectorAll('.auth-tab');
            const authForms = document.querySelectorAll('.auth-form');

            authTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs and forms
                    authTabs.forEach(t => t.classList.remove('active'));
                    authForms.forEach(f => f.classList.remove('active'));
                    
                    // Add active class to clicked tab and corresponding form
                    tab.classList.add('active');
                    const formId = tab.getAttribute('data-tab') + '-form';
                    document.getElementById(formId).classList.add('active');
                });
            });

            // Form Submissions
            document.getElementById('login-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Login functionality will be implemented soon!');
                // Add your login logic here
            });

            document.getElementById('register-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Registration functionality will be implemented soon!');
                // Add your registration logic here
            });
        });