// 0 question:
let  myString = "It's hard to say who is right in this matter";
let firstOccurrence = myString.indexOf("a", 17);
console.log(firstOccurrence);

// 1 question:
let ifSubStringIncluded = myString.includes("righT");
console.log(ifSubStringIncluded);

// 2 question:
let extract = myString.slice(17, 20);
console.log(extract);

// 3 question:
let lastCharacter = myString.slice(-1);
console.log(lastCharacter);