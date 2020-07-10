webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./pages/styles.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "D:\\Gustavo Scarpim\\Documents\\GitHub\\Next_Google_Route_Private\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Estilo

 //components



 //Components


function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      profilePic = _useState3[0],
      setProfilePic = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loggedin = _useState4[0],
      setLoggedin = _useState4[1];

  var LoginGoogle = function LoginGoogle(response) {
    console.log(response); // response.profileObj.name é a mesma coisa

    var _response$profileObj = response.profileObj,
        name = _response$profileObj.name,
        email = _response$profileObj.email,
        imageUrl = _response$profileObj.imageUrl;
    var access_token = response.tokenObj.access_token;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setLoggedin(true);
    console.log(access_token);
    localStorage.setItem('token', access_token);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('imageUrl', imageUrl);
    if (access_token != null && access_token != '' && access_token != undefined) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/logado');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (localStorage.getItem('token') != null && localStorage.getItem('token') != '' && localStorage.getItem('token') != undefined) next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/logado');
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: '/images/LogoColorido.png',
    alt: 'Logo Gustavo Scarpim',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Fa\xE7a o seu login no Google"), __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_3___default.a, {
    clientId: '629138052194-jbohga7j9eu1q3db3k2q4lpgardrqef3.apps.googleusercontent.com',
    buttonText: "Continuar com o Google",
    onSuccess: LoginGoogle,
    onFailure: LoginGoogle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })));
}

_s(Login, "7LaAPg5/ngfbqhsPsmPW+kbYVxw=");

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicHJvZmlsZVBpYyIsInNldFByb2ZpbGVQaWMiLCJsb2dnZWRpbiIsInNldExvZ2dlZGluIiwiTG9naW5Hb29nbGUiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlT2JqIiwiaW1hZ2VVcmwiLCJhY2Nlc3NfdG9rZW4iLCJ0b2tlbk9iaiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ1bmRlZmluZWQiLCJSb3V0ZXIiLCJwdXNoIiwidXNlRWZmZWN0IiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7Q0FHQTs7QUFDQTtBQUNBO0NBSUE7O0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ05DLHNEQUFRLEVBREY7QUFBQSxNQUN2QkMsSUFEdUI7QUFBQSxNQUNqQkMsT0FEaUI7O0FBQUEsbUJBRUpGLHNEQUFRLEVBRko7QUFBQSxNQUV2QkcsS0FGdUI7QUFBQSxNQUVoQkMsUUFGZ0I7O0FBQUEsbUJBR01KLHNEQUFRLEVBSGQ7QUFBQSxNQUd2QkssVUFIdUI7QUFBQSxNQUdYQyxhQUhXOztBQUFBLG1CQUlFTixzREFBUSxDQUFDLEtBQUQsQ0FKVjtBQUFBLE1BSXZCTyxRQUp1QjtBQUFBLE1BSWJDLFdBSmE7O0FBTTlCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBYztBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVosRUFEZ0MsQ0FFaEM7O0FBRmdDLCtCQUdrQkEsUUFIbEIsQ0FHeEJHLFVBSHdCO0FBQUEsUUFHVlosSUFIVSx3QkFHVkEsSUFIVTtBQUFBLFFBR0pFLEtBSEksd0JBR0pBLEtBSEk7QUFBQSxRQUdHVyxRQUhILHdCQUdHQSxRQUhIO0FBQUEsUUFJWkMsWUFKWSxHQUlPTCxRQUpQLENBSXhCTSxRQUp3QixDQUlaRCxZQUpZO0FBS2hDYixXQUFPLENBQUNELElBQUQsQ0FBUDtBQUNBRyxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBRyxpQkFBYSxDQUFDUSxRQUFELENBQWI7QUFDQU4sZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWUcsWUFBWjtBQUNBRSxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSCxZQUE5QjtBQUNBRSxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCakIsSUFBN0I7QUFDQWdCLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJmLEtBQTlCO0FBQ0FjLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNKLFFBQWpDO0FBRUEsUUFBSUMsWUFBWSxJQUFJLElBQWhCLElBQ0NBLFlBQVksSUFBSSxFQURqQixJQUVDQSxZQUFZLElBQUlJLFNBRnJCLEVBR0VDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxTQUFaO0FBRUgsR0FwQkQ7O0FBc0JBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxZQUFZLENBQUNNLE9BQWIsQ0FBcUIsT0FBckIsS0FBaUMsSUFBakMsSUFDQ04sWUFBWSxDQUFDTSxPQUFiLENBQXFCLE9BQXJCLEtBQWlDLEVBRGxDLElBRUNOLFlBQVksQ0FBQ00sT0FBYixDQUFxQixPQUFyQixLQUFpQ0osU0FGdEMsRUFHRUMsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVo7QUFDSCxHQUxRLENBQVQ7QUFNQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFLDBCQUFWO0FBQXNDLE9BQUcsRUFBRSxzQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FGRixFQUdFLE1BQUMseURBQUQ7QUFDRSxZQUFRLEVBQUUsMEVBRFo7QUFFRSxjQUFVLEVBQUMsd0JBRmI7QUFHRSxhQUFTLEVBQUVaLFdBSGI7QUFJRSxhQUFTLEVBQUVBLFdBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FERjtBQWNEOztHQWhEdUJWLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjJhZGNlMmRiZmEyZDRlYWU1YTFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vRXN0aWxvXHJcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwcm9maWxlUGljLCBzZXRQcm9maWxlUGljXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvZ2dlZGluLCBzZXRMb2dnZWRpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IExvZ2luR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAvLyByZXNwb25zZS5wcm9maWxlT2JqLm5hbWUgw6kgYSBtZXNtYSBjb2lzYVxyXG4gICAgY29uc3QgeyBwcm9maWxlT2JqOiB7IG5hbWUsIGVtYWlsLCBpbWFnZVVybCB9IH0gPSByZXNwb25zZTtcclxuICAgIGNvbnN0IHsgdG9rZW5PYmo6IHsgYWNjZXNzX3Rva2VuIH0gfSA9IHJlc3BvbnNlO1xyXG4gICAgc2V0TmFtZShuYW1lKTtcclxuICAgIHNldEVtYWlsKGVtYWlsKTtcclxuICAgIHNldFByb2ZpbGVQaWMoaW1hZ2VVcmwpO1xyXG4gICAgc2V0TG9nZ2VkaW4odHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhhY2Nlc3NfdG9rZW4pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgYWNjZXNzX3Rva2VuKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCBuYW1lKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgZW1haWwpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW1hZ2VVcmwnLCBpbWFnZVVybClcclxuXHJcbiAgICBpZiAoYWNjZXNzX3Rva2VuICE9IG51bGxcclxuICAgICAgJiYgYWNjZXNzX3Rva2VuICE9ICcnXHJcbiAgICAgICYmIGFjY2Vzc190b2tlbiAhPSB1bmRlZmluZWQpXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9nYWRvJylcclxuXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpICE9IG51bGxcclxuICAgICAgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT0gJydcclxuICAgICAgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT0gdW5kZWZpbmVkKVxyXG4gICAgICBSb3V0ZXIucHVzaCgnL2xvZ2FkbycpXHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPFMuQ2FyZD5cclxuICAgICAgICA8aW1nIHNyYz17Jy9pbWFnZXMvTG9nb0NvbG9yaWRvLnBuZyd9IGFsdD17J0xvZ28gR3VzdGF2byBTY2FycGltJ30gLz5cclxuICAgICAgICA8aDI+RmHDp2EgbyBzZXUgbG9naW4gbm8gR29vZ2xlPC9oMj5cclxuICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgIGNsaWVudElkPXsnNjI5MTM4MDUyMTk0LWpib2hnYTdqOWV1MXEzZGIzazJxNGxwZ2FyZHJxZWYzLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ31cclxuICAgICAgICAgIGJ1dHRvblRleHQ9J0NvbnRpbnVhciBjb20gbyBHb29nbGUnXHJcbiAgICAgICAgICBvblN1Y2Nlc3M9e0xvZ2luR29vZ2xlfVxyXG4gICAgICAgICAgb25GYWlsdXJlPXtMb2dpbkdvb2dsZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1MuQ2FyZD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9