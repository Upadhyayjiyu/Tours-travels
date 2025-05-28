// Handle booking form submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your booking has been submitted!');
  bookingForm.reset();
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  contactForm.reset();
});
