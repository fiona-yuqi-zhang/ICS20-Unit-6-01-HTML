
let randomNumber=0;
randomNumber=Math.random()*6+1;
randomNumber=Math.floor(randomNumber);
let guess=0;
guess=document.getElementById("number");
function numbers(){
if(answer==randomNumber){
alert("You got it right!")
} else{
  alert("Try again!")
}