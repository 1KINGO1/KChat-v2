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

/***/ "./app/components/screens/chat/components/Messages/Messages.tsx":
/*!**********************************************************************!*\
  !*** ./app/components/screens/chat/components/Messages/Messages.tsx ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ \"./app/components/screens/chat/components/Messages/Message.tsx\");\n/* harmony import */ var _hooks_useConversation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useConversation */ \"./app/hooks/useConversation.ts\");\n/* harmony import */ var _Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Messages.module.scss */ \"./app/components/screens/chat/components/Messages/Messages.module.scss\");\n/* harmony import */ var _Messages_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/socket */ \"./app/utils/socket.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Messages = function() {\n    _s();\n    var endOfMessages = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});\n    var selectedId = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.cache.selectedConversationId;\n    });\n    var conversation = (0,_hooks_useConversation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        endOfMessages.current.scrollIntoView();\n    }, [\n        selectedId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handler = function(message) {\n            console.log(conversation === null || conversation === void 0 ? void 0 : conversation._id, message.conversationId);\n            if (message.conversationId === (conversation === null || conversation === void 0 ? void 0 : conversation._id)) {\n                // To do that after new message render\n                // I don't know for sure why this is working, \n                queueMicrotask(function() {\n                    return endOfMessages.current.scrollIntoView();\n                });\n            }\n        };\n        endOfMessages.current.scrollIntoView();\n        _utils_socket__WEBPACK_IMPORTED_MODULE_4__[\"default\"].on(\"messageCreate\", handler);\n        return function() {\n            _utils_socket__WEBPACK_IMPORTED_MODULE_4__[\"default\"].off(\"messageCreate\", handler);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n        children: [\n            conversation === null || conversation === void 0 ? void 0 : conversation.messages.map(function(message) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Message__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    author: message.author,\n                    content: message.content,\n                    id: message._id\n                }, message._id, false, {\n                    fileName: \"C:\\\\Users\\\\Kingo\\\\Desktop\\\\KChat-v2\\\\client\\\\app\\\\components\\\\screens\\\\chat\\\\components\\\\Messages\\\\Messages.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: (_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6___default().endOfMessages),\n                ref: endOfMessages\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Kingo\\\\Desktop\\\\KChat-v2\\\\client\\\\app\\\\components\\\\screens\\\\chat\\\\components\\\\Messages\\\\Messages.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Kingo\\\\Desktop\\\\KChat-v2\\\\client\\\\app\\\\components\\\\screens\\\\chat\\\\components\\\\Messages\\\\Messages.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, _this);\n};\n_s(Messages, \"Nh5bmqd1fae0tBusyyFcet3n8AQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _hooks_useConversation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Messages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messages);\nvar _c;\n$RefreshReg$(_c, \"Messages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2NoYXQvY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTRDO0FBQ1o7QUFFc0I7QUFDVjtBQUNSO0FBQ0k7QUFHeEMsSUFBTU8sUUFBUSxHQUFPLFdBQU07O0lBRXpCLElBQU1DLGFBQWEsR0FBR1AsNkNBQU0sQ0FBZ0IsRUFBRSxDQUFrQjtJQUNoRSxJQUFNUSxVQUFVLEdBQUdILHdEQUFXLENBQVlJLFNBQUFBLEtBQUs7ZUFBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLHNCQUFzQjtLQUFBLENBQUM7SUFDdEYsSUFBTUMsWUFBWSxHQUFHVixrRUFBZSxFQUFFO0lBRXRDSCxnREFBUyxDQUFDLFdBQU07UUFDZFEsYUFBYSxDQUFDTSxPQUFPLENBQUNDLGNBQWMsRUFBRSxDQUFDO0tBQ3hDLEVBQUU7UUFBQ04sVUFBVTtLQUFDLENBQUMsQ0FBQztJQUdqQlQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTWdCLE9BQU8sR0FBRyxTQUFDQyxPQUF1RCxFQUFLO1lBQzNFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sWUFBWSxhQUFaQSxZQUFZLFdBQUssR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxZQUFZLENBQUVPLEdBQUcsRUFBRUgsT0FBTyxDQUFDSSxjQUFjLENBQUMsQ0FBQztZQUN2RCxJQUFJSixPQUFPLENBQUNJLGNBQWMsS0FBS1IsQ0FBQUEsWUFBWSxhQUFaQSxZQUFZLFdBQUssR0FBakJBLEtBQUFBLENBQWlCLEdBQWpCQSxZQUFZLENBQUVPLEdBQUcsR0FBQztnQkFDL0Msc0NBQXNDO2dCQUN0Qyw4Q0FBOEM7Z0JBQzlDRSxjQUFjLENBQUM7MkJBQU1kLGFBQWEsQ0FBQ00sT0FBTyxDQUFDQyxjQUFjLEVBQUU7aUJBQUEsQ0FBQyxDQUFDO2FBQzlEO1NBQ0Y7UUFFRFAsYUFBYSxDQUFDTSxPQUFPLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZDVix3REFBUyxDQUFDLGVBQWUsRUFBRVcsT0FBTyxDQUFDLENBQUM7UUFFcEMsT0FBTyxXQUFNO1lBQ1hYLHlEQUFVLENBQUMsZUFBZSxFQUFFVyxPQUFPLENBQUMsQ0FBQztTQUN0QztLQUNGLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHUCxxQkFDRSw4REFBQ1MsSUFBRTtRQUFDQyxTQUFTLEVBQUV0QixzRUFBYzs7WUFDMUJTLFlBQVksYUFBWkEsWUFBWSxXQUFVLEdBQXRCQSxLQUFBQSxDQUFzQixHQUF0QkEsWUFBWSxDQUFFZSxRQUFRLENBQUNDLEdBQUcsQ0FBQ1osU0FBQUEsT0FBTztxQ0FDakMsOERBQUNmLGdEQUFPO29CQUFDNEIsTUFBTSxFQUFFYixPQUFPLENBQUNhLE1BQU07b0JBQUVDLE9BQU8sRUFBRWQsT0FBTyxDQUFDYyxPQUFPO29CQUFFQyxFQUFFLEVBQUVmLE9BQU8sQ0FBQ0csR0FBRzttQkFBT0gsT0FBTyxDQUFDRyxHQUFHOzs7O3lCQUFHO2FBQ2hHLENBQUM7MEJBQ0YsOERBQUNhLElBQUU7Z0JBQUNQLFNBQVMsRUFBRXRCLDRFQUFvQjtnQkFBRThCLEdBQUcsRUFBRTFCLGFBQWE7Ozs7O3FCQUFPOzs7Ozs7YUFDM0QsQ0FDTjtDQUNGO0dBdENLRCxRQUFROztRQUdPRCxvREFBVztRQUNUSCw4REFBZTs7O0FBSmhDSSxLQUFBQSxRQUFRO0FBd0NkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2NyZWVucy9jaGF0L2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZXMudHN4PzgyZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGQywgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJztcclxuaW1wb3J0IE1lc3NhZ2VUeXBlIGZyb20gJ0Avc2hhcmVkL2ludGVyZmFjZXMvTWVzc2FnZSc7XHJcbmltcG9ydCB1c2VDb252ZXJzYXRpb24gZnJvbSAnQC9ob29rcy91c2VDb252ZXJzYXRpb24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVzc2FnZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgc29ja2V0IGZyb20gJ0AvdXRpbHMvc29ja2V0JztcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1Jvb3RTdGF0ZX0gZnJvbSAnQC9zdG9yZS9zdG9yZSc7XHJcblxyXG5jb25zdCBNZXNzYWdlczogRkMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGVuZE9mTWVzc2FnZXMgPSB1c2VSZWY8SFRNTExJRWxlbWVudD4oe30gYXMgSFRNTExJRWxlbWVudCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRJZCA9IHVzZVNlbGVjdG9yPFJvb3RTdGF0ZT4oc3RhdGUgPT4gc3RhdGUuY2FjaGUuc2VsZWN0ZWRDb252ZXJzYXRpb25JZCkgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IGNvbnZlcnNhdGlvbiA9IHVzZUNvbnZlcnNhdGlvbigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZW5kT2ZNZXNzYWdlcy5jdXJyZW50LnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSwgW3NlbGVjdGVkSWRdKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gKG1lc3NhZ2U6IHtjb252ZXJzYXRpb25JZDogc3RyaW5nLCBtZXNzYWdlOiBNZXNzYWdlVHlwZX0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coY29udmVyc2F0aW9uPy5faWQsIG1lc3NhZ2UuY29udmVyc2F0aW9uSWQpO1xyXG4gICAgICBpZiAobWVzc2FnZS5jb252ZXJzYXRpb25JZCA9PT0gY29udmVyc2F0aW9uPy5faWQpe1xyXG4gICAgICAgIC8vIFRvIGRvIHRoYXQgYWZ0ZXIgbmV3IG1lc3NhZ2UgcmVuZGVyXHJcbiAgICAgICAgLy8gSSBkb24ndCBrbm93IGZvciBzdXJlIHdoeSB0aGlzIGlzIHdvcmtpbmcsIFxyXG4gICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IGVuZE9mTWVzc2FnZXMuY3VycmVudC5zY3JvbGxJbnRvVmlldygpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbmRPZk1lc3NhZ2VzLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIHNvY2tldC5vbignbWVzc2FnZUNyZWF0ZScsIGhhbmRsZXIpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5vZmYoJ21lc3NhZ2VDcmVhdGUnLCBoYW5kbGVyKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICB7Y29udmVyc2F0aW9uPy5tZXNzYWdlcy5tYXAobWVzc2FnZSA9PiAoXHJcbiAgICAgICAgPE1lc3NhZ2UgYXV0aG9yPXttZXNzYWdlLmF1dGhvcn0gY29udGVudD17bWVzc2FnZS5jb250ZW50fSBpZD17bWVzc2FnZS5faWR9IGtleT17bWVzc2FnZS5faWR9Lz5cclxuICAgICAgKSl9XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5lbmRPZk1lc3NhZ2VzfSByZWY9e2VuZE9mTWVzc2FnZXN9PjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiTWVzc2FnZSIsInVzZUNvbnZlcnNhdGlvbiIsInN0eWxlcyIsInNvY2tldCIsInVzZVNlbGVjdG9yIiwiTWVzc2FnZXMiLCJlbmRPZk1lc3NhZ2VzIiwic2VsZWN0ZWRJZCIsInN0YXRlIiwiY2FjaGUiLCJzZWxlY3RlZENvbnZlcnNhdGlvbklkIiwiY29udmVyc2F0aW9uIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiaGFuZGxlciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiX2lkIiwiY29udmVyc2F0aW9uSWQiLCJxdWV1ZU1pY3JvdGFzayIsIm9uIiwib2ZmIiwidWwiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwibWVzc2FnZXMiLCJtYXAiLCJhdXRob3IiLCJjb250ZW50IiwiaWQiLCJsaSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/screens/chat/components/Messages/Messages.tsx\n"));

/***/ })

});