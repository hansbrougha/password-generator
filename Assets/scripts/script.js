// Assignment Code
var capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowLetter = "abcdefghijklmnopqrstuvwxyz0123456789";
var numbers = "1234567890";
var specChar = "!$%&'()*+,-./:;<=>?@[]^_`{|}~";

var password = "";

var totalChar = prompt("Choose Your Password Complexity: Please type a number between 8 and 128.");

var wantsUpper = confirm("Would you Like to include upper-case letters?");

var wantsLower = confirm("Would you like to include lower-case letters?");

var wantsNumbers = confirm("Would you like to include numbers?");

var wantsSpecial = confirm("Would you like to include special characters?");

// Randomize Character sequence
var charBank = [];
if (wantsUpper === true) {
  charBank.push(capLetter);
}

if (wantsLower === true) {
  charBank.push(lowLetter);
}

if (wantsSpecial === true) {
  charBank.push(specChar);
}

if (wantsNumbers === true) {
  charBank.push(numbers);
}
console.log(charBank);

//For Statement.
for (var i = 0; i <= charBank; i++) {
  password = password + values.charBank(Math.floor(Math.random() * Math.floor(value.length - 1)));

}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword());