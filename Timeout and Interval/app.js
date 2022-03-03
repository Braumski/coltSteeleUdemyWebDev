// setTimeout and setInterval are about delaying and postponing execution for later dates

//  In simpler languages like python you can simply do this
//  to execute a command that waits for 3 seconds

print "hello..."
pause(3000)
print "are you still there?"

// In javascript its not this simple

// This is a setTimeout example with an arrow function
console.log("Hello")

setTimeout(() => {
    console.log("are you still there?")
}), 3000   // This unit of data is recorded in milliseconds, this is 3000 milliseconds or 3 seconds

// The 3 second timer will run first, although in the syntax it is below the console.log 
// and then the console will log 'are you still there?' in this function

// Javascript still runs all the commands past a setTimeout command before the setTimeout timer is completed

console.log("Hello")

setTimeout(() => {
    console.log("are you still there?")
}), 3000   

console.log("Goodbye")

// In this example you would expect...////////

//console
//  Hello
// (3 second pause)
//  are you still there?
//  Goodbye

// Buit this is how it would actually work///////

//console
//  Hello
//  Goodbye
//  (3 second pause)
//  are you still there?


// Set Interval executes a command repeatedly at a given time interval, instead of logging it just once like timeout does

setInterval(() => {
    console.log(Math.random())
}, 2000)

//This would call a random number between 0 and 1 every 2 seconds

// To stop the interval from coninuting, you would need to use clearInterval in the console
// The previous example doesnt have an id or name. You need a neam to clear an interval, for example.

const intervalTimer = setInterval(() => {
    console.log(Math.random())
}, 2000)

// In the browser console, you would then type clearInterval(name/id)
// clearInterval(intervalTimer)

