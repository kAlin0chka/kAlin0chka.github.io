const timer = 10;
let amount = timer * 60;
function calculateTime () {
    const countDown = document.querySelector ("#timer");
    let minutes = Math.floor (amount / 60);
    let seconds = amount % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    countDown.textContent = `${minutes}:${seconds}`;
    amount--
if (amount < 0) {
stopTimer ();
amount = 0;
}
}
let timerId = setInterval (calculateTime, 1000)
function stopTimer () {
    clearInterval (timerId);
}



































































