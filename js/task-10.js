function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.btnCreate.addEventListener('click', getAmount);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = refs.input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const el = document.createElement('div');
    const basicSize = 30;
    const size = basicSize + i * 10;
    el.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
    elements.push(el)
  }

  refs.boxes.append(...elements);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}