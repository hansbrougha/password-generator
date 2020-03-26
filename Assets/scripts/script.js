// Assignment Code
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%&'()*+,-./:;<=>?@[]^_`{|}~";

var password = " "

for(var i = 0; i <= complexity; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));
  console.log()

}

var complexity = prompt("Choose Your Password Complexity: Please type a number between 8 and 128.");

var u = prompt ("Would you Like to include upper-case letters?");

var l = prompt ("Would you like to include lower-case letters?");

var s = prompt ("Would you like to include special characters?");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);