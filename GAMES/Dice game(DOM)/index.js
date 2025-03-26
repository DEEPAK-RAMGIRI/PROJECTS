var randomNumber01 = Math.floor(Math.random() * 6) + 1;
var randomNumber02 = Math.floor(Math.random() * 6) + 1;

var randomDice01 = "dice" + randomNumber01 +".png";
var image1 = document.querySelectorAll('img')[0]
image1.setAttribute("src","images/"+randomDice01)

var randomDice02 = "dice" + randomNumber02 +".png";
var image1 = document.querySelectorAll('img')[1]
image1.setAttribute("src","images/"+randomDice02)


var ans;
if(randomNumber01 == randomNumber02){
   ans  ="It's a Draw";
}else if(randomNumber01 > randomNumber02){
    ans = "PLAYER 1 Wins";
}else{
    ans = "PLAYER 2 Wins";
}
document.querySelector("h1").innerHTML = ans
console.log(randomNumber01) 

