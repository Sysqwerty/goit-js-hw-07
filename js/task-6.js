const inputElem = document.querySelector('input');
const btnCreateElem = document.querySelector('button[data-create]');
const btnDestroyElem = document.querySelector('button[data-destroy]');
const boxesElem = document.querySelector('#boxes');

btnCreateElem.addEventListener('click', onBtnCreateClick);
btnDestroyElem.addEventListener('click', destroyBoxes);

function onBtnCreateClick() {
  const amount = Number(inputElem.value);

  if (amount < 1 || amount > 100) {
    alert('Please enter a number from 1 to 100');
    inputElem.value = '';
    return;
  }

  destroyBoxes();
  createBoxes(amount);
}

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesElem.append(box);
    size += 10;
  }
}

function destroyBoxes() {
  inputElem.value = '';
  boxesElem.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
