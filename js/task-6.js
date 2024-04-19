const inputElem = document.querySelector('input');
const btnCreateElem = document.querySelector('button[data-create]');
const btnDestroyElem = document.querySelector('button[data-destroy]');
const boxesElem = document.querySelector('#boxes');

btnCreateElem.addEventListener('click', onBtnCreateClick);
btnDestroyElem.addEventListener('click', onBtnDestroyClick);

function onBtnCreateClick() {
  const amount = Number(inputElem.value);

  if (amount < 1 || amount > 100) {
    alert('Please enter a number from 1 to 100');
    cleanInput();
    return;
  }

  destroyBoxes();
  createBoxes(amount);
  cleanInput();
}

function onBtnDestroyClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  let size = 30;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  boxesElem.append(...boxes);
}

function cleanInput() {
  inputElem.value = '';
}

function destroyBoxes() {
  boxesElem.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
