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

// Create generatePassword() function that generates the following:

var userCriteria;
// Prompt for 4 password criteria: 
// length (8 - 128 characters)
// character types: lower case
// character type: upper case
// character types: numeric
// character types: special characters

// Note all selections in an array that gets sizes based on selection

// Validate input, minimum of one character type is needed (ensure array is not empty)

// Display generated password in alert or written on page