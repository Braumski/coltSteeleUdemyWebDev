const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;
winningScoreSelect.value = 3;

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


function updateScore(player, opponent){
    if(!isGameOver){
        player.score += 1
        if(player.score >= winningScore && player.score > opponent.score + 1){
            isGameOver = true;
            player.display.classList.toggle('winner');
            opponent.display.classList.toggle('loser');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent = player.score;
    } 
}



p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for(let p of [p1,p2]){
    p.display.textContent = 0;
    p.score = 0;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled=false;
    }
}
