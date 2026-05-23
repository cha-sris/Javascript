//  Error = An object that is created to represent a problem that occurs 
//              Occur often with user input or establishing a connection

//  try{} = encloses code that might potentially cause an erro
//  catch{} = catch and handle any thrown errors from try{}
//  finally{} = (optional) Always executes. Used mostly for clean up
//                        ex. close files, close connections, release resources

try {
    console.log(x);
} catch (error) {
    console.error(error);
}

//  Another Example
try {
    const numerator =  Number(window.prompt("Enter a numerator: "));
    const denominator = Number(window.prompt("Enter a denominator: "));

    if(denominator == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(numerator) || isNaN(denominator)) {
        throw new Error("Values must be a number!");
    }

    const result = numerator / denominator;
    console.log(`Result =  ${result.toFixed(2)}`);
} catch (error) {
    console.error(error);
}