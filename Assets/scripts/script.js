// Assignment Code
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","RS","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specChar = ["!","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var password = [];

//Generate Password
function generatePassword(){
  //Prompts user to choose Password Complexity from 8-128.
  var totalChar = prompt("Choose Your Password Complexity: Please type a number   between 8 and 128.");//What if a user selects smaller or larger numbers?
  console.log(totalChar);

  //User chooses or rejects upper-case lower-case numbers special characters
  var wantsUpper = confirm("Would you Like to include upper-case letters?");
  var wantsLower = confirm("Would you like to include lower-case letters?");
  var wantsNumbers = confirm("Would you like to include numbers?");
  var wantsSpecial = confirm("Would you like to include special characters?");

  // Randomize Character sequence
  var charBank = []
  if (totalChar < 8 || totalChar > 128)
    prompt("Error: Please choose a valid complexity between 8 and 128 characters.");

  if (wantsUpper === true) {
    charBank = charBank.concat(upperCase);
  } //Pushes upperCase string to charbank.
  if (wantsLower === true) {
    charBank = charBank.concat(lowerCase);
  }//Pushes lowerCase string to charBank.
  if (wantsSpecial === true) {
    charBank = charBank.concat(specChar);
  } //Pushes specChar string to charBank.
  if (wantsNumbers === true) {
    charBank = charBank.concat(numbers);
  } //Pushes numbers string to charBank.

  //Validates contents of charBank.
  console.log(charBank);


//For Loop. Random numbers from charBank up to number specified by user.
//
for (var i = 0; i < totalChar; i++) {
  password = password + charBank[Math.floor(Math.random() * charBank.length)];
}
console.log(password);
return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword());