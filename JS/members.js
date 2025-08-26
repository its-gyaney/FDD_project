// Modal logic for Join Community
document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('joinModal');
	const closeBtn = document.getElementById('modalClose');
	const triggers = document.querySelectorAll('[data-modal-trigger]');

	triggers.forEach(card => {
		card.addEventListener('click', function(e) {
			e.preventDefault();
			modal.classList.add('active');
		});
	});

	closeBtn.addEventListener('click', function() {
		modal.classList.remove('active');
	});

	// Close modal on overlay click
	modal.addEventListener('click', function(e) {
		if (e.target === modal) {
			modal.classList.remove('active');
		}
	});
});
