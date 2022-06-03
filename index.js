let rangeNum=[1,2]
let username;

let randomNum=Math.floor(Math.random()*(rangeNumh-1)+1)
console.log(randomNum)

username=prompt("what is your username?")
let userGuess=prompt("Guess a number between 1 and 2");

if(userGuess == randomNum){
  alert(`${username} scores 2`)
 // let newRange= rangeNum.lastIndexOf()
 //  console.log(newRange)
}
else{alert(`${username} needs to try again`)}  
