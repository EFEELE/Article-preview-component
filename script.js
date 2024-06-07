const menu = document.getElementById('menu');
const author = document.getElementById('profile');

const footer = document.getElementById('links');

const menuMobile = document.getElementById('menu-mobile');
const profile = document.getElementById('profile');

function showMenu(){
    menu.classList.toggle('active');
    footer.classList.toggle('active');

    menuMobile.classList.toggle('active');
    profile.classList.toggle('active');
}