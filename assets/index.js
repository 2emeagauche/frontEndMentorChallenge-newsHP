const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');
const nav = document.querySelector('#mainNav');

openMenuButton.addEventListener(('click, touchstart'), (e) => {
    nav.classList.add('menuOpen');
})

closeMenuButton.addEventListener(('click, touchstart'), (e) => {
    nav.classList.remove('menuOpen');
})