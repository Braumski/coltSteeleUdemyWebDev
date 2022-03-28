


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