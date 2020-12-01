const date = localStorage.userDate;
const restartButton = document.querySelector("#restart");

restartButton.addEventListener('click', event => {
    window.location.replace('/index.html');
});

function start() {
    let days = document.querySelector('.days h1');
    let hours = document.querySelector('.hours h1');
    let minutes = document.querySelector('.minutes h1');
    let seconds = document.querySelector('.seconds h1');

    const dateTime = new Date(date).getTime();

    let now = new Date().getTime();
    let timeLeft = dateTime - now;
    
    let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 3);
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000)

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;
    
    document.querySelector("#d-word").innerHTML = daysLeft == "1" ? "Dia" : "Dias";
    document.querySelector("#h-word").innerHTML = hoursLeft == "1" ? "Hora" : "Horas";
    document.querySelector("#m-word").innerHTML = minutesLeft == "1" ? "Minuto" : "Minutos";
    document.querySelector("#s-word").innerHTML = secondsLeft == "1" ? "Segundo" : "Segundos";

    document.querySelector("#day").innerHTML = daysLeft < "0" ? "0" : "0";
    document.querySelector("#hour").innerHTML = hoursLeft < "0" ? "0" : "0";
    document.querySelector("#minute").innerHTML = minutesLeft < "0" ? "0" : "0";
    document.querySelector("#second").innerHTML = secondsLeft < "0" ? "0" : "0";
}

setInterval(start, 1000);