//  rest parameters =  (...rest) allow a function work with a variable number of arguments
//                                                  by bundling them into an array

//                                      spread = expands an array into separate elements
//                                      rest =  bundles separate elements into an array

function openFridge(...foods){
    console.log(...foods);
}

    const food1 = "pizza";
    const food2 = "hamburger";
    const food3 = "hotdog";
    const food4 = "sushi";
    const food5 = "ramen";

    openFridge(food1, food2, food3, food4, food5);

    // Rest in object destructuring (NOT a function!)
let person = {name2: "Spongebob", age2: 23, job: "Fry Cook", city: "Bikini Bottom"};
let {name2, age2, ...rest} = person;
console.log(name2);  // "Spongebob"
console.log(age2);   // 23
console.log(rest);  // {job: "Fry Cook", city: "Bikini Bottom"}

// Another example
let {a, b, ...others} = {a: 1, b: 2, c: 3, d: 4};
console.log(others);  // {c: 3, d: 4}

//  Another example
function combineString(...strings){
    return strings.join(" ");
}

const full2name = combineString("Mr", "Spongebob", "Squarepants", "The", "Cook");

console.log(full2name);