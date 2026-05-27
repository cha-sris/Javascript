//  classList = Element property in Javascript used to interact
//                     with an element's list of classes (CSS classes)
//                      Allows you to make reusable classes for many elements
//                      accross your webpage.

//  add()
//  remove()
//  toggle(Remove if present, Add if not)
//  replace(oldClass, newClass)
//  contains()

const myBtn = document.getElementById("myBtn");

myBtn.classList.add("enabled");
// myBtn.classList.remove("enabled");

myBtn.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover")
});

myBtn.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});

myBtn.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent = "Disabled";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
});