// Programming Basics: string methods

let myString = "It's hard to say who is right in this matter";
/* 0. Find the first occurrence of the letter "a" in a string, starting the search at position 17. */
let firstOccurrence = myString.indexOf("a", 17);
console.log(firstOccurrence); // 39

/* 1.  Check if a string includes "righT". */
let ifIncluded = myString.includes("righT");
console.log(ifIncluded); // false

/* 2. Extract 'who' word from the text. */
let slicedString = myString.slice(17, 21); 
console.log(slicedString);// who

/* 3. Extract only the last character.*/
console.log(myString.slice(-1)); // r
