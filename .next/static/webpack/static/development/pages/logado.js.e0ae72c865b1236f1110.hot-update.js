webpackHotUpdate("static\\development\\pages\\logado.js",{

/***/ "./pages/logado/index.js":
/*!*******************************!*\
  !*** ./pages/logado/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logado; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./pages/logado/styles.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
var _jsxFileName = "D:\\Gustavo Scarpim\\Documents\\GitHub\\Next_Google_Route_Private\\pages\\logado\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //Components


function Logado() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      imageUrl = _useState3[0],
      setImageUrl = _useState3[1];

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('imageUrl');
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (localStorage.getItem('token') === null) next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');else setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
    setImageUrl(localStorage.getItem('imageUrl'));
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, token != null && token != '' && token != undefined ? __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: imageUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Hello ", name), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, "Email:"), " ", email), __jsx("button", {
    className: "btn btn-danger",
    onClick: function onClick() {
      return logout();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Sair")) : '');
}

_s(Logado, "dkFDMn6R6y6N5kzy4ZKlv1FI7Qk=");

_c = Logado;

var _c;

$RefreshReg$(_c, "Logado");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dhZG8vaW5kZXguanMiXSwibmFtZXMiOlsiTG9nYWRvIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlJvdXRlciIsInB1c2giLCJ1c2VFZmZlY3QiLCJnZXRJdGVtIiwidG9rZW4iLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7O0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLEVBREQ7QUFBQSxNQUN4QkMsSUFEd0I7QUFBQSxNQUNsQkMsT0FEa0I7O0FBQUEsbUJBRUxGLHNEQUFRLEVBRkg7QUFBQSxNQUV4QkcsS0FGd0I7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR0NKLHNEQUFRLEVBSFQ7QUFBQSxNQUd4QkssUUFId0I7QUFBQSxNQUdkQyxXQUhjOztBQU0vQixXQUFTQyxNQUFULEdBQWtCO0FBQ2hCQyxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLE9BQXhCO0FBQ0FELGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsTUFBeEI7QUFDQUQsZ0JBQVksQ0FBQ0MsVUFBYixDQUF3QixPQUF4QjtBQUNBRCxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLFVBQXhCO0FBQ0FDLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7O0FBRURDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlKLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixPQUFyQixNQUFrQyxJQUF0QyxFQUNFSCxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixFQURGLEtBR0FULE9BQU8sQ0FBQ00sWUFBWSxDQUFDSyxPQUFiLENBQXFCLE1BQXJCLENBQUQsQ0FBUDtBQUNBVCxZQUFRLENBQUNJLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixPQUFyQixDQUFELENBQVI7QUFDQVAsZUFBVyxDQUFDRSxZQUFZLENBQUNLLE9BQWIsQ0FBcUIsVUFBckIsQ0FBRCxDQUFYO0FBQ0QsR0FQUSxDQUFUO0FBUUEsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUMsS0FBSyxJQUFJLElBQVQsSUFBaUJBLEtBQUssSUFBSSxFQUExQixJQUFnQ0EsS0FBSyxJQUFJQyxTQUF6QyxHQUNFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFVixRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0osSUFBWCxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTixPQUFxQkUsS0FBckIsQ0FIRixFQUlFO0FBQ0UsYUFBUyxFQUFDLGdCQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTUksTUFBTSxFQUFaO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsQ0FERixHQVNJLEVBWFIsQ0FERjtBQWdCRDs7R0F0Q3VCUixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dhZG8uanMuZTBhZTcyYzg2NWIxMjM2ZjExMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nYWRvKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGUoKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ25hbWUnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdlbWFpbCcpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ltYWdlVXJsJyk7XHJcbiAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA9PT0gbnVsbClcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgZWxzZVxyXG4gICAgc2V0TmFtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpKTtcclxuICAgIHNldEVtYWlsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpKTtcclxuICAgIHNldEltYWdlVXJsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFnZVVybCcpKTtcclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICB7XHJcbiAgICAgICAgdG9rZW4gIT0gbnVsbCAmJiB0b2tlbiAhPSAnJyAmJiB0b2tlbiAhPSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgPFMuQ2FyZD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICA8aDI+SGVsbG8ge25hbWV9PC9oMj5cclxuICAgICAgICAgICAgPHNwYW4+PGI+RW1haWw6PC9iPiB7ZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLWRhbmdlcidcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX0+U2FpcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9TLkNhcmQ+XHJcbiAgICAgICAgICA6ICcnXHJcbiAgICAgIH1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9