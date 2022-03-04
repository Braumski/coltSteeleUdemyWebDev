// Spread syntax allows an iterable, such as an array or object, or
// even a string can be iterable if you wanot to iterate through each character.
//  You use the syntax "..." in a spread.

// This is a spread for a function call /////////////////////////////

const nums = [ 9, 3, 2, 8];
Math.max(nums); //NaN
// Use spread!
Math.max(...nums); //9
// Same as calling:
// Math.max(9,3,2,8);



//  Spread with array literals. ///////////////////////////////////////////////////

// This time, instead of  serving a spread array into an argument, we
// are going to create a new array and spread two other arrays inside of it.

// Spread gives a much faster and simple syntax to do this, rather than just
// retyping the entirety of both of the previous arrays.

const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Rusty', 'Wyatt'];

// Imagine that cats and dogs are much longer, 100 elements in each, it would bne a lot of work to
// combine them into one newly declared array, so we use spread

const allPets = [...cats, ...dogs]

// const allPets = ['Blue', 'Scout', 'Rocket','Rusty', 'Wyatt']


// Spread in Object Literals////////////////////////////////////////////////////////////////////

//  You can spread properties from one object into another object literal.

const feline = { legs: 4, family: 'Felidae'};
const canine = {isFurry: true, family: 'Caninae'};

const catDog = {...feline, ...canine}

// Feline and Canine have conflicting properties "family"

// The properties are replaced going from left to right, so the canine "family" property value
// will overwrite the feline family property value

// const catDog {legs: 4, isFurry: true, family: 'Caninae'}

// to remedy this conflict, we can just insert our own family property in the syntax at the end

const feline = { legs: 4, family: 'Felidae'};
const canine = {isFurry: true, family: 'Caninae'};

const catDog = {...feline, ...canine, family: 'Phillips'};

// const catDog = {legs: 4, isFurry: true, family: 'Phillips'}

// The manually inserted family property must be placed at the end, or it will just be replaced
// by the family property in cat or dog, since the priority is assessed form left to right, the
// last property having the highest priority.

// Less common use cases  //////////////////////////////////////////////////////////////////////////

// Spreading an array into an object: //////////////

const newObject = {...[2,4,6,8]};
// {0: 2, 1: 4, 2: 6, 3: 8}

// notice how the values in the array are given properties that represent the index of the array


// Spreading a string into an object:///////////////

const newObject2 = {..."Hello"};
// {0: H, 1: e, 2: l, 3: l, 4: o}