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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ \"./app/components/screens/chat/components/Messages/Message.tsx\");\n/* harmony import */ var _hooks_useConversation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useConversation */ \"./app/hooks/useConversation.ts\");\n/* harmony import */ var _Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Messages.module.scss */ \"./app/components/screens/chat/components/Messages/Messages.module.scss\");\n/* harmony import */ var _Messages_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/socket */ \"./app/utils/socket.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar Messages = function() {\n    _s();\n    var endOfMessages = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});\n    var selectedId = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function(state) {\n        return state.cache.selectedConversationId;\n    });\n    var conversation = (0,_hooks_useConversation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        endOfMessages.current.scrollTop = endOfMessages.current.scrollHeight;\n    }, [\n        selectedId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handler = function(message) {\n            console.log(conversation === null || conversation === void 0 ? void 0 : conversation._id, message.conversationId);\n            if (message.conversationId === (conversation === null || conversation === void 0 ? void 0 : conversation._id)) {\n                endOfMessages.current.scrollTop = endOfMessages.current.scrollHeight;\n            }\n        };\n        endOfMessages.current.scrollTop = endOfMessages.current.scrollHeight;\n        _utils_socket__WEBPACK_IMPORTED_MODULE_4__[\"default\"].on(\"messageCreate\", handler);\n        return function() {\n            _utils_socket__WEBPACK_IMPORTED_MODULE_4__[\"default\"].off(\"messageCreate\", handler);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n        ref: endOfMessages,\n        children: conversation === null || conversation === void 0 ? void 0 : conversation.messages.map(function(message) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Message__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                author: message.author,\n                content: message.content,\n                id: message._id\n            }, message._id, false, {\n                fileName: \"C:\\\\Users\\\\Kingo\\\\Desktop\\\\KChat-v2\\\\client\\\\app\\\\components\\\\screens\\\\chat\\\\components\\\\Messages\\\\Messages.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Kingo\\\\Desktop\\\\KChat-v2\\\\client\\\\app\\\\components\\\\screens\\\\chat\\\\components\\\\Messages\\\\Messages.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(Messages, \"Nh5bmqd1fae0tBusyyFcet3n8AQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector,\n        _hooks_useConversation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Messages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messages);\nvar _c;\n$RefreshReg$(_c, \"Messages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2NoYXQvY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQTRDO0FBQ1o7QUFFc0I7QUFDVjtBQUNSO0FBQ0k7QUFHeEMsSUFBTU8sUUFBUSxHQUFPLFdBQU07O0lBRXpCLElBQU1DLGFBQWEsR0FBR1AsNkNBQU0sQ0FBbUIsRUFBRSxDQUFxQjtJQUN0RSxJQUFNUSxVQUFVLEdBQUdILHdEQUFXLENBQVlJLFNBQUFBLEtBQUs7ZUFBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLHNCQUFzQjtLQUFBLENBQUM7SUFDdEYsSUFBTUMsWUFBWSxHQUFHVixrRUFBZSxFQUFFO0lBRXRDSCxnREFBUyxDQUFDLFdBQU07UUFDZFEsYUFBYSxDQUFDTSxPQUFPLENBQUNDLFNBQVMsR0FBR1AsYUFBYSxDQUFDTSxPQUFPLENBQUNFLFlBQVksQ0FBQztLQUN0RSxFQUFFO1FBQUNQLFVBQVU7S0FBQyxDQUFDLENBQUM7SUFHakJULGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1pQixPQUFPLEdBQUcsU0FBQ0MsT0FBdUQsRUFBSztZQUMzRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNQLFlBQVksYUFBWkEsWUFBWSxXQUFLLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsWUFBWSxDQUFFUSxHQUFHLEVBQUVILE9BQU8sQ0FBQ0ksY0FBYyxDQUFDLENBQUM7WUFDdkQsSUFBSUosT0FBTyxDQUFDSSxjQUFjLEtBQUtULENBQUFBLFlBQVksYUFBWkEsWUFBWSxXQUFLLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsWUFBWSxDQUFFUSxHQUFHLEdBQUM7Z0JBQy9DYixhQUFhLENBQUNNLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHUCxhQUFhLENBQUNNLE9BQU8sQ0FBQ0UsWUFBWSxDQUFDO2FBQ3RFO1NBQ0Y7UUFFRFIsYUFBYSxDQUFDTSxPQUFPLENBQUNDLFNBQVMsR0FBR1AsYUFBYSxDQUFDTSxPQUFPLENBQUNFLFlBQVksQ0FBQztRQUNyRVgsd0RBQVMsQ0FBQyxlQUFlLEVBQUVZLE9BQU8sQ0FBQyxDQUFDO1FBRXBDLE9BQU8sV0FBTTtZQUNYWix5REFBVSxDQUFDLGVBQWUsRUFBRVksT0FBTyxDQUFDLENBQUM7U0FDdEM7S0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBR1AscUJBQ0UsOERBQUNRLElBQUU7UUFBQ0MsU0FBUyxFQUFFdEIsc0VBQWM7UUFBRXdCLEdBQUcsRUFBRXBCLGFBQWE7a0JBQzlDSyxZQUFZLGFBQVpBLFlBQVksV0FBVSxHQUF0QkEsS0FBQUEsQ0FBc0IsR0FBdEJBLFlBQVksQ0FBRWdCLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDWixTQUFBQSxPQUFPO2lDQUNqQyw4REFBQ2hCLGdEQUFPO2dCQUFDNkIsTUFBTSxFQUFFYixPQUFPLENBQUNhLE1BQU07Z0JBQUVDLE9BQU8sRUFBRWQsT0FBTyxDQUFDYyxPQUFPO2dCQUFFQyxFQUFFLEVBQUVmLE9BQU8sQ0FBQ0csR0FBRztlQUFPSCxPQUFPLENBQUNHLEdBQUc7Ozs7cUJBQUc7U0FDaEcsQ0FBQzs7Ozs7YUFFQyxDQUNOO0NBQ0Y7R0FwQ0tkLFFBQVE7O1FBR09ELG9EQUFXO1FBQ1RILDhEQUFlOzs7QUFKaENJLEtBQUFBLFFBQVE7QUFzQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9zY3JlZW5zL2NoYXQvY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlcy50c3g/ODJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZDLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL01lc3NhZ2UnO1xyXG5pbXBvcnQgTWVzc2FnZVR5cGUgZnJvbSAnQC9zaGFyZWQvaW50ZXJmYWNlcy9NZXNzYWdlJztcclxuaW1wb3J0IHVzZUNvbnZlcnNhdGlvbiBmcm9tICdAL2hvb2tzL3VzZUNvbnZlcnNhdGlvbic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZXNzYWdlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBzb2NrZXQgZnJvbSAnQC91dGlscy9zb2NrZXQnO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7Um9vdFN0YXRlfSBmcm9tICdAL3N0b3JlL3N0b3JlJztcclxuXHJcbmNvbnN0IE1lc3NhZ2VzOiBGQyA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZW5kT2ZNZXNzYWdlcyA9IHVzZVJlZjxIVE1MVUxpc3RFbGVtZW50Pih7fSBhcyBIVE1MVUxpc3RFbGVtZW50KTtcclxuICBjb25zdCBzZWxlY3RlZElkID0gdXNlU2VsZWN0b3I8Um9vdFN0YXRlPihzdGF0ZSA9PiBzdGF0ZS5jYWNoZS5zZWxlY3RlZENvbnZlcnNhdGlvbklkKSBhcyBzdHJpbmc7XHJcbiAgY29uc3QgY29udmVyc2F0aW9uID0gdXNlQ29udmVyc2F0aW9uKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBlbmRPZk1lc3NhZ2VzLmN1cnJlbnQuc2Nyb2xsVG9wID0gZW5kT2ZNZXNzYWdlcy5jdXJyZW50LnNjcm9sbEhlaWdodDtcclxuICB9LCBbc2VsZWN0ZWRJZF0pO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAobWVzc2FnZToge2NvbnZlcnNhdGlvbklkOiBzdHJpbmcsIG1lc3NhZ2U6IE1lc3NhZ2VUeXBlfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhjb252ZXJzYXRpb24/Ll9pZCwgbWVzc2FnZS5jb252ZXJzYXRpb25JZCk7XHJcbiAgICAgIGlmIChtZXNzYWdlLmNvbnZlcnNhdGlvbklkID09PSBjb252ZXJzYXRpb24/Ll9pZCl7XHJcbiAgICAgICAgZW5kT2ZNZXNzYWdlcy5jdXJyZW50LnNjcm9sbFRvcCA9IGVuZE9mTWVzc2FnZXMuY3VycmVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZW5kT2ZNZXNzYWdlcy5jdXJyZW50LnNjcm9sbFRvcCA9IGVuZE9mTWVzc2FnZXMuY3VycmVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBzb2NrZXQub24oJ21lc3NhZ2VDcmVhdGUnLCBoYW5kbGVyKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQub2ZmKCdtZXNzYWdlQ3JlYXRlJywgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfSByZWY9e2VuZE9mTWVzc2FnZXN9PlxyXG4gICAgICB7Y29udmVyc2F0aW9uPy5tZXNzYWdlcy5tYXAobWVzc2FnZSA9PiAoXHJcbiAgICAgICAgPE1lc3NhZ2UgYXV0aG9yPXttZXNzYWdlLmF1dGhvcn0gY29udGVudD17bWVzc2FnZS5jb250ZW50fSBpZD17bWVzc2FnZS5faWR9IGtleT17bWVzc2FnZS5faWR9Lz5cclxuICAgICAgKSl9XHJcbiAgICAgIHsvKjxsaSBjbGFzc05hbWU9e3N0eWxlcy5lbmRPZk1lc3NhZ2VzfSByZWY9e2VuZE9mTWVzc2FnZXN9PjwvbGk+Ki99XHJcbiAgICA8L3VsPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiTWVzc2FnZSIsInVzZUNvbnZlcnNhdGlvbiIsInN0eWxlcyIsInNvY2tldCIsInVzZVNlbGVjdG9yIiwiTWVzc2FnZXMiLCJlbmRPZk1lc3NhZ2VzIiwic2VsZWN0ZWRJZCIsInN0YXRlIiwiY2FjaGUiLCJzZWxlY3RlZENvbnZlcnNhdGlvbklkIiwiY29udmVyc2F0aW9uIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImhhbmRsZXIiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIl9pZCIsImNvbnZlcnNhdGlvbklkIiwib24iLCJvZmYiLCJ1bCIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJyZWYiLCJtZXNzYWdlcyIsIm1hcCIsImF1dGhvciIsImNvbnRlbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/screens/chat/components/Messages/Messages.tsx\n"));

/***/ })

});