
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

// But with the destructuring syntax, you can do it like this.

const{email, firstName, lastName, city, bio}= user;

// This example above will name your variables exactly the same as the objects property name.
//  email = 'harvey@gmail.com'
//  firstName = 'Harvey'
// etc.

// If you wanted your destructured variables to use a different name than the one used in the object,
// you would have to use a sligthly different syntax including a colon.

const { born: birthYear, died: deathYear} = user;
// birthYear = '1930'
// deathYear = '1978'

// In this example, you add a colon to the properties that you want to be named differently than the
// original property. In the example, I don't want to extract the 'born' property and keep the name
// as 'born', I want the name to be different, so I used a colon and set it to birthYear. Now, I have
// a variable called birthYear = '1930'

// Same for the 'died' property, I changed its name to deathYear. So now I have a variable called deathYear = '1978'

// Setting default placeholders in properties ///////////////////////////////////////////////////////////////////////////////////


// Two objects representing users in your database

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

const user2 = {
    email: 'zinatarenae890@gmail.com',
    password: 'joshla56',
    firstName: 'Renae',
    lastName: 'Zinata',
    born: '1930',
    city: 'Tulsa',
    state: 'Oklahoma'
}

// Notice how user2 does not have a "died" property, because they haven't died yet , they also
// dont have a bio because they weren't widely recognized.

// If you were to attempt to destructure "died" from user2, because you had no idea what the data looked like
// and you didn't know they were still alive, you would get "undefined" in return.

const {firstName, lastName, died} = user2;

// firstName = "Renae"
// lastName = "Zinata"
// died = undefined

// The variable "died" os made, but its value is undefined

// To remedy this issue, you can set a default that would be used if there were no value there,
// exactly like you would set a default in an argument.

const {firstName, lastName, died = 'N/A'} = user2;

// firstName = "Renae"
// lastName = "Zinata"
// died = 'N/A'

// Note: the default value set with "=" will ONLY be used if there is no property, or value to the property that exists.


// Destructuring params  //////////////////////////////////////////////////////////////////////////////

const fullName = ({first, last}) => {
    return  `${first} ${last}`
}
const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya"
}

fullName(runner); //"Eliud Kipchoge"