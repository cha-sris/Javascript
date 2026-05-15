//  .map() =  accepts a callback and applies that function
//                  to each element of an array then return a new array

//                   map() always returns an array with exactly the same number of elements
//                  as the original. It cannot skip or remove elements.


//                  map() alone cannot filter – it transforms every element and returns
//                  same length.

//                  filter() alone cannot map – it selects a subset but doesn't change values.

//                   Use the right tool: filter() for selection, map() for transformation,
//                  reduce() when you need both.

const numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(square);

console.log(squares);

function square(element) {
  return Math.pow(element, 2);
}

//  Another Example

const dates = ["2024-Jan-21", "2025-Feb-28", "2026-March-19"];

let formattedDates = dates.map(formatDates);
console.log(dates);
console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

//  .filter() = create a new array by filtering out arrays

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNums = numbersArray.filter(isEven);
let oddNums = numbersArray.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}


//  .reduce() = reduces the elements of an array of a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`Total is $${total.toFixed(2)}`);

function sum(previous, next){
    return previous + next;
}

//  Another Example

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}