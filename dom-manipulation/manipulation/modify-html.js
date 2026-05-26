
// 1. CREATE THE ELEMENT
const newH1 = document.createElement("h1");

//  2. ADD ATTRIBUTES/PROPERTIES
newH1.textContent = `I like pizza`;
newH1.id = "myH1";
newH1.style.fontFamily = "monospace";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// clone (optional)
const clone1 = newH1.cloneNode(true);
const clone2 = newH1.cloneNode(true);

//  3. APPEND ELEMENT TO DOM
document.body.append(newH1); // last child of body
document.getElementById("box1").append(clone1); //  last child
document.getElementById("box2").prepend(clone2); // first child

//  4. REMOVE HTML ELEMENT
document.body.removeChild(newH1);