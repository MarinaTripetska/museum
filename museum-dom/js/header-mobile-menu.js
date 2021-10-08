import refs from './refs.js';
const { navLinks,
    mobileMenuBtn,
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

navLinks.forEach(link => {
        link.addEventListener('click', removeOpenClasses)
    })}

  
function removeOpenClasses(e) {
    mobileMenuIconBurger.classList.toggle('active');
    mobileMenuIconCross.classList.toggle('active');
    mobileMenu.classList.remove('is-open');
    wlcSecTxtBox.classList.remove('menu-open');

     e.currentTarget.removeEventListener('click', removeOpenClasses)
}