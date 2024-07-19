// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const closeBtn = document.getElementById('closeBtn');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
        navLinks.classList.remove('open');
    });
});
