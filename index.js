let username;
let userRange;
let userGuess;
let step=1;
let randomNum;
let score=0;

function getRandomNum(min, max) {
  return randomNum= Math.floor(Math.random() * (max - min + 1) + min);
}

function start(){
  username=prompt("what is your username?")
  startGame()
}

function startGame(){
   console.log(`step: ${step}`)
  userRange=prompt(`${username}, Select a range from 1 to another number`)
    getRandomNum(1, userRange)
  userGuess=prompt(`Guess a number between 1 and ${userRange}`);     
  userResult()
}
function userResult(){
  if(userGuess == randomNum){   
    score+=2
   alert(`${username},scores ${score}`)    
    step+=1
    while(step <= 2){    
    startGame()
    if(step >= 2){
     alert(`GAME OVER! \n ${username},scores a total of ${score} points`);
   break;
    } 
  }  
  }    
else{alert(`${username} needs to try again`);start();  } 

} 
start()


