/* Declare a variable: 'It's hard to say who is right in this matter'.
 */
let txt = "It's hard to say who is right in this matter";

console.log(txt);

let searchA = txt.indexOf("a", 17);
console.log(searchA);

/* Check if a string includes "righT".
 */
let includesRightT = txt.includes("righT");
console.log(includesRightT);

/* Extract 'who' word from the text.
 */
let who = txt.substr(17, 4);
console.log(who);

/* Extract only the last  character.
 */
/* let lastCharacter = txt.substr(43);
console.log(lastCharacter); */

let lastChar = txt.slice(-1);
console.log(lastChar);
