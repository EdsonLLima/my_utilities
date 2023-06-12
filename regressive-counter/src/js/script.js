function startProgressiveTimer(duration, display) {

    var timer = duration, minutes, seconds;

    setInterval(() => {

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

    }, 1000);
}

window.onload = () => {
    var duration = 60 * 60; // conversão para segundos
    var display = document.querySelector("#progressiveTimer") //elementor para exibir timer

    startProgressiveTimer(duration, display); //Iniciar timer
}