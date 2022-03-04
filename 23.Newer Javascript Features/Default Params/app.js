// Default params allows you to set a default to an argument if no input
// is served into the function.

// for example
    
// This is a regular syntax for a multiply funciton

function multiply (x, y){
    return x * y;
}


// This is a multiply function where y has a default set to one.
// All you have to do is put an equal sign next to the argument and
// that will be its default.

function multiply (x, y = 1){
    return x * y;
}