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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMessage\": function() { return /* binding */ addMessage; },\n/* harmony export */   \"addOnlineUser\": function() { return /* binding */ addOnlineUser; },\n/* harmony export */   \"fetchConversations\": function() { return /* binding */ fetchConversations; },\n/* harmony export */   \"fetchOnlineUsers\": function() { return /* binding */ fetchOnlineUsers; },\n/* harmony export */   \"selectConversation\": function() { return /* binding */ selectConversation; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\n\n\nvar initialState = {\n    selectedConversationId: null,\n    conversations: [],\n    onlineUsers: []\n};\nvar cacheSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cache\",\n    initialState: initialState,\n    reducers: {\n        fetchConversations: function fetchConversations(state, action) {\n            state.conversations = action.payload;\n        },\n        selectConversation: function selectConversation(state, action) {\n            state.selectedConversationId = action.payload;\n        },\n        addMessage: function addMessage(state, action) {\n            var conversations = [];\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = state.conversations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var conversation = _step.value;\n                    if (conversation._id === action.payload.conversationId) {\n                        conversations.push((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, conversation), {\n                            messages: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(conversation.messages).concat([\n                                action.payload.message\n                            ])\n                        }));\n                    } else {\n                        conversations.push(conversation);\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            state.conversations = conversations;\n        },\n        fetchOnlineUsers: function fetchOnlineUsers(state, action) {\n            state.onlineUsers = action.payload;\n        },\n        addOnlineUser: function addOnlineUser(state, action) {\n            state.onlineUsers = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state.onlineUsers).concat([\n                action.payload\n            ]);\n        }\n    }\n});\nvar _actions = cacheSlice.actions;\nvar fetchConversations = _actions.fetchConversations, selectConversation = _actions.selectConversation, addMessage = _actions.addMessage, fetchOnlineUsers = _actions.fetchOnlineUsers, addOnlineUser = _actions.addOnlineUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (cacheSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXBwL3N0b3JlL3NsaWNlcy9jYWNoZS50cz85MTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb259IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgQ29udmVyc2F0aW9uIGZyb20gJ0Avc2hhcmVkL2ludGVyZmFjZXMvQ29udmVyc2F0aW9uJztcclxuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnQC9zaGFyZWQvaW50ZXJmYWNlcy9NZXNzYWdlJztcclxuXHJcbmludGVyZmFjZSBjYWNoZVN0YXRle1xyXG4gIHNlbGVjdGVkQ29udmVyc2F0aW9uSWQ6IG51bGwgfCBzdHJpbmcsXHJcbiAgY29udmVyc2F0aW9uczogQ29udmVyc2F0aW9uW10sXHJcbiAgb25saW5lVXNlcnM6IHN0cmluZ1tdXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogY2FjaGVTdGF0ZSA9IHtcclxuICBzZWxlY3RlZENvbnZlcnNhdGlvbklkOiBudWxsLFxyXG4gIGNvbnZlcnNhdGlvbnM6IFtdLFxyXG4gIG9ubGluZVVzZXJzOiBbXVxyXG59XHJcblxyXG5jb25zdCBjYWNoZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdjYWNoZScsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBmZXRjaENvbnZlcnNhdGlvbnMoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxDb252ZXJzYXRpb25bXT4pe1xyXG4gICAgICBzdGF0ZS5jb252ZXJzYXRpb25zID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0Q29udmVyc2F0aW9uKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPil7XHJcbiAgICAgIHN0YXRlLnNlbGVjdGVkQ29udmVyc2F0aW9uSWQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBhZGRNZXNzYWdlKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248e2NvbnZlcnNhdGlvbklkOiBzdHJpbmcsIG1lc3NhZ2U6IE1lc3NhZ2V9Pil7XHJcbiAgICAgIGxldCBjb252ZXJzYXRpb25zID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCBjb252ZXJzYXRpb24gb2Ygc3RhdGUuY29udmVyc2F0aW9ucyl7XHJcbiAgICAgICAgaWYgKGNvbnZlcnNhdGlvbi5faWQgPT09IGFjdGlvbi5wYXlsb2FkLmNvbnZlcnNhdGlvbklkKXtcclxuICAgICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaCh7Li4uY29udmVyc2F0aW9uLCBtZXNzYWdlczogWy4uLmNvbnZlcnNhdGlvbi5tZXNzYWdlcywgYWN0aW9uLnBheWxvYWQubWVzc2FnZV19KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIGNvbnZlcnNhdGlvbnMucHVzaChjb252ZXJzYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgc3RhdGUuY29udmVyc2F0aW9ucyA9IGNvbnZlcnNhdGlvbnM7XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hPbmxpbmVVc2VycyhzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZ1tdPil7XHJcbiAgICAgIHN0YXRlLm9ubGluZVVzZXJzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgYWRkT25saW5lVXNlcihzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pe1xyXG4gICAgICBzdGF0ZS5vbmxpbmVVc2VycyA9IFsuLi5zdGF0ZS5vbmxpbmVVc2VycywgYWN0aW9uLnBheWxvYWRdXHJcbiAgICB9XHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IGZldGNoQ29udmVyc2F0aW9ucywgc2VsZWN0Q29udmVyc2F0aW9uLCBhZGRNZXNzYWdlLCBmZXRjaE9ubGluZVVzZXJzLCBhZGRPbmxpbmVVc2VyIH0gPSBjYWNoZVNsaWNlLmFjdGlvbnNcclxuZXhwb3J0IGRlZmF1bHQgY2FjaGVTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwic2VsZWN0ZWRDb252ZXJzYXRpb25JZCIsImNvbnZlcnNhdGlvbnMiLCJvbmxpbmVVc2VycyIsImNhY2hlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJmZXRjaENvbnZlcnNhdGlvbnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZWxlY3RDb252ZXJzYXRpb24iLCJhZGRNZXNzYWdlIiwiY29udmVyc2F0aW9uIiwiX2lkIiwiY29udmVyc2F0aW9uSWQiLCJwdXNoIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiZmV0Y2hPbmxpbmVVc2VycyIsImFkZE9ubGluZVVzZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store/slices/cache.ts\n"));

/***/ })

});