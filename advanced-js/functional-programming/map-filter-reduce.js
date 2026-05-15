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

