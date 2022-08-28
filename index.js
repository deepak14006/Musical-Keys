var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var temp = this.innerText;
    playSound(temp);
    lightUp(temp);
  });
}


document.addEventListener("keypress",function(event){

//console.log(event.key);

playSound(event.key);
lightUp(event.key);


});



function playSound(char){

  switch (char) {
    case "w":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();

      break;

    case "a":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();

      break;

    case "s":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();

      break;

    case "d":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();

      break;

    case "j":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();

      break;

    case "k":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();

      break;

    case "l":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();

      break;

    default:

  }





}


function lightUp(character){

var variable = document.querySelector("."+ character);
variable.classList.add("pressed");
//this will remove the shdowy class that we have applied to it !!!
setTimeout(function () {
  variable.classList.remove("pressed");
}, 50);

setTimeout();
}
