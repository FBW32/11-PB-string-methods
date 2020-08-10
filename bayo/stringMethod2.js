// 10.08.2020
// EXERCISE 1
//Declare a variable: 'It's hard to say who is right in this matter'. //44
// Find the first occurrence of the letter "a" in a string, starting the search at position 17.
let myText = "It's hard to say who is right in this matter";
console.log(myText);

// EXERCISE 0
// Find the first occurrence of the letter "a" in a string, starting the search at position 17.
let findA = myText.indexOf("a", 17);
console.log(findA);

// EXERCISE 1
// Check if a string includes "righT".
let ifMyRight = myText.includes("righT");
console.log(ifMyRight);

// EXERCISE 2
// Extract 'who' word from the text.
let whoThat = myText.slice(17, 21);
console.log(whoThat);

// EXERCISE 3
// Extract only the last character.
let lastMan = myText.slice(-6);
console.log(lastMan);
