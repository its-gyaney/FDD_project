document.addEventListener('DOMContentLoaded', function() {
            // Simple JavaScript for any interactive elements
            console.log('EduSphere Welcome Page loaded');
            
            // You can add more interactive functionality here
            // For example:
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach(card => {
                card.addEventListener('click', function() {
                    const link = this.querySelector('a');
                    if (link) {
                        window.location.href = link.href;
                    }
                });
            });
        });