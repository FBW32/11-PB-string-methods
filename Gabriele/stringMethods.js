// Declare a variable: 'It's hard to say who is right in this matter'.

let myVar = "It's hard to say who is right in this matter";

// 0. Find the first occurrence of the letter "a" in a string, starting the search at position 17.

let positionA = myVar.indexOf("a", 17);
/* let findLength = myVar.length;
console.log(findLength); // 44  */
console.log(positionA); // 39

// 1. Check if a string includes "righT".

let ifIncludes = myVar.includes("righT");
console.log(ifIncludes); // false

// 2. Extract 'who' word from the text.

let positionWho = myVar.indexOf("who");
console.log(positionWho); // 17
let extractWho = myVar.slice(17, 20);
console.log(extractWho); // who


// 3. Extract only the last character.

let extractLast = myVar.slice(-1);
console.log(extractLast); // r