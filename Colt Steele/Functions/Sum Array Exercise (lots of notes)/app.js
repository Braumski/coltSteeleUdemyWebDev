// So this one took me a while but I got a good lesson out of it 
// This is iterating through an array and adding each element, therefore summing the entire array
// These notes are for understanding how the code works top to bottom and getting used to how the 
// code should be assessed.

//This is the correct code.

function sumArray(arrayInput){
    let sum = 0;
    for (let i = 0; i < arrayInput.length; i++) {
    sum += arrayInput[i];
    }
    return sum;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////




// I tried to recreate the issue that I was having when working on this below.
// I wasnt understanding very well how the code is actually being processed and I wasnt taking a good look at it.

// With this setup, I had placed return inside of the loop that I had created, meaning this would
// only run once before exiting the loop. The loop could only enter one command before exiting,
// because the return function was IN the loop.

function sumArray(arrayInput){
    for (let i = 0; i < arrayInput.length; i++) {
    sum += arrayInput[i];
    let sum = 0;
    return sum;       //problem
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// I realized this and moved the return statement to the outside of the loop,
// So that the return would only happen once the entire arrays length had been iterated.

// But with this change I still had a problem. "Let" variables are block scoped, meaning
// that variable will only apply within the curly brackets or "block". From the perspective
// of the return statement now, "sum" has not been defined yet, because it is in a different
// set of brackets.

function sumArray(arrayInput){
    for (let i = 0; i < arrayInput.length; i++) {
    sum += arrayInput[i];
    let sum = 0;
    }
    return sum;          //moved
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Initially, I wanted to move sum right before the return statment, but this doesn't work,
// the loop needs the sum variable to be defined BEFORE the loop happens. 

// In this example,
// I'm editing a variable "sum" that doesn't even exist yet in the array because it hasn't
// been defined yet. 

// Not only is the loop not editing anything, even if it was, I'm setting
// the variable "sum" to 0, and then immediately returning it.

function sumArray(arrayInput){
    
    for (let i = 0; i < arrayInput.length; i++) {
    sum += arrayInput[i];
    }
    let sum = 0;          //problem
    return sum;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The final edit I had to make for this to work was to take the sum variable and put it
// BEFORE the loop, but ALSO being in the same bracket space as the return statement, so
// the return statement could read the sum variable.


// The correct code again.

function sumArray(arrayInput){
    let sum = 0;         //moved
    for (let i = 0; i < arrayInput.length; i++) {
    sum += arrayInput[i];
    }
    return sum;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////