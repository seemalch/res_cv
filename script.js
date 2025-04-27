// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true
  });
  
  // Initialize Typed.js
  const typed = new Typed('.typed-text', {
    strings: ['MERN Stack Developer', 'AI/ML Enthusiast', 'UI/UX Designer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
  });