// Assignment Code
let generateBtn = document.querySelector("#generate");
console.log(document);
// 1b. create array of letters
// let lcLetters = ["a" "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let lcLetters = "abcdefghijklmnopqrtsuvwxyz";
// let ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let pwNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let pwNumbers = "0123456789";
// let spChars = ["!", "#", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~"];
let spChars = "!#%&()*+-./:;<=>?@[]^_~";

// this function will generate the password
function generatePassword() {
  let pwOptions = ""; /* declaring variables; holds information */
  let randomlyGeneratedPassword = [];
  // assign a variable to the length of the password
  let pwLength = prompt(
    "How long would you like your password to be? (minimum 8 characters, max 128)"
  );
  console.log(pwLength);
  //conditional statement
  //check if user input is a valid number
  if (
    parseInt(pwLength) &&
    parseInt(pwLength) >= 8 &&
    parseInt(pwLength) <= 128
  ) {
    console.log("Valid length");
  } else {
    alert("Not a valid length. Please enter a number between 8 and 128.");
    return generatePassword();
  }

  //asks user what characters they want
  let askSc = confirm("Do you want special characters?");

  if (askSc === true) {
    randomlyGeneratedPassword.push(spChars[getRandomNumber(spChars.length)]);
    pwLength--; /*added 1 character to randomlyGeneratedPawssowrd array, this will decrement (--) our for loop that will run. */
    //line 34,44,52,61 randomly grabs characters if user selects "ok"

    pwOptions = pwOptions.concat(spChars); /*adds selection to empty array*/
  }

  let askLc = confirm("Do you want lowercase letters?");

  if (askLc === true) {
    randomlyGeneratedPassword.push(
      lcLetters[getRandomNumber(lcLetters.length)]
    );
    pwLength--;
    pwOptions = pwOptions.concat(lcLetters);
  }

  let askUc = confirm("Do you want uppercase letters?");

  if (askUc === true) {
    randomlyGeneratedPassword.push(
      ucLetters[getRandomNumber(ucLetters.length)]
    );
    pwLength--;

    pwOptions = pwOptions.concat(ucLetters);
  }

  let askNum = confirm("Do you want to add numbers?");

  if (askNum === true) {
    randomlyGeneratedPassword.push(
      pwNumbers[getRandomNumber(pwNumbers.length)]
    );
    pwLength--;

    console.log(randomlyGeneratedPassword);
    pwOptions = pwOptions.concat(pwNumbers);
  }

  //this if statement executes if the user chooses "cancel" for each selection of characters
  if (
    spChars === false &&
    lcLetters === false &&
    ucLetters === false &&
    pwNumbers === false
  ) {
    ("Password must contain at least one character type.");
    generatePassword();
  }
  for (let i = 0; i < pwLength; i++) {
    randomlyGeneratedPassword.push(
      pwOptions[getRandomNumber(pwOptions.length)]
    );
  }

  // returns the password
  return randomlyGeneratedPassword.join("");
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generates random number
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

//randomizes password for pwOptions and takes the length.
//then it runs through the loop
function randomizePassword(pwOptions, length) {
  let result = "";
  let charactersLength = pwOptions.length;
  for (let i = 0; i < length; i++) {
    result += pwOptions.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

let i = Math.floor(Math.random() * lcLetters.length);
let computerChoice = lcLetters[i];
// Add event listener to generate button
// kicks off the generator. starts with "writePassword" function
generateBtn.addEventListener("click", writePassword);
