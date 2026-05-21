//  setTimeout() = function in Javascript that allows you to schedule
//                              the execution of a function after an amount of time (miliseconds)
//                              Times are approximate (varies based on the workload of the Javascript runtime env).

//   setTimeout(callback , delay)
//  clearTimeout(timeoutId) = can cancel a timeout before it triggers

function sayHello() {
    // window.alert("Hello");
}

setTimeout(sayHello, 3000);
setTimeout(function Hello(){console.log("World")}, 4000);
setTimeout(() => console.log("Hello World"), 5000);

//  Another Example
let timeoutId;

function startTimer() {
    threshold = 3000;
    timeoutId = setTimeout(() => window.alert("3 2 1"), threshold);
    console.log("Timer started");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("Timer cleared");
}