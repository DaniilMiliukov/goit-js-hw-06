
const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const userData = {};

  formData.forEach((value, name) => {
    userData[name] = value;
  });

  if (!userData.email || !userData.password) {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  console.log(userData);

  form.reset();
}

