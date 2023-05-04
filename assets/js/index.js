const openMenuButton = window.document.querySelector('.open-menu');
const closeMenuButton = window.document.querySelector('.close-menu');
const nav = window.document.querySelector('#main-nav');

openMenuButton.addEventListener('click', (e) => {
    nav.classList.add('menu-open');
})

closeMenuButton.addEventListener('click', (e) => {
    nav.classList.remove('menu-open');
})