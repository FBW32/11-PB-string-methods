// Declare a variable: 'It's hard to say who is right in this matter'.
let varOne = `It's hard to say who is right in this matter`


// Find the first occurrence of the letter "a" in a string, starting the search at position 17.
let findA = varOne.indexOf("a", 17);
console.log(findA); //39

// Check if a string includes "righT".
findOut = varOne.indexOf("righT");
console.log(findOut); //-1  then is dosen't 

// Extract 'who' word from the text.
let whoString = varOne.slice(17, 20);
console.log(whoString);

// Extract only the last character.
let lastCharacter = varOne.slice(-1);
console.log(lastCharacter);