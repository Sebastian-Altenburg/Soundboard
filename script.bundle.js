/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sounds.json":
/*!*************************!*\
  !*** ./src/sounds.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"src":"../sounds/water_droplet.mp3","title":"Water"},{"src":"../sounds/beer_can_opening.mp3","title":"Beer Can"},{"src":"../sounds/bell_ring.mp3","title":"Bell"},{"src":"../sounds/branch_break.mp3","title":"Branch"},{"src":"../sounds/button_click_on.mp3","title":"Button Click On"},{"src":"../sounds/button_click.mp3","title":"Button Click"},{"src":"../sounds/button_push.mp3","title":"Button Push"},{"src":"../sounds/button_tiny.mp3","title":"Button Tiny"},{"src":"../sounds/camera_flashing_2.mp3","title":"Camera Flash 2"},{"src":"../sounds/camera_flashing.mp3","title":"Camera Flash"},{"src":"../sounds/cd_tray.mp3","title":"CD Tray"},{"src":"../sounds/computer_error.mp3","title":"Computer Error"},{"src":"../sounds/door_bell.mp3","title":"Door Bell"},{"src":"../sounds/door_bump.mp3","title":"Door Bump"},{"src":"../sounds/glass.mp3","title":"Glass"},{"src":"../sounds/keyboard_desk.mp3","title":"Keyboard Desk"},{"src":"../sounds/light_bulb_breaking.mp3","title":"Light Bulp Breaking"},{"src":"../sounds/metal_plate_2.mp3","title":"Metal Plate 2"},{"src":"../sounds/metal_plate.mp3","title":"Metal Plate"},{"src":"../sounds/pop_cork.mp3","title":"Cork"},{"src":"../sounds/snap.mp3","title":"Snap"},{"src":"../sounds/staple_gun.mp3","title":"Staple Gun"},{"src":"../sounds/tap.mp3","title":"Tap"},{"src":"../sounds/water_droplet_2.mp3","title":"Water Droplet 2"},{"src":"../sounds/water_droplet_3.mp3","title":"Water Droplet 3"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sounds_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sounds.json */ "./src/sounds.json");
/* eslint-disable no-unused-vars */


var addSoundBtnToPage = function addSoundBtnToPage(arrayOrObj) {
  if (Array.isArray(arrayOrObj)) {
    arrayOrObj.forEach(function (obj) {
      var domElements = createAppend();
      domElements[1].innerHTML = "".concat(obj.title);
      domElements[2].setAttribute("src", "".concat(obj.src));
      domElements[0].addEventListener("click", function () {
        domElements[2].play();
      });
    });
  } else {
    // in this case only one object gets passed to the function, coming from the input
    var domElements = createAppend();
    domElements[1].innerHTML = "".concat(arrayOrObj.title);
    domElements[2].setAttribute("src", "".concat(arrayOrObj.src));
    domElements[0].addEventListener("click", function () {
      domElements[2].play();
    });
  }
};

addSoundBtnToPage(_sounds_json__WEBPACK_IMPORTED_MODULE_0__); // Eventlistener of the 3 buttons and the input (header), tugged into this IIFE

var eventListeners = function () {
  var rndSoundBtn = document.querySelector(".rnd-sound-btn").addEventListener("click", function () {
    var numberOfButtons = document.querySelectorAll(".wrapper button");
    var rndNum = Math.floor(Math.random() * numberOfButtons.length + 1);
    var rndSound = document.querySelector(".wrapper button:nth-child(".concat(rndNum, ")")).children[1];
    rndSound.play();
  });
  var rndBtn = document.querySelector(".rnd-btn").addEventListener("click", function () {
    delButtons();
    shuffle(_sounds_json__WEBPACK_IMPORTED_MODULE_0__);
    addSoundBtnToPage(_sounds_json__WEBPACK_IMPORTED_MODULE_0__);
  });
  var ascBtn = document.querySelector(".asc-btn").addEventListener("click", function () {
    delButtons();
    compare(_sounds_json__WEBPACK_IMPORTED_MODULE_0__);
    addSoundBtnToPage(_sounds_json__WEBPACK_IMPORTED_MODULE_0__);
  });
  var textInput = document.querySelector(".submitForm").addEventListener("click", function () {
    var input = document.querySelector(".hd-input");

    for (var i = 0; i < _sounds_json__WEBPACK_IMPORTED_MODULE_0__.length; i += 1) {
      if (_sounds_json__WEBPACK_IMPORTED_MODULE_0__[i].title === input.value) {
        delButtons();
        addSoundBtnToPage(_sounds_json__WEBPACK_IMPORTED_MODULE_0__[i]);
        return;
      }

      delButtons();
      addSoundBtnToPage(_sounds_json__WEBPACK_IMPORTED_MODULE_0__);
    }
  });
}();

var delButtons = function delButtons() {
  var wrapper = document.querySelector(".wrapper");

  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.lastChild);
  }
};

var compare = function compare(array) {
  array.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });
}; // Fisher-Yates-Algorithm


var shuffle = function shuffle(array) {
  var arraz = array;
  var l = arraz.length;
  var temp;
  var i;

  while (l) {
    i = Math.floor(Math.random() * l--);
    temp = arraz[l];
    arraz[l] = arraz[i];
    arraz[i] = temp;
  }

  return arraz;
};

function createAppend() {
  var wrapper = document.querySelector(".wrapper");
  var button = document.createElement("button");
  var player = document.createElement("audio");
  var title = document.createElement("h3");
  button.appendChild(title);
  button.appendChild(player);
  wrapper.appendChild(button);
  return [button, title, player];
}
})();

/******/ })()
;
//# sourceMappingURL=script.bundle.js.map