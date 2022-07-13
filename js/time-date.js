const time = document.querySelector(".time");
const realDate = document.querySelector(".date");

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString([], {
    hourCycle: 'h23',
    hour: '2-digit',
    minute: '2-digit',
    second: "2-digit"
});
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
  showGreeting();
}

showTime();

function showDate() {
  const date = new Date();
  const options = {weekday: 'long' ,month: 'long', day: 'numeric', timeZone: 'UTC'};
  const currentDate = date.toLocaleDateString('en-US', options);
  realDate.textContent = currentDate;
}

showDate();
