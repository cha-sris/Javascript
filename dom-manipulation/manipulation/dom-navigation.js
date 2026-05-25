//  DOM Navigation = The process of navigating through the structure
//                                  of an HTML document using Javascript

// .firstElementChild
// .lastElementChild
//  .nextElementSibling
//  .previousElementSibling
//  .parentElement
//  .children

// -----------------    .firstElementChlid      --------------
const element = document.getElementById("fruitId");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";

// -----------------    .lastElementChlid      --------------
const ulElements = document.querySelectorAll("ul");

ulElements.forEach((element) => {
  const lastChild = element.lastElementChild;
  lastChild.style.backgroundColor = "hsl(47, 94%, 58%)";
});

// -----------------    .nextElementSibling      --------------
const nesElement = document.getElementById("apple");
const nextSibling = nesElement.nextElementSibling;
nextSibling.style.backgroundColor = "orange";

// -----------------    .previousElementSibling      --------------
const pesElement = document.getElementById("vegId");
const previousSibling = pesElement.previousElementSibling;
previousSibling.style.color = "white";

// -----------------    .parentElement      --------------
const firstLiOfSecondUl = document.querySelector(
  "ul:nth-of-type(4) li:first-child",
);
const parent = firstLiOfSecondUl.parentElement;
parent.style.fontStyle = "italic";
parent.style.fontFamily = "'monospace', sans-serif";

// -----------------    .children      --------------
const dessertChildren = document.getElementById("dessertId");

for (let child of dessertChildren.children) {
  child.style.fontFamily = "'Courier New', sans-serif";
}
