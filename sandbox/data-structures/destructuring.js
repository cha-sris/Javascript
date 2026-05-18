//  destructuring = extract values from arrays and objects, 
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring 
//                              {} = to perform object destructuring

// ----------------EXAMPLE 1---------------
// swap the values of two variables
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(`a = ${a}`);
console.log(`b = ${b}`);


// ----------------EXAMPLE 2---------------
// swap two elements in an array
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// ----------------EXAMPLE 3---------------
//  assign array elements to variables
const foods = ["pizza", "corndog", "hamburger", "fries", "fried chicken"];

const[firstFood, secondFood, thirdFood, ...extraFoods] = foods;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(extraFoods);

// ----------------EXAMPLE 4---------------
//  extract values from objects
const person1 = {
    firstName : "Spongebob",
    lastName : "Squarepants",
    age : 23,
    job : "Cook"
}

const person2 = {
    first2Name : "Patrick",
    last2Name : "Star",
    age2 : 25,
    // job2 : "Watcher" 
}

const{firstName, lastName, age, job} = person1;
const {first2Name, last2Name,age2, job2 = "Unemployed"} = person2; // job2 is defalut value if job2 is missing

console.log(firstName + " " + lastName + " " + age + " " + job);
console.log(first2Name + " " + last2Name + " " + age2 + " " + job2);

// ----------------EXAMPLE 5---------------
// destructure in function paratmeters

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);