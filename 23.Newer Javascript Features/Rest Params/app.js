// The Rest Parameter, indicated with the syntax "..." (just like spread) but
// used in an argument to represent an indefinite amount of arguments. Let me explain 
// the difference between the use cases for spread and rest params.

// It is called "rest" parameters because it is capturing the rest of the values served in an argument.

// From the spread lesson:

    // This is a spread for a function call /////////////////////////////

    const nums = [ 9, 3, 2, 8];
    Math.max(nums); //NaN
    // Use spread!
    Math.max(...nums); //9
    // Same as calling:
    // Math.max(9,3,2,8);

// Notice how we were spreading an array that already existed

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}
// The rest parameters use scenario looks very similar, but it's representing
// arguments that would be served into the function, instead of an iterable that
// already exists (referring to what spread does).


// You can use rest params in tandem with other arguments, for example:

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)  /// the '...' is not included inside the function
}

raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis')

// GOLD MEDAL GOES TO: Tammy
// SILVER MEDAL GOES TO: Todd
// AND THANKS TO EVERYONE ELSE: Tina,Trevor,Travis