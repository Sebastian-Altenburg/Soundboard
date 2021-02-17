/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../styles/header.css */ "./node_modules/css-loader/dist/cjs.js!./styles/header.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_header_css__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n}\n\n.fullContainer {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n\n    width: 70%;\n    height: 100%;\n\n    background-color: rgb(240, 240, 240);\n}\n\n.wrapper {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    grid-gap: 20px;\n\n    margin: 5px 20px;\n    height: 80%;\n}\n.wrapper button {\n    border: 1px solid rgb(153, 153, 153);\n    border-radius: 4px;\n    height: 140px;\n}\n.wrapper button h3 {\n    font-weight: 700;\n    color: rgb(255, 255, 255);\n}\n.wrapper button:nth-child(odd) {\n    background-color: rgb(165, 107, 0);\n}\n.wrapper button:nth-child(even) {\n    background-color: rgb(0, 170, 170);\n}\n\n@media (max-width: 1400px) {\n    .fullContainer {\n        width: 90%;\n    }\n}\n@media (max-width: 1200px) {\n    .fullContainer {\n        width: 100%;\n    }\n    .wrapper {\n        grid-gap: 15px;\n    }\n}\n@media (max-width: 900px) {\n    .wrapper {\n        grid-template-columns: repeat(3, 1fr);\n        grid-template-rows: repeat(5, 1fr);\n        grid-gap: 10px;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;;IAEI,YAAY;IACZ,WAAW;IACX,SAAS;IACT,yCAAyC;IACzC,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,2BAA2B;;IAE3B,UAAU;IACV,YAAY;;IAEZ,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,cAAc;;IAEd,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,yBAAyB;AAC7B;AACA;IACI,kCAAkC;AACtC;AACA;IACI,kCAAkC;AACtC;;AAEA;IACI;QACI,UAAU;IACd;AACJ;AACA;IACI;QACI,WAAW;IACf;IACA;QACI,cAAc;IAClB;AACJ;AACA;IACI;QACI,qCAAqC;QACrC,kCAAkC;QAClC,cAAc;IAClB;AACJ","sourcesContent":["@import \"../styles/header.css\";\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n}\n\n.fullContainer {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n\n    width: 70%;\n    height: 100%;\n\n    background-color: rgb(240, 240, 240);\n}\n\n.wrapper {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    grid-gap: 20px;\n\n    margin: 5px 20px;\n    height: 80%;\n}\n.wrapper button {\n    border: 1px solid rgb(153, 153, 153);\n    border-radius: 4px;\n    height: 140px;\n}\n.wrapper button h3 {\n    font-weight: 700;\n    color: rgb(255, 255, 255);\n}\n.wrapper button:nth-child(odd) {\n    background-color: rgb(165, 107, 0);\n}\n.wrapper button:nth-child(even) {\n    background-color: rgb(0, 170, 170);\n}\n\n@media (max-width: 1400px) {\n    .fullContainer {\n        width: 90%;\n    }\n}\n@media (max-width: 1200px) {\n    .fullContainer {\n        width: 100%;\n    }\n    .wrapper {\n        grid-gap: 15px;\n    }\n}\n@media (max-width: 900px) {\n    .wrapper {\n        grid-template-columns: repeat(3, 1fr);\n        grid-template-rows: repeat(5, 1fr);\n        grid-gap: 10px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/header.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/header.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n    width: 100%;\n    margin-bottom: 15px;\n}\n.top-header h1 {\n    font-size: 2.5em;\n    font-weight: 300;\n    margin-left: 5px;\n    color: rgb(0, 170, 170);\n}\n.sub-header {\n    display: grid;\n    grid-template-columns: 50% 1fr 1fr 1fr;\n\n    background-color: gray;\n    height: 40px;\n}\n.rnd-sound-btn {\n    align-self: center;\n    justify-self: left;\n    margin-left: 7px;\n}\n.rnd-btn {\n    align-self: center;\n    justify-self: right;\n}\n.asc-btn {\n    align-self: center;\n    justify-self: right;\n}\n.hd-form {\n    align-self: center;\n    justify-self: right;\n    margin-right: 10px;\n}\n\n.sub-header > button {\n    font-size: 1.4em;\n    background-color: gray;\n    border: none;\n    color: white;\n    font-size: 1em;\n    height: 25px;\n}\n.sub-header > button:focus {\n    border: 1px white solid;\n    border-radius: 4px;\n    outline: none;\n}\n\n.hd-input {\n    width: 180px;\n    height: 20px;\n}\n.hd-input:focus {\n    outline: none;\n}\n", "",{"version":3,"sources":["webpack://./styles/header.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sCAAsC;;IAEtC,sBAAsB;IACtB,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;AACjB","sourcesContent":[".header {\n    width: 100%;\n    margin-bottom: 15px;\n}\n.top-header h1 {\n    font-size: 2.5em;\n    font-weight: 300;\n    margin-left: 5px;\n    color: rgb(0, 170, 170);\n}\n.sub-header {\n    display: grid;\n    grid-template-columns: 50% 1fr 1fr 1fr;\n\n    background-color: gray;\n    height: 40px;\n}\n.rnd-sound-btn {\n    align-self: center;\n    justify-self: left;\n    margin-left: 7px;\n}\n.rnd-btn {\n    align-self: center;\n    justify-self: right;\n}\n.asc-btn {\n    align-self: center;\n    justify-self: right;\n}\n.hd-form {\n    align-self: center;\n    justify-self: right;\n    margin-right: 10px;\n}\n\n.sub-header > button {\n    font-size: 1.4em;\n    background-color: gray;\n    border: none;\n    color: white;\n    font-size: 1em;\n    height: 25px;\n}\n.sub-header > button:focus {\n    border: 1px white solid;\n    border-radius: 4px;\n    outline: none;\n}\n\n.hd-input {\n    width: 180px;\n    height: 20px;\n}\n.hd-input:focus {\n    outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/sounds-gh.json":
/*!****************************!*\
  !*** ./src/sounds-gh.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/water_droplet.mp3","title":"Water"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/beer_can_opening.mp3","title":"Beer Can"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/bell_ring.mp3","title":"Bell"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/branch_break.mp3","title":"Branch"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/button_click_on.mp3","title":"Button Click On"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/button_click.mp3","title":"Button Click"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/button_push.mp3","title":"Button Push"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/button_tiny.mp3","title":"Button Tiny"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/camera_flashing_2.mp3","title":"Camera Flash 2"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/camera_flashing.mp3","title":"Camera Flash"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/cd_tray.mp3","title":"CD Tray"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/computer_error.mp3","title":"Computer Error"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/door_bell.mp3","title":"Door Bell"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/door_bump.mp3","title":"Door Bump"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/glass.mp3","title":"Glass"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/keyboard_desk.mp3","title":"Keyboard Desk"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/light_bulb_breaking.mp3","title":"Light Bulp Breaking"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/metal_plate_2.mp3","title":"Metal Plate 2"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/metal_plate.mp3","title":"Metal Plate"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/pop_cork.mp3","title":"Cork"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/snap.mp3","title":"Snap"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/staple_gun.mp3","title":"Staple Gun"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/tap.mp3","title":"Tap"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/water_droplet_2.mp3","title":"Water Droplet 2"},{"src":"https://raw.githubusercontent.com/Sebastian-Altenburg/Soundboard/master/sounds/water_droplet_3.mp3","title":"Water Droplet 3"}]');

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds-gh.json */ "./src/sounds-gh.json");
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

addSoundBtnToPage(_sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__); // Eventlistener of the 3 buttons and the input (header), tugged into this IIFE

var eventListeners = function () {
  var rndSoundBtn = document.querySelector(".rnd-sound-btn").addEventListener("click", function () {
    var numberOfButtons = document.querySelectorAll(".wrapper button");
    var rndNum = Math.floor(Math.random() * numberOfButtons.length + 1);
    var rndSound = document.querySelector(".wrapper button:nth-child(".concat(rndNum, ")")).children[1];
    rndSound.play();
  });
  var rndBtn = document.querySelector(".rnd-btn").addEventListener("click", function () {
    delButtons();
    shuffle(_sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__);
    addSoundBtnToPage(_sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__);
  });
  var ascBtn = document.querySelector(".asc-btn").addEventListener("click", function () {
    delButtons();
    compare(_sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__);
    addSoundBtnToPage(_sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__);
  });
  var textInput = document.querySelector(".submitForm").addEventListener("click", function () {
    var input = document.querySelector(".hd-input");

    for (var i = 0; i < _sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__.length; i += 1) {
      if (_sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__[i].title === input.value) {
        delButtons();
        addSoundBtnToPage(_sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__[i]);
        return;
      }

      delButtons();
      addSoundBtnToPage(_sounds_gh_json__WEBPACK_IMPORTED_MODULE_1__);
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