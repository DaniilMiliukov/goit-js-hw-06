const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  const length = event.target.dataset.length;
  const value = event.target.value;

  if (value.length === Number(length)) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
});
