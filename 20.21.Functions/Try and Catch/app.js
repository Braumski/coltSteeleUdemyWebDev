// Deliberate error

hello.toUpperCase();

//Uncaught reference error: hello is not defined


// "Try" is a block of code that will run, and if that doesn't work,
// or produces an error, there is a catch that will run instead

// This is how you would console.log an error without allowing a block
//  of code to completely stop or break your program. Everything before
// and after this code would run smoothly given there were no other erroes.

try{
    hello.toUpperCase();
} catch{
    console.log("Error!!!!")
};


function yell(msg){
    try{
    console.log(msg.toUpperCase().repeat(3))
    } catch (e) {
        console.log("Please pass a string")
    }
}