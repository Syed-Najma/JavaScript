//use of objects
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}
*/

//use of functions
function playGame(playerMove){
  let result;
  const computerMove=pickComputerMove();

  if(playerMove==='Scissors'){
     
    if(computerMove==='Rock'){
      result='You lose';
    }
    else if(computerMove==='Paper'){
      result='You win';
    }
    else if(computerMove==='Scissors'){
      result='Tie';
    }
    //object's use
    if(result==='You lose')
    {
      score.losses += 1;
    }
    else if(result==='You win'){
      score.wins += 1;
    }
    else if(result==='Tie'){
      score.ties += 1;
    }
  }
//       alert(` You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins:${score.wins} , losses:${score.losses}, Ties:${score.ties}`);
 


  else if(playerMove==='paper'){
    

    if(computerMove==='Rock'){
      result='You win';
    }
    else if(computerMove==='Paper'){
      result='Tie';
    }
    else if(computerMove==='Scissors'){
      result='You lose';
    }
     //object's use
    if(result==='You lose')
    {
      score.losses += 1;
    }
    else if(result==='You win'){
      score.wins += 1;
    }
    else if(result==='Tie'){
      score.ties += 1;
    }

//       alert(` You picked ${playerMove}. Computer picked ${computerMove}.${result}
// Wins:${score.wins} , losses:${score.losses}, Ties:${score.ties}`);
}

  
  else if(playerMove==='Rock'){
    
    

    if(computerMove==='Rock'){
      result='Tie';
    }
    else if(computerMove==='Paper'){
      result='You lose';
    }
    else if(computerMove==='Scissors'){
      result='You win';
    }

     //object's use
    if(result==='You lose')
    {
      score.losses += 1;
    }
    else if(result==='You win'){
      score.wins += 1;
    }
    else if(result==='Tie'){
      score.ties += 1;
    }


//       alert(` You picked ${playerMove}. Computer picked ${computerMove}.${result}
// Wins:${score.wins} , losses:${score.losses}, Ties:${score.ties}`);
  }
    localStorage.setItem('score', JSON.stringify(score))

    //js update

   updateScore();

   document.querySelector('.js-result').innerHTML = result;

   document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png"
   class="move-icon">
  Computer`;

    
}

function updateScore(){
  document.querySelector('.js-score').innerHTML =`Wins:${score.wins} , losses:${score.losses}, Ties:${score.ties}`;
}
 
function pickComputerMove(){

  let computerMove='';

  let randomNumber=Math.random();

  if(randomNumber>=0 && randomNumber < 1/3){
    computerMove='Rock';
  }
  else if(randomNumber>=1/3 && randomNumber < 2/3){
    computerMove='Paper';
  }
  else if(randomNumber>=2/3 && randomNumber<1){
    computerMove='Scissors';
  }
  return computerMove;
}