//Rock Paper Scissors game

//Player selection function
function playerSelect(choice){
  choice = prompt('Enter your choice: rock | paper | scissors');
  return choice;
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
  }else{
    alert(`The computer chose ${compSelect}, You lost.`);
  }
}


//Call to start the game
if (prompt('Do you want to play a game?') === 'yes'){ 
  for(i = 0; i < 5; i++){
    playRound(playerSelect(), compSelect());
  }
}else{
    confirm('Maybe later then.');
}

