var scrollpos = window.scrollY;
var header = document.getElementById('header');


function addClassOnScroll() {
    header.classList.add('shrunk');
}

function RemoveClassOnScroll() {
    header.classList.remove('shrunk');
}

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;
    if (scrollpos > 0) {
        addClassOnScroll();
    } else {
        RemoveClassOnScroll();
    }
});

var christmas = () => {
    let xmas = new Date('December 25, 2017 00:01:00');
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
        document.querySelector('.christmas-countdown .days').innerHTML = '<div class="twelve columuns centered-text"><h3>Christmas is here!</h3></div>';
        document.querySelector('.christmas-countdown .three').classList.add('hide');
    } else {
        document.querySelector('.christmas-countdown .days').innerHTML = '<h3>' + days + '</h3> days ';
        document.querySelector('.christmas-countdown .hours').innerHTML = '<h3>' + hours + '</h3> hours ';
        document.querySelector('.christmas-countdown .minutes').innerHTML = '<h3>' + minutes + '</h3> minutes ';
        document.querySelector('.christmas-countdown .seconds').innerHTML = '<h3>' + seconds + '</h3> seconds ';
    }
}

var christmasCountDown = setInterval(christmas, 1000);

var lights = () => {
    let lights = new Date('December 01, 2017 00:01:00');
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
        clearTimeout(lightsCountDown);
        document.querySelector('.lights-countdown').innerHTML = '<div class="twelve columuns centered-text"><h3>The lights are on!</h3></div><div class="twelve columuns centered-text"><h3>The show starts at 5:30 PM and ends at 11 :00 PM. Everday</h3></div>';
        document.querySelector('.lights-countdown .three').classList.add('hide');
    } else {
        document.querySelector('.lights-countdown .days').innerHTML = '<h3>' + days + '</h3> days ';
        document.querySelector('.lights-countdown .hours').innerHTML = '<h3>' + hours + '</h3> hours ';
        document.querySelector('.lights-countdown .minutes').innerHTML = '<h3>' + minutes + '</h3> minutes ';
        document.querySelector('.lights-countdown .seconds').innerHTML = '<h3>' + seconds + '</h3> seconds ';
    }
}

var lightsCountDown = setInterval(lights, 1000);
