//global variables
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var pLength = "";
var pUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pLowercase = "abcdefghijklmnopqrstuvwxyz";
var pNumbers = "123456789";
var pSpecialCharacters = "./$#@&*()<>-,";

generatePassword = function() {
  //user input sets character length (and offers default length if none is selected)
  pLength = window.prompt("Please select a password length of at least 8 characters but no more than 128.", "8");
    //if input falls outside the allowed limits, loop requires user to submit valid answer
    while (pLength < 8 || pLength > 128) {
      pLength = window.alert("Length must be between 8-128 characters. Please enter another response.");
      return generatePassword();
    } 
    
      //user selections for desired password result
      var uppercase = window.confirm("Select OK if you would like to include uppercase letters in your PASSWORD.");
      var lowercase = window.confirm("Select OK if you would like to include lowercase letters in your PASSWORD.");
      var numbers = window.confirm("Select OK if you would like to include numbers in your PASSWORD.");
      var specialCharacters = window.confirm("Select OK if you would like to include special characters in your PASSWORD.");
    
    //requires user to confirm at least one character type and loops if necessary until valid input is selected
    while (!uppercase && !lowercase && !numbers && !specialCharacters) {
      window.alert("Please select at least one character type.");
        
        uppercase = window.confirm("Select OK if you would like to include uppercase letters in your PASSWORD.");
        lowercase = window.confirm("Select OK if you would like toinclude lowercase letters in your PASSWORD.");
        numbers = window.confirm("Select OK if you would like to include numbers in your PASSWORD.");
        specialCharacters = window.confirm("Select OK if you would like to include special characters in your PASSWORD.");
    }

    //assigns strings to user "confirms"
    var randomKey = ""

    if (uppercase) {
      randomKey = randomKey.concat(pUppercase)
    }

    if (lowercase) {
      randomKey = randomKey.concat(pLowercase)
    }

    if (numbers) {
      randomKey = randomKey.concat(pNumbers)
    }

    if (specialCharacters) {
      randomKey = randomKey.concat(pSpecialCharacters)
    }
    
    //user submitted length and user "confirm" strings are converted to PASSWORD value
    var randomPassword = ""
      for (var i = 0; i < pLength; i++) {
        randomPassword = randomPassword + randomKey[Math.floor(Math.random() * randomKey.length)];
        console.log(randomPassword)
      }
        //window alert that notifies user with their generated PASSWORD
        window.alert("Your PASSWORD is " + randomPassword);
};

//event listener click required to begin/run application
generateBtn.addEventListener("click", generatePassword);
