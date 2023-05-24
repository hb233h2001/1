'use strict';
{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  let startTime;
  let timeoutId;
  let elapsedTime = 0;
  let isTimerRunning = false;
  
  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;
    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }
  
  function startTimer() {
    if (!isTimerRunning) {
      isTimerRunning = true;
      start.disabled = true;
      stop.disabled = false;
      startTime = Date.now() - elapsedTime;
      countUp();
    }
  }
  
  function stopTimer() {
    if (isTimerRunning) {
      isTimerRunning = false;
      start.disabled = false;
      stop.disabled = true;
      clearTimeout(timeoutId);
      elapsedTime = Date.now() - startTime;
    }
  }
  
  start.addEventListener('click', startTimer);
  stop.addEventListener('click', stopTimer);
  reset.addEventListener('click', () => {
    timer.textContent = '00:00.000';
    elapsedTime = 0;
    start.disabled = false;
    stop.disabled = true;
    if (isTimerRunning) {
      clearTimeout(timeoutId);
      isTimerRunning = false;
    }
  });
}
