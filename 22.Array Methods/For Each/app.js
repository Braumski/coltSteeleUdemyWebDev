// For each accepts  a callback funciton. It calls the function
// once per element in the array

// For each used to be commonly used until for of was introduced


// Syntax
const nums = [9,8,7,6,5,4,3,2,1];

nums.forEach(function(n){
    console.log(n * n)
    //prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function(el) {
    if (el % 2 === 0) {
        console.log(el)
        //prints: 8, 6, 4, 2
    }
})


// Another more simple example

const numbers = [5,10,15,20,25];

function print(element){
    console.log(element);
}

numbers.forEach(print);  //prints: 5,10,15,20,25