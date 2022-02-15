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
// Prompt for 4 password criteria: 
// character types: lower case
// character type: upper case
// character types: numeric
// character types: special characters
// Note all selections in an array that gets sizes based on selection
function selectCategory() {
  var choice = [];
  choice.push(confirm("Would would like your passsword to contain Lower Case characters (e.g., g, n)?"));
  choice.push(confirm("Would would like your passsword to contain Upper Case characters (e.g., G, N)?"));
  choice.push(confirm("Would would like your passsword to contain Numeric characters (e.g., 7, 5)?"));
  choice.push(confirm("Would would like your passsword to contain Special characters (e.g., &, $)?"));
  console.log(choice);
  // Validate input, minimum of one character type is needed (ensure array is not empty)
  for (let index = 0; index < choice.length; index++) {
    if (choice[index]) {
      break;
    } 
    else if (index == 3) {
      alert("Error: You must select at least one pasword criteria. Please try again");
      choice = selectCategory();
    }
  }
  console.log(choice);
  
  return choice;
}

// length (8 - 128 characters)
function selectLength () {
  var pwlength = prompt("How long would you like your password to be?\n Please enter a Number between 8 and 128");
  
  // Validate pw length for non number values
  pwlength = Number(pwlength);
  console.log(pwlength);
  
  // Validates pwlength to ensure only a number has been input.
  while (isNaN(pwlength)) {
    alert("Error: Password length must be a Number. Please try again");
    pwlength = prompt("How long would you like your password to be?\n Please enter a number between 8 and 128");
  }
  // Function found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

  // Validate pwlength for valid number values
  while (pwlength < 8 || pwlength > 128) {
    alert("Error: Password length must be a Number between 8 and 128 characters. Please try again");
    pwlength = prompt("How long would you like your password to be?\n Please enter a number between 8 and 128");
  }
  console.log(pwlength);
  return pwlength;
}

function generatePassword() {
  // Have user select password categories and length.
  var userChoice = selectCategory();
  console.log(userChoice);
  
  var userLength = selectLength();
  console.log(userLength);

  // Generate a password based on user criteria

  // Unicode letters: https://www.w3schools.com/charsets/ref_utf_basic_latin.asp
  // Special characters allowed: https://owasp.org/www-community/password-special-characters

  // Use the decimal numbers in "let text = String.fromCharCode(72, 69, 76, 76, 79);" https://www.w3schools.com/jsref/jsref_fromcharcode.asp

  // Numbers: 48 - 57
  // Upper Case: 65 - 95
  // Lower Case: 97 - 122
  // Special: 32 - 47, 58 - 64, 91 - 96, 123 - 126

  let passsword = String.fromCharCode(72);
  console.log(passsword);
}

// Display generated password in alert or written on page