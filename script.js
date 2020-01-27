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

  let typeOfPassword = prompt("Type U for password with an Uppercase, Type S for a password with a Special Character, All for a password with all of the above");
  let lengthOfPassword = prompt("How long would you like the password to be between 8 and 128 characters long?");
  parseInt(lengthOfPassword);
  let x = lengthOfPassword;
  randomNumber = 0;
  let passwordArray = [];


  if (typeOfPassword === "U") {
    let upperPassBuilt = Uppercase[Math.floor(Math.random() * Uppercase.length)];
    passwordArray.push(upperPassBuilt);
    console.log(upperPassBuilt);
  }
  if (typeOfPassword === "S") {
    let specialPassBuilt = Special[Math.floor(Math.random() * Special.length)];
    passwordArray.push(specialPassBuilt);
    console.log(specialPassBuilt);
  }
  if (typeOfPassword === "All") {
    let allPassbuilt = (Uppercase[Math.floor(Math.random() * Uppercase.length)] + Special[Math.floor(Math.random() * Special.length)]);
    passwordArray.push(allPassbuilt);
    console.log(allPassbuilt);
  }

  for (let i = 1; i < x; i++) {
    randomNumber = Numbers[Math.floor(Math.random() * 10)];
    passwordArray.push(randomNumber);
    console.log(passwordArray);
  }

let passwordArrayCompleted = passwordArray.join("");
console.log(passwordArrayCompleted);
let result = passwordArrayCompleted;
return result;



}


let Uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let Lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let Special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '|', '<', '>', '?'];
let Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];



// function passcreate() {
//   let passbuilt = Uppercase[Math.floor(Math.random() * Uppercase.length)];
//   let passbuilt2 = Lowercase[Math.floor(Math.random() * Lowercase.length)];
//   let passbuilt3 = Special[Math.floor(Math.random() * Special.length)];
//   let passbuilt4 = Numbers[Math.floor(Math.random() * Numbers.length)];

//   let passcomplete = (passbuilt + passbuilt2 + passbuilt3 + passbuilt4);

//   while (passcomplete < 8) {
//     (passcomplete + Math.floor(Math.random() * 1));
//     console.log(passcomplete);
//   }
// }
// passcreate();
