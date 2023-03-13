/* function getComputerChoice
   randomly returns rock paper or scissors

   function resultHelper(pS, cS, res)
   returns string with player seletion, computer selection, and result
     in approporiate places

   function playRound(playerSelection, computerSelection)
   plays one round of rock paper scissors taking in playerSelection
     and computer selection as parameters
   returns string with result e.g. "You Lose! Paper beats Rock"
   player selection should be case insensitive

   function game()
   calls playRound 5 times and keeps score, then reports winner
     or loser at the end (prints to console)

*/

// getComputerChoice()
function getComputerChoice(){
// generate random number from 0-2
let num = Math.floor(Math.random()*3);
// if number is 0 return rock
if (num == 0){
    return "Rock";
// if number is 1 return paper
} else if (num == 1){
    return "Paper";
// if number is 2 return scissors
} else {
    return "Scissors";
}
}

// resultHelper(pS, cS, res)
function resultHelper(pS, cS, res = "Tie"){
// if res is win returns "You Won! ${pS} beats ${cS}."
    if (res == "Win"){
        return `You Won! ${pS} beats ${cS}.`;
// if res is loss returns "You Lost! ${cS} beats ${pS}."
    } else if (res == "Loss"){
        return `You Lost! ${cS} beats ${pS}.`;
// else return "You Tied!"
    } else {
        return "You Tied!";
    }
}

// playRound(playerSelection, computerSelection)
function playRound(playerSelection, computerSelection){
// convert player selection to appropriate case
let first = playerSelection.substring(0, 1);
first = first.toUpperCase();
let rest = playerSelection.substring(1);
rest = rest.toLowerCase();
playerSelection = first + rest;
// create variable for result
let result;
switch (playerSelection){
// if pS is rock
    case "Rock":
        switch (computerSelection){
//   if cS is rock result is tie
            case "Rock":
                result = "Tie";
                break;
//   if cS is paper result is loss
            case "Paper":
                result = "Loss";
                break;
//   if cS is scissors result is win
            case "Scissors":
                result = "Win";
                break;
        }
        break;
// if pS is paper
    case "Paper":
        switch (computerSelection){
//   if cS is rock result is win
            case "Rock":
                result = "Win";
                break;
//   if cS is paper result is tie
            case "Paper":
                result = "Tie";
                break;
//   if cS is scissors result is loss
            case "Scissors":
                result = "Loss";
                break;
        }
        break;
// if pS is scissors
    case "Scissors":
        switch (computerSelection){
//   if cS is rock result is loss
            case "Rock":
                result = "Loss";
                break;
//   if cS is paper result is win
            case "Paper":
                result = "Win";
                break;
//   if cS is scissors result is tie
            case "Scissors":
                result = "Tie";
                break;
        }
        break;
}
// originally returns result string
 // return resultHelper(playerSelection, computerSelection, result);
// now returns result
 return result;
}

/* below is for testing playRound (with result string return implementation)
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

/*

// game()
function game(){
// create variables for result, wins, and losses (and player and computer selections)
let result;
let wins = 0;
let losses = 0;
let pS;
let cS;
// make for loop to count games up to five
for (let i = 0; i < 5; i++){
//   Store playerSelection
    pS = prompt("What is your selection: Rock, Paper, or Scissors?");
//   Store computerSelection
    cS = getComputerChoice();
//   run game and store result in correct counter variable
    result = playRound(pS, cS);
    if (result == "Win"){
        wins++;
    } else if (result == "Loss"){
        losses++;
    }
    // if tie, doesn't need to be stored
    // displays result of that round
    console.log(resultHelper(pS, cS, result))
}
// if wins is larger than losses result is win
if (wins > losses){
    console.log("Congrats, You Win!");
// if losses is larger than wins result is loss
} else if (losses > wins){
    console.log("Sorry, You Lose!");
// else result is tie
} else {
    console.log("You Tied!")
}
}
*/

// how to get each result on a new line?

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
let gameCount = 0;
let wins = 0;
let losses = 0;
let ties = 0;

function incrementResults(res){
    if (res === "Win"){
        wins++
    } else if (res === "Loss"){
        losses++;
    } else {
        ties++;
    }
    gameCount++;
}

function findWhoWon(){
    if (wins > losses){
        return "Congrats, You Win!";
    } else if (losses > wins){
        return "Sorry, You Lose!";
    // else result is tie
    } else {
        return "You Tied!";
    }
}

function updateDisplay(){
    score.textContent = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}.`;
    if (gameCount === 5){
        score.innerHTML += "<br/>" + findWhoWon();
    }
}

function handleClick(choice){
    let cS = getComputerChoice()
    let res = playRound(choice, cS);
    results.innerHTML += resultHelper(choice, cS, res) + "<br/>";
    incrementResults(res);
    updateDisplay();
    if (gameCount === 5){
        buttons.forEach((button) => {button.disabled = true;})
    }
}

rock.addEventListener('click', () => {
    handleClick("Rock");
});
paper.addEventListener('click', () => {
    handleClick("Paper");
});
scissors.addEventListener('click', () => {
    handleClick("Scissors");
});

const score = document.createElement('div');
score.innerHTML = `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}.`;

const body = document.querySelector('body');
body.appendChild(score);



