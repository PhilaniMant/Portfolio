// script.js
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});