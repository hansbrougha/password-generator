// Assignment Code
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowLetters = ["abcdefghijklmnopqrstuvwxyz"]
var specSymbols = ["!\#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]

var c = [capLetters = 6]
var l = [lowLetters = 6]
var s = [specSymbols = 6]


//Prompts Should Activate when User clicks "Generate Password"
prompt("How many characters would you like to include in your password?") {
  if confirm()
  
}
//Capital Letters
prompt("Would you Like to include capital letters?"){
  if confirm()
  if else 
}
//Lower-Case Letters
prompt("Would you Like to include lower-case letters?") {
  if confirm()
  if else
}
//Special Characters
prompt("Would you Like to include special characters?"){
  if confirm()
  if else
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
