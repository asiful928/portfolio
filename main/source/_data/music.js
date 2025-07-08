var audio1 = new Audio('/music/music1.webm');
var audio2 = new Audio('/music/music2.webm');

audio1.loop = true;
audio2.loop = true;

var currentAudio = audio1;
currentAudio.play();

function playNextAudio() {
  if (currentAudio === audio1) {
    currentAudio = audio2;
    currentAudio.play();
  } else {
    currentAudio = audio1;
    currentAudio.play();
  }
}

audio1.onended = function() {
  playNextAudio();
};

audio2.onended = function() {
  playNextAudio();
};
