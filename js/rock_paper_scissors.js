//give value to elements
//const rock = "1";
//const paper = "2";
//const scissors = "3";

//rock < paper;
//paper < scissors;
//scissors < rock;
//========================


//user gives their choice
const userChoice = prompt("choose",'');
console.log(userChoice);


// ================ get computer choice ================ 
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);//Random number is for 3 choices between 0 and 2
    switch(randomNumber){
    case 0:
      return'rock';
    case 1:
      return'paper';
    case 2:
      return'scissors';
  }
  }
  
// =============for running code=============
  console.log(getComputerChoice());
  //console.log(getComputerChoice());
  //console.log(getComputerChoice());

//============== compare choices ==============

const determineWinner = (userChoice,computerChoice) => {
  if( userChoice === computerChoice){
    return 'The game was a tie!';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won!';
    }else{
      return 'User won!';
    }
  }

  if(userChoice === 'paper'){
      if(computerChoice === 'scissors' || 'rock'){
        return 'Computer won!';
      }else{
        return 'User won!';
      }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock' || 'paper'){
      return 'Computer won!'; 
    }else{
      return 'User won!';
    }
  }
}

console.log(determineWinner());
  //computer sends result 

