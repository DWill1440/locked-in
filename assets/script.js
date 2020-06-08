// Assignment code here
function generatePassword() {
  var passwordLength = getPasswordLength()
  var specialChar = window.confirm("Click OK to confirm including special characters.")
  var numbers = window.confirm("Click OK to confirm including numeric characters.")
  var lowerCase = window.confirm("Click OK to confirm including lowerCase characters.")
  var upperCase = window.confirm("Click OK to confirm including upperCase characters.")

  if (!specialChar && !numbers && !lowerCase && !upperCase) {
    window.alert("Select a password that will meet criteria.")
  }
  var option = []
  if (lowerCase) {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
  option = option.concat (lowerCase)
  }
  if (upperCase) {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  option = option.concat (upperCase)
  }
  if (specialChar) {
    var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")
  option = option.concat (specialChar)
  }
  if (numbers) {
    var numbers = "0123456789".split("")
  option = option.concat (numbers)
  }
  var generatedPw = ""
  for(i=0; i<passwordLength; i++) {
    generatedPw = generatedPw.concat(option[Math.floor(Math.random()*option.length)])
  }
  return generatedPw
}

function getPasswordLength() {
  var passwordLength = window.prompt("How many characters would you like your password to be?")
  if(passwordLength < 8 || passwordLength > 128){
    window.alert("choose a length of at least 8 characters and no more than 128")
    getPasswordLength()
  }
  return passwordLength
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
