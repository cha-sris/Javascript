//  forEach()   =   method used to iterate over the elements of an array
//                          and apply specific function (callback) to each element

//                          array.forEach(callback)
//                          element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);    //  the order
numbers.forEach(display);   //   matters


function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}

//  Another Example

let fruits = ["apple", "banana", "coconut", "dragon fruit"];

fruits.forEach(upperCase);
fruits.forEach(displayFruits);

function upperCase(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.substring(1); //   or element.slice(1)
}

function displayFruits(element) {
    console.log(element);
}