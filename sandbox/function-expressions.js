//  function declaration = define a reusable block of code that performs specific task

const decNums = [1, 2, 3, 4, 5 ,6, 7];

let squareNums = decNums.map(squares);

console.log(squareNums);

function squares(element) {
    return Math.pow(element, 2);
}

//  function expressions = a way to define functions as values or variables

const expNums = [1, 2, 3, 4, 5, 6, 7];

squareNums = expNums.map(function (element) {
    return Math.pow(element, 2);
})

let cubeNums = expNums.map(function (element) {
    return Math.pow(element, 3);
})

let evenNums = squareNums.filter(function(element) {
    return element % 2 === 0;
})

let oddNums = cubeNums.filter(function(element) {
    return element % 2 !== 0;
})

let totalCube = cubeNums.reduce(function(accumulator, element) {
    return accumulator + element;
})

console.log(expNums);
console.log(squareNums);
console.log(cubeNums);
console.log(evenNums);
console.log(oddNums);
console.log(total);

