const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");
const errorMessage = document.getElementById("errorMessage");

const logoJS = document.getElementById("logo");
logoJS.addEventListener("click", () => {
  logoJS.setAttribute("class", "logoanima");
  setTimeout(() => {
    logoJS.setAttribute("class", "");
  }, 1001);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // checkRequired([username, email, password, passwordCheck]);
  errorMessage.textContent = "";
  checkLength(username, 3, 15);
  isValidEmail(email);
  checkLength(password, 8, 32);
  checkPasswordMatch(password, passwordCheck);
});

function validateForm() {
  errorMessage.textContent = "";
  // validation
  if (username.value.length <= 3) {
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
  if (password.value.length < 8) {
    errorMessage.textContent += "Password must be at least 8 characters long\n";
    return;
  }
}
function checkRequired(imputArr) {
  errorMessage.textContent = "";
  imputArr.forEach((input) => {
    if (input.value.trim() === "") {
      errorMessage.innerText += `- The field ${getFieldName(input)} is required.\n`;
    }
  });
}
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min || input.value.length > max) {
    return (errorMessage.innerText += `- ${getFieldName(input)} must be between ${min} and ${max} chars.\n`);
  }
}

function isValidEmail(input) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  if (!re.test(input.value.trim())) {
    errorMessage.innerText += `- The Email is not Valid.\n`;
  }
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    errorMessage.innerText += `- The Passwords do not match\n`;
  }
}
