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


var _map = __webpack_require__(1);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollpos = window.scrollY;
var header = document.getElementById('header');
console.log(header);
function add_class_on_scroll() {
    header.classList.add('shrunk');
}
function remove_class_on_scroll() {
    header.classList.remove('shrunk');
}

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos > 0) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initMap = function initMap() {
  var uluru = {
    lat: 36.196843,
    lng: -80.381694
  };
  var map = new google.maps.Map(document.querySelector('.map-container'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};

exports.default = initMap;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTRlZjg1OTdmOTU5YjNlMmM1NTMiLCJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzIiwid2VicGFjazovLy8uL2pzL21hcC5qcyJdLCJuYW1lcyI6WyJzY3JvbGxwb3MiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJhZGRfY2xhc3Nfb25fc2Nyb2xsIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlX2NsYXNzX29uX3Njcm9sbCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0TWFwIiwidWx1cnUiLCJsYXQiLCJsbmciLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwicXVlcnlTZWxlY3RvciIsInpvb20iLCJjZW50ZXIiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBOzs7Ozs7QUFFQSxJQUFJQSxZQUFZQyxPQUFPQyxPQUF2QjtBQUNFLElBQUlDLFNBQVNDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBQyxRQUFRQyxHQUFSLENBQVlKLE1BQVo7QUFDQSxTQUFTSyxtQkFBVCxHQUErQjtBQUMzQkwsV0FBT00sU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsUUFBckI7QUFDSDtBQUNELFNBQVNDLHNCQUFULEdBQWtDO0FBQzlCUixXQUFPTSxTQUFQLENBQWlCRyxNQUFqQixDQUF3QixRQUF4QjtBQUNIOztBQUVIWCxPQUFPWSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFVO0FBQ3RDYixnQkFBWUMsT0FBT0MsT0FBbkI7QUFDQSxRQUFHRixZQUFZLENBQWYsRUFBaUI7QUFDYlE7QUFDSCxLQUZELE1BR0s7QUFDREc7QUFDSDtBQUNKLENBUkgsRTs7Ozs7Ozs7Ozs7O0FDWkEsSUFBSUcsVUFBVSxTQUFWQSxPQUFVLEdBQVk7QUFDeEIsTUFBSUMsUUFBUTtBQUNWQyxTQUFLLFNBREs7QUFFVkMsU0FBSyxDQUFDO0FBRkksR0FBWjtBQUlBLE1BQUlDLE1BQU0sSUFBSUMsT0FBT0MsSUFBUCxDQUFZQyxHQUFoQixDQUFvQmpCLFNBQVNrQixhQUFULENBQXVCLGdCQUF2QixDQUFwQixFQUE4RDtBQUN0RUMsVUFBTSxDQURnRTtBQUV0RUMsWUFBUVQ7QUFGOEQsR0FBOUQsQ0FBVjtBQUlBLE1BQUlVLFNBQVMsSUFBSU4sT0FBT0MsSUFBUCxDQUFZTSxNQUFoQixDQUF1QjtBQUNsQ0MsY0FBVVosS0FEd0I7QUFFbENHLFNBQUtBO0FBRjZCLEdBQXZCLENBQWI7QUFJRCxDQWJEOztrQkFlZUosTyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTRlZjg1OTdmOTU5YjNlMmM1NTMiLCJpbXBvcnQgaW5pdE1hcCBmcm9tICcuL21hcCdcclxuXHJcbnZhciBzY3JvbGxwb3MgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG4gIGNvbnNvbGUubG9nKGhlYWRlcilcclxuICBmdW5jdGlvbiBhZGRfY2xhc3Nfb25fc2Nyb2xsKCkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2hydW5rJyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbW92ZV9jbGFzc19vbl9zY3JvbGwoKSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzaHJ1bmsnKTtcclxuICB9XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuICAgICAgc2Nyb2xscG9zID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgIGlmKHNjcm9sbHBvcyA+IDApe1xyXG4gICAgICAgICAgYWRkX2NsYXNzX29uX3Njcm9sbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgcmVtb3ZlX2NsYXNzX29uX3Njcm9sbCgpO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2FwcC5qcyIsInZhciBpbml0TWFwID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciB1bHVydSA9IHtcclxuICAgIGxhdDogMzYuMTk2ODQzLFxyXG4gICAgbG5nOiAtODAuMzgxNjk0XHJcbiAgfTtcclxuICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFwLWNvbnRhaW5lcicpLCB7XHJcbiAgICB6b29tOiA0LFxyXG4gICAgY2VudGVyOiB1bHVydVxyXG4gIH0pO1xyXG4gIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgIHBvc2l0aW9uOiB1bHVydSxcclxuICAgIG1hcDogbWFwXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRNYXA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21hcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=