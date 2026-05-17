// arrow functions = a concise way to write function expressions
//                                  good for function expressions that you only use once
//                                  (parameters) => some code

// let hello = function() {
//     console.log("Hello World");
// }

// hello();

const hello = () => {
  console.log("Cha Sris");
};

hello();

const person = (name, age) => {
  console.log(`${name} is ${age} years old.`);
};

person("Spongebob", 23);

//  Another example

const numbers = [1, 2, 3, 4, 5, 6, 7];

const square = numbers.map((element) => Math.pow(element, 2));
const cube = numbers.map((element) => Math.pow(element, 3));
const evenNums = cube.filter((element) => element % 2 === 0);
const total = cube.reduce((accumulator, element) => accumulator + element);

console.log(square);
console.log(cube);
console.log(evenNums);
console.log(total);
