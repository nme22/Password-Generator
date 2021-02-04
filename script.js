// Assignment Code
var generateBtn = document.querySelector("#generate");

var letterU = "qwertyuiopasdfghjklzxcvbnm";
var letterL = "QWERTYUIOPASDFGHJKLZXCVBNNM";
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lengthPassword = ""


// Write password to the #password input
function writePassword() {
  var confirmUppercase = confirm("Uppercase letters?")
  console.log(confirmUppercase);

  var confirmLowercase = confirm("Lowercase letters?")
  console.log(confirmLowercase);

  var confirmNumber = confirm("Number?")
  console.log(number);

  var confirmSpecial = confirm("Special Characters?")
  console.log(specialCharacter);

  var lengthPassword = prompt("How long do you want the password to be?")
  console.log(specialCharacter);
}

function generatePassword() {

}

// Math.random().toString()

var password = generatePassword()



var passwordText = document.querySelector("#password");

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
