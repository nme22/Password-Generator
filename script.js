// Assignment Code
var generateBtn = document.querySelector("#generate");


var letterU = "QWERTYUIOPASDFGHJKLZXCVBNNM";
var letterL = "qwertyuiopasdfghjklzxcvbnm";
var number = "0123456789"
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = [letterU, letterL, number, specialCharacter, password];


// Write password to the #password input
function writePassword() {
  var confirmLength = prompt("Pick a length between 8 and 128 characters")
  console.log(confirmLength);

  var confirmUppercase = confirm("Uppercase letters?")
  console.log(confirmUppercase);

  var confirmLowercase = confirm("Lowercase letters?")
  console.log(confirmLowercase);

  var confirmNumber = confirm("Number?")
  console.log(confirmNumber);

  var confirmSpecial = confirm("Special Characters?")
  console.log(confirmSpecial);

  password = document.getElementById("password");
}

function generatePassword()


// Math.random().toString()

var password = generatePassword()



var passwordText = document.querySelector("#password");

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
