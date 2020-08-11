// Programming Basics: string methods
// These exercises are aimed at making you familiar with string methods.

// Declare a variable: 'It's hard to say who is right in this matter'.
let myString = "It's hard to say who is right in this matter";

// Find the first occurrence of the letter "a" in a string, starting the search at position 17.
console.log(myString.indexOf("a", 17)); // 39

// Check if a string includes "righT".
console.log(myString.includes("righT"));//false

// Extract 'who' word from the text.
console.log(myString.slice(17, 21));//who

// Extract only the last character.
console.log(myString.slice(-1));// r