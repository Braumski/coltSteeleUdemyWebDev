function singSong(){
    console.log('Do')
    console.log('Re')
    console.log('Mi')
}
singSong();

//  expected output: Do
//                   Re
//                   Mi


function greet(){
    console.log('Hi!');
}
greet();

//  expected output:  Hi!

function personGreet(person){
    console.log(`Hello ${person}`);
}
personGreet('Emily');    // Emily is a string

// expected output:  Hello Emily

personGreet();          // If a function that requires input gets no input,
                        // the input will come out to undefined.

//  expected output: Hello undefined

function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
rant('Can you not do that?');

// expected output:
//  CAN YOU NOT DO THAT?
//  CAN YOU NOT DO THAT?
//  CAN YOU NOT DO THAT?

function greetFirstLast(firstName, lastName){
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
greetFirstLast('Cody', 'Phillips');

//  expected output:
//  Hey there, Cody P.

//  CONSOLE LOG LOOP ///////////////////////////////////

function repeat(msg, numTimes){
    for(let i = 0; i < numTimes; i++){
        console.log(msg);
    }
}
repeat('I love you', 5);

// Expected output
// I love you
// I love you
// I love you
// I love you
// I love you

// Console log loop on the same line 

function repeat(msg, numTimes){
    let result = ''
    for(let i = 0; i < numTimes; i++){
        result += msg;
    }
}
repeat('I love you', 5);


//  Return value exercise from Colt Steele
//  return values end a functions execution and gives back a value after computing

function lastElement(arrayInsert){
    if(arrayInsert.length > 0){
    return arrayInsert[arrayInsert.length - 1];    // This code returns the last element of an array without removing it.
    }else{
        return null;
    }
}