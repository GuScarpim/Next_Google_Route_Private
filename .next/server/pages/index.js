module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"siteTitle\", function() { return siteTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/styles.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/guscarpim/projetos/Next_Google_Route_Private/components/layout.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst siteTitle = 'Next_Google';\nfunction Layout({\n  children\n}) {\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, siteTitle), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",\n    integrity: \"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",\n    crossorigin: \"anonymous\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  })), children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8wOWE3Il0sIm5hbWVzIjpbInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ08sTUFBTUEsU0FBUyxHQUFHLGFBQWxCO0FBRVEsU0FBU0MsTUFBVCxDQUFnQjtBQUFFQztBQUFGLENBQWhCLEVBQThCO0FBQzNDLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRixTQUFSLENBREYsRUFFRTtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsUUFBSSxFQUFDLHVFQUZQO0FBR0UsYUFBUyxFQUFDLHlFQUhaO0FBSUUsZUFBVyxFQUFDLFdBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFXR0UsUUFYSCxDQURGO0FBZUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnTmV4dF9Hb29nbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUy5Db250YWluZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./components/styles.js":
/*!******************************!*\
  !*** ./components/styles.js ***!
  \******************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  width: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 20px 0;\n  \n* {\n\tfont-family: \"Roboto\", sans-serif;\n}\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy5qcz9kMGNmIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSwgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMHZ3O1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMjBweCAwO1xuICBcbioge1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/styles.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ \"react-google-login\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\nvar _jsxFileName = \"/home/guscarpim/projetos/Next_Google_Route_Private/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //Estilo\n\n //components\n\n\n\n //Components\n\n\nfunction Login() {\n  const {\n    0: name,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const {\n    0: profilePic,\n    1: setProfilePic\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  const {\n    0: loggedin,\n    1: setLoggedin\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const LoginGoogle = response => {\n    console.log(response); // response.profileObj.name é a mesma coisa\n\n    const {\n      profileObj: {\n        name,\n        email,\n        imageUrl\n      }\n    } = response;\n    const {\n      tokenObj: {\n        access_token\n      }\n    } = response;\n    setName(name);\n    setEmail(email);\n    setProfilePic(imageUrl);\n    setLoggedin(true);\n    console.log(access_token);\n    localStorage.setItem('token', access_token);\n    localStorage.setItem('name', name);\n    localStorage.setItem('email', email);\n    localStorage.setItem('imageUrl', imageUrl);\n    if (access_token != null && access_token != '' && access_token != undefined) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/logado');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (localStorage.getItem('token') != null && localStorage.getItem('token') != '' && localStorage.getItem('token') != undefined) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/logado');\n  });\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: '/images/LogoColorido.png',\n    alt: 'Logo Gustavo Scarpim',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"Fa\\xE7a o seu login com o Google\"), __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    clientId: '629138052194-jbohga7j9eu1q3db3k2q4lpgardrqef3.apps.googleusercontent.com',\n    buttonText: \"Continuar com o Google\",\n    onSuccess: LoginGoogle,\n    onFailure: LoginGoogle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxvZ2luIiwibmFtZSIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJwcm9maWxlUGljIiwic2V0UHJvZmlsZVBpYyIsImxvZ2dlZGluIiwic2V0TG9nZ2VkaW4iLCJMb2dpbkdvb2dsZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInByb2ZpbGVPYmoiLCJpbWFnZVVybCIsInRva2VuT2JqIiwiYWNjZXNzX3Rva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVuZGVmaW5lZCIsIlJvdXRlciIsInB1c2giLCJ1c2VFZmZlY3QiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztDQUVBOztDQUdBOztBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFDOUIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxFQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsc0RBQVEsRUFBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJKLHNEQUFRLEVBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTixzREFBUSxDQUFDLEtBQUQsQ0FBeEM7O0FBRUEsUUFBTU8sV0FBVyxHQUFJQyxRQUFELElBQWM7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaLEVBRGdDLENBRWhDOztBQUNBLFVBQU07QUFBRUcsZ0JBQVUsRUFBRTtBQUFFYixZQUFGO0FBQVFHLGFBQVI7QUFBZVc7QUFBZjtBQUFkLFFBQTRDSixRQUFsRDtBQUNBLFVBQU07QUFBRUssY0FBUSxFQUFFO0FBQUVDO0FBQUY7QUFBWixRQUFpQ04sUUFBdkM7QUFDQVQsV0FBTyxDQUFDRCxJQUFELENBQVA7QUFDQUksWUFBUSxDQUFDRCxLQUFELENBQVI7QUFDQUcsaUJBQWEsQ0FBQ1EsUUFBRCxDQUFiO0FBQ0FOLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlJLFlBQVo7QUFDQUMsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QkYsWUFBOUI7QUFDQUMsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QmxCLElBQTdCO0FBQ0FpQixnQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCZixLQUE5QjtBQUNBYyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDSixRQUFqQztBQUVBLFFBQUlFLFlBQVksSUFBSSxJQUFoQixJQUNDQSxZQUFZLElBQUksRUFEakIsSUFFQ0EsWUFBWSxJQUFJRyxTQUZyQixFQUdFQyxrREFBTSxDQUFDQyxJQUFQLENBQVksU0FBWjtBQUVILEdBcEJEOztBQXNCQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUwsWUFBWSxDQUFDTSxPQUFiLENBQXFCLE9BQXJCLEtBQWlDLElBQWpDLElBQ0NOLFlBQVksQ0FBQ00sT0FBYixDQUFxQixPQUFyQixLQUFpQyxFQURsQyxJQUVDTixZQUFZLENBQUNNLE9BQWIsQ0FBcUIsT0FBckIsS0FBaUNKLFNBRnRDLEVBR0VDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaO0FBQ0gsR0FMUSxDQUFUO0FBTUEsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRSwwQkFBVjtBQUFzQyxPQUFHLEVBQUUsc0JBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBRkYsRUFHRSxNQUFDLHlEQUFEO0FBQ0UsWUFBUSxFQUFFLDBFQURaO0FBRUUsY0FBVSxFQUFDLHdCQUZiO0FBR0UsYUFBUyxFQUFFWixXQUhiO0FBSUUsYUFBUyxFQUFFQSxXQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLENBREY7QUFjRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbi8vRXN0aWxvXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcblxuLy9jb21wb25lbnRzXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG5cbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwcm9maWxlUGljLCBzZXRQcm9maWxlUGljXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsb2dnZWRpbiwgc2V0TG9nZ2VkaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IExvZ2luR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIC8vIHJlc3BvbnNlLnByb2ZpbGVPYmoubmFtZSDDqSBhIG1lc21hIGNvaXNhXG4gICAgY29uc3QgeyBwcm9maWxlT2JqOiB7IG5hbWUsIGVtYWlsLCBpbWFnZVVybCB9IH0gPSByZXNwb25zZTtcbiAgICBjb25zdCB7IHRva2VuT2JqOiB7IGFjY2Vzc190b2tlbiB9IH0gPSByZXNwb25zZTtcbiAgICBzZXROYW1lKG5hbWUpO1xuICAgIHNldEVtYWlsKGVtYWlsKTtcbiAgICBzZXRQcm9maWxlUGljKGltYWdlVXJsKTtcbiAgICBzZXRMb2dnZWRpbih0cnVlKTtcbiAgICBjb25zb2xlLmxvZyhhY2Nlc3NfdG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGFjY2Vzc190b2tlbilcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIG5hbWUpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgZW1haWwpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ltYWdlVXJsJywgaW1hZ2VVcmwpXG5cbiAgICBpZiAoYWNjZXNzX3Rva2VuICE9IG51bGxcbiAgICAgICYmIGFjY2Vzc190b2tlbiAhPSAnJ1xuICAgICAgJiYgYWNjZXNzX3Rva2VuICE9IHVuZGVmaW5lZClcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9nYWRvJylcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT0gbnVsbFxuICAgICAgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT0gJydcbiAgICAgICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9IHVuZGVmaW5lZClcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9nYWRvJylcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFMuQ2FyZD5cbiAgICAgICAgPGltZyBzcmM9eycvaW1hZ2VzL0xvZ29Db2xvcmlkby5wbmcnfSBhbHQ9eydMb2dvIEd1c3Rhdm8gU2NhcnBpbSd9IC8+XG4gICAgICAgIDxoMj5GYcOnYSBvIHNldSBsb2dpbiBjb20gbyBHb29nbGU8L2gyPlxuICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICBjbGllbnRJZD17JzYyOTEzODA1MjE5NC1qYm9oZ2E3ajlldTFxM2RiM2sycTRscGdhcmRycWVmMy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSd9XG4gICAgICAgICAgYnV0dG9uVGV4dD0nQ29udGludWFyIGNvbSBvIEdvb2dsZSdcbiAgICAgICAgICBvblN1Y2Nlc3M9e0xvZ2luR29vZ2xlfVxuICAgICAgICAgIG9uRmFpbHVyZT17TG9naW5Hb29nbGV9XG4gICAgICAgIC8+XG4gICAgICA8L1MuQ2FyZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/styles.js":
/*!*************************!*\
  !*** ./pages/styles.js ***!
  \*************************/
/*! exports provided: Globals, Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Globals\", function() { return Globals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Globals = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  background-color: rgba(17, 27, 168, 0.589);\n`;\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  width: 50ch;\n  height: 45ch;\n  border-radius: 5px;\n  background-color: #FFF;\n  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);\n  transition: box-shadow 0.5s;\n  will-change: transform;\n  border: 15px solid white;\n\n  &:hover{\n    box-shadow: 0px 10px 30px -5px rgba(0, 20, 10, 1);\n  }\n\n  img {\n    width: 250px;\n    position: relative;\n    margin-bottom: 30px;\n    margin-top: -70px;\n  }\n\n  h2{\n    margin-bottom: 40px;\n  }\n\n  button {\n    width: 300px;\n    text-align: center;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZXMuanM/YWRhMSJdLCJuYW1lcyI6WyJHbG9iYWxzIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsT0FBTyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQ2xDO0FBQ0EsQ0FGTztBQUlBLE1BQU1DLElBQUksR0FBR0Ysd0RBQU0sQ0FBQ0MsR0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxDTyIsImZpbGUiOiIuL3BhZ2VzL3N0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgR2xvYmFscyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsIDI3LCAxNjgsIDAuNTg5KTtcbmBcblxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTBjaDtcbiAgaGVpZ2h0OiA0NWNoO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHdoaXRlO1xuXG4gICY6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCAtNXB4IHJnYmEoMCwgMjAsIDEwLCAxKTtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICB9XG5cbiAgaDJ7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/styles.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-google-login\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbG9naW5cIj9kZDQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWdvb2dsZS1sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1sb2dpblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-google-login\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });