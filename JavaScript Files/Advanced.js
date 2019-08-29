function makeSound (key){
  switch (key){
    case "w":
    audio = new Audio("Advanced JS Files/sounds/crash.mp3");
    audio.play();
    break;
    case "a":
    audio = new Audio("Advanced JS Files/sounds/kick-bass.mp3");
    audio.play();
    break;
    case "s":
    audio = new Audio("Advanced JS Files/sounds/snare.mp3");
    audio.play();
    break;
    case "d":
    audio = new Audio("Advanced JS Files/sounds/tom-1.mp3");
    audio.play();
    break;
    case "j":
    audio = new Audio("Advanced JS Files/sounds/tom-2.mp3");
    audio.play();
    break;
    case "k":
    audio = new Audio("Advanced JS Files/sounds/tom-3.mp3");
    audio.play();
    break;
    case "l":
    audio = new Audio("Advanced JS Files/sounds/tom-4.mp3");
    audio.play();
    break;
  }
}

function buttonAnimation(currentkey){

  var activebutton = document.querySelector("." + currentkey);

  activebutton.classList.add("pressed");

  setTimeout(function() { activebutton.classList.remove("pressed");}, 200);}

var drumkit = document.querySelectorAll(".drum");
var drumkitLength = drumkit.length;

for (var i = 0; i < drumkitLength; i++ ){
  drumkit[i].addEventListener("click", function() {

    var buttonText = this.innerHTML;

    makeSound(buttonText);

    buttonAnimation(buttonText);

  });
}


document.addEventListener("keydown", function(event)
{
 makeSound(event.key);

 buttonAnimation(event.key);
}
);
