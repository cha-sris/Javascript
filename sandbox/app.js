console.log("Hello World");

// window.alert("Error: tf is this");

document.getElementById("myh2").textContent = "This is h2 by js";
document.getElementById("myp").textContent = "This is a paragraph from js";

// ------------------------------------------------------VARIABLES------------------------------------------------------

let x = 100;
let age = 23;
let name = "Spongebob";
let online = true;

console.log(x);
console.log(typeof x);
console.log(`${name} is  ${age} years old and online?: ${online}`);

document.getElementById("pName").textContent = ` ${name}`;
document.getElementById("pAge").textContent = `${age}`;
document.getElementById("status").textContent = `${online}`;

// ------------------------------------------------------ARITHMETIC OPERATORS--------------------------------------

let students = 30;

students = students + 1;
students -= 1;
students *= 2;
students /= 3;
students **= 2; // exponent
students %= 6; //  remainder

students++;
students--;

++students;
--students;

document.getElementById("students").textContent =
  `There are ${students} students  in the class.`;

let result = 1 + 2 * 3 + 4 ** 2;

document.getElementById("opd").textContent = `1 + 2 * 3 + 4 ** 2 = ${result}`;

// ------------------------------------------------------USER INPUT------------------------------------------------------

// let userInput = window.prompt("Enter your name: ");

document.getElementById("userInputTxt").textContent = ``;

let message;

document.getElementById("submitButton1").onclick = function () {
  message = document.getElementById("userInputTxt").value; // ✅ Gets the text value

  document.getElementById("userTxt").textContent = `Your message: ${message}`;
};

// ------------------------------------------------------TYPE CONVERSION------------------------------------------------

let m = "wonyoung";
let n = 3.14;
let o = 4;

m = Number(m);
n = String(n);
o = Boolean(o);

console.log(m, typeof m);
console.log(n, typeof n);
console.log(o, typeof o);

// document.getElementById("typeConversion1").textContent = `${m}`;
// document.getElementById("typeConversion2").textContent = `${n}`;
// document.getElementById("typeConversion3").textContent = `${o}`;

// ------------------------------------------------------CONSTANTS------------------------------------------------------

const PI = 3.14159;
let radius;
let circumference;
let area;

// radius = window.prompt("Enter the radius of the circle: ");
radius = Number(radius);

circumference = 2 * PI * radius ** 2;

console.log(circumference);

document.getElementById("submitButton2").onclick = function () {
  radius = document.getElementById("areaInput").value;
  radius = Number(radius);

  area = PI * radius ** 2;

  document.getElementById("circleArea").textContent =
    `Area of circle for radius ${radius} = ${area}`;
};

// ------------------------------------------------------MATH OBJECTS------------------------------------------------------

let num1 = 3.14;
let num2 = 2;
let num3 = 1;
let num4;

num4 = Math.round(num1);
num4 = Math.floor(num1);
num4 = Math.ceil(num1);
num4 = Math.trunc(num1);
num4 = Math.pow(num1, num2);
num4 = Math.sqrt(num1);
num4 = Math.log(num1);
num4 = Math.sin(num1);
num4 = Math.cos(num1);
num4 = Math.tan(num1);
num4 = Math.abs(num1);
num4 = Math.sign(num1);
num4 = Math.max(num1, num2, num3);
num4 = Math.min(num1, num2, num3);

// ------------------------------------------------------IF CONDITIONS------------------------------------------------------

// let age = -1;

// if (age > 1) {
//   console.log(age);
// } else if (age > 1 && age < 18) {
//   console.log("You are a minor");
// } else {
//   console.log("You can't be serious");
// }

// ------------------------------------------------------CHECKED PROPERTY-----------------------------------------------

const subs = document.getElementById("subscribe");
const visa = document.getElementById("visa-card");
const master = document.getElementById("master-card");
const american = document.getElementById("american-card");
const submit = document.getElementById("btn-submit");

submit.onclick = function () {
  if (subs.checked) {
    document.getElementById("sub-choice").textContent =
      `Thanks for subscribing, hope you enjoy`;
    if (visa.checked) {
      document.getElementById("card-choice").textContent = `So, Visa then.`;
    } else if (master.checked) {
      document.getElementById("card-choice").textContent =
        `So, Mastercard then.`;
    } else if (american.checked) {
      document.getElementById("card-choice").textContent =
        `So, American Express then.`;
    } else {
      document.getElementById("card-choice").textContent =
        `Please, choose a card`;
    }
  } else {
    document.getElementById("sub-choice").textContent =
      `Please subscribe first`;
    document.getElementById("card-choice").textContent = ""; // Clear card message
  }
};

// ------------------------------------------------------TERNARY OPERATORS------------------------------------------------------

// used as a shortcut to if-else statements
//  condition ? codeIfTure : codeIfFalse

let message4 = age4 >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);

let isStudent = true;
let message2 = isStudent ? "You are a student" : "You are not a student";

// ------------------------------------------------------SWITCHES------------------------------------------------------

let day = 1;

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thrusday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Please choose a valid day.");
}

// ------------------------------------------------------STRING METHODS------------------------------------------------------

let user2name = "     Minji";
let user3name = "Lee";
let phoneNumber = "123-456-789";

user2name.charAt(0);
user2name.lastIndexOf('i');

user2name.length;
user2name.trim;
user2name.toUpperCase();
user2name.toLowerCase();
user2name.concat(" Lee")
user2name.repeat(3);
user2name.startsWith("M");  //  boolean
user2name.endsWith("e");

user2name === user3name; // two strings are compared with === in js

user2name.replaceAll(" ", "");
phoneNumber.replaceAll("-", "");

phoneNumber.padStart(15, "0");
phoneNumber.padEnd(15, "0");

// ------------------------------------------------------STRING SLICING------------------------------------------------------

//  create a substring from a portion of another string

let fullName  = "Go Min-Si";

let lastName = fullName.slice(0, 1);
let firstName = fullName.slice(3);  //  from index 3 to end

fullName.slice(-1)  //  starts from last index on move toward first index
lastName = fullName.slice(0, indexOf(" "));
