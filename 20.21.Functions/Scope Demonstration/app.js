// Function scope lesson
// Correct code, the 'let' variable is in scope

function collectEggs(){
    let totalEggs = 6;
    console.log (totalEggs);
}
collectEggs();



//   Out of scope. console.log doesn't know what totalEggs is
//  because totalEggs scope when using 'let' is confined to the block,
//  or curly brackets

function collectEggs(){
    let totalEggs = 6;
}
console.log (totalEggs);   



// This results in undefined

let bird = 'Scarlet Macaw';
function birdWatch(){
    let bird = 'Great Blue Heron';
}
birdWatch();




// Block scope lesson

let radius = 8;
    if (radius > 0){
        const pi = 3.14159;
        let msg = 'Hello World!';
    }

console.log(radius);
console.log(pi);    //This results in an error, because const pi is block scoped,
                    // stuck inside the "if" statements brackets {}



// Lexical scoping lesson

// In this example, if we were to call the function "bankRobbery", nothing would happen
// other than the const heroes being declared. The function within the function was not
// declared. The initial function "bankRobbery" must be called, and WITHIN that function,
// the second function "cryForHelp" must also be called for.


// This code wouldnt carry out the "cryForHelp" function. But the segment of code after
// the code below would.

function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
        function cryForHelp(){
            for(let hero of heroes){
            console.log (`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        }
}




// This code WOULD execute the "cryForHelp"

// When the code is organized, you can see the cryForHelp() function
// is on the outside of the function cryForHelp() being defined

function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
        function cryForHelp(){
            for(let hero of heroes){
            console.log (`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        }
    cryForHelp();        //new line of code
}




// With a third function nested in 

function bankRobbery(){
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
        function cryForHelp(){
            function inner(){
                for(let hero of heroes) {
                    console.log (`PLEASE HELP US, ${hero.toUpperCase()}`);
                }
            }
            inner();   
        }
    cryForHelp();
}