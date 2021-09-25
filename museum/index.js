import "./js/visiting-section-build-template.js"
import "./js/welcome-section-slider.js"
const refs = {
modalOpenBtnWelcomeSection: document.querySelector('[data-modal-open-btn]'),
modalWindowWelcomeSection: document.querySelector('[data-modal-window]'),
modalCloseBtnWelcomeSection:  document.querySelector('[data-modal-close-btn]')
}
// console.log(refs.modalOpenBtnWelcomeSection);
refs.modalOpenBtnWelcomeSection.addEventListener('click', toggleModal);
refs.modalCloseBtnWelcomeSection.addEventListener('click', toggleModal);

function toggleModal() {
   refs.modalWindowWelcomeSection.classList.toggle('is-hidden')
}