const form = document.querySelector(".login-form")

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElem = event.currentTarget.elements;
    const email = formElem.email.value;
    const password = formElem.password.value;
    const user = {
        email,
        password,
    }

    if(!email || !password) {
        alert ("Бдь ласка, заповніть УСІ поля.")
    } else {
        console.log(user);
        form.reset();
    }
}