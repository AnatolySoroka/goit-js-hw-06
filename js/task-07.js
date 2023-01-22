const refs = {
    inputRangeEl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.inputRangeEl.addEventListener('input', onInputRange);

function onInputRange() {
    refs.text.style.fontSize = this.value + 'px';
}