document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuClose.style.display = 'block';  // Show close icon when menu is open
    });

    menuClose.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuClose.style.display = 'none';  // Hide close icon when menu is closed
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.classList.remove('active'); // Close menu on click
            menuClose.style.display = 'none';  // Hide close icon when menu is closed
        });
    });

    // Change header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
