// element selectors = Methods used to target and manipulate HTML elements
//                                      They allow you to select one or multiple HTML elements
//                                      from the DOM (Document Object Model)

//  1. document.getElementById()                          //  ELEMENT OR NULL
//  2. document.getElementsClassName()            //  HTML COLLECTION
//  3. document.getElementsByTagName()         //   HTML COLLECTION
//  4. document.querySelector()                            //   ELEMENT OR NULL
//  5. document.querySelectorAll()                      //    NODELIST

//  document.getElementById()
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

// document.getElementsByClassName()
const myFruitClass = document.getElementsByClassName("fruits");

Array.from(myFruitClass).forEach((el) => (el.style.fontSize = "30px"));

let hue = 0;
for (let fruit of myFruitClass) {
  fruit.style.backgroundColor = `hsl(${hue}, 50%, 75%)`;
  hue += 30;
}

// document.getElementsByTagName()
const myh4Tag = document.getElementsByTagName("h4");
const myliTag = document.getElementsByTagName("li");

// Use Array.from().forEach() when you need array methods (map, filter, etc.) or want functional style on an HTMLCollection.
Array.from(myh4Tag).forEach((el) => {
  el.style.backgroundColor = "hsl(138, 46%, 58%)";
  el.style.color = "white";
  el.style.fontSize = "1.5rem";
  el.style.fontWeight = "bold";
});

// Use for...of when you have an HTMLCollection/NodeList and want simple iteration without array methods.
for (let vegies of myliTag) {
  vegies.style.backgroundColor = "hsl(55, 42%, 53%)";
  vegies.style.listStyle = "none";
  vegies.style.color = "white";
  vegies.style.fontSize = "1.2rem";
  vegies.style.fontWeight = "bold";
  vegies.style.fontFamily = "monospace, sans-serif";
}

// document.querySelector
const qsH4Element = document.querySelector("h4");
const qsUlElement = document.querySelector("ul");

qsH4Element.style.backgroundColor = "hsl(55, 42%, 53%)";

// document.querySelectorAll
const secondUlLi = document.querySelectorAll("ul:nth-of-type(2) li");

secondUlLi.forEach((el) => (el.style.backgroundColor = "#63c07f"));
// Use querySelectorAll().forEach() when you want direct iteration with modern NodeList (no conversion needed) and flexible CSS selectors.
