// Array of special characters, letters, and numbers that can be used in the generator
var specialChar = "'!', '#', '$', '%', '&', '()', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{','|', '}', '~'";
var numbers = "'1', '2', '3', '4', '5', '6', '7', '8', '9','0'";
var lowerCase = "'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'";
var upperCase = "'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'";

pwLength = 8;
charChoice = [];
var generatedPw = '';

function passwordQuestions(){
    pwLength = prompt('How many characters do you want your password to be?');


    if(pwLength < 8 || pwLength > 128) {
        alert("Your password must be longer than 8 characters and shorter than 128 characters. Try again, please!");
    } else {
        alert("Your password will be " + pwLength + " characters in length!")};

        if(confirm("Would you like lowercase letters in your passsword?")){
            charChoice.push(lowerCase);
            alert("Lowercase letters added to your password!");
        } else {
            alert("Lowercase letters will not be added to your password!")
        }; 
          
        if(confirm("Would you like Uppercase letters in your passsword?")){
            charChoice.push(upperCase);
            alert("Uppercase letters added to your password!");
        } else {
            alert("Uppercase letters will not be added to your password!")
        };
        
        if(confirm("Would you like numbers in your passsword?")){
            charChoice.push(numbers);
            alert("Numbers will be added to your password!");
        } else {
            alert("Numbers will not be added to your password!")
        };
         
        if(confirm("Would you like Special characters in your passsword?")){
            charChoice.push(specialChar);
            alert("Special characters will be added to your password!");
        } else {
            alert("Special characters will not be added to your password!")
        }; 
        
        console.log(charChoice);
};

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



function generatePassword() {
    passwordQuestions();
   
};
