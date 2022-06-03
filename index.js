let rangeNum=[1,2]
let username;

let randomNum;

function getRandomNum(min, max) {
  return randomNum= Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNum(1,2))

username=prompt("what is your username?")
let userGuess=prompt("Guess a number between 1 and 2");

if(userGuess == randomNum){
   alert(`${username}, scores 2`)

}
else{alert(`${username} needs to try again`);  }  
