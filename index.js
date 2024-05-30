const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.open__questionnaire');
const closeModalButton = document.querySelector('.close__modal');
const form = document.querySelector('.modal__form');
const title = document.querySelector('.modal__title');
const modalContent = document.querySelector('.modal__content');
const newContentDiv = document.createElement('div');
const newModalText1 = document.createElement('p');
const newModalText2 = document.createElement('p');
const img = document.createElement('img');
const newButton = document.createElement('button');

newButton.textContent = 'На главную';
newButton.classList.add('request');
img.src = 'img/approved.svg';
img.classList.add('approved');
newContentDiv.classList.add('newModalContent');
newModalText1.textContent = 'Благодарим за ваш отклик и интерес.';
newModalText2.textContent =
  'Мы изучим вашу анкету и свяжемся с вами в течении 2х дней.';
newContentDiv.prepend(newButton);
newContentDiv.prepend(newModalText2);
newContentDiv.prepend(newModalText1);
newContentDiv.prepend(img);

newButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

openModalButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModalButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  title.textContent = 'Анкета отправлена';
  modalContent.textContent = '';
  modalContent.append(newContentDiv);
});
