//  eventListener = Listen for specific events to create interactive web pages
//                              events: click, mouseover, mouseout
//                              .addEventListener(event, callback);
//                              .addEventListener(event, arror function);

const myBox = document.getElementById("myBox");

let ogText = myBox.textContent;

function onHover() {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Bro, Seriously???";
  myBox.style.color = "black";
}

function onExit() {
  myBox.style.backgroundColor = "rgb(90, 181, 90)";
  myBox.style.color = "white";
  myBox.textContent = ogText;
}

myBox.addEventListener("mouseenter", onHover);
myBox.addEventListener("mouseleave", onExit);

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.style.color = "white";
  event.target.textContent = "YO! STAP✋️";
});
