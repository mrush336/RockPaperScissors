//Rock Paper Scissors game
const player = document.getElementById('player');
const computer = document.getElementById('computer');
var playerScore = 0;
var computerScore = 0;

// Todo Refactor this code to use switch statements
function rock(playerSelect){
  playerSelect = 'rock';
  playRound(playerSelect, compSelect());
}

function paper(playerSelect){
  playerSelect = 'paper';
  playRound(playerSelect, compSelect());
}

function scissors(playerSelect){
  playerSelect = 'scissors';
  playRound(playerSelect, compSelect());
}


//Computer selection function
function compSelect(choice){
  let choices = ['rock', 'paper', 'scissors'];
  choice = choices[Math.floor(Math.random()*3)];
  return choice;
}

//Main game function
function playRound(playerSelect, compSelect){

  if (playerSelect.toLowerCase() === compSelect){
    alert(`The computer chose, ${compSelect} it is a tie!`);
  }else if (playerSelect.toLowerCase() === 'rock' && compSelect === 'scissors'
    || playerSelect.toLowerCase() === 'paper' && compSelect === 'rock'
    || playerSelect.toLowerCase() === 'scissors' && compSelect === 'paper'){
    alert(`The computer chose ${compSelect}, You won!!`);
    playerScore++;
    player.textContent = `Player score is ${playerScore}.`;
  }else{
    alert(`The computer chose ${compSelect}, You lost.`);
    computerScore++;
    computer.textContent = `Computer score is ${computerScore}.`;
  }
}

// Resets the score values and prompts the user with some info.
function game(){
  alert("Select one of the choices below!\n The computer's choice is automatic.");
  playerScore = 0;
  computerScore = 0;
  player.textContent = `Player score is ${playerScore}.`;
  computer.textContent = `Computer score is ${computerScore}.`;
}

