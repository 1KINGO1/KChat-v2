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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/socket */ \"./app/utils/socket.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_slices_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/slices/cache */ \"./app/store/slices/cache.ts\");\n\n\n\n\nvar useUserStatuses = function() {\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _utils_socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"userOnline\", function() {});\n        _utils_socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"onlineUsers\", function(idArr) {\n            dispatch((0,_store_slices_cache__WEBPACK_IMPORTED_MODULE_3__.fetchConversations)(idArr));\n        });\n        return function() {\n            _utils_socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].off(\"userOnline\");\n            _utils_socket__WEBPACK_IMPORTED_MODULE_0__[\"default\"].off(\"onlineUsers\");\n        };\n    }, []);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (useUserStatuses);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvaG9va3MvdXNlVXNlclN0YXR1c2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUNKO0FBQ1E7QUFDZ0I7QUFFeEQsSUFBTUksZUFBZSxHQUFHLFdBQU07SUFFNUIsSUFBTUMsUUFBUSxHQUFHSCx3REFBVyxFQUFFO0lBRTlCRCxnREFBUyxDQUFDLFdBQU07UUFFZEQsd0RBQVMsQ0FBQyxZQUFZLEVBQUUsV0FBTSxFQUU3QixDQUFDO1FBRUZBLHdEQUFTLENBQUMsYUFBYSxFQUFFLFNBQUNPLEtBQUssRUFBSztZQUNsQ0YsUUFBUSxDQUFDRix1RUFBa0IsQ0FBQ0ksS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNyQyxDQUFDO1FBRUYsT0FBTyxXQUFNO1lBQ1hQLHlEQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekJBLHlEQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0IsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FFUjtBQUVELCtEQUFlSSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hvb2tzL3VzZVVzZXJTdGF0dXNlcy50cz9mOGQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb2NrZXQgZnJvbSAnQC91dGlscy9zb2NrZXQnO1xyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7ZmV0Y2hDb252ZXJzYXRpb25zfSBmcm9tICdAL3N0b3JlL3NsaWNlcy9jYWNoZSc7XHJcblxyXG5jb25zdCB1c2VVc2VyU3RhdHVzZXMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBzb2NrZXQub24oJ3VzZXJPbmxpbmUnLCAoKSA9PiB7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oJ29ubGluZVVzZXJzJywgKGlkQXJyKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGZldGNoQ29udmVyc2F0aW9ucyhpZEFycikpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQub2ZmKCd1c2VyT25saW5lJyk7XHJcbiAgICAgIHNvY2tldC5vZmYoJ29ubGluZVVzZXJzJyk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VVc2VyU3RhdHVzZXM7Il0sIm5hbWVzIjpbInNvY2tldCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiZmV0Y2hDb252ZXJzYXRpb25zIiwidXNlVXNlclN0YXR1c2VzIiwiZGlzcGF0Y2giLCJvbiIsImlkQXJyIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/hooks/useUserStatuses.ts\n"));

/***/ })

});