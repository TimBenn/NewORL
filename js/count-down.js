var christmas = () => {
    let xmas = new Date("December 25, 2017 00:01:00");
    let now = new Date();
    let timeDiff = xmas.getTime() - now.getTime();
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    if (timeDiff <= 0) {
        clearTimeout(christmasCountDown);
        document.querySelector('.christmas-countdown .days').innerHTML = "Christmas is here!";
        document.querySelector('.christmas-countdown .hours').classList.add('hide');
        document.querySelector('.christmas-countdown .minutes').classList.add('hide');
        document.querySelector('.christmas-countdown .seconds').classList.add('hide');
    } else {
        document.querySelector('.christmas-countdown .days').innerHTML = days + '<br> days ';
        document.querySelector('.christmas-countdown .hours').innerHTML = hours + '<br> hours ';
        document.querySelector('.christmas-countdown .minutes').innerHTML = minutes + '<br> minutes ';
        document.querySelector('.christmas-countdown .seconds').innerHTML = seconds + '<br> seconds ';
    }
}

var christmasCountDown = setInterval(christmas, 1000);

var lights = () => {
    let lights = new Date("December 01, 2017 00:01:00");
    let now = new Date();
    let timeDiff = lights.getTime() - now.getTime();
    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    if (timeDiff <= 0) {
        clearTimeout(christmasCountDown);
        document.querySelector('.lights-countdown .days').innerHTML = "The lights are on!";
        document.querySelector('.lights-countdown .hours').classList.add('hide');
        document.querySelector('.lights-countdown .minutes').classList.add('hide');
        document.querySelector('.lights-countdown .seconds').classList.add('hide');
    } else {
        document.querySelector('.lights-countdown .days').innerHTML = days + '<br> days ';
        document.querySelector('.lights-countdown .hours').innerHTML = hours + '<br> hours ';
        document.querySelector('.lights-countdown .minutes').innerHTML = minutes + '<br> minutes ';
        document.querySelector('.lights-countdown .seconds').innerHTML = seconds + '<br> seconds ';
    }
}

var lightsCountDown = setInterval(lights, 1000);


export default {christmasCountDown, lightsCountDown};
