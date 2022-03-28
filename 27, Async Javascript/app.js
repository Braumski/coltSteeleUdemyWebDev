


// const sing = async () => {
//     throw new Error("UH OH");
//     return 'LA LA LA LA';
// }

// sing()
//     .then(data => {
//         console.log("Promise resolved with:", data);
//     })
//     .catch(err => {
//         console.log("Oh no, error");
//     })


// Without await

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password'
}


login('akjsdhssa', 'corgifeetarecute')
    .then(msg => {
        console.log("Logged In!")
        console.log(msg)
    })
    .catch(err => {
        console.log("error!")
        console.log(err)
    })


// Using await

async function rainbow(){
    delayedColorChange('red', 1000)
    delayedColorChange('orange', 1000)
}
/* This async function calls a (fake) color changing function where
1000 is the ms of the delay, but thats not important. In this example, the 
red and orange colors will change at the same time. Resulting in only orange
showing on the webpage because it is listed last. We can have the orange
function WAIT for the red function to be finished using the await keyword*/

async function rainbow(){
    await delayedColorChange('red', 1000)
    delayedColorChange('orange', 1000)

}

/*Now in this function, since await was used, the webpage displays red after
one second, then orange is displayed after one second. Await makes functions
wait for eachother before executing.*/