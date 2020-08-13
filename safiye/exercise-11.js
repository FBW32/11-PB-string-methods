let string1 = "It's hard to say who is right in this matter";
//0
let findPosition = string1.indexOf("a", 17);
console.log(findPosition); //39

//1
console.log(string1.includes("righT")); //false

//2
let positionWho = string1.indexOf("who");
console.log(string1.slice(positionWho, positionWho + 3));

//3
console.log(string1.slice(-1));
