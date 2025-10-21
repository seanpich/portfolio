
// ---------------------
// ScrollReveal animations
// ---------------------
ScrollReveal({
  reset: true,
  distance: "50px",
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.header', { origin: 'top' });
ScrollReveal().reveal('.home .top', { origin: 'left' });
ScrollReveal().reveal('.home .bottom', { origin: 'right' });
ScrollReveal().reveal('.about-section .about-text', { origin: 'left' });
ScrollReveal().reveal('.about-section .about-image', { origin: 'right' });
ScrollReveal().reveal('.skill-card', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.portfolio-section .card', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.contact-section .contact-info', { origin: 'left' });
ScrollReveal().reveal('.contact-section .contact-form', { origin: 'right' });
ScrollReveal().reveal('.site-footer', { origin: 'bottom' });

// ---------------------
// Drawer menu toggle
// ---------------------
const menuIcon = document.querySelector('.menu-icon');
const drawer = document.querySelector('#drawer');
const closeIcon = document.querySelector('.close-icon');
const drawerMenu = document.querySelector('.drawer-menu');
const mainMenu = document.querySelector('.menu');

// Copy main menu items into drawer
drawerMenu.innerHTML = mainMenu.innerHTML;

const openDrawer = () => drawer.classList.add('open');
const closeDrawer = () => drawer.classList.remove('open');

menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  drawer.classList.toggle('open');
});

closeIcon.addEventListener('click', closeDrawer);

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!drawer.contains(e.target) && !menuIcon.contains(e.target)) {
    closeDrawer();
  }
});

// Close when clicking inside drawer menu links
drawerMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});