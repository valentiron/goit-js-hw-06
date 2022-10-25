const input = document.querySelector("#validation-input");

let inputValueLength = 0;

input.addEventListener("input", onInputChange)

function onInputChange(event) {
    inputValueLength = event.currentTarget.value.length;
}

input.addEventListener("blur", onBlur)

function onBlur() {
    if(inputValueLength == input.dataset.length) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}