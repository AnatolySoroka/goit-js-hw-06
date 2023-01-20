const refs = {
    decrementBtnEL: document.querySelector('[data-action="decrement"]'),
    incrementBtnEL: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('#value'),
}

let counterValue = 0;

function increaseValue() {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
}

function decreaseValue() {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
}

refs.decrementBtnEL.addEventListener('click', decreaseValue);
refs.incrementBtnEL.addEventListener('click', increaseValue);