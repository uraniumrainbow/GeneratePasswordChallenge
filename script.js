// Assignment Code
//these are the check boxes
var generateBtn = document.querySelector("#generate");
var lowerButton = document.querySelector("#lower");
var upperButton = document.querySelector("#upper");
var charButton = document.querySelector("#character");
var numberButton = document.querySelector("#number");

//create a random integer from 8-128
function charQuantity() {
  return Math.floor(Math.random() * 120 + 8);
}


function generatePassword(isLower, isUpper, isCharacter, isNumber) {

  //for each checked box, concantonate the string into the final function
  if (isUpper) {
    var upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
  } else {
    var upperChar = ""
  };

  if (isLower) {
    var lowerChar = "qwertyuiopasdfghjklzxcvbnm";
  } else {
    var lowerChar = "";
  }
  
  if (isCharacter) {
    var charChar = "!#$%&'()*+,-./:;<=>?@][^_`{|}~"
  } else {
    var charChar = ""
  };

  if (isNumber) {
    var numberChar = "1234567890"
  } else {
    var numberChar = ""
  };

  //Edge case for if no buttons are pressed, intead of returning an empty string
  if (!isCharacter && !isNumber && !isUpper && !isLower) {
    return "Please click at least one box";
  }

  const characters = upperChar + lowerChar + charChar + numberChar
  const charactersLength = characters.length;

  //double check for boolean values of each var in the console
  console.log(isLower)
  console.log(isUpper)
  console.log(isCharacter)
  console.log(isNumber)

  var passwordLength = charQuantity();
 
  let result = "";
  for (let i = 0; i < passwordLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

  

// Write password to the #password input
function writePassword() { 

  var isLower = lowerButton.checked;
  var isUpper = upperButton.checked;
  var isCharacter = charButton.checked;
  var isNumber = numberButton.checked;

  var password = generatePassword(isLower, isUpper, isCharacter, isNumber);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
