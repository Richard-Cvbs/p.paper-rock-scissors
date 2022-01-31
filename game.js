/*
Pseudocode
Js takes input from user to start
Computer moves randomly
Determine winner
Keep Score
First score to 5 wins
interact with user on inteface
*/
const interact = document.querySelector('.interface')
const buttons = document.querySelectorAll('button')
buttons.forEach(element =>{
    element.addEventListener('click',e=>{
        console.log(e.target.value)
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
function playRound(playerValue){
let computerValue = computerPlay(getRandomInt(3));
if (computerValue===playerValue){
    return 'draw'
}else if (computerValue==='rock'&&playerValue==='scissors'||computerValue==='paper'&&playerValue==='rock'||computerValue==='scissors'&&playerValue==="paper"){
    return 'computer'
} else return 'player';
}
function playerInteract(value){
    let gameScore = 0;
    let winner = playRound(value)
    if (winner==='draw'){
        return  modifyText("Draw")
    } else if (winner==='player'){
        gameScore++
        return modifyText("Player Wins Round!");
    } else gameScore--
    return modifyText("Computer Wins Round!");

    function modifyText(text) {
        return interact.innerHTML = text;
    }
}