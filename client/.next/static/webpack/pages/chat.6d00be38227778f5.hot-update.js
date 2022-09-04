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

/***/ "./app/components/screens/chat/components/Conversations/Conversations.tsx":
/*!********************************************************************************!*\
  !*** ./app/components/screens/chat/components/Conversations/Conversations.tsx ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Conversations_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Conversations.module.scss */ \"./app/components/screens/chat/components/Conversations/Conversations.module.scss\");\n/* harmony import */ var _Conversations_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Conversations_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Conversation */ \"./app/components/screens/chat/components/Conversations/Conversation.tsx\");\n/* harmony import */ var _hooks_useFetchConversations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useFetchConversations */ \"./app/hooks/useFetchConversations.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Conversations = function() {\n    _s();\n    var conversations = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.cache.conversations;\n    });\n    var selectedId = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.cache.selectedConversationId;\n    });\n    var id = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function(state) {\n        return state.auth.user._id;\n    });\n    //Fetch conversations\n    (0,_hooks_useFetchConversations__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_Conversations_module_scss__WEBPACK_IMPORTED_MODULE_4___default().conversationList),\n        children: conversations.map(function(conversation) {\n            var user = conversation.users.find(function(user) {\n                return user._id !== id;\n            });\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Conversation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nickname: user.login,\n                avatarUrl: user.avatar || \"https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png\",\n                selected: selectedId === conversation._id,\n                id: conversation._id\n            }, conversation._id, false, {\n                fileName: \"C:\\\\Users\\\\Kingo\\\\Desktop\\\\KChat-v2\\\\client\\\\app\\\\components\\\\screens\\\\chat\\\\components\\\\Conversations\\\\Conversations.tsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kingo\\\\Desktop\\\\KChat-v2\\\\client\\\\app\\\\components\\\\screens\\\\chat\\\\components\\\\Conversations\\\\Conversations.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(Conversations, \"vaF7tL71kaqBXhzVzrWA1IpG9Zw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        _hooks_useFetchConversations__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Conversations;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Conversations);\nvar _c;\n$RefreshReg$(_c, \"Conversations\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2NoYXQvY29tcG9uZW50cy9Db252ZXJzYXRpb25zL0NvbnZlcnNhdGlvbnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUNpRDtBQUNUO0FBRUU7QUFJd0I7QUFFbEUsSUFBTUksYUFBYSxHQUFPLFdBQU07O0lBRTlCLElBQU1DLGFBQWEsR0FBR0osd0RBQVcsQ0FBWUssU0FBQUEsS0FBSztlQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0YsYUFBYTtLQUFBLENBQUM7SUFDaEYsSUFBTUcsVUFBVSxHQUFHUCx3REFBVyxDQUFZSyxTQUFBQSxLQUFLO2VBQUlBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDRSxzQkFBc0I7S0FBQSxDQUFDO0lBQ3RGLElBQU1DLEVBQUUsR0FBR1Qsd0RBQVcsQ0FBWUssU0FBQUEsS0FBSztlQUFJQSxLQUFLLENBQUNLLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHO0tBQUEsQ0FBQztJQUUvRCxxQkFBcUI7SUFDckJWLHdFQUFxQixFQUFFLENBQUM7SUFFeEIscUJBQ0UsOERBQUNXLElBQUU7UUFBQ0MsU0FBUyxFQUFFZixvRkFBdUI7a0JBQ25DSyxhQUFhLENBQUNZLEdBQUcsQ0FBQ0MsU0FBQUEsWUFBWSxFQUFJO1lBQ2pDLElBQU1OLElBQUksR0FBR00sWUFBWSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ1IsU0FBQUEsSUFBSTt1QkFBSUEsSUFBSSxDQUFDQyxHQUFHLEtBQUtILEVBQUU7YUFBQSxDQUFDO1lBRTdELHFCQUNFLDhEQUFDUixxREFBWTtnQkFBQ21CLFFBQVEsRUFBRVQsSUFBSSxDQUFDVSxLQUFLO2dCQUNwQkMsU0FBUyxFQUFFWCxJQUFJLENBQUNZLE1BQU0sSUFBSSxvRUFBb0U7Z0JBQzlGQyxRQUFRLEVBQUVqQixVQUFVLEtBQUtVLFlBQVksQ0FBQ0wsR0FBRztnQkFFekNILEVBQUUsRUFBRVEsWUFBWSxDQUFDTCxHQUFHO2VBRGZLLFlBQVksQ0FBQ0wsR0FBRzs7OztxQkFFakMsQ0FDSDtTQUNGLENBQUM7Ozs7O2FBQ0MsQ0FDTjtDQUNGO0dBekJLVCxhQUFhOztRQUVLSCxvREFBVztRQUNkQSxvREFBVztRQUNuQkEsb0RBQVc7UUFHdEJFLG9FQUFxQjs7O0FBUGpCQyxLQUFBQSxhQUFhO0FBMkJuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3NjcmVlbnMvY2hhdC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbnMvQ29udmVyc2F0aW9ucy50c3g/MDQxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZDfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db252ZXJzYXRpb25zLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1Jvb3RTdGF0ZX0gZnJvbSAnQC9zdG9yZS9zdG9yZSc7XHJcbmltcG9ydCBDb252ZXJzYXRpb24gZnJvbSAnLi9Db252ZXJzYXRpb24nO1xyXG5pbXBvcnQgQ29udmVyc2F0aW9uVHlwZSBmcm9tICdAL3NoYXJlZC9pbnRlcmZhY2VzL0NvbnZlcnNhdGlvbic7XHJcbmltcG9ydCBVc2VyIGZyb20gJ0Avc2hhcmVkL2ludGVyZmFjZXMvVXNlcic7XHJcbmltcG9ydCB1c2VOZXdNZXNzYWdlU3Vic2NyaWJlIGZyb20gJ0AvaG9va3MvdXNlTmV3TWVzc2FnZVN1YnNjcmliZSc7XHJcbmltcG9ydCB1c2VGZXRjaENvbnZlcnNhdGlvbnMgZnJvbSAnQC9ob29rcy91c2VGZXRjaENvbnZlcnNhdGlvbnMnO1xyXG5cclxuY29uc3QgQ29udmVyc2F0aW9uczogRkMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGNvbnZlcnNhdGlvbnMgPSB1c2VTZWxlY3RvcjxSb290U3RhdGU+KHN0YXRlID0+IHN0YXRlLmNhY2hlLmNvbnZlcnNhdGlvbnMpIGFzIENvbnZlcnNhdGlvblR5cGVbXTtcclxuICBjb25zdCBzZWxlY3RlZElkID0gdXNlU2VsZWN0b3I8Um9vdFN0YXRlPihzdGF0ZSA9PiBzdGF0ZS5jYWNoZS5zZWxlY3RlZENvbnZlcnNhdGlvbklkKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yPFJvb3RTdGF0ZT4oc3RhdGUgPT4gc3RhdGUuYXV0aC51c2VyLl9pZCk7XHJcblxyXG4gIC8vRmV0Y2ggY29udmVyc2F0aW9uc1xyXG4gIHVzZUZldGNoQ29udmVyc2F0aW9ucygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNvbnZlcnNhdGlvbkxpc3R9PlxyXG4gICAgICB7Y29udmVyc2F0aW9ucy5tYXAoY29udmVyc2F0aW9uID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gY29udmVyc2F0aW9uLnVzZXJzLmZpbmQodXNlciA9PiB1c2VyLl9pZCAhPT0gaWQpIGFzIFVzZXI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q29udmVyc2F0aW9uIG5pY2tuYW1lPXt1c2VyLmxvZ2lufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXJVcmw9e3VzZXIuYXZhdGFyIHx8ICdodHRwczovL3NiY2YuZnIvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvc2JjZi1kZWZhdWx0LWF2YXRhci5wbmcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRJZCA9PT0gY29udmVyc2F0aW9uLl9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb252ZXJzYXRpb24uX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17Y29udmVyc2F0aW9uLl9pZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgIDwvdWw+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9ucztcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVNlbGVjdG9yIiwiQ29udmVyc2F0aW9uIiwidXNlRmV0Y2hDb252ZXJzYXRpb25zIiwiQ29udmVyc2F0aW9ucyIsImNvbnZlcnNhdGlvbnMiLCJzdGF0ZSIsImNhY2hlIiwic2VsZWN0ZWRJZCIsInNlbGVjdGVkQ29udmVyc2F0aW9uSWQiLCJpZCIsImF1dGgiLCJ1c2VyIiwiX2lkIiwidWwiLCJjbGFzc05hbWUiLCJjb252ZXJzYXRpb25MaXN0IiwibWFwIiwiY29udmVyc2F0aW9uIiwidXNlcnMiLCJmaW5kIiwibmlja25hbWUiLCJsb2dpbiIsImF2YXRhclVybCIsImF2YXRhciIsInNlbGVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/screens/chat/components/Conversations/Conversations.tsx\n"));

/***/ })

});