// Contact form submission (optional alert)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for your message! I will get back to you soon.');
  this.reset();
});
// Animate links on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.social-links a').forEach(link => {
    link.style.opacity = 0;
    setTimeout(() => {
      link.style.transition = 'opacity 1s ease';
      link.style.opacity = 1;
    }, 500);
  });
});