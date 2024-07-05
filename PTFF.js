// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Responsive Menu Toggle
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '&#9776;';

document.querySelector('nav').insertBefore(menuToggle, document.querySelector('nav ul'));

menuToggle.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('open');
});
