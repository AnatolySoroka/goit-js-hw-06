function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    }`;
}

const refs = {
  body: document.querySelector('body'),
  btn: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
}

refs.btn.addEventListener('click', () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = refs.body.style.backgroundColor;
})