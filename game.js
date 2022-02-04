/*
Pseudocode
Js takes input from user to start
Computer moves randomly
Determine winner
Keep Score
First score to 5 wins
interact with user on inteface
*/
let playerScore = 0;
let computerScore = 0;
const interact = document.querySelector('.interface')
const buttons = document.querySelectorAll('button')
buttons.forEach(element =>{
    element.addEventListener('click',e=>{
        console.log(e.target.value);
        playerInteract(playRound(e.target.value));
        checkScore(playerScore, computerScore);
    })
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPlay(num){
    if(num===0){
        return "rock";
    }
    else 
    if(num===1) {
        return "paper";
    }
    return "scissors";
}
function playerInteract(value){
    let winner = value;
    if (winner==='player'){
        playerScore++;
        interact.innerHTML=`Player Wins Round! P:${playerScore} C:${computerScore}`
    } else if (winner==='computer'){
        computerScore++;
        interact.innerHTML=`Computer Wins Round! P:${playerScore} C:${computerScore}`
        return
    } else {
        interact.innerHTML=`Draw! P:${playerScore} C:${computerScore}`
    }
}
function checkScore(playerScore, computerScore){
        if (playerScore===5){
            interact.innerHTML="Player Wins Game, Congrats!!";
            resetScore();
            return
        } else if(computerScore===5){
            interact.innerHTML="Computer Wins Game, Try Again?";
            resetScore();
            return
        }
    }
function playRound(playerValue){
    let computerValue = computerPlay(getRandomInt(3));
    if (computerValue===playerValue){
        return 'draw'
    }else if (computerValue==='rock'&&playerValue==='scissors'||computerValue==='paper'&&playerValue==='rock'||computerValue==='scissors'&&playerValue==="paper"){
        return 'computer'
    } else return 'player';
}
function resetScore(){
    playerScore = 0;
    computerScore = 0;
}