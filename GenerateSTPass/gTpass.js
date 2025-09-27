const passwordBox = document.getElementById("password");
const length = 12;

// Character sets
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}|;:,.<>?/";

// Function to generate password
function createPassword() {
  let allChars = upperCase + lowerCase + number + symbol;
  let password = "";

  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  passwordBox.value = password;
}


