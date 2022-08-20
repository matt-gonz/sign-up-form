function onChange() {
  const password = document.querySelector('input[name=pwd]');
  const confirm = document.querySelector('input[name=confirm-pwd]');
  const errorMessage = document.getElementById('errorMessage');
  const submitButton = document.querySelector('button[type=submit]')
  if (confirm.value === password.value) {
    errorMessage.textContent = "Passwords match!"
    errorMessage.style.color = "green";
    password.style.borderColor = "green";
    confirm.style.borderColor = "green";
    submitButton.disabled = false;
    submitButton.style.background = "rgb(77, 121, 27)";
  } else {
    errorMessage.textContent = "*Passwords do not match"
    errorMessage.style.color = "red";
    password.style.borderColor = "red";
    confirm.style.borderColor = "red";
    submitButton.disabled = true;
    submitButton.style.background = "lightgrey";
  }
}