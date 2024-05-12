const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email");
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = "";
  // validation
  if (username.length <= 3) {
    errorMessage.textContent += "Username must be at least 3 characters.\n";
    return;
  }
  // Validate Email
  const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  if (!patternEmail.test(email.value)) {
    errorMessage.textContent += "Must be at valid email.\n";
    return;
  }
  // Validate Password
  if (password.length < 8) {
    errorMessage.textContent += "Password must be at least 8 characters long\n";
    return;
  }
}
