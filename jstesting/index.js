console.log("This is login info");

const password = document.querySelector(".password");

const passwordError = document.querySelector(".passwordError");
const btnSubmit = document.querySelector(".btnSubmit");

function getData() {
  const username = document.querySelector(".username");
  const userError = document.querySelector(".userError");
  if (!username.value) userError.textContent = "Please enter username";
  if (password.value.length < 8) passwordError.textContent = "Invalid password";
}

btnSubmit.addEventListener("click", getData);
