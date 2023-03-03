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
// returns result string
return resultHelper(playerSelection, computerSelection, result);
}

/* below is for testing playRound
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

// game()
// create variables for wins, losses, and ties
// make for loop to count games up to five
//   run game and store result in correct counter variable
// if wins is larger than losses result is win
// if losses is larger than wins result is loss
// else result is tie