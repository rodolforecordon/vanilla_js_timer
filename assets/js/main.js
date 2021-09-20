const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

let startTimer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let millisecs = 0;

start.addEventListener('click', (event) => {
  timer.classList.remove('paused');

  if (startTimer) clearInterval(startTimer);

  startTimer = setInterval(() => {
    if (millisecs !== 99) millisecs += 1;
    if (millisecs === 99) {
      millisecs = 0;
      seconds += 1
    }
    if (seconds === 59) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes === 59) {
      minutes = 0;
      hours += 1;
    }

    timer.innerHTML = `${leftZero(hours)}:${leftZero(minutes)}:${leftZero(seconds)}:${leftZero(millisecs)}`;
  }, 1);
});

pause.addEventListener('click', (event) => {
  timer.classList.add('paused');
  clearInterval(startTimer);
});

reset.addEventListener('click', (event) => {
  [hours, minutes, seconds, millisecs] = [0, 0, 0, 0];
  timer.classList.remove('paused');
  timer.innerHTML = `${leftZero(hours)}:${leftZero(minutes)}:${leftZero(seconds)}:${leftZero(millisecs)}`;
});

function leftZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
