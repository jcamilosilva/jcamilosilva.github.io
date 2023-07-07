var currentAudio = null;


function playSound(buttonNumber) {
  if (currentAudio !== null) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    
  }
  
  

  var audioElement = document.getElementById("audio" + buttonNumber);
  audioElement.play();
  currentAudio = audioElement;
}






