// Select elements
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

// Add event listeners to nav links
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add intersection observer to sections
const options = {
  rootMargin: '-50px',
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
