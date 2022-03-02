// Open the index html and the dev tools in the browser to see the console.


const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon : 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Object Methods /////////////////////////////////////////////////////////

// for(let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`);
// }

// console.log(Object.keys(testScores));

// console.log(Object.values(testScores));

// console.log(Object.entries(testScores));

// Calculating the average score////////////////////////////////////////

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log (total /scores.length)

///////////////////////////////////////////////////////////////////////////



