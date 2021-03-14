// Assignment code here
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

var getCharacterLength = function(characterLength) { 
  var characterLength = window.prompt("How many characters would you like your password to be? (Minimum of 8, maximum of 128)");

  if (characterLength >= 8 && characterLength <= 128) {
    return characterLength;
  }

  else {
    window.alert("You need to provide a number between 8 and 128.");
    return getCharacterLength();
  };
};

var length = getCharacterLength();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  getCharacterLength();
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
