const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let currentValue = 0;

function updateCounterValue(newValue) {
  counterValue.textContent = newValue;
}

function decrement() {
  currentValue--;
  updateCounterValue(currentValue);
}

function increment() {
  currentValue++;
  updateCounterValue(currentValue);
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
