// # 11-PB-string-methods-II

// # Programming Basics: string methods

// These exercises are aimed at making you familiar with string methods.

// Declare a variable: 'It's hard to say who is right in this matter'.

// 0.  Find the first occurrence of the letter "a" in a string, starting the search at position 17.

let matterVar = "It's hard to say who is right in this matter";
let matterVarQ0 = matterVar.indexOf("a", 17);
console.log(matterVarQ0); // 39

// 1. Check if a string includes "righT".
let matterVarQ1 = matterVar.includes("righT");
console.log(matterVarQ1); // false

// 2. Extract 'who' word from the text.
let matterVarQ2 = matterVar.slice(17, 20);
console.log(matterVarQ2); // who

// 3. Extract only the last character.
let matterVarQ3 = matterVar.slice(-1);
console.log(matterVarQ3); // r
