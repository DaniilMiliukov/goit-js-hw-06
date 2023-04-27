const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const name = event.target.value;
  output.textContent = name ? name : "Anonymous";
}
