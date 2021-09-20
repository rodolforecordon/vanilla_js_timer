function indexTimer() {

  const timer = document.querySelector('#timer');

  let startTimer;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let millisecs = 0;

  document.addEventListener('click', (e) => {
    const el = e.target;
    
    if (el.classList.contains('start')) {
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
      }, 10);
    }

    if (el.classList.contains('pause')) {
      timer.classList.add('paused');
      clearInterval(startTimer);
    }

    if (el.classList.contains('reset')) {
      [hours, minutes, seconds, millisecs] = [0, 0, 0, 0];
      timer.classList.remove('paused');
      timer.innerHTML = `${leftZero(hours)}:${leftZero(minutes)}:${leftZero(seconds)}:${leftZero(millisecs)}`;
    }
  })

  function leftZero(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

}

indexTimer();