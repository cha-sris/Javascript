//  NodeList = Static Collection of HTML elements by (id, class, element)
//                      Can be created by using querySelectorAll()
//                      Similar to an array, but no (map, filter, reduce)
//                      NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".my-btns");

buttons.forEach(element => {
    element.style.backgroundColor = "green";
    element.style.fontFamily = "monospace";
});

buttons.forEach(button => {

    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "pink";
    });

    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "green";
    })

    button.addEventListener("click",  event => {
        event.target.style.backgroundColor = "tomato";
    });
});

//  ADD NEW BUTTON  
const newBtn = document.createElement("button");
newBtn.textContent = "Button 5";
newBtn.classList = "my-btns";
document.body.appendChild(newBtn);

//  REMOVE BUTTON
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        
    })
})