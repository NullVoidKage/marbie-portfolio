console.log('Welcome to Marbs\' Portfolio!');

function revealSections() {
  const sections = document.querySelectorAll('.content-section');
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 40,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// Welcome button alert
const welcomeBtn = document.querySelector('.welcome-btn');
// Custom alert modal logic
const customAlert = document.getElementById('customAlert');
const customAlertClose = document.querySelector('.custom-alert-close');
if (welcomeBtn && customAlert) {
  welcomeBtn.addEventListener('click', () => {
    customAlert.classList.add('active');
  });
}
if (customAlertClose && customAlert) {
  customAlertClose.addEventListener('click', () => {
    customAlert.classList.remove('active');
  });
}
// Optional: close on backdrop click
customAlert.addEventListener('click', (e) => {
  if (e.target === customAlert) {
    customAlert.classList.remove('active');
  }
}); 