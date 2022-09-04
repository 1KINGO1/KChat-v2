"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./app/store/slices/cache.ts":
/*!***********************************!*\
  !*** ./app/store/slices/cache.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMessage\": function() { return /* binding */ addMessage; },\n/* harmony export */   \"fetchConversations\": function() { return /* binding */ fetchConversations; },\n/* harmony export */   \"fetchOnlineUsers\": function() { return /* binding */ fetchOnlineUsers; },\n/* harmony export */   \"selectConversation\": function() { return /* binding */ selectConversation; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\n\n\nvar initialState = {\n    selectedConversationId: null,\n    conversations: [],\n    onlineUsers: []\n};\nvar cacheSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cache\",\n    initialState: initialState,\n    reducers: {\n        fetchConversations: function fetchConversations(state, action) {\n            state.conversations = action.payload;\n        },\n        selectConversation: function selectConversation(state, action) {\n            state.selectedConversationId = action.payload;\n        },\n        addMessage: function addMessage(state, action) {\n            var conversations = [];\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = state.conversations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var conversation = _step.value;\n                    if (conversation._id === action.payload.conversationId) {\n                        conversations.push((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, conversation), {\n                            messages: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(conversation.messages).concat([\n                                action.payload.message\n                            ])\n                        }));\n                    } else {\n                        conversations.push(conversation);\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            state.conversations = conversations;\n        },\n        fetchOnlineUsers: function fetchOnlineUsers(state, action) {\n            state.onlineUsers = action.payload;\n        }\n    }\n});\nvar _actions = cacheSlice.actions;\nvar fetchConversations = _actions.fetchConversations, selectConversation = _actions.selectConversation, addMessage = _actions.addMessage, fetchOnlineUsers = _actions.fetchOnlineUsers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (cacheSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUvc2xpY2VzL2NhY2hlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0RDtBQVU1RCxJQUFNQyxZQUFZLEdBQWU7SUFDL0JDLHNCQUFzQixFQUFFLElBQUk7SUFDNUJDLGFBQWEsRUFBRSxFQUFFO0lBQ2pCQyxXQUFXLEVBQUUsRUFBRTtDQUNoQjtBQUVELElBQU1DLFVBQVUsR0FBR0wsNkRBQVcsQ0FBQztJQUM3Qk0sSUFBSSxFQUFFLE9BQU87SUFDYkwsWUFBWSxFQUFaQSxZQUFZO0lBQ1pNLFFBQVEsRUFBRTtRQUNSQyxrQkFBa0IsRUFBbEJBLFNBQUFBLGtCQUFrQixDQUFDQyxLQUFLLEVBQUVDLE1BQXFDLEVBQUM7WUFDOURELEtBQUssQ0FBQ04sYUFBYSxHQUFHTyxNQUFNLENBQUNDLE9BQU8sQ0FBQztTQUN0QztRQUNEQyxrQkFBa0IsRUFBbEJBLFNBQUFBLGtCQUFrQixDQUFDSCxLQUFLLEVBQUVDLE1BQTZCLEVBQUM7WUFDdERELEtBQUssQ0FBQ1Asc0JBQXNCLEdBQUdRLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQy9DO1FBQ0RFLFVBQVUsRUFBVkEsU0FBQUEsVUFBVSxDQUFDSixLQUFLLEVBQUVDLE1BQWlFLEVBQUM7WUFDbEYsSUFBSVAsYUFBYSxHQUFHLEVBQUU7Z0JBRWpCLHlCQUFnQixTQUFoQixpQkFBZ0IsVUFBaEIsY0FBZ0I7O2dCQUFyQixRQUFLLFNBQWdCLEdBQUlNLEtBQUssQ0FBQ04sYUFBYSxxQkFBdkMsS0FBZ0IsSUFBaEIseUJBQWdCLElBQWhCLEtBQWdCLEdBQWhCLFNBQWdCLGdCQUFoQix5QkFBZ0IsUUFBd0I7b0JBQXhDLElBQUlXLFlBQVksR0FBaEIsS0FBZ0I7b0JBQ25CLElBQUlBLFlBQVksQ0FBQ0MsR0FBRyxLQUFLTCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0ssY0FBYyxFQUFDO3dCQUNyRGIsYUFBYSxDQUFDYyxJQUFJLENBQUMsd0tBQUlILFlBQVk7NEJBQUVJLFFBQVEsRUFBRSxxRkFBSUosWUFBWSxDQUFDSSxRQUFRLENBQXJCSixRQUFKO2dDQUEyQkosTUFBTSxDQUFDQyxPQUFPLENBQUNRLE9BQU87NkJBQUM7MEJBQUMsQ0FBQyxDQUFDO3FCQUNyRyxNQUNHO3dCQUNGaEIsYUFBYSxDQUFDYyxJQUFJLENBQUNILFlBQVksQ0FBQyxDQUFDO3FCQUNsQztpQkFDRjs7Z0JBUEksaUJBQWdCO2dCQUFoQixjQUFnQjs7O3lCQUFoQix5QkFBZ0IsSUFBaEIsU0FBZ0I7d0JBQWhCLFNBQWdCOzs7d0JBQWhCLGlCQUFnQjs4QkFBaEIsY0FBZ0I7Ozs7WUFTckJMLEtBQUssQ0FBQ04sYUFBYSxHQUFHQSxhQUFhLENBQUM7U0FDckM7UUFDRGlCLGdCQUFnQixFQUFoQkEsU0FBQUEsZ0JBQWdCLENBQUNYLEtBQUssRUFBRUMsTUFBK0IsRUFBQztZQUN0REQsS0FBSyxDQUFDTCxXQUFXLEdBQUdNLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ3BDO0tBQ0Y7Q0FDRixDQUFDO0lBRXFGTixRQUFrQixHQUFsQkEsVUFBVSxDQUFDZ0IsT0FBTztBQUFsRyxJQUFRYixrQkFBa0IsR0FBc0RILFFBQWtCLENBQTFGRyxrQkFBa0IsRUFBRUksa0JBQWtCLEdBQWtDUCxRQUFrQixDQUF0RU8sa0JBQWtCLEVBQUVDLFVBQVUsR0FBc0JSLFFBQWtCLENBQWxEUSxVQUFVLEVBQUVPLGdCQUFnQixHQUFJZixRQUFrQixDQUF0Q2UsZ0JBQWdCLENBQXNCO0FBQ3pHLCtEQUFlZixVQUFVLENBQUNpQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9zdG9yZS9zbGljZXMvY2FjaGUudHM/OTE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9ufSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IENvbnZlcnNhdGlvbiBmcm9tICdAL3NoYXJlZC9pbnRlcmZhY2VzL0NvbnZlcnNhdGlvbic7XHJcbmltcG9ydCBNZXNzYWdlIGZyb20gJ0Avc2hhcmVkL2ludGVyZmFjZXMvTWVzc2FnZSc7XHJcblxyXG5pbnRlcmZhY2UgY2FjaGVTdGF0ZXtcclxuICBzZWxlY3RlZENvbnZlcnNhdGlvbklkOiBudWxsIHwgc3RyaW5nLFxyXG4gIGNvbnZlcnNhdGlvbnM6IENvbnZlcnNhdGlvbltdLFxyXG4gIG9ubGluZVVzZXJzOiBzdHJpbmdbXVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IGNhY2hlU3RhdGUgPSB7XHJcbiAgc2VsZWN0ZWRDb252ZXJzYXRpb25JZDogbnVsbCxcclxuICBjb252ZXJzYXRpb25zOiBbXSxcclxuICBvbmxpbmVVc2VyczogW11cclxufVxyXG5cclxuY29uc3QgY2FjaGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnY2FjaGUnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgZmV0Y2hDb252ZXJzYXRpb25zKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Q29udmVyc2F0aW9uW10+KXtcclxuICAgICAgc3RhdGUuY29udmVyc2F0aW9ucyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNlbGVjdENvbnZlcnNhdGlvbihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pe1xyXG4gICAgICBzdGF0ZS5zZWxlY3RlZENvbnZlcnNhdGlvbklkID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgYWRkTWVzc2FnZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtjb252ZXJzYXRpb25JZDogc3RyaW5nLCBtZXNzYWdlOiBNZXNzYWdlfT4pe1xyXG4gICAgICBsZXQgY29udmVyc2F0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgY29udmVyc2F0aW9uIG9mIHN0YXRlLmNvbnZlcnNhdGlvbnMpe1xyXG4gICAgICAgIGlmIChjb252ZXJzYXRpb24uX2lkID09PSBhY3Rpb24ucGF5bG9hZC5jb252ZXJzYXRpb25JZCl7XHJcbiAgICAgICAgICBjb252ZXJzYXRpb25zLnB1c2goey4uLmNvbnZlcnNhdGlvbiwgbWVzc2FnZXM6IFsuLi5jb252ZXJzYXRpb24ubWVzc2FnZXMsIGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2VdfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICBjb252ZXJzYXRpb25zLnB1c2goY29udmVyc2F0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXRlLmNvbnZlcnNhdGlvbnMgPSBjb252ZXJzYXRpb25zO1xyXG4gICAgfSxcclxuICAgIGZldGNoT25saW5lVXNlcnMoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pe1xyXG4gICAgICBzdGF0ZS5vbmxpbmVVc2VycyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBmZXRjaENvbnZlcnNhdGlvbnMsIHNlbGVjdENvbnZlcnNhdGlvbiwgYWRkTWVzc2FnZSwgZmV0Y2hPbmxpbmVVc2Vyc30gPSBjYWNoZVNsaWNlLmFjdGlvbnNcclxuZXhwb3J0IGRlZmF1bHQgY2FjaGVTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwic2VsZWN0ZWRDb252ZXJzYXRpb25JZCIsImNvbnZlcnNhdGlvbnMiLCJvbmxpbmVVc2VycyIsImNhY2hlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJmZXRjaENvbnZlcnNhdGlvbnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZWxlY3RDb252ZXJzYXRpb24iLCJhZGRNZXNzYWdlIiwiY29udmVyc2F0aW9uIiwiX2lkIiwiY29udmVyc2F0aW9uSWQiLCJwdXNoIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiZmV0Y2hPbmxpbmVVc2VycyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/store/slices/cache.ts\n"));

/***/ })

});