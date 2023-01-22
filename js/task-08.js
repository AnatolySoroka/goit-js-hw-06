const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const data = {};

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        if (value === '') {
            alert(`Поле ${name} повинне бути заповнене!`);
        }
        else {
            data[name] = value;
        }
    });

    this.reset();

    console.log(data);
}