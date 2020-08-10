// These exercises are aimed at making you familiar with string methods.

// Declare a variable: 'It's hard to say who is right in this matter'.

let sentence1 = "It's hard to say who is right in this matter";


// QUESTION 0.
// Find the first occurrence of the letter "a" in a string, starting the search at position 17.

let firstOccurance = "a";
let indexOfFirst = sentence1.indexOf(firstOccurance, 17);
console.log("The index of the first 'a' occurance is " + indexOfFirst);
// The index of the first a occurance is 39.



// QUESTION 1.
// Check if a string includes "righT".

let check1 = "righT";
console.log(sentence1.includes(check1));
// false



//// QUESTION 2.
//     Extract 'who' word from the text.

let extract1 = sentence1.slice(17, 20);
console.log(extract1);
// who



// QUESTION 3.
// Extract only the last character.

let lastCharacter = sentence1.slice(-1);
console.log(lastCharacter);
// r
