
//user gives their choice
//let userChoice = prompt("choose",'');
//console.log(userChoice);

//=============================================================
document.addEventListener('DOMContentLoaded', () => {
  let player = 0;
  const buttonRock = document.querySelector('#button_rock')
  const buttonPaper = document.querySelector('#button_paper')
  const buttonScissors = document.querySelector('#button_scissors')

  buttonRock.addEventListener('click', () => {
    player = 1;
  });

  buttonPaper.addEventListener('click', () => {
    player = 2;
  });

  buttonScissors.addEventListener('click', () => {
    player = 3;
  });

  const playerChoice = player;
  console.log(playerChoice);

  console.log(playerChoice)
  // ================ get computer choice ================ 
  const getComputerChoice =  Math.floor(Math.random()*3)+1;//Random number is for 3 choices between 0 and 2



  const computerChoice = getComputerChoice;
    
  // =============for running code=============
    console.log(computerChoice );
    //console.log(getComputerChoice());
    //console.log(getComputerChoice());

  // ========== mapping choices ==========


    //============== compare choices ==============


  //console.log(determineWinner());
    //computer sends result 

  // const choice1 = 1;
  // const choice2 = 1;

  const getWinner = (choice1, choice2) => {
    if( choice1 - choice2  > 0 ) {
      return('player wins!');
    }else if (choice1 - choice2 === 0){
      return('its a tie');
    }else {
      return('computer wins!');
    }
  }


  const winner = getWinner(playerChoice, computerChoice);
  console.log(winner);

});