const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    //se ocupa esta funcion para ocultar y mostrar el menu desplegable
    desktopMenu.classList.toggle('innactive');
}