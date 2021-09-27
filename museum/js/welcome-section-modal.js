import refs from "./refs.js";

const {wlcSecModalOpenBtn: modalOpenBtn,
wlcSecModalWindow: modalWindow,
   wlcSecModalCloseBtn: modalCloseBtn } = refs;

 modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);

function toggleModal() {
   modalWindow.classList.toggle('is-hidden')
};

