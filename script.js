// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables set to strings with the criteria
var letterU = "QWERTYUIOPASDFGHJKLZXCVBNNM";
var letterL = "qwertyuiopasdfghjklzxcvbnm";
var number = "0123456789"
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = [letterU, letterL, number, specialCharacter];
var passwordText = ""


// Write password to the #password input
function writePassword(password) {
  var confirmUppercase = confirm("Uppercase letters?")
  console.log(confirmUppercase);

  var confirmLowercase = confirm("Lowercase letters?")
  console.log(confirmLowercase);

  var confirmNumber = confirm("Numbers?")
  console.log(confirmNumber);

  var confirmSpecial = confirm("Special Characters?")
  console.log(confirmSpecial);

  var confirmLength = prompt("Pick a length between 8 and 128 characters")
  console.log(confirmLength);

  return writePassword;
};


function generatePassword() {
  while (confirmLength <= 128, confirmLength >= 8) {
    passwordText += writePassword(Math.floor(Math.random() * password * confirmLength))
    console.log(generatePassword)
  }


}


// Math.random().toString()

// var password = generatePassword()
// var passwordText = document.querySelector("#password");

// passwordText.value = password;



// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
