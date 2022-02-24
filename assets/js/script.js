var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var pLength = "";
var pUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pLowercase = "abcdefghijklmnopqrstuvwxyz";
var pNumbers = "123456789";
var pSpecialCharacters = "./$#@&*()<>-,";

generatePassword = function() {
  pLength = window.prompt("Please select a password length of at least 8 characters but no more than 128.", "8");
    while (pLength < 8 || pLength > 128) {
      pLength = window.alert("Length must be between 8-128 characters. Please enter another response.");
      return generatePassword();
    } 
    
      var uppercase = window.confirm("Select OK if you would like to include uppercase letters in your PASSWORD.");
      var lowercase = window.confirm("Select OK if you would like to include lowercase letters in your PASSWORD.");
      var numbers = window.confirm("Select OK if you would like to include numbers in your PASSWORD.");
      var specialCharacters = window.confirm("Select OK if you would like to include special characters in your PASSWORD.");
    
    while (!uppercase && !lowercase && !numbers && !specialCharacters) {
      window.alert("Please select at least one character type.");

        uppercase = window.confirm("Select OK if you would like to include uppercase letters in your PASSWORD.");
        lowercase = window.confirm("Select OK if you would like toinclude lowercase letters in your PASSWORD.");
        numbers = window.confirm("Select OK if you would like to include numbers in your PASSWORD.");
        specialCharacters = window.confirm("Select OK if you would like to include special characters in your PASSWORD.");
    }

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
    
    var randomPassword = ""
      for (var i = 0; i < pLength; i++) {
        randomPassword = randomPassword + randomKey[Math.floor(Math.random() * randomKey.length)];
        console.log(randomPassword)
      }
        window.alert("Your PASSWORD is " + randomPassword);
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
