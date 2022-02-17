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

  // allowable creates array of valid password characters.
  var allowable = [];
  // 26 Lower Case: 97 - 122
  if (userChoice[0]) {
    for (let index = 97; index <= 122; index++) {
      allowable = allowable.concat(String.fromCharCode(index));
    }
  }
  // 26 Upper Case: 65 - 90
  if (userChoice[1]) {
    for (let index = 65; index <= 90; index++) {
      allowable = allowable.concat(String.fromCharCode(index));
    }
  }
  // 10 Numbers: 48 - 57
  if (userChoice[2]) {
    for (let index = 48; index <= 57; index++) {
      allowable = allowable.concat(String.fromCharCode(index));
    }
  }
  // 33 Special Characters: 32 - 47, 58 - 64, 91 - 96, 123 - 126
  if (userChoice[3]) {
    for (let index = 32; index <= 47; index++) {
      allowable = allowable.concat(String.fromCharCode(index));
    }
    for (let index = 58; index <= 64; index++) {
      allowable = allowable.concat(String.fromCharCode(index));
    }
    for (let index = 91; index <= 96; index++) {
      allowable = allowable.concat(String.fromCharCode(index));
    }
    for (let index = 123; index <= 126; index++) {
      allowable = allowable.concat(String.fromCharCode(index));
    }
  }

  var password =[];

  // Display generated password in alert or written on page
  for (let index = 0; index < userLength; index++) {
    password = password + allowable[Math.floor(Math.random()*allowable.length)];
  }
  console.log(password); 
  
  // Ensure password matches user selection.
  var validation = [];
  var compChoice = [false, false, false, false];
  for (let index = 0; index < password.length; index++) {
      validation[index] = password.charCodeAt(index); // https://www.w3schools.com/js/js_string_methods.asp
    }
  console.log(validation);
  
  // Validate Lower Case
  if (userChoice[0]) {
    for (let index = 0; index < validation.length; index++) {
      if ((97 <= validation[index]) && (validation[index] <= 122)) {
        compChoice[0] = true;
        break;
      }
    }
  }
  console.log(compChoice);
  // Validate Upper Case
  if (userChoice[1]) {
    for (let index = 0; index < validation.length; index++) {
      if ((65 <= validation[index]) && (validation[index] <= 90)) {
        compChoice[1] = true;
        break;
      }
    }
  }
  console.log(compChoice);
  // Validate Number
  if (userChoice[2]) {
    for (let index = 0; index < validation.length; index++) {
      if ((48 <= validation[index]) && (validation[index] <= 57)) {
        compChoice[2] = true;
        break;
      }
    }
  }

  console.log(compChoice);

  // Generate new password until a valid one is chosen
  // do {
  //   password = generatePassword();
  // } while ((compChoice[0] !== userChoice[0]) || (compChoice[1] !== userChoice[1]) || (compChoice[2] !== userChoice[2]) || (compChoice[3] !== userChoice[3]));
  
  return password;
}
