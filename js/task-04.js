let countValue = 0;

const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');
const number = document.querySelector("#value");

decBtn.addEventListener("click", decrementNumber)

function decrementNumber() {
    countValue -= 1;
    number.textContent = countValue;
}

incBtn.addEventListener("click", incrementNumber)

function incrementNumber() {
    countValue += 1;
    number.textContent = countValue;
}

