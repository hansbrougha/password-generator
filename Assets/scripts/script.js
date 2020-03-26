// Assignment Code
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%&'()*+,-./:;<=>?@[]^_`{|}~";

var password = " "

for(var i = 0; i <= complexity; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));
  console.log()

}

var complexity = prompt("Choose Your Password Complexity: Please type a number between 8 and 128.");
  
var totalNum = prompt ("How many characters would you like to include in your password?");

var u = prompt ("Would you Like to include upper-case letters?");

var l = prompt ("Would you like to include lower-case letters?");

var s = prompt ("Would you like to include special characters?");


var c = []
var l = []
var s = []
var x = {}

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


/*

var totalNum;
num = prompt ("How many characters would you like to include in your password?"){

}

var u;
u = prompt ("Would you Like to include upper-case letters?"){
  if
}

var l;
l = prompt ("Would you like to include lower-case letters?"){

}

var l;
s = prompt ("Would you like to include special characters?"){

}

//Prompts Should Activate when User clicks "Generate Password"
prompt("How many characters would you like to include in your password?") {
  for
  if confirm()
  
}
//Capital Letters
prompt("Would you Like to include capital letters?"){
  if confirm(var randomCap = capLetters[Math.floor(math.random()*capLetters.length)]);
  if else 
}

//Lower-Case Letters
prompt("Would you Like to include lower-case letters?") {
  if confirm(var randomLow = lowLetters[Math.floor(math.random()*lowLetters.length)]);
  if else
}

//Special Characters
prompt("Would you Like to include special characters?"){
  if confirm(var randomSpec = specSymbols[Math.floor(math.random()*specSymbols.length)]);
  if else
}
*/
