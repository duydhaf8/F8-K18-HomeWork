function startCountdown(seconds) {
    let timeLeft = seconds;

    const intervalId = setInterval(() => {
        if (timeLeft > 0) {
            console.log(timeLeft);
            timeLeft--;
        }
        else {
            console.log("Hết giờ!");
            clearInterval(intervalId);
        }
    }, 1000);
}

startCountdown(5);