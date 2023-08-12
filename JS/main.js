let [hours, minutes, seconds] = [0, 0, 0];
let watchTime = document.getElementById("watchTime");
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
  }
  let s = seconds < 10 ? "0" + seconds : seconds;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let h = hours < 10 ? "0" + hours : hours;
  watchTime.innerHTML = `${h}:${m}:${s}`;
}

function startTimer() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  [hours, minutes, seconds] = [0, 0, 0];
  clearInterval(timer);
  watchTime.innerHTML = `00:00:00`;
}
