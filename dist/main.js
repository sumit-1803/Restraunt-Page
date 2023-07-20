/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PageLoad.js":
/*!*************************!*\
  !*** ./src/PageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restraurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restraurant */ \"./src/restraurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n// Responsible for making the home page \r\n// appending the image , appending the home line \r\n\r\n\r\nfunction initialLoad(){\r\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_restraurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restraunt-page/./src/PageLoad.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// module for creating the contact page\r\n\r\nconst createcontactpage = () =>{\r\n    const content = document.querySelector('#content');\r\n    const pageContent = document.createElement('div');\r\n    // new div inside main div \r\n    const innerNewDiv = document.createElement('div');\r\n    innerNewDiv.classList.add(\"innerNewDiv\")\r\n    pageContent.appendChild(innerNewDiv);\r\n    pageContent.classList.add('page-content');\r\n\r\n    const form = document.createElement('form');\r\n    form.classList.add('contact-form');\r\n\r\n    const headingInput = document.createElement('input');\r\n    headingInput.type = \"text\";\r\n    headingInput.placeholder = \"Enter Name\";\r\n    form.appendChild(headingInput);\r\n\r\n    const addressInput = document.createElement(\"input\");\r\n    addressInput.type = 'text';\r\n    addressInput.placeholder = \"Enter Email Address\";\r\n    form.appendChild(addressInput);\r\n\r\n    const phoneinput = document.createElement(\"input\");\r\n    addressInput.type = 'text';\r\n    phoneinput.placeholder = \"Enter Phone\";\r\n    form.appendChild(addressInput);\r\n\r\n    const submitButton = document.createElement(\"input\");\r\n    submitButton.classList.add('submitBtn')\r\n    submitButton.type = 'submit';\r\n    submitButton.value = \"Submit\";\r\n    form.appendChild(submitButton);\r\n\r\n    innerNewDiv.appendChild(form);\r\n    pageContent.appendChild(innerNewDiv);   \r\n    content.appendChild(pageContent);  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createcontactpage);\n\n//# sourceURL=webpack://restraunt-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageLoad */ \"./src/PageLoad.js\");\n\r\n\r\n// Laod page\r\n(0,_PageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restraunt-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// module for creating menu Page\r\n\r\nconst createmenupage = () =>{\r\n\r\n    // creating new div \r\n    const menuInnerDiv = document.createElement('div');\r\n    menuInnerDiv.classList.add('menuInnerDiv');\r\n\r\n\r\n\r\n    const content = document.querySelector('#content');\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    const heading = document.createElement('h1');\r\n    heading.textContent=\"Our Menu\";\r\n\r\n    const menulist = document.createElement(\"ul\");\r\n    const menuItem1 = document.createElement(\"li\");\r\n    menuItem1.textContent = \"Pomodoro\";\r\n\r\n\r\n    const menuItem2 = document.createElement(\"li\");\r\n    menuItem2.textContent = \"Bolognesa\";\r\n\r\n\r\n    const menuItem3 = document.createElement(\"li\");\r\n    menuItem3.textContent = \"Alfredo\";\r\n\r\n    menulist.appendChild(menuItem1);\r\n    menulist.appendChild(menuItem2);\r\n    menulist.appendChild(menuItem3);\r\n\r\n    menuInnerDiv.appendChild(heading);\r\n    menuInnerDiv.appendChild(menulist);\r\n    pageContent.appendChild(menuInnerDiv);\r\n    content.appendChild(pageContent);\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createmenupage);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restraunt-page/./src/menu.js?");

/***/ }),

/***/ "./src/restraurant.js":
/*!****************************!*\
  !*** ./src/restraurant.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestrauranthomePage = () => {\r\n    const content = document.querySelector('#content');\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n    \r\n    const navbar = document.querySelector('#navbar');\r\n    // creating new div and appending adjacenly\r\n    const newdiv = document.createElement('div');\r\n    newdiv.setAttribute('id', 'newDiv');\r\n    navbar.insertAdjacentElement('beforebegin',newdiv);\r\n    \r\n    \r\n    // create and append headline element\r\n    const headline = document.createElement('h1');\r\n    headline.classList.add(\"head\")\r\n    headline.textContent=\"Welcome to Restraurant-Website\";\r\n    newdiv.appendChild(headline);\r\n    \r\n    // create and append image element\r\n    const image = document.createElement('img');\r\n    image.src= \"/images/restraurant.jpg\";\r\n    image.style.width='500px';\r\n    image.style.height='590px';\r\n    pageContent.appendChild(image);\r\n\r\n\r\n    // create and append copy element \r\n    const copy = document.createElement('p');\r\n    copy.textContent=\"Welcome to our Restaurant-Website! Discover mouthwatering dishes prepared with love and passion. Our menu offers a delightful range of Pomodoro, Bolognesa, and Alfredo, sure to tantalize your taste buds. Indulge in a culinary journey where exceptional flavors meet a cozy ambiance. Come, dine, and create cherished memories with us!\";\r\n    pageContent.appendChild(copy);\r\n    content.appendChild(pageContent);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestrauranthomePage); \r\n\r\n\r\n\r\n\r\n// <h1>Welcome to Website</h1>\r\n//         <div class=\"left-right\">\r\n//             <img class=\"back-img\" src=\"/images/restraurant.jpg\" alt=\"restraurant\">\r\n//         <p></p>\r\n//         </div>\n\n//# sourceURL=webpack://restraunt-page/./src/restraurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restraurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restraurant */ \"./src/restraurant.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n// responsible for creating the topmost tabs\r\n\r\n\r\n\r\n\r\n\r\nconst createTabs=()=>{\r\n    const content = document.querySelector(\"#navbar\");\r\n    content.classList.add(\"navbar\");\r\n\r\n    // creating 3 divs\r\n    const div1 = document.createElement('div');\r\n    const div2 = document.createElement('div');\r\n    const div3 = document.createElement('div');\r\n\r\n    // set id's for divs \r\n    div1.setAttribute('id','home-btn');\r\n    div2.setAttribute('id','menu-btn');\r\n    div3.setAttribute('id','contact-btn');\r\n\r\n    // set classes for styles \r\n    div1.classList.add('tab');\r\n    div2.classList.add('tab');\r\n    div3.classList.add('tab');\r\n\r\n    // set text content for divs\r\n    div1.textContent=\"Home\";\r\n    div2.textContent=\"Menu\";\r\n    div3.textContent=\"Contact\";\r\n\r\n    // append to content div \r\n    content.appendChild(div1);\r\n    content.appendChild(div2);\r\n    content.appendChild(div3);\r\n\r\n    div1.addEventListener(\"click\",()=>{\r\n        clearContent();\r\n        clearHead();\r\n        (0,_restraurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    })\r\n    div2.addEventListener(\"click\",()=>{\r\n        clearContent();\r\n        clearHead();\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    })\r\n    div3.addEventListener(\"click\",()=>{\r\n        clearContent();\r\n        clearHead();\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    })\r\n}\r\n\r\nfunction clearContent(){\r\n    const content = document.querySelector('#content');\r\n    const pageContent = document.querySelector('.page-content');\r\n    if(pageContent){\r\n        content.removeChild(pageContent);\r\n    }  \r\n}\r\nfunction clearHead(){\r\n    const newdiv = document.querySelector('#newDiv');\r\n    if(newdiv){\r\n        newdiv.remove();\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n//# sourceURL=webpack://restraunt-page/./src/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;