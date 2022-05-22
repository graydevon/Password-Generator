// Assignment code here

//Create diiferent type of criteria for the generater to pick from. 
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var specialCharacters = ["!", "#", "$", "%", "&", "'", "*", "(", ")"]; 

// Reference to the #generate element
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
    //Empty arrays for random generated passwords
    chosenChars = []; 
    randomPassword = []; 
  
    // User will choose how many characters will be in their generated password. 
    var passwordLength = parseInt(prompt("Enter a number between 8 and 128 for how many characters you want in your password:"));
  
   // Making sure the user picked a number is between 8 - 128 . 
    if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
      alert("Please choose a number between 8 - 128! Try again!"); 
        generatePassword(); 
    }

    // Store the values to LowerCase, UpperCase, Numeric, and special characters
    var lowerPassword = confirm("Click OK to INCLUDE lower case characters in your Password. Click Cancel to dismiss.");
      if(lowerPassword) {
      chosenChars = chosenChars.concat(lowerCharacters); 
      }

    var upperPassword = confirm("Click OK to INCLUDE upper case characters in your Password. Click Cancel to dismiss."); 
      if(upperPassword) {
      chosenChars = chosenChars.concat(upperCharacters);
      }

    var numericPassword = confirm("Click OK to INCLUDE numeric characters in your Password. Click Cancel to dismiss."); 
      if(numericPassword){
      chosenChars = chosenChars.concat(numericCharacters);
      }

    var specialPassword = confirm("Click OK to INCLUDE special characters in your Password. Click Cancel to dismiss."); 
      if(specialPassword){
      chosenChars = chosenChars.concat(specialCharacters);
      }

    //If the user selects no criteria for generated password, direct to try again. 
  if (!lowerPassword && !upperPassword && !numericPassword && !specialPassword) {
    alert("You must select something for your password! Please Try Again!");
      generatePassword(); 
  }
  
  for (var i = 0; i < passwordLength; i++) {
    randomPassword[i] = chosenChars[Math.floor(Math.random() * chosenChars.length)];  
  }
   // return the function to see the new displayed password
  return randomPassword; 
  }
  
  