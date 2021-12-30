// Assignment Code
let generateBtn = document.querySelector("#generate");
console.log(document);
// 1b. create array of letters
// let lcLetters = ["a" "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let lcLetters = "abcdefghijklmnopqrtsuvwxyz";
//do above style for all
// let ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let ucLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let pwNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let pwNumbers = "0123456789";
// let spChars = ["!", "#", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "~"];
let spChars = "!#%&()*+-./:;<=>?@[]^_~";
let potentialOptions = "";
//let pwOptions = [lcLetters,ucLetters,pwNumbers,spChars]
// generatePassword
// return a final password as a string
function generatePassword() {
  // 1. assign a variable to the length of the password
  let pwLength = prompt("How long would you like your password to be? (minimum 8 characters, max 128)");
  console.log(pwLength);
  //conditional statement
  //check if user input is a number
  if (parseInt(pwLength) && parseInt(pwLength) >= 8 && parseInt(pwLength) <= 128) {
    console.log("Valid length");
  } else {
    alert("Not a valid length. Please enter a number between 8 and 128.");
    return generatePassword();
  }
}
//asks user what characters they want 
  let askSc = prompt("Do you want special characters?");
  if (askSc) {
    const potentialOptions = 'spChars';
  }
  let askLc = prompt("Do you want lowercase letters?");
  if (askLc) {
   
    const potentialOptions = 'spChars' + 'lcLetters';
  }
  let askUc = prompt("Do you want uppercase letters?");
  if (askUc) {
    const potentialOptions = 'spChars' + 'lcLetters' + 'ucLetters';
  }
  let askNum = prompt("Do you want to add numbers?");
  if (askNum) {
    const potentialOptions = 'spChars' + 'lcLetters' + 'ucLetters' + 'pwNumbers';
  }

  let password = [];
  // 1a. create a password with that length
  // 1c. loop through array of letters
  for (let i = 0; i < pwLength; i++) {
    // 1d. push each letter array into password array
    password.push(potentialOptions[getRandomNumber(potentialOptions.length)]);
  }

  // 1e. create a random 10 letter password

  // 2 ask user for length

  // 1e. convert password array back to string
  return randomizePassword(password.join(""), pwLength);

  //return password.join("").substring(0, pwLength);
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function randomizePassword(pwOptions, length) {
  let result = "";
  let charactersLength = pwOptions.length;
  for (let i = 0; i < length; i++) {
    result += pwOptions.charAt(Math.floor(Math.random() * charactersLength));
  }
  // TODO: this does not gurantee password reqs. will be met
  return result;
}

let i = Math.floor(Math.random() * lcLetters.length);
let computerChoice = lcLetters[i];
// Add event listener to generate button
// kicks off the generator
generateBtn.addEventListener("click", writePassword);