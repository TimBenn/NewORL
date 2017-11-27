/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _googleMaps = __webpack_require__(1);

var _googleMaps2 = _interopRequireDefault(_googleMaps);

var _countDown = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_googleMaps2.default.KEY = 'AIzaSyAuooL9iXmJCHcMJzsoBbCxePkCWGiRSoc';
_googleMaps2.default.load(function (google) {
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

window.addEventListener('scroll', function () {
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.GoogleMapsLoader = factory();
	}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.18';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var christmas = function christmas() {
    var xmas = new Date("December 25, 2017 00:01:00");
    var now = new Date();
    var timeDiff = xmas.getTime() - now.getTime();
    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
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
};

var christmasCountDown = setInterval(christmas, 1000);

var lights = function lights() {
    var lights = new Date("December 01, 2017 00:01:00");
    var now = new Date();
    var timeDiff = lights.getTime() - now.getTime();
    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
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
};

var lightsCountDown = setInterval(lights, 1000);

exports.default = { christmasCountDown: christmasCountDown, lightsCountDown: lightsCountDown };

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzE2MGMyMmUxNGQ0ODM5OWM2NmIiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nb29nbGUtbWFwcy9saWIvR29vZ2xlLmpzIiwid2VicGFjazovLy8uL2pzL2NvdW50LWRvd24uanMiXSwibmFtZXMiOlsiS0VZIiwibG9hZCIsImdvb2dsZSIsIm1hcCIsIm1hcHMiLCJNYXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcHRpb25zIiwiTWFya2VyIiwicG9zaXRpb24iLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJzY3JvbGx3aGVlbCIsInpvb20iLCJzY3JvbGxwb3MiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaGVhZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRDbGFzc09uU2Nyb2xsIiwiY2xhc3NMaXN0IiwiYWRkIiwiUmVtb3ZlQ2xhc3NPblNjcm9sbCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaHJpc3RtYXMiLCJ4bWFzIiwiRGF0ZSIsIm5vdyIsInRpbWVEaWZmIiwiZ2V0VGltZSIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwiaG91cnMiLCJkYXlzIiwiY2xlYXJUaW1lb3V0IiwiY2hyaXN0bWFzQ291bnREb3duIiwiaW5uZXJIVE1MIiwic2V0SW50ZXJ2YWwiLCJsaWdodHMiLCJsaWdodHNDb3VudERvd24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBRUEscUJBQWlCQSxHQUFqQixHQUF1Qix5Q0FBdkI7QUFDQSxxQkFBaUJDLElBQWpCLENBQXNCLFVBQVNDLE1BQVQsRUFBaUI7QUFDbkMsUUFBSUMsTUFBTSxJQUFJRCxPQUFPRSxJQUFQLENBQVlDLEdBQWhCLENBQW9CQyxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFwQixFQUE4REMsT0FBOUQsQ0FBVjtBQUNBLFFBQUlOLE9BQU9FLElBQVAsQ0FBWUssTUFBaEIsQ0FBdUI7QUFDbkJDLGtCQUFVRixRQUFRRyxNQURDO0FBRW5CUixhQUFLQTtBQUZjLEtBQXZCO0FBSUgsQ0FORDtBQU9BLElBQUlLLFVBQVU7QUFDVkcsWUFBUTtBQUNKQyxhQUFLLFNBREQ7QUFFSkMsYUFBSyxDQUFDO0FBRkYsS0FERTtBQUtWQyxpQkFBYSxLQUxIO0FBTVZDLFVBQU07QUFOSSxDQUFkOztBQVVBLElBQUlDLFlBQVlDLE9BQU9DLE9BQXZCO0FBQ0EsSUFBSUMsU0FBU2IsU0FBU2MsY0FBVCxDQUF3QixRQUF4QixDQUFiOztBQUdBLFNBQVNDLGdCQUFULEdBQTRCO0FBQ3hCRixXQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUNIOztBQUVELFNBQVNDLG1CQUFULEdBQStCO0FBQzNCTCxXQUFPRyxTQUFQLENBQWlCRyxNQUFqQixDQUF3QixRQUF4QjtBQUNIOztBQUVEUixPQUFPUyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXO0FBQ3pDVixnQkFBWUMsT0FBT0MsT0FBbkI7QUFDQSxRQUFJRixZQUFZLENBQWhCLEVBQW1CO0FBQ2ZLO0FBQ0gsS0FGRCxNQUVPO0FBQ0hHO0FBQ0g7QUFDSixDQVBEOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE87Ozs7OztBQ3pKQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztB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cC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MTYwYzIyZTE0ZDQ4Mzk5YzY2YiIsImltcG9ydCBHb29nbGVNYXBzTG9hZGVyIGZyb20gJ2dvb2dsZS1tYXBzJztcclxuaW1wb3J0IHtjaHJpc3RtYXNDb3VudERvd24sbGlnaHRzQ291bnREb3dufSBmcm9tICcuL2NvdW50LWRvd24nO1xyXG5cclxuR29vZ2xlTWFwc0xvYWRlci5LRVkgPSAnQUl6YVN5QXVvb0w5aVhtSkNIY01KenNvQmJDeGVQa0NXR2lSU29jJztcclxuR29vZ2xlTWFwc0xvYWRlci5sb2FkKGZ1bmN0aW9uKGdvb2dsZSkge1xyXG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcC1jb250YWluZXInKSwgb3B0aW9ucyk7XHJcbiAgICBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBwb3NpdGlvbjogb3B0aW9ucy5jZW50ZXIsXHJcbiAgICAgICAgbWFwOiBtYXBcclxuICAgIH0pO1xyXG59KTtcclxudmFyIG9wdGlvbnMgPSB7XHJcbiAgICBjZW50ZXI6IHtcclxuICAgICAgICBsYXQ6IDM2LjE5Njg0MyxcclxuICAgICAgICBsbmc6IC04MC4zODE2OTRcclxuICAgIH0sXHJcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbiAgICB6b29tOiAxMlxyXG59O1xyXG5cclxuXHJcbnZhciBzY3JvbGxwb3MgPSB3aW5kb3cuc2Nyb2xsWTtcclxudmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRDbGFzc09uU2Nyb2xsKCkge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NocnVuaycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZW1vdmVDbGFzc09uU2Nyb2xsKCkge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NocnVuaycpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICBzY3JvbGxwb3MgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGlmIChzY3JvbGxwb3MgPiAwKSB7XHJcbiAgICAgICAgYWRkQ2xhc3NPblNjcm9sbCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBSZW1vdmVDbGFzc09uU2Nyb2xsKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gZnVuY3Rpb24oKSB7XHJcbi8vICAgICBQb2x5bWVyKHtcclxuLy8gICAgICAgICBpczogXCJzYW50YS13ZWF0aGVyXCIsXHJcbi8vICAgICAgICAgcHJvcGVydGllczoge1xyXG4vLyAgICAgICAgICAgICBhY3RpdmU6IHtcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbi8vICAgICAgICAgICAgICAgICBvYnNlcnZlcjogXCJfYWN0aXZlQ2hhbmdlZFwiXHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHNub3dmbGFrZXM6IHtcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuLy8gICAgICAgICAgICAgICAgIHZhbHVlOiA0MFxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICBjbG91ZHM6IHtcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuLy8gICAgICAgICAgICAgICAgIHZhbHVlOiA2XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgIHdpbmQ6IHtcclxuLy8gICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuLy8gICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLl9vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyksXHJcbi8vICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSA9IHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMpXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICByZWFkeTogZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuJC5zbm93Y2FudmFzLmdldENvbnRleHQoXCIyZFwiKSxcclxuLy8gICAgICAgICAgICAgdGhpcy5fc25vd2ZsYWtlcyA9IFtdLFxyXG4vLyAgICAgICAgICAgICB0aGlzLl9jdXJyZW50V2luZCA9IDAsXHJcbi8vICAgICAgICAgICAgIHRoaXMuX3N0YXJ0VGltZVxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLl9vblJlc2l6ZSgpLFxyXG4vLyAgICAgICAgICAgICB0aGlzLl9jcmVhdGVTbm93Zmxha2VzKCksXHJcbi8vICAgICAgICAgICAgIHRoaXMuX3NldFdpbmQoKSxcclxuLy8gICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fb25SZXNpemUpXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX29uUmVzaXplKVxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgX2FjdGl2ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLmFjdGl2ZSAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3VwZGF0ZSlcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIF9zZXRXaW5kOiBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy53aW5kID0gLjI1IC0gLjUgKiBNYXRoLnJhbmRvbSgpLFxyXG4vLyAgICAgICAgICAgICB0aGlzLmFzeW5jKHRoaXMuX3NldFdpbmQsIDE1ZTMgKiBNYXRoLnJhbmRvbSgpKVxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgX29uUmVzaXplOiBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy4kLnNub3djYW52YXMuaGlkZGVuID0gITA7XHJcbi8vICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoID0gdC53aWR0aCxcclxuLy8gICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gdC5oZWlnaHQsXHJcbi8vICAgICAgICAgICAgIHRoaXMuJC5zbm93Y2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGgsXHJcbi8vICAgICAgICAgICAgIHRoaXMuJC5zbm93Y2FudmFzLmhlaWdodCA9IHRoaXMuX2hlaWdodCxcclxuLy8gICAgICAgICAgICAgdGhpcy4kLnNub3djYW52YXMuaGlkZGVuID0gITEsXHJcbi8vICAgICAgICAgICAgIDAgPT09IHRoaXMuX3dpZHRoICYmIDAgPT09IHRoaXMuX2hlaWdodCA/IHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLl9vblJlc2l6ZSgpXHJcbi8vICAgICAgICAgICAgIH0sIDFlMykgOiB2b2lkICh0aGlzLl9zdGFydFRpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkpXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBfY3JlYXRlU25vd2ZsYWtlczogZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5fc25vd2ZsYWtlcy5sZW5ndGg7XHJcbi8vICAgICAgICAgICAgIGlmICh0aGlzLl9zbm93Zmxha2VzLmxlbmd0aCA9IHRoaXMuc25vd2ZsYWtlcyxcclxuLy8gICAgICAgICAgICAgISh0ID49IHRoaXMuc25vd2ZsYWtlcykpXHJcbi8vICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gdDsgaSA8IHRoaXMuc25vd2ZsYWtlczsgKytpKVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0U25vd2ZsYWtlKGkpXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBfcmVzZXRTbm93Zmxha2U6IGZ1bmN0aW9uKHQpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5fc25vd2ZsYWtlc1t0XSA9IHRoaXMuX2NyZWF0ZVNub3dmbGFrZSgpXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBfY3JlYXRlU25vd2ZsYWtlOiBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgIHg6IE1hdGgucmFuZG9tKCksXHJcbi8vICAgICAgICAgICAgICAgICB5OiAtTWF0aC5yYW5kb20oKSxcclxuLy8gICAgICAgICAgICAgICAgIHJ5OiAuNSArIE1hdGgucmFuZG9tKCksXHJcbi8vICAgICAgICAgICAgICAgICBkOiAyICsgMiAqIE1hdGgucmFuZG9tKCksXHJcbi8vICAgICAgICAgICAgICAgICBvOiAuNiArIC40ICogTWF0aC5yYW5kb20oKVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBfdXBkYXRlOiBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XHJcbi8vICAgICAgICAgICAgICAgICBmb3IgKHZhciB0LCBpID0gMDsgdCA9IHRoaXMuX3Nub3dmbGFrZXNbaV07ICsraSlcclxuLy8gICAgICAgICAgICAgICAgICAgICB0LnggKz0gLjAxICogdGhpcy5fY3VycmVudFdpbmQgKiAoMSAvIHQuZCksXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdC55ICs9IDJlLTQgKiB0LmQgKiB0LnJ5LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICh0LnkgKiB0aGlzLl9oZWlnaHQgPiB0aGlzLl9oZWlnaHQgfHwgdC54IDwgLS4xIHx8IHQueCA+IDEuMSkgJiYgdGhpcy5fcmVzZXRTbm93Zmxha2UoaSk7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50V2luZCArPSAodGhpcy53aW5kIC0gdGhpcy5fY3VycmVudFdpbmQpIC8gMjAwLFxyXG4vLyAgICAgICAgICAgICAgICAgdGhpcy5fZHJhdygpLFxyXG4vLyAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl91cGRhdGUpXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIF91cGRhdGVDbG91ZHM6IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgICBmb3IgKHZhciB0LCBpID0gMDsgdCA9IHRoaXMuX2Nsb3Vkc1tpXTsgKytpKVxyXG4vLyAgICAgICAgICAgICAgICAgdC54ICs9IC4wMDEgKiB0aGlzLl9jdXJyZW50V2luZCAqIHQubSxcclxuLy8gICAgICAgICAgICAgICAgICh0aGlzLndpbmQgPiAwICYmIHQueCAqIHRoaXMuX3dpZHRoID4gdGhpcy5fd2lkdGggfHwgdGhpcy53aW5kIDwgMCAmJiB0LnggKiB0aGlzLl93aWR0aCA8IC10LncpXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBfZHJhdzogZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIGlmICh0aGlzLl9zdGFydFRpbWUpIHtcclxuLy8gICAgICAgICAgICAgICAgIHZhciB0ID0gMiAqIE1hdGguUEk7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLl9jdHguZmlsbFN0eWxlID0gXCIjRkZGXCIsXHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSwgcyA9IDA7IGkgPSB0aGlzLl9zbm93Zmxha2VzW3NdOyArK3MpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IDE7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaS55ID4gLjkgJiYgKGUgPSAxIC0gKGkueSAtIC45KSAvIC4xKSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdHguZ2xvYmFsQWxwaGEgPSBpLm8gKiBlLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5iZWdpblBhdGgoKSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdHguYXJjKGkueCAqIHRoaXMuX3dpZHRoLCBpLnkgKiB0aGlzLl9oZWlnaHQsIGkuZCwgMCwgdCksXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3R4LmNsb3NlUGF0aCgpLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N0eC5maWxsKClcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vIH0oKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvYXBwLmpzIiwiKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblxuXHRpZiAocm9vdCA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignR29vZ2xlLW1hcHMgcGFja2FnZSBjYW4gYmUgdXNlZCBvbmx5IGluIGJyb3dzZXInKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH0gZWxzZSB7XG5cdFx0cm9vdC5Hb29nbGVNYXBzTG9hZGVyID0gZmFjdG9yeSgpO1xuXHR9XG5cbn0pKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogbnVsbCwgZnVuY3Rpb24oKSB7XG5cblxuXHQndXNlIHN0cmljdCc7XG5cblxuXHR2YXIgZ29vZ2xlVmVyc2lvbiA9ICczLjE4JztcblxuXHR2YXIgc2NyaXB0ID0gbnVsbDtcblxuXHR2YXIgZ29vZ2xlID0gbnVsbDtcblxuXHR2YXIgbG9hZGluZyA9IGZhbHNlO1xuXG5cdHZhciBjYWxsYmFja3MgPSBbXTtcblxuXHR2YXIgb25Mb2FkRXZlbnRzID0gW107XG5cblx0dmFyIG9yaWdpbmFsQ3JlYXRlTG9hZGVyTWV0aG9kID0gbnVsbDtcblxuXG5cdHZhciBHb29nbGVNYXBzTG9hZGVyID0ge307XG5cblxuXHRHb29nbGVNYXBzTG9hZGVyLlVSTCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanMnO1xuXG5cdEdvb2dsZU1hcHNMb2FkZXIuS0VZID0gbnVsbDtcblxuXHRHb29nbGVNYXBzTG9hZGVyLkxJQlJBUklFUyA9IFtdO1xuXG5cdEdvb2dsZU1hcHNMb2FkZXIuQ0xJRU5UID0gbnVsbDtcblxuXHRHb29nbGVNYXBzTG9hZGVyLkNIQU5ORUwgPSBudWxsO1xuXG5cdEdvb2dsZU1hcHNMb2FkZXIuTEFOR1VBR0UgPSBudWxsO1xuXG5cdEdvb2dsZU1hcHNMb2FkZXIuUkVHSU9OID0gbnVsbDtcblxuXHRHb29nbGVNYXBzTG9hZGVyLlZFUlNJT04gPSBnb29nbGVWZXJzaW9uO1xuXG5cdEdvb2dsZU1hcHNMb2FkZXIuV0lORE9XX0NBTExCQUNLX05BTUUgPSAnX19nb29nbGVfbWFwc19hcGlfcHJvdmlkZXJfaW5pdGlhbGl6YXRvcl9fJztcblxuXG5cdEdvb2dsZU1hcHNMb2FkZXIuX2dvb2dsZU1vY2tBcGlPYmplY3QgPSB7fTtcblxuXG5cdEdvb2dsZU1hcHNMb2FkZXIubG9hZCA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0aWYgKGdvb2dsZSA9PT0gbnVsbCkge1xuXHRcdFx0aWYgKGxvYWRpbmcgPT09IHRydWUpIHtcblx0XHRcdFx0aWYgKGZuKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goZm4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2FkaW5nID0gdHJ1ZTtcblxuXHRcdFx0XHR3aW5kb3dbR29vZ2xlTWFwc0xvYWRlci5XSU5ET1dfQ0FMTEJBQ0tfTkFNRV0gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZWFkeShmbik7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0R29vZ2xlTWFwc0xvYWRlci5jcmVhdGVMb2FkZXIoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGZuKSB7XG5cdFx0XHRmbihnb29nbGUpO1xuXHRcdH1cblx0fTtcblxuXG5cdEdvb2dsZU1hcHNMb2FkZXIuY3JlYXRlTG9hZGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0Jztcblx0XHRzY3JpcHQuc3JjID0gR29vZ2xlTWFwc0xvYWRlci5jcmVhdGVVcmwoKTtcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0fTtcblxuXG5cdEdvb2dsZU1hcHNMb2FkZXIuaXNMb2FkZWQgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZ29vZ2xlICE9PSBudWxsO1xuXHR9O1xuXG5cblx0R29vZ2xlTWFwc0xvYWRlci5jcmVhdGVVcmwgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdXJsID0gR29vZ2xlTWFwc0xvYWRlci5VUkw7XG5cblx0XHR1cmwgKz0gJz9jYWxsYmFjaz0nICsgR29vZ2xlTWFwc0xvYWRlci5XSU5ET1dfQ0FMTEJBQ0tfTkFNRTtcblxuXHRcdGlmIChHb29nbGVNYXBzTG9hZGVyLktFWSkge1xuXHRcdFx0dXJsICs9ICcma2V5PScgKyBHb29nbGVNYXBzTG9hZGVyLktFWTtcblx0XHR9XG5cblx0XHRpZiAoR29vZ2xlTWFwc0xvYWRlci5MSUJSQVJJRVMubGVuZ3RoID4gMCkge1xuXHRcdFx0dXJsICs9ICcmbGlicmFyaWVzPScgKyBHb29nbGVNYXBzTG9hZGVyLkxJQlJBUklFUy5qb2luKCcsJyk7XG5cdFx0fVxuXG5cdFx0aWYgKEdvb2dsZU1hcHNMb2FkZXIuQ0xJRU5UKSB7XG5cdFx0XHR1cmwgKz0gJyZjbGllbnQ9JyArIEdvb2dsZU1hcHNMb2FkZXIuQ0xJRU5UICsgJyZ2PScgKyBHb29nbGVNYXBzTG9hZGVyLlZFUlNJT047XG5cdFx0fVxuXG5cdFx0aWYgKEdvb2dsZU1hcHNMb2FkZXIuQ0hBTk5FTCkge1xuXHRcdFx0dXJsICs9ICcmY2hhbm5lbD0nICsgR29vZ2xlTWFwc0xvYWRlci5DSEFOTkVMO1xuXHRcdH1cblxuXHRcdGlmIChHb29nbGVNYXBzTG9hZGVyLkxBTkdVQUdFKSB7XG5cdFx0XHR1cmwgKz0gJyZsYW5ndWFnZT0nICsgR29vZ2xlTWFwc0xvYWRlci5MQU5HVUFHRTtcblx0XHR9XG5cblx0XHRpZiAoR29vZ2xlTWFwc0xvYWRlci5SRUdJT04pIHtcblx0XHRcdHVybCArPSAnJnJlZ2lvbj0nICsgR29vZ2xlTWFwc0xvYWRlci5SRUdJT047XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVybDtcblx0fTtcblxuXG5cdEdvb2dsZU1hcHNMb2FkZXIucmVsZWFzZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIHJlbGVhc2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdEdvb2dsZU1hcHNMb2FkZXIuS0VZID0gbnVsbDtcblx0XHRcdEdvb2dsZU1hcHNMb2FkZXIuTElCUkFSSUVTID0gW107XG5cdFx0XHRHb29nbGVNYXBzTG9hZGVyLkNMSUVOVCA9IG51bGw7XG5cdFx0XHRHb29nbGVNYXBzTG9hZGVyLkNIQU5ORUwgPSBudWxsO1xuXHRcdFx0R29vZ2xlTWFwc0xvYWRlci5MQU5HVUFHRSA9IG51bGw7XG5cdFx0XHRHb29nbGVNYXBzTG9hZGVyLlJFR0lPTiA9IG51bGw7XG5cdFx0XHRHb29nbGVNYXBzTG9hZGVyLlZFUlNJT04gPSBnb29nbGVWZXJzaW9uO1xuXG5cdFx0XHRnb29nbGUgPSBudWxsO1xuXHRcdFx0bG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0Y2FsbGJhY2tzID0gW107XG5cdFx0XHRvbkxvYWRFdmVudHMgPSBbXTtcblxuXHRcdFx0aWYgKHR5cGVvZiB3aW5kb3cuZ29vZ2xlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRkZWxldGUgd2luZG93Lmdvb2dsZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiB3aW5kb3dbR29vZ2xlTWFwc0xvYWRlci5XSU5ET1dfQ0FMTEJBQ0tfTkFNRV0gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGRlbGV0ZSB3aW5kb3dbR29vZ2xlTWFwc0xvYWRlci5XSU5ET1dfQ0FMTEJBQ0tfTkFNRV07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvcmlnaW5hbENyZWF0ZUxvYWRlck1ldGhvZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRHb29nbGVNYXBzTG9hZGVyLmNyZWF0ZUxvYWRlciA9IG9yaWdpbmFsQ3JlYXRlTG9hZGVyTWV0aG9kO1xuXHRcdFx0XHRvcmlnaW5hbENyZWF0ZUxvYWRlck1ldGhvZCA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzY3JpcHQgIT09IG51bGwpIHtcblx0XHRcdFx0c2NyaXB0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRcdFx0c2NyaXB0ID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuKSB7XG5cdFx0XHRcdGZuKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGlmIChsb2FkaW5nKSB7XG5cdFx0XHRHb29nbGVNYXBzTG9hZGVyLmxvYWQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlbGVhc2UoKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWxlYXNlKCk7XG5cdFx0fVxuXHR9O1xuXG5cblx0R29vZ2xlTWFwc0xvYWRlci5vbkxvYWQgPSBmdW5jdGlvbihmbikge1xuXHRcdG9uTG9hZEV2ZW50cy5wdXNoKGZuKTtcblx0fTtcblxuXG5cdEdvb2dsZU1hcHNMb2FkZXIubWFrZU1vY2sgPSBmdW5jdGlvbigpIHtcblx0XHRvcmlnaW5hbENyZWF0ZUxvYWRlck1ldGhvZCA9IEdvb2dsZU1hcHNMb2FkZXIuY3JlYXRlTG9hZGVyO1xuXG5cdFx0R29vZ2xlTWFwc0xvYWRlci5jcmVhdGVMb2FkZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy5nb29nbGUgPSBHb29nbGVNYXBzTG9hZGVyLl9nb29nbGVNb2NrQXBpT2JqZWN0O1xuXHRcdFx0d2luZG93W0dvb2dsZU1hcHNMb2FkZXIuV0lORE9XX0NBTExCQUNLX05BTUVdKCk7XG5cdFx0fTtcblx0fTtcblxuXG5cdHZhciByZWFkeSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIGk7XG5cblx0XHRsb2FkaW5nID0gZmFsc2U7XG5cblx0XHRpZiAoZ29vZ2xlID09PSBudWxsKSB7XG5cdFx0XHRnb29nbGUgPSB3aW5kb3cuZ29vZ2xlO1xuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCBvbkxvYWRFdmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG9uTG9hZEV2ZW50c1tpXShnb29nbGUpO1xuXHRcdH1cblxuXHRcdGlmIChmbikge1xuXHRcdFx0Zm4oZ29vZ2xlKTtcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjYWxsYmFja3NbaV0oZ29vZ2xlKTtcblx0XHR9XG5cblx0XHRjYWxsYmFja3MgPSBbXTtcblx0fTtcblxuXG5cdHJldHVybiBHb29nbGVNYXBzTG9hZGVyO1xuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dvb2dsZS1tYXBzL2xpYi9Hb29nbGUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNocmlzdG1hcyA9ICgpID0+IHtcclxuICAgIGxldCB4bWFzID0gbmV3IERhdGUoXCJEZWNlbWJlciAyNSwgMjAxNyAwMDowMTowMFwiKTtcclxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHRpbWVEaWZmID0geG1hcy5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpO1xyXG4gICAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gMTAwMCk7XHJcbiAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgIGxldCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgIGxldCBkYXlzID0gTWF0aC5mbG9vcihob3VycyAvIDI0KTtcclxuICAgIGhvdXJzICU9IDI0O1xyXG4gICAgbWludXRlcyAlPSA2MDtcclxuICAgIHNlY29uZHMgJT0gNjA7XHJcbiAgICBpZiAodGltZURpZmYgPD0gMCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChjaHJpc3RtYXNDb3VudERvd24pO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaHJpc3RtYXMtY291bnRkb3duIC5kYXlzJykuaW5uZXJIVE1MID0gXCJDaHJpc3RtYXMgaXMgaGVyZSFcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hyaXN0bWFzLWNvdW50ZG93biAuaG91cnMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNocmlzdG1hcy1jb3VudGRvd24gLm1pbnV0ZXMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNocmlzdG1hcy1jb3VudGRvd24gLnNlY29uZHMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaHJpc3RtYXMtY291bnRkb3duIC5kYXlzJykuaW5uZXJIVE1MID0gZGF5cyArICc8YnI+IGRheXMgJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hyaXN0bWFzLWNvdW50ZG93biAuaG91cnMnKS5pbm5lckhUTUwgPSBob3VycyArICc8YnI+IGhvdXJzICc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNocmlzdG1hcy1jb3VudGRvd24gLm1pbnV0ZXMnKS5pbm5lckhUTUwgPSBtaW51dGVzICsgJzxicj4gbWludXRlcyAnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaHJpc3RtYXMtY291bnRkb3duIC5zZWNvbmRzJykuaW5uZXJIVE1MID0gc2Vjb25kcyArICc8YnI+IHNlY29uZHMgJztcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNocmlzdG1hc0NvdW50RG93biA9IHNldEludGVydmFsKGNocmlzdG1hcywgMTAwMCk7XHJcblxyXG52YXIgbGlnaHRzID0gKCkgPT4ge1xyXG4gICAgbGV0IGxpZ2h0cyA9IG5ldyBEYXRlKFwiRGVjZW1iZXIgMDEsIDIwMTcgMDA6MDE6MDBcIik7XHJcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIGxldCB0aW1lRGlmZiA9IGxpZ2h0cy5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpO1xyXG4gICAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gMTAwMCk7XHJcbiAgICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgIGxldCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgIGxldCBkYXlzID0gTWF0aC5mbG9vcihob3VycyAvIDI0KTtcclxuICAgIGhvdXJzICU9IDI0O1xyXG4gICAgbWludXRlcyAlPSA2MDtcclxuICAgIHNlY29uZHMgJT0gNjA7XHJcbiAgICBpZiAodGltZURpZmYgPD0gMCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChjaHJpc3RtYXNDb3VudERvd24pO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodHMtY291bnRkb3duIC5kYXlzJykuaW5uZXJIVE1MID0gXCJUaGUgbGlnaHRzIGFyZSBvbiFcIjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRzLWNvdW50ZG93biAuaG91cnMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0cy1jb3VudGRvd24gLm1pbnV0ZXMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0cy1jb3VudGRvd24gLnNlY29uZHMnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodHMtY291bnRkb3duIC5kYXlzJykuaW5uZXJIVE1MID0gZGF5cyArICc8YnI+IGRheXMgJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHRzLWNvdW50ZG93biAuaG91cnMnKS5pbm5lckhUTUwgPSBob3VycyArICc8YnI+IGhvdXJzICc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0cy1jb3VudGRvd24gLm1pbnV0ZXMnKS5pbm5lckhUTUwgPSBtaW51dGVzICsgJzxicj4gbWludXRlcyAnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodHMtY291bnRkb3duIC5zZWNvbmRzJykuaW5uZXJIVE1MID0gc2Vjb25kcyArICc8YnI+IHNlY29uZHMgJztcclxuICAgIH1cclxufVxyXG5cclxudmFyIGxpZ2h0c0NvdW50RG93biA9IHNldEludGVydmFsKGxpZ2h0cywgMTAwMCk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge2NocmlzdG1hc0NvdW50RG93biwgbGlnaHRzQ291bnREb3dufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvY291bnQtZG93bi5qcyJdLCJzb3VyY2VSb290IjoiIn0=