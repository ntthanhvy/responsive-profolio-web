/* use jeversion: 6 */

// select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrading = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBrading.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBrading.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu state
    showMenu = false;
  }
}