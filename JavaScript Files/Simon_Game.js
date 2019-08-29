var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).on('keypress',function() {
  if (started === false){
  nextSequence();
  $('#level-title').text("level " + level);
  started = true;
  }
});

function check(currentLevel){

if(gamePattern[currentLevel] == userClickedPattern[currentLevel])
{
  console.log("success");

  if(gamePattern.length == userClickedPattern.length)
  {
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
}
  else
  {

    $('body').addClass('game-over');

    setTimeout(function ()
    {
     $('body').removeClass('game-over');
   },
   200);

   $('#level-title').text("Game Over, Press any Key to Restart! ");

    var audio = new Audio("Simon Game Challenge Starting Files/sounds/wrong.mp3");

    audio.play();

    startOver();

}
}

$(".Simonbtn").click( function()
{
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    check(userClickedPattern.length-1);

});

function nextSequence(){

  level++;

  $('#level-title').text("level " + level);

  userClickedPattern = [];

  var max = 4;

  var randomNumber = Math.floor(Math.random() * Math.floor(max));

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  }

function playSound(name)
{
 //3. Tae the code we used to play sound in the nextSequence() function and add it to playSound().

 var audio = new Audio("Simon Game Challenge Starting Files/sounds/" + name + ".mp3");
 audio.play();

}


 function animatePress(currentColour){
   $("." + currentColour).addClass('pressed');

   setTimeout(function ()
   {
    $("." + currentColour).removeClass('pressed');
  },
  100);
 }

function startOver()
{

    level = 0;

    gamePattern = [];

    started = false;

}
