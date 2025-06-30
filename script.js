document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // form submit roko
  alert('Thank you for your message! I will get back to you soon.');
  this.reset(); // form fields clear kar do
});
