const openMenuButton = window.document.querySelector('.js-open-menu');
const closeMenuButton = window.document.querySelector('.js-close-menu');
const nav = window.document.querySelector('.main-nav');

openMenuButton.addEventListener('click', (e) => {
    nav.classList.add('menu-open');
})

closeMenuButton.addEventListener('click', (e) => {
    nav.classList.remove('menu-open');
})