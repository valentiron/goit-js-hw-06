function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreateBox = document.querySelector("button[data-create]");
const bntDestroyBox = document.querySelector("button[data-destroy");
const boxesDiv = document.querySelector("#boxes");

let amountBoxes = 0;

input.addEventListener("input", onInputChange)

function onInputChange(event) {
  amountBoxes = event.currentTarget.value
};

function boxCreate(amount) {
  const boxes = [];
  let sizes = 30;

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");

    newDiv.style.width = `${sizes}px`;
    newDiv.style.height = `${sizes}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    sizes += 10;
    boxes.push(newDiv);
  }

boxesDiv.append(...boxes);
};


btnCreateBox.addEventListener("click", createOnClick)

function createOnClick() {
  return boxCreate(amountBoxes);
};

bntDestroyBox.addEventListener("click", destroyOnClick)

function destroyOnClick() {
  boxesDiv.innerHTML = "";
};

console.log(boxesDiv)