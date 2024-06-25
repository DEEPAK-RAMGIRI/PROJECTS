// alert("hello");
var buttonColors=["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern=[];
var started= false;
var level =0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("LEVEL - "+level);
        nextSequence();
        started=true;
    }
});
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    song(userChosenColor);
    animatepress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
            nextSequence();
            }, 1000);
        }
    }
    else {
        song("wrong");
        $("body").addClass("game-over");
        setTimeout(function () { $("body").removeClass("game-over");}, 200);
        $("#level-title").text("Game Over\n Your score is :"+level +"\nPress Any Key to Restart");
        // $(".show").text("actuall pattern:"+gamePattern+"\n your pattern "+ userClickedPattern);

        startover();
    }
}
function nextSequence(){ 
    userClickedPattern=[];
    level++;
    $("#level-title").text("LEVEL - "+level);
    var randomnumber = Math.floor(Math.random() * 4);
    var randomChosenColour=buttonColors[randomnumber];
    gamePattern.push(randomChosenColour);   
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    song(randomChosenColour);
   
    
}
function startover(){
    level =0;
    started =false;
    gamePattern = [];
    userClickedPattern=[];

}

function song(randomChosenColour){
    var song= new Audio("sounds/"+randomChosenColour+".mp3");
    song.play();
}
function animatepress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}
