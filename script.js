// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables set to strings with the criteria
var letterU = "QWERTYUIOPASDFGHJKLZXCVBNNM";
var letterL = "qwertyuiopasdfghjklzxcvbnm";
var number = "0123456789"
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = [letterU, letterL, number, specialCharacter];
let confirmLength = 0;
var passwordText = "";
var confirmPassword;
var allowed = "";
var passwordTextarea = document.getElementById("password")

// Write password to the #password input
function writePassword() {
  if (passwordTextarea.value.length > 0) {
    passwordTextarea.value = "";
    passwordText = "";
  } else {
    confirmLength = prompt("Pick a length between 8 and 128 characters");
    if (confirmLength >= 8 && confirmLength <= 128) {
      while (true) {
        var confirmUppercase = confirm("Uppercase letters?");
        console.log(confirmUppercase);

        var confirmLowercase = confirm("Lowercase letters?");
        console.log(confirmLowercase);

        var confirmNumber = confirm("Numbers?");
        console.log(confirmNumber);

        var confirmSpecial = confirm("Special Characters?");
        console.log(confirmSpecial);

        confirmPassword = [
          confirmUppercase,
          confirmLowercase,
          confirmNumber,
          confirmSpecial];
        console.log(confirmPassword.length);
        if (confirmPassword.length >= 1) {
          break;
        }
      }
      var findex = 0;
      for (var i = 0; i < confirmPassword.length; i++) {
        if (confirmPassword[i]) {
          var index = Math.floor(Math.random() * password[i].length);
          passwordText = passwordText + password[i][index];
          allowed = allowed + password[i];
          findex++;
        };
      }
      for (var i = findex; i < confirmLength; i++) {
        var index = Math.floor(Math.random() * allowed.length);
        passwordText = passwordText + allowed[index];
      }
      passwordTextarea.value = passwordText;
    } else {
      writePassword();
    }
  }

}

generateBtn.addEventListener("click", writePassword);




// Pseudo code for password generator
// Need an array of different choices for the characters
// array for uppercase, lowercase, numbers, special characters
// function that prompts the user
// how many characters we want the password to be?
// we need to  check to make sure they chose between 8 -128 characters
// next we will prompt them for what characters they want. will be a confirm prompt for all 4 arrays.
// Write a conditional statement that the user picks at least one character type for password.

// we need an object to store the user input. Meaning the length, what character will be used in password.
// return the object of possible choices.
// write a function to randomize the letters inside that we can give the password. ( Use math.random to generate that)
// Then we will create another function- make an array w the results, an array for possible characters , and set an array for guarenteed chracters ( characters guarenteed for pw).
// create a loop that goes through the result array. ( need to Look up push and join)
// Once we push into a new array (result array), using join we will take the chracter from results array and turn into a string
//After we turn into a string, we write the password to the page (.value)