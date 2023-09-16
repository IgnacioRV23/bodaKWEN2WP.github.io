//Codigo para contador del header.
const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};

const countdown = (deadline) => {
    const days = document.querySelector('#countDays');

    const hours = document.querySelector('#countHours');

    const minutes = document.querySelector('#countMinutes');

    const seconds = document.querySelector('#countSeconds');

    const timerUpdate = setInterval(() => {
        let t = getRemainingTime(deadline);

        days.innerHTML = t.remainDays;

        hours.innerHTML = t.remainHours;

        minutes.innerHTML = t.remainMinutes;

        seconds.innerHTML = t.remainSeconds;

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            days.innerHTML = 0;

            hours.innerHTML = 0;

            minutes.innerHTML = 0;

            seconds.innerHTML = 0;
        }

    }, 1000)
};

countdown('Jan 13 2024 13:30:00');

//Codigo para scroll de animacion.
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);