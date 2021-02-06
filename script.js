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
  // If the passwordTextarea has any value, clear it and the passwordText.
  if (passwordTextarea.value.length > 0) {
    passwordTextarea.value = "";
    passwordText = "";
  } else {
    // Otherwise, run the rest of the writePassword function.
    confirmLength = prompt("Pick a length between 8 and 128 characters");
    /* 
    If the length of the input is greater than or equal to 8 AND if the length of the input
    is less than or equal to 128. Then run the rest of the function.
    */
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
      /* If the passwordTextarea value doesn't meet the criteria of being between
       or equal to 8 & 128;use recursion */
      writePassword();
    }
  }

}

generateBtn.addEventListener("click", writePassword);