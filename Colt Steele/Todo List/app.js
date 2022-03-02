// While loop || "or" operator notes
// If a logical "or" operator were to be used in the while loop, the program will
// check if either statement is true and go inside the loop. Since there can be only one 
// input into the input prompt, the parentheses of the while loop will always come out
// to be true and enter inside of its loop, but if we use the && operator, if a single
// one of the equations turns out to be false (in this case, not using q and not using quit)
// The program will continue as normal. 

// For example, if you input "q" into the prompt, 
// the equation will come out to be (true && false) = false; When false happens,
// we exit the loop and quit the app. In another scenario, if we enter something random
// and not defined within our loop, the condition will come out to be (true && true) = true;
// which will ENTER the loop because true statements enter loops, and we just provide the inquiry prompt again.
// Because when you type something random, it enters this loop because the input is NOT 'quit' and its NOT 'q',
// but it skips all of the if checks and enters the inquire again because the random text wasn't accounted for
// in the if statements.

let input = prompt('What would you like to do?');                                                                // Why does this have to be "let"


const todos = [];
while(input !== 'quit' && input !== 'q'){
    if(input === 'list'){
        console.log('***********')
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********')
    } else if (input === 'new' || input === 'add'){
        const newTodo = prompt('Ok, what is the new todo?');                                                   // But these can be const? To me, theyre
        todos.push(newTodo);                                                                                   //all prompts that are going to have a
        console.log(`${newTodo} added to the list`);                                                           // different input eventually.
    } else if (input === 'del' || input === 'delete'){
        const deleteTodo = parseInt(prompt('What is the index of the entry that you want to delete?'));
        if (!Number.isNaN(deleteTodo)){
            const deleted = todos.splice(deleteTodo,1);
            console.log(`${deleteTodo}: ${deleted} deleted`);
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do?');
}
console.log('You quit the app');

// Messing with a random function while I was just googling//////////////////////////////////////////

// function square(number) {
//     return number * number;
// }

// console.logsquare(5);