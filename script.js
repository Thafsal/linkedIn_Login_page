const form = document.getElementById("formPage");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const emailErrMsg = document.querySelector(".email_err");
const passwordErrMsg = document.querySelector(".password_err");

form.addEventListener("submit", function (event) {
  let messages = [];

  if (emailField.value.trim() === "") {
    messages.push("Email or phone number is required");
  }

  if (passwordField.value.length < 6) {
    messages.push("Password must be at least 6 characters long");
  }

  if (messages.length > 0) {
    event.preventDefault();
    if (messages.includes("Email or phone number is required")) {
      emailErrMsg.innerText = "Email or phone number is required";
    } else {
      emailErrMsg.innerText = "";
    }

    if (messages.includes("Password must be at least 6 characters long")) {
      passwordErrMsg.innerText = "Password must be at least 6 characters long";
    } else {
      passwordErrMsg.innerText = "";
    }
  }
});
