/*
    ------------------------
    ------ Variables -------
    ------------------------
*/

const navToggleOpen = document.getElementById('navToggle-open');
const navToggleClose = document.getElementById('navToggle-close');
const navMenu = document.getElementById('menu');

const hamburgerIcon = "url(../../assets/icon/hamburger.svg)";
const closeIcon = "url(../../assets/icon/close.svg)";

/*
    ------------------------
    ------ Functions -------
    ------------------------
*/

function toggleMenu(){
    navMenu.classList.toggle('show-mobile-menu');
}

/*
    ------------------------
    ------ Main -------
    ------------------------
*/

navToggleOpen.style.backgroundImage = hamburgerIcon;
navToggleClose.style.backgroundImage = closeIcon;

navToggle.addEventListener('click', toggleMenu);