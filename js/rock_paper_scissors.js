
//user gives their choice
let userChoice = prompt("choose",'');
console.log(userChoice);

const player = () => {
  switch(userChoice){
    case 'rock':
      return 1;
    case 'paper':
      return 2;
    case 'scissors':
      return 3;
  }
}
console.log(player());

// ================ get computer choice ================ 
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);//Random number is for 3 choices between 0 and 2
    switch(randomNumber){
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
  }
  }
  
// =============for running code=============
  console.log(getComputerChoice());
  //console.log(getComputerChoice());
  //console.log(getComputerChoice());

// ========== mapping choices ==========


  //============== compare choices ==============

const determineWinner = (player(),getComputerChoice()) => {
  if (player - getComputerChoice=== 0){
    return('its a tie');
  }
  else if( player - getComputerChoice === 1) {
    return('player wins!');
  }
  else {
    return('computer wins!');
  }
}



console.log(determineWinner());
  //computer sends result 

