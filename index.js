const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.open__questionnaire');
const closeModalButton = document.querySelector('.close__modal');
const form = document.querySelector('.modal__form');
const firstModal = document.querySelector('.first__step__modal');
const secondModal = document.querySelector('.second__step__modal');
const buttonGoToMain = document.querySelector('.to__main');

buttonGoToMain.addEventListener('click', () => {
  modal.classList.add('hidden');
  secondModal.classList.add('hidden');
  firstModal.classList.remove('hidden');
});

openModalButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  secondModal.classList.add('hidden');
  firstModal.classList.remove('hidden');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  firstModal.classList.add('hidden');
  secondModal.classList.remove('hidden');
});
