const bodyElement = document.querySelector('body');
const btnElement = document.querySelector('.change-color');
const spanElement = document.querySelector('.color');

bodyElement.style.backgroundColor = spanElement.textContent = '#fafafa';

btnElement.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();

  bodyElement.style.backgroundColor = color;
  spanElement.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
