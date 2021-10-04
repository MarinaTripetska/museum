import refs from './refs.js';
const { mobileMenuBtn,
        mobileMenuIconBurger,
        mobileMenuIconCross,
        mobileMenu,
        wlcSecTxtBox
    } = refs;


mobileMenuBtn.addEventListener('click', openMenu);


function openMenu() {
    mobileMenuIconBurger.classList.toggle('active');
    mobileMenuIconCross.classList.toggle('active');
    mobileMenu.classList.toggle('is-open');
    wlcSecTxtBox.classList.toggle('menu-open');
}