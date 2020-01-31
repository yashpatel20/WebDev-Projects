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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderContact(renderHook) {\n    renderHook.innerHTML = ``;\n    const contact = `<section class=\"contact\">\n    <p class=\"contact__paragraph\">Contact us!</p>\n    <p class=\"contact__text\">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente\n      dicta sint optio obcaecati rem dolor ad provident quisquam tenetur\n      illum at accusantium consequatur incidunt, maiores, nobis magnam\n      voluptatem et iusto?Facilis saepe in, soluta exercitationem incidunt\n      praesentium ullam repellendus provident id eligendi magnam, modi\n      harum, perspiciatis omnis quas possimus accusamus! Delectus harum\n      maxime aliquid ratione vel libero voluptatibus blanditiis magni?\n    </p>\n  </section>`;\n    renderHook.innerHTML = contact;\n  };\n  \n/* harmony default export */ __webpack_exports__[\"default\"] = (renderContact); \n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _recommended_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recommended.js */ \"./src/recommended.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nconst renderHook = document.querySelector('.render-hook');\n\nconst menuBtn = document.querySelector('#Menu-tab');\nconst recommendedBtn = document.querySelector('#Recommended-tab');\nconst contactBtn = document.querySelector('#Contact-tab');\n\nmenuBtn.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind(undefined, renderHook));\n//recommendedBtn.addEventListener('click', renderRecommended.bind(this, renderHook));\ncontactBtn.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(undefined, renderHook));\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderMenu(renderHook) {\n    renderHook.innerHTML = ``;\n    console.log('working');\n    console.log(renderHook);\n    const menu = `<section class=\"menu\">\n        <h1 class=\"menu__title\">The Menu</p>\n        <div class=\"menu__dishes\">\n          <div class=\"menu__dish\">\n            <p class=\"menu__name\">Volluplate cillum fugiat</p>\n            <p class=\"menu__price\">$50</p>\n            <p class=\"menu__description\">Cheese, tomato, mushrooms, onions</p>\n          </div>\n          <div class=\"menu__dish\">\n            <p class=\"menu__name\">Metus varius laoreet</p>\n            <p class=\"menu__price\">$17</p>\n            <p class=\"menu__description\">Chicken, mozzarella cheese, onions</p>\n          </div>\n          <div class=\"menu__dish\">\n            <p class=\"menu__name\">Volluplate cillum fugiat</p>\n            <p class=\"menu__price\">$50</p>\n            <p class=\"menu__description\">Cheese, tomato, mushrooms, onions</p>\n          </div>\n          <div class=\"menu__dish\">\n            <p class=\"menu__name\">Metus varius laoreet</p>\n            <p class=\"menu__price\">$17</p>\n            <p class=\"menu__description\">Chicken, mozzarella cheese, onions</p>\n          </div>\n          <div class=\"menu__dish\">\n            <p class=\"menu__name\">Volluplate cillum fugiat</p>\n            <p class=\"menu__price\">$50</p>\n            <p class=\"menu__description\">Cheese, tomato, mushrooms, onions</p>\n          </div>\n          <div class=\"menu__dish\">\n            <p class=\"menu__name\">Metus varius laoreet</p>\n            <p class=\"menu__price\">$17</p>\n            <p class=\"menu__description\">Chicken, mozzarella cheese, onions</p>\n          </div>\n          <div class=\"menu__dish\">\n            <p class=\"menu__name\">Volluplate cillum fugiat</p>\n            <p class=\"menu__price\">$50</p>\n            <p class=\"menu__description\">Cheese, tomato, mushrooms, onions</p>\n          </div>\n          <div class=\"menu__dish\">\n            <p class=\"menu__name\">Metus varius laoreet</p>\n            <p class=\"menu__price\">$17</p>\n            <p class=\"menu__description\">Chicken, mozzarella cheese, onions</p>\n          </div>\n        </div>\n      </section>`;\n    renderHook.innerHTML = menu;\n  };\n\n  /* harmony default export */ __webpack_exports__[\"default\"] = (renderMenu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/recommended.js":
/*!****************************!*\
  !*** ./src/recommended.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction renderRecommended(renderHook) {\n    renderHook.innerHTML = ``;\n    const recommended = `<section class=\"featured\">\n          <p class=\"featured__paragraph\">Featured dishes</p>\n          <div class=\"featured__tabs\">\n            <div class=\"featured__tab\">\n              <div class=\"featured__img-container\">\n                <img src=\"./images/first.png\" alt=\"\" class=\"featured__img\" />\n              </div>\n              <div class=\"featured__text-container\">\n                <p class=\"featured__name\">Fugiat nulia sint</p>\n                <p class=\"featured__price\">$30</p>\n              </div>\n            </div>\n            <div class=\"featured__tab\">\n              <div class=\"featured__img-container\">\n                <img src=\"./images/second.png\" alt=\"\" class=\"featured__img\" />\n              </div>\n              <div class=\"featured__text-container\">\n                <p class=\"featured__name\">Fugiat nulia sint</p>\n                <p class=\"featured__price\">$30</p>\n              </div>\n            </div>\n            <div class=\"featured__tab\">\n              <div class=\"featured__img-container\">\n                <img src=\"./images/third.png\" alt=\"\" class=\"featured__img\" />\n              </div>\n              <div class=\"featured__text-container\">\n                <p class=\"featured__name\">Fugiat nulia sint</p>\n                <p class=\"featured__price\">$30</p>\n              </div>\n            </div>\n            <div class=\"featured__tab\">\n              <div class=\"featured__img-container\">\n                <img src=\"./images/fourth.png\" alt=\"\" class=\"featured__img\" />\n              </div>\n              <div class=\"featured__text-container\">\n                <p class=\"featured__name\">Fugiat nulia sint</p>\n                <p class=\"featured__price\">$30</p>\n              </div>\n            </div>\n          </div>\n        </section>`;\n    renderHook.innerHTML = recommended;\n  };\n\n  /* harmony default export */ __webpack_exports__[\"default\"] = (renderRecommended);\n\n//# sourceURL=webpack:///./src/recommended.js?");

/***/ })

/******/ });