const nextValentinesDay = '2022/2/14'
function countDownTime() {
    const nextValentinesDate = new Date(nextValentinesDay);
    const currentTime = new Date();
    const diff = nextValentinesDate - currentTime;
    const seconds = Math.floor(diff / 1000 % 60);
    const mins = Math.floor(diff / 1000 / 60 % 60);
    const hours = Math.floor(diff / 1000 / 60 / 60 % 24);
    const days = Math.floor(diff / 1000 / 60 / 60 / 24 ); 
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('mins').innerText = mins;
    document.getElementById('seconds').innerText = seconds;
}
countDownTime()
setInterval(countDownTime, 1000)