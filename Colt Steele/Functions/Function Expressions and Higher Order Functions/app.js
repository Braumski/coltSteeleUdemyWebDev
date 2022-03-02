//  Function expressions//////////////////////////////////////////////////////////////////
//  You can store a function in a variable

// Regular function

function add(x,y){
    return x+y;
}

//  This is a function expression

// The function has no name defined next to it, and it is stored in a variable.

// Regular functions need a name, functions stored in variables use the 
// variables' name to refer to the function

// They both behave in the exact same way, just a different syntax

const add = function (x,y) {
    return x + y;
}

// Functions can be found in many places in Javascript.

// Javascript considers functions just like any other value, functions
// can be passed as an argument, you can also return functions as a return value

// Higher Order Functions //////////////////////////////////////////////////////////

// Higher order functions are functions that operate on/with other functions.
// They can accept other functions as arguments and return a function.



// Function as an argument


//  Two seperate functions "callTwice" and "laugh" being created

// After the functions are defined, the second defined function is served into the first function.

function callTwice(func) {  //The argument can be named like any other variable, you can name it under syntax naming conventions,
    func();                 //Just make sure the argument is called in the function by the same name.
    func();

}

function laugh(){
    console.log("HAHAHAHAHAHAHAHAHAHAHAHAHA")
}
callTwice(laugh)

// Console output:
// HAHAHAHAHAHAHAHAHAHAHAHAHA
// HAHAHAHAHAHAHAHAHAHAHAHAHA

//  Returning Functions ////////////////////////////////////////////////////////////////

function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
                console.log("CONGRATS, I AM A GOOD FUNCTION");
                console.log("YOU WIN A MILLION DOLLARS");
        } 
    } else{
            return function(){
                alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
                alert("STOP TRYING TO CLOSE THIS WINDOW!");
        }
    }
}


//  Function tells you if an inputted number is between 50-100

function  isBetween(num) {
    return num >= 50 && num <= 100;
}

//  A function that makes you a function based on the argument

function makeBetweenFunc(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}