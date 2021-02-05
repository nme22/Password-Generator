// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables set to strings with the criteria
var letterU = "QWERTYUIOPASDFGHJKLZXCVBNNM";
var letterL = "qwertyuiopasdfghjklzxcvbnm";
var number = "0123456789"
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";



// Write password to the #password input
function writePassword() {
  var confirmUppercase = confirm("Uppercase letters?")
  console.log(confirmUppercase);

  var confirmLowercase = confirm("Lowercase letters?")
  console.log(confirmLowercase);

  var confirmNumber = confirm("Number?")
  console.log(confirmNumber);

  var confirmSpecial = confirm("Special Characters?")
  console.log(confirmSpecial);

  var confirmLength = prompt("Pick a length between 8 and 128 characters")
  console.log(typeof parseInt(confirmLength));

  password = [letterU, letterL, number, specialCharacter];
  return password;
};


function generatePassword() {
  //   var {
  //     confirmUppercase,
  //     confirmLowercase,
  //     confirmNumber,
  //     confirmSpecial,
  //   } = writePassword();
}

// Math.random().toString()

// var password = generatePassword()
// var passwordText = document.querySelector("#password");

// passwordText.value = password;



// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
