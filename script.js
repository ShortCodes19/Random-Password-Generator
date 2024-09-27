const passwordBox = document.getElementById("password");
const generate = document.getElementById("generate");
const copyIcon = document.querySelector(".display i");
const copyText = document.querySelector(".copy-text");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()[]/|<>?";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = [];

  password.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
  password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
  password.push(numbers[Math.floor(Math.random() * numbers.length)]);
  password.push(symbols[Math.floor(Math.random() * symbols.length)]);

  for (let i = password.length; i < length; i++) {
    password.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  passwordBox.value = password.join("");
}

function copyPassword() {
  const password = passwordBox.value;
  if (password) {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        copyText.classList.add("active");
        copyIcon.style.pointerEvents = "none";
        copyIcon.style.display = "none";

        setTimeout(() => {
          copyIcon.style.display = "block";
          copyIcon.style.pointerEvents = "auto";
          copyText.classList.remove("active");
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy the password:", err);
      });
  }
}

generate.addEventListener("click", createPassword);
copyIcon.addEventListener("click", copyPassword);
