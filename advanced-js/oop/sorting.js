// sort() = method used to sort elements of an array in place.
//              Sorts elements as strings in lexicographic order, not alphabetical
//              lexicographic = (alphabet + numbers + symbols) as strings

//  string
let fruits = ["apple", "orange", "pineapple", "banana", "coconut"];

fruits.sort();

console.log(fruits);

//  numbers
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a -b);

// If it returns negative (a - b < 0), then a comes before b.
// If it returns positive (a - b > 0), then b comes before a.
// If it returns zero, their order relative to each other doesn't change.

console.log(numbers);

//  objects
const people = [{name: "Spongebob", age: 23, rating: 3.5}, 
                            {name: "Patrick", age: 27, rating: 3.0},
                            {name: "Squidward", age: 40, rating: 3.5},
                            {name: "Sandy", age: 25, rating: 4.5},
                            {name: "Mr. Krab", age: 50, rating: 5.0}
];

const sortedName = [...people].sort((a,b) => a.name.localeCompare(b.name));
const sortedAge = [...people].sort((a, b) => a.age - b.age);
const sortedRating = [...people].sort((a, b) => b.rating - a.rating);
//  spread operator [...people] is needed because sort() does not return new array

console.log(sortedName);
console.log(sortedAge);
console.log(sortedRating);