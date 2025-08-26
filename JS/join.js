document.addEventListener('DOMContentLoaded', function() {
            // Get tab buttons and forms
            const loginButton = document.getElementById('login-button');
            const registerButton = document.getElementById('register-button');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            
            // Add click event listeners to tabs
            loginButton.addEventListener('click', function() {
                switchToLogin();
            });
            
            registerButton.addEventListener('click', function() {
                switchToRegister();
            });
            
            // Form submission handlers
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                validateLoginForm();
            });
            
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                validateRegisterForm();
            });
            
            // Function to switch to login form
            function switchToLogin() {
                loginButton.classList.add('active');
                registerButton.classList.remove('active');
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
            }
            
            // Function to switch to register form
            function switchToRegister() {
                registerButton.classList.add('active');
                loginButton.classList.remove('active');
                registerForm.classList.add('active');
                loginForm.classList.remove('active');
            }
            
            // Form validation functions
            function validateLoginForm() {
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                if (!email || !password) {
                    alert('Please fill in all fields');
                    return;
                }
                if (!isValidEmail(email)) {
                    alert('Please enter a valid email address');
                    return;
                }
                // Retrieve users from localStorage
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const user = users.find(u => u.email === email && u.password === password);
                if (!user) {
                    alert("User ID or password not matched or don't have any account.");
                    return;
                }
                // Successful login
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                alert('Login successful! Redirecting...');
                window.location.href = 'index.html';
            }

            function validateRegisterForm() {
                const name = document.getElementById('register-name').value;
                const email = document.getElementById('register-email').value;
                const password = document.getElementById('register-password').value;
                const confirmPassword = document.getElementById('register-confirm-password').value;
                if (!name || !email || !password || !confirmPassword) {
                    alert('Please fill in all fields');
                    return;
                }
                if (!isValidEmail(email)) {
                    alert('Please enter a valid email address');
                    return;
                }
                if (password.length < 8) {
                    alert('Password must be at least 8 characters long');
                    return;
                }
                if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return;
                }
                // Retrieve users from localStorage
                let users = JSON.parse(localStorage.getItem('users') || '[]');
                if (users.find(u => u.email === email)) {
                    alert('An account with this email already exists.');
                    return;
                }
                // Save new user
                users.push({ name, email, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful! You can now login.');
                switchToLogin();
            }
            
            function isValidEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
        });