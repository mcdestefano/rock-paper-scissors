/* function getComputerChoice
   randomly returns rock paper or scissors

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
// generate random number from 0-2
// if number is 0 return rock
// if number is 1 return paper
// if number is 2 return scissors

// playRound(playerSelection, computerSelection)
// if pS is rock
//   if cS is rock return tie
//   if cS is paper return loss
//   if cS is scissors return win
// if pS is paper
//   if cS is paper return tie
//   if cS is scissors return loss
//   if cS is rock return win
// if pS is scissors
//   if cS is scissors return tie
//   if cS is rock return loss
//   if cS is paper return win

// game()
// create variables for wins, losses, and ties
// make for loop to count games up to five
//   run game and store result in correct counter variable
// if wins is larger than losses result is win
// if losses is larger than wins result is loss
// else result is tie