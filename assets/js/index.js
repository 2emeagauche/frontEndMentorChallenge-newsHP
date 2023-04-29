const openMenuButton = window.document.querySelector('.open-menu');
const closeMenuButton = window.document.querySelector('.close-menu');
const nav = window.document.querySelector('#mainNav');

openMenuButton.addEventListener('click', (e) => {
    nav.classList.add('menuOpen');
})

closeMenuButton.addEventListener('click', (e) => {
    nav.classList.remove('menuOpen');
})