"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./app/hooks/useUserStatuses.ts":
/*!**************************************!*\
  !*** ./app/hooks/useUserStatuses.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/socket */ \"./app/utils/socket.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar useUserStatuses = function() {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"userOnline\", function() {});\n        return function() {\n            _utils_socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].off(\"userOnline\");\n        };\n    }, []);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUserStatuses);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaG9va3MvdXNlVXNlclN0YXR1c2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBb0M7QUFDSjtBQUVoQyxJQUFNRSxlQUFlLEdBQUcsV0FBTTtJQUM1QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBRWRELHdEQUFTLENBQUMsWUFBWSxFQUFFLFdBQU0sRUFFN0IsQ0FBQztRQUVGLE9BQU8sV0FBTTtZQUNYQSx5REFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFCLENBQUM7S0FDSCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBRVI7QUFFRCwrREFBZUUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9ob29rcy91c2VVc2VyU3RhdHVzZXMudHM/ZjhkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0IGZyb20gJ0AvdXRpbHMvc29ja2V0JztcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZVVzZXJTdGF0dXNlcyA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgIHNvY2tldC5vbigndXNlck9ubGluZScsICgpID0+IHtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5vZmYoJ3VzZXJPbmxpbmUnKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVVzZXJTdGF0dXNlczsiXSwibmFtZXMiOlsic29ja2V0IiwidXNlRWZmZWN0IiwidXNlVXNlclN0YXR1c2VzIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/hooks/useUserStatuses.ts\n"));

/***/ })

});