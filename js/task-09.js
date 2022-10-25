function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const textColor = document.querySelector('.color');
const btnChange = document.querySelector('.change-color');
const body = document.querySelector("body");

btnChange.addEventListener("click", randomColor)

function randomColor() {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = (body.style.backgroundColor);
}