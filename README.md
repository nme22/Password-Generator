# Password-Generator
The objective of this assignment is to create a password generated based on criteria the user accepts to be included in their password.

To start we declare global variables at the top, similar to a wordbank for our variables.

The idea is we wrtie a function called writePassword.
This function displays prompts, conditions needed for those prompts, and records the user input.

The first step of the function is to clear the text area it has anything in it. This way it generates a single password and clears it if we want to use the button again.

We can do this by setting passwordTextarea's value length to greater than 0 for that condition.

If the text area condition is met, we run the rest of the function.

The first prompt is set to an if condition to make sure the length the user inputs is equal to or greater than 8 AND less than or equal to 128.

If the passwordTextarea value doesn't meet the criteria we reprompt the user to meet the condition using recursion.

Next we use the "while" condition to execute the rest of the function if the length criteria is met.

The function writePassword is set to an on click event of the generate button set into the html.

As a result, the user get a randomly generated password they can use!

