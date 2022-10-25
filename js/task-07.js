const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", fontChange)

function fontChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`
}