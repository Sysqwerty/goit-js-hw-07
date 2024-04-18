document.querySelector('.login-form').addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const { email, password } = form.elements;

  if (!email.value.trim() || !password.value.trim()) {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(formData);
  }

  form.reset();
}
