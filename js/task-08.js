const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const data = {};

    if (form.elements.email.value === '' || form.elements.password.value === '') {
        alert(`Всі поля повинні бути заповнені!`);
    } else {
        data.email = form.elements.email.value;
        data.password = form.elements.password.value;
        console.log(data);
        this.reset();
    }
}