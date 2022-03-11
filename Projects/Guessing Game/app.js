let maximum = parseInt(prompt("This is a number guessing game. The number range is from zero to the maximum number you choose. Enter the maximum number"));



while(!maximum){
        maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
    console.log(targetNum);
const quitString = "Type in q to quit";
let guess = parseInt(prompt(`Enter your first guess \n\n${quitString}`));
let incorrect = 1;




while(parseInt(!guess)){
    maximum = parseInt(prompt("Enter a valid number"));
}
while(parseInt(guess) !== targetNum) {
    if(guess === 'q'){
        break;
    }
    if(guess > maximum){
        prompt(`That number higher than the maximum you set... (${incorrect++} guesses) \n\n${quitString}`);
    }
    if(guess < 0){
        prompt(`The number will not be below zero (${incorrect++} guesses) \n\n${quitString}`);
    }
    if(guess > targetNum){
        guess = prompt(`Too High (${incorrect++} guesses) \n\n${quitString}`);
    } else {
        guess = prompt(`Too Low (${incorrect++} guesses) \n\n${quitString}`);
    }
}
if(guess === 'q'){
    alert("You Quit The Game");
}
if(parseInt(guess) === targetNum){
    alert(`Correct (${incorrect++} guesses)`);
}