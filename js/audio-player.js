import playList from './playlist.js';

let playNum = 0;
const playButton = document.querySelector(".play");
const playListContainer = document.querySelector(".play-list");
const playPrevious = document.querySelector(".play-prev");
const playNextOne = document.querySelector(".play-next");
const audio = new Audio();
const advancedPlayer = document.querySelector(".advanced-player");
const timeline = document.querySelector(".timeline");
const trackTitle = document.querySelector(".track-title");
const playBtn = document.querySelector(".toggle-play");
const volumeButton = document.querySelector(".volume-button");
const progressBar = document.querySelector(".progress");
const volumeOn = document.querySelector(".volume-on");
const volumeOff = document.querySelector(".volume-off");
const trackTime = document.querySelector(".track-time");
const volumeProgress = document.querySelector(".volume-progress");
const volumeLine = document.querySelector(".volume-line");

/* Functions */

function playAudio(button) {
  pickActive(playList[playNum].title);
  if (audio.paused || button == "next" || button == "prev") {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    playBtn.classList.remove("progress-play");
    playBtn.classList.add("progress-pause");
    audio.play();
    audio.volume = 0.75;
    volumeProgress.style.width = 75 + '%';

    if ((button == "next" || button == "prev") && !playButton.classList.contains('pause')) {
      if (playButton.classList.contains('pause') || playBtn.classList.contains('progress-pause')) {
        playButton.classList.remove('pause');
        playBtn.classList.remove("progress-pause");
      } else {
        playButton.classList.add('pause');
        playBtn.classList.add("progress-pause");
      }
    }
  } else {
    audio.pause();
    playBtn.classList.add("progress-play");
    playBtn.classList.remove("progress-pause");
  }
}

function playPrev() {
  if (playNum > 0) {
    playNum--;
  } else if (playNum == 0) {
    playNum = playList.length - 1;
  }
  playAudio("prev");
}

function playNext() {
  if (playNum < playList.length - 1) {
    playNum++;
  } else if (playNum == playList.length - 1) {
    playNum = 0;
  }
  playAudio("next");
}

function pickActive(title) {
  let tracks = document.querySelectorAll(".play-item");
  tracks.forEach(track => {
    if (track.textContent == title) {
      track.classList.add('item-active');
      trackTitle.textContent = title;
    } else {
      track.classList.remove('item-active')
    }
  })
}

function toggleButton() { 
  playButton.classList.toggle('pause');
}

//check audio percentage and update time accordingly

setInterval(() => {
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  advancedPlayer.querySelector(".track-time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 200);

//click on timeline to skip around

timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

function toggleMute() {
  audio.muted = !audio.muted;

  if (audio.muted) {
    audio.volume = 0;
    volumeProgress.value = 0;
    volumeProgress.style.width = 0 + '%';
    volumeOff.style.display ='block';
    volumeOn.style.display ='none';
  } else {
    audio.volume = 1;
    volumeProgress.value = 1;
    volumeProgress.style.width = 100 + '%';
    volumeOff.style.display ='none';
    volumeOn.style.display ='block';
  }
}

// volumeButton.addEventListener('click', e => {
//   const volumeLineWidth = window.getComputedStyle(volumeLine).width;
//   const newVolume = e.offsetX / parseInt(volumeLineWidth);
//   audio.volume = newVolume;
//   volumeProgress.style.width = newVolume * 100 + '%';
// }, false)

volumeLine.addEventListener("click", e => {
  const volumeLineWidth = window.getComputedStyle(volumeLine).width;
  const newVolume = e.offsetX / parseInt(volumeLineWidth);
  audio.volume = newVolume;
  volumeProgress.style.width = newVolume * 100 + '%';
}, false);

/* OnLoad */ 

playList.forEach(track => {
  let li = document.createElement('li');
  li.classList.add("play-item");
  li.textContent = track.title;
  playListContainer.append(li);
})

/* Event handlers */

playButton.addEventListener('click', toggleButton);
playBtn.addEventListener('click', toggleButton);
playNextOne.addEventListener('click', playNext);
playPrevious.addEventListener('click', playPrev);
playButton.addEventListener('click', playAudio);
playBtn.addEventListener( "click", playAudio);
volumeButton.addEventListener("click", toggleMute);
audio.addEventListener("loadeddata", () => {
  document.querySelector(".track-time .length").textContent = getTimeCodeFromNum(audio.duration);
  audio.volume = .75;
},
false
);

audio.addEventListener('ended',function(){
  playNext();
},
false
);

//turn 128 seconds into 2:08

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}
