const openModalBtn = document.querySelector('.js-modal-btn');
const closeModalBtn = document.querySelector('.js-modal__close-btn');
const emailModalBtn = document.querySelector('.js-modal__email-btn');
const modal = document.querySelector('.modal__overlay');

openModalBtn.addEventListener("click", () => {
    modal.classList.toggle('modal--open');
})

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove('modal--open');
})

emailModalBtn.addEventListener("click", () => {
    emailModalBtn.setAttribute('value', 'Subscribed!');
});