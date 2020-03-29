// Assignment Code
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz0123456789";
var numbers = "1234567890";
var specChar = "!$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = "";

//Prompts user to choose Password Complexity from 8-128.
var totalChar = prompt("Choose Your Password Complexity: Please type a number between 8 and 128.");//What if a user selects smaller or larger numbers?
console.log(totalChar);

//User chooses or rejects upper-case
var wantsUpper = confirm("Would you Like to include upper-case letters?");
//User Chooses or rejects lower-case
var wantsLower = confirm("Would you like to include lower-case letters?");
//User chooses or rejects numbers
var wantsNumbers = confirm("Would you like to include numbers?");
//User chooses or rejects special characters
var wantsSpecial = confirm("Would you like to include special characters?");

// Randomize Character sequence
var charBank = []

//Pushes upperCase string to charbank.
if (wantsUpper === true) {
  charBank.push(upperCase);
}

//Pushes lowerCase string to charBank.
if (wantsLower === true) {
  charBank.push(lowerCase);
}

//Pushes specChar string to charBank.
if (wantsSpecial === true) {
  charBank.push(specChar);
}

//Pushes numbers string to charBank.
if (wantsNumbers === true) {
  charBank.push(numbers);
}

//Validates contents of charBank.
console.log(charBank);

//For Loop. Random numbers from charBank up to number specified by user.
for (var i = 0; i < charBank.length; i++) {
  password = password + charBank[Math.floor(Math.random() * charBank.length)];
}
console.log(password);

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