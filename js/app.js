import GoogleMapsLoader from 'google-maps';
import {christmasCountDown,lightsCountDown} from './count-down';

GoogleMapsLoader.KEY = 'AIzaSyAuooL9iXmJCHcMJzsoBbCxePkCWGiRSoc';
GoogleMapsLoader.load(function(google) {
    var map = new google.maps.Map(document.querySelector('.map-container'), options);
    new google.maps.Marker({
        position: options.center,
        map: map
    });
});
var options = {
    center: {
        lat: 36.196843,
        lng: -80.381694
    },
    scrollwheel: false,
    zoom: 12
};


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

// function() {
//     Polymer({
//         is: "santa-weather",
//         properties: {
//             active: {
//                 type: Boolean,
//                 observer: "_activeChanged"
//             },
//             snowflakes: {
//                 type: Number,
//                 value: 40
//             },
//             clouds: {
//                 type: Number,
//                 value: 6
//             },
//             wind: {
//                 type: Number,
//                 value: 0
//             }
//         },
//         created: function() {
//             this._onResize = this._onResize.bind(this),
//             this._update = this._update.bind(this)
//         },
//         ready: function() {
//             this._ctx = this.$.snowcanvas.getContext("2d"),
//             this._snowflakes = [],
//             this._currentWind = 0,
//             this._startTime
//         },
//         attached: function() {
//             this._onResize(),
//             this._createSnowflakes(),
//             this._setWind(),
//             window.addEventListener("resize", this._onResize)
//         },
//         detached: function() {
//             window.removeEventListener("resize", this._onResize)
//         },
//         _activeChanged: function() {
//             this.active && window.requestAnimationFrame(this._update)
//         },
//         _setWind: function() {
//             this.wind = .25 - .5 * Math.random(),
//             this.async(this._setWind, 15e3 * Math.random())
//         },
//         _onResize: function() {
//             this.$.snowcanvas.hidden = !0;
//             var t = this.getBoundingClientRect();
//             return this._width = t.width,
//             this._height = t.height,
//             this.$.snowcanvas.width = this._width,
//             this.$.snowcanvas.height = this._height,
//             this.$.snowcanvas.hidden = !1,
//             0 === this._width && 0 === this._height ? this.async(function() {
//                 this._onResize()
//             }, 1e3) : void (this._startTime = window.performance.now())
//         },
//         _createSnowflakes: function() {
//             var t = this._snowflakes.length;
//             if (this._snowflakes.length = this.snowflakes,
//             !(t >= this.snowflakes))
//                 for (var i = t; i < this.snowflakes; ++i)
//                     this._resetSnowflake(i)
//         },
//         _resetSnowflake: function(t) {
//             this._snowflakes[t] = this._createSnowflake()
//         },
//         _createSnowflake: function() {
//             return {
//                 x: Math.random(),
//                 y: -Math.random(),
//                 ry: .5 + Math.random(),
//                 d: 2 + 2 * Math.random(),
//                 o: .6 + .4 * Math.random()
//             }
//         },
//         _update: function() {
//             if (this.active) {
//                 for (var t, i = 0; t = this._snowflakes[i]; ++i)
//                     t.x += .01 * this._currentWind * (1 / t.d),
//                     t.y += 2e-4 * t.d * t.ry,
//                     (t.y * this._height > this._height || t.x < -.1 || t.x > 1.1) && this._resetSnowflake(i);
//                 this._currentWind += (this.wind - this._currentWind) / 200,
//                 this._draw(),
//                 window.requestAnimationFrame(this._update)
//             }
//         },
//         _updateClouds: function() {
//             for (var t, i = 0; t = this._clouds[i]; ++i)
//                 t.x += .001 * this._currentWind * t.m,
//                 (this.wind > 0 && t.x * this._width > this._width || this.wind < 0 && t.x * this._width < -t.w)
//         },
//         _draw: function() {
//             if (this._startTime) {
//                 var t = 2 * Math.PI;
//                 this._ctx.fillStyle = "#FFF",
//                 this._ctx.clearRect(0, 0, this._width, this._height);
//                 for (var i, s = 0; i = this._snowflakes[s]; ++s) {
//                     var e = 1;
//                     i.y > .9 && (e = 1 - (i.y - .9) / .1),
//                     this._ctx.globalAlpha = i.o * e,
//                     this._ctx.beginPath(),
//                     this._ctx.arc(i.x * this._width, i.y * this._height, i.d, 0, t),
//                     this._ctx.closePath(),
//                     this._ctx.fill()
//                 }
//             }
//         }
//     })
// }();
