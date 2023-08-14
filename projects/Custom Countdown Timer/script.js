let btnSetTimer = document.querySelector('#btnSetTimer');
let btnResetTimer = document.querySelector('#btnResetTimer');
let btnnewTimer = document.querySelector('#btnnewTimer');
let setTime = document.querySelector('#setTime');
let timeLeft = document.querySelector('#timeLeft');
let timeUp = document.querySelector('#timeUp');
let title = document.querySelector('#title');
let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let time = document.querySelector('#time');

btnSetTimer.addEventListener('click', () => {
    setTime.style.display = 'none';
    timeUp.style.display = 'none';
    timeLeft.style.display = 'block';
    timeLeft.querySelector('h1').innerHTML = title.value;

    let timer = setInterval(() => {
        let currentTime = Date.now();
        let timeTo = new Date(time.value).getTime();
        let gap = timeTo - currentTime;
        if (isNaN(gap)) {
            alert("Enter a valid time");
            setTime.style.display = 'block';
            timeUp.style.display = 'none';
            timeLeft.style.display = 'none';
            clearInterval(timer);
        } else {
            console.log(typeof (gap))
            if (gap <= 0) {
                setTime.style.display = 'none';
                timeLeft.style.display = 'none';
                timeUp.style.display = 'block';
                clearInterval(timer);
            } else {
                let secondsLeft = Math.floor(gap / 1000) % 60;
                let minutesLeft = Math.floor(gap / (1000 * 60)) % 60;
                let hoursLeft = Math.floor(gap / (1000 * 60 * 60)) % 24;
                let daysLeft = Math.floor(gap / (1000 * 60 * 60 * 24));
                days.innerHTML = daysLeft;
                hours.innerHTML = hoursLeft;
                minutes.innerHTML = minutesLeft;
                seconds.innerHTML = secondsLeft;
            }
        }
    }, 100);
})

btnResetTimer.addEventListener('click', () => {
    setTime.style.display = 'block';
    timeUp.style.display = 'none';
    timeLeft.style.display = 'none';
})

btnnewTimer.addEventListener('click', () => {
    setTime.style.display = 'block';
    timeUp.style.display = 'none';
    timeLeft.style.display = 'none';
})
