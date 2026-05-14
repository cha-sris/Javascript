//  spread operator = . . . allows an iterable such as an array or string to be expanded
//                                          into separate elements (unpack the elements)


//  numbers
let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log("Max = " + maximum);
console.log("Min = " + minimum);

//  string
let user4name = "Cha Sris";
let letters = [...user4name];
let lettersJoined = [...user4name].join("-");

console.log(letters);
console.log(lettersJoined);

//  array
let fruits2 = ["apple", "banana", "coconut", "durian"];
let vegies = ["eggplant", "potatoes",  "spinach"];

let foods = [...fruits2, ...vegies, "eggs", "milk"];

console.log(foods);
