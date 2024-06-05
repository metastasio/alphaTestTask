const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.open__questionnaire');
const closeModalButton = document.querySelector('.close__modal');
const form = document.querySelector('.modal__form');
const firstModal = document.querySelector('.first__step__modal');
const secondModal = document.querySelector('.second__step__modal');
const buttonGoToMain = document.querySelector('.to__main');
const contactButtons = document.querySelector('.contacts__buttons');
const contactToggleButtons = contactButtons.querySelectorAll('.toggle');
const goodsButtons = document.querySelector('.goods__buttons');
const goodsToggleButtons = goodsButtons.querySelectorAll('.toggle');
const vacanciesButtons = document.querySelector('.vacancies__buttons');
const vacanciesToggleButtons = vacanciesButtons.querySelectorAll('.toggle');

console.log(goodsToggleButtons);

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

contactToggleButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    contactToggleButtons.forEach((item) => {
      item.classList.remove('toggle__active');
    });
    e.target.classList.add('toggle__active');
  });
});

goodsToggleButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    goodsToggleButtons.forEach((item) => {
      item.classList.remove('toggle__active');
    });
    e.target.classList.add('toggle__active');
  });
});

vacanciesToggleButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    vacanciesToggleButtons.forEach((item) => {
      item.classList.remove('toggle__active');
    });
    e.target.classList.add('toggle__active');
  });
});
