const body = document.querySelector('body');
let randomNum;
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNum(1, 20);

function setBg() {
  const timeOfDay = getTimeOfDay();
  let bgNum = randomNum;
  bgNum = bgNum.toString().padStart(2, "0");
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/anyacubed/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/anyacubed/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  };
}

setBg();

function getSlideNext() {
  if (randomNum < 20) {
    randomNum++;
  } else if (randomNum == 20) {
    randomNum = 1;
  }
  setBg();
}

function getSlidePrev() {
  if (randomNum > 1) {
    randomNum--;
  } else if (randomNum == 1) {
    randomNum = 20;
  }
  setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
