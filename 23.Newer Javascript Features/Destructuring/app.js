
// Destructuring is a short, clean syntax to 'unpack':
//      - Values form arrays
//      - Properties from Objects
// into distinct variables

// Note: the array or object you are destructuring from remains intact, you are 
// just individualizing elements/properties within the array/object into its
// own variable to be called

// Destructuring from an array/////////////////////////////////////////////////////////////////////

// Normally, if you wanted individual variables representing elements in an Array, you would have to do this:
const scores = [929321, 899341, 888336, 847383, 772985,  485723];

const highScore = scores[0];
// highScore is 929321
const secondHighScore = scores[1];
// secondHighscore is 899341

// These operations can be done in a much shorter syntax shown below, called destructuring

const scores = [929321, 899341, 888336, 847383, 772985,  485723];
const [gold, silver, bronze, ...everyoneElse] = scores;

// At first sight, the syntax looks longer, but a lot more work is being done in this example than the previous example

// At this point gold represents the first element in the array, gold is now a variable we
// can pull whenever. Gold is equal to 929321, silver is equal to 899341, bronze is equal to
// 888336, and everyoneElse is equal to [847383, 772985,  485723] due to the use of the "..."
// or spread

//More commonly used, is destructuring from objects. //////////////////////////////////////////////

const user = {
    email: 'harvey@gmail.com',
    password: 'asdwadjkna123',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: '1930',
    died: '1978',
    bio: 'Harvey Bernard Milk was an american politician',
    city: 'San Fransisco',
    state: 'California'
}
// If you wanted to extract each propert into a variable, normally, without destructuring, you
// would have to extract the variaables like this:

const firstName = user.firstName;
const lastName = user.lastName;
const born = user.email;

// But with the destructuring syntax, you can do it like this
const{email, firstName, lastName, city, bio}= user;