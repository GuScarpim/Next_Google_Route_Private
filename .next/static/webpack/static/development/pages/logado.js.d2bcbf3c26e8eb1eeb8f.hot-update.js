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
      token = _useState[0],
      setToken = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      imageUrl = _useState4[0],
      setImageUrl = _useState4[1];

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('imageUrl');
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (localStorage.getItem('token') === null) next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');else setToken(localStorage.getItem('token'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
    setImageUrl(localStorage.getItem('imageUrl'));
  });
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, token != null && token != '' && token != undefined ? __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: imageUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Hello ", name), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, "Email:"), " ", email), __jsx("div", {
    className: "token",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "Token:"), " ", token)), __jsx("button", {
    className: "btn btn-danger",
    onClick: function onClick() {
      return logout();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Sair")) : '');
}

_s(Logado, "N8/v+G53Adz0ctj08kcnBWTph5c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dhZG8vaW5kZXguanMiXSwibmFtZXMiOlsiTG9nYWRvIiwidXNlU3RhdGUiLCJ0b2tlbiIsInNldFRva2VuIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiaW1hZ2VVcmwiLCJzZXRJbWFnZVVybCIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FJQTs7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsRUFESDtBQUFBLE1BQ3hCQyxLQUR3QjtBQUFBLE1BQ2pCQyxRQURpQjs7QUFBQSxtQkFFUEYsc0RBQVEsRUFGRDtBQUFBLE1BRXhCRyxJQUZ3QjtBQUFBLE1BRWxCQyxPQUZrQjs7QUFBQSxtQkFHTEosc0RBQVEsRUFISDtBQUFBLE1BR3hCSyxLQUh3QjtBQUFBLE1BR2pCQyxRQUhpQjs7QUFBQSxtQkFJQ04sc0RBQVEsRUFKVDtBQUFBLE1BSXhCTyxRQUp3QjtBQUFBLE1BSWRDLFdBSmM7O0FBTy9CLFdBQVNDLE1BQVQsR0FBa0I7QUFDaEJDLGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQUQsZ0JBQVksQ0FBQ0MsVUFBYixDQUF3QixNQUF4QjtBQUNBRCxnQkFBWSxDQUFDQyxVQUFiLENBQXdCLE9BQXhCO0FBQ0FELGdCQUFZLENBQUNDLFVBQWIsQ0FBd0IsVUFBeEI7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRDs7QUFFREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUosWUFBWSxDQUFDSyxPQUFiLENBQXFCLE9BQXJCLE1BQWtDLElBQXRDLEVBQ0VILGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLEVBREYsS0FHRVgsUUFBUSxDQUFDUSxZQUFZLENBQUNLLE9BQWIsQ0FBcUIsT0FBckIsQ0FBRCxDQUFSO0FBQ0ZYLFdBQU8sQ0FBQ00sWUFBWSxDQUFDSyxPQUFiLENBQXFCLE1BQXJCLENBQUQsQ0FBUDtBQUNBVCxZQUFRLENBQUNJLFlBQVksQ0FBQ0ssT0FBYixDQUFxQixPQUFyQixDQUFELENBQVI7QUFDQVAsZUFBVyxDQUFDRSxZQUFZLENBQUNLLE9BQWIsQ0FBcUIsVUFBckIsQ0FBRCxDQUFYO0FBQ0QsR0FSUSxDQUFUO0FBU0EsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSWQsS0FBSyxJQUFJLElBQVQsSUFBaUJBLEtBQUssSUFBSSxFQUExQixJQUFnQ0EsS0FBSyxJQUFJZSxTQUF6QyxHQUNFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFVCxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0osSUFBWCxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTixPQUFxQkUsS0FBckIsQ0FIRixFQUlFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQU4sT0FBcUJKLEtBQXJCLENBREYsQ0FKRixFQU9FO0FBQ0UsYUFBUyxFQUFDLGdCQURaO0FBRUUsV0FBTyxFQUFFO0FBQUEsYUFBTVEsTUFBTSxFQUFaO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsQ0FERixHQVlJLEVBZFIsQ0FERjtBQW1CRDs7R0EzQ3VCVixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dhZG8uanMuZDJiY2JmM2MyNmU4ZWIxZWViOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nYWRvKCkge1xyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKCk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCduYW1lJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZW1haWwnKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpbWFnZVVybCcpO1xyXG4gICAgUm91dGVyLnB1c2goJy8nKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPT09IG51bGwpXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIGVsc2VcclxuICAgICAgc2V0VG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpO1xyXG4gICAgc2V0TmFtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpKTtcclxuICAgIHNldEVtYWlsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpKTtcclxuICAgIHNldEltYWdlVXJsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFnZVVybCcpKTtcclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICB7XHJcbiAgICAgICAgdG9rZW4gIT0gbnVsbCAmJiB0b2tlbiAhPSAnJyAmJiB0b2tlbiAhPSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgPFMuQ2FyZD5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICA8aDI+SGVsbG8ge25hbWV9PC9oMj5cclxuICAgICAgICAgICAgPHNwYW4+PGI+RW1haWw6PC9iPiB7ZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9rZW4nPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjxiPlRva2VuOjwvYj4ge3Rva2VufTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J0biBidG4tZGFuZ2VyJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT5TYWlyPC9idXR0b24+XHJcbiAgICAgICAgICA8L1MuQ2FyZD5cclxuICAgICAgICAgIDogJydcclxuICAgICAgfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=