// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterU = "qwertyuiopasdfghjklzxcvbnm";
var letterL = "QWERTYUIOPASDFGHJKLZXCVBNNM";
var number = "0123456789";
var specialCharacter = "!@#$%^&*()_+=-[]|{}/\\'~<>";


// Write password to the #password input
function writePassword() {
  var confirmUppercase = confirm("Uppercase letters?");
  var confirmLowercase = confirm("Lowercase letters?");
  var confirmNumber = confirm("Number?");
  var confirmSpecial = confirm("Special Characters?");
  var lengthPassword = prompt("How long do you want the password to be?");


  var password = generatePassword(confirmUppercase, confirmLowercase, confirmNumber, confirmSpecial, lengthPassword);
  

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
