//  closure = a function defined inside of another function, \
//                   the inner function has access to the variables
//                   and scope of the outer function.

//                  Allow for private variables and state maintenance
//                  Used frequently in Js frameworks: React, Vue, Angular

function outer() {
    let message = "Hello World";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

//  Another Example
function createCounter() {
    
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = new createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

// Another Example
function createGame() {
    
    let score = 0;
    
    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

const game = new createGame();

game.increaseScore(5);
game.increaseScore(6);
game.increaseScore(9);
game.increaseScore(10);

game.decreaseScore(7);
game.decreaseScore(5);
game.decreaseScore(3);

console.log(`Total score = ${game.getScore()}`);