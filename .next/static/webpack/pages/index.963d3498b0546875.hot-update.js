"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Provider.tsx":
/*!*********************************!*\
  !*** ./components/Provider.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Provider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_coinbase_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/coinbase-wallet */ \"./node_modules/@web3-react/coinbase-wallet/dist/index.js\");\n/* harmony import */ var _web3_react_coinbase_wallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_coinbase_wallet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/index.js\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/metamask */ \"./node_modules/@web3-react/metamask/dist/index.js\");\n/* harmony import */ var _web3_react_metamask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_metamask__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/walletconnect */ \"./node_modules/@web3-react/walletconnect/dist/index.js\");\n/* harmony import */ var _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connectors/coinbaseWallet */ \"./connectors/coinbaseWallet.ts\");\n/* harmony import */ var _connectors_metaMask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../connectors/metaMask */ \"./connectors/metaMask.ts\");\n/* harmony import */ var _connectors_walletConnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connectors/walletConnect */ \"./connectors/walletConnect.ts\");\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction getName(connector) {\n    if (_instanceof(connector, _web3_react_metamask__WEBPACK_IMPORTED_MODULE_3__.MetaMask)) return \"MetaMask\";\n    if (_instanceof(connector, _web3_react_walletconnect__WEBPACK_IMPORTED_MODULE_4__.WalletConnect)) return \"WalletConnect\";\n    if (_instanceof(connector, _web3_react_coinbase_wallet__WEBPACK_IMPORTED_MODULE_1__.CoinbaseWallet)) return \"Coinbase Wallet\";\n    return \"Unknown\";\n}\nvar connectors = [\n    [\n        _connectors_metaMask__WEBPACK_IMPORTED_MODULE_6__.metaMask,\n        _connectors_metaMask__WEBPACK_IMPORTED_MODULE_6__.hooks\n    ],\n    [\n        _connectors_walletConnect__WEBPACK_IMPORTED_MODULE_7__.walletConnect,\n        _connectors_walletConnect__WEBPACK_IMPORTED_MODULE_7__.hooks\n    ],\n    [\n        _connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.coinbaseWallet,\n        _connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.hooks\n    ]\n];\nfunction Child() {\n    _s();\n    var connector = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)().connector;\n    console.log(\"Priority Connector is: \".concat(getName(connector)));\n    return null;\n}\n_s(Child, \"3nCuwTqyRETe60NYVRn4d4zNsJk=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React\n    ];\n});\n_c = Child;\nfunction Provider() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.Web3ReactProvider, {\n        connectors: connectors,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Child, {}, void 0, false, {\n            fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/Provider.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/Provider.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n_c1 = Provider;\nvar _c, _c1;\n$RefreshReg$(_c, \"Child\");\n$RefreshReg$(_c1, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb3ZpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUE0RDtBQUNzQjtBQUNuQztBQUVVO0FBQ2tDO0FBQ2xCO0FBQ2U7O0FBRXhGLFNBQVNZLE9BQU8sQ0FBQ0MsU0FBb0IsRUFBRTtJQUNyQyxJQUFJQSxXQUE2QixDQUE3QkEsU0FBUyxFQUFZViwwREFBUSxHQUFFLE9BQU8sVUFBVTtJQUNwRCxJQUFJVSxXQUFrQyxDQUFsQ0EsU0FBUyxFQUFZVCxvRUFBYSxHQUFFLE9BQU8sZUFBZTtJQUM5RCxJQUFJUyxXQUFtQyxDQUFuQ0EsU0FBUyxFQUFZYix1RUFBYyxHQUFFLE9BQU8saUJBQWlCO0lBQ2pFLE9BQU8sU0FBUztDQUNqQjtBQUVELElBQU1jLFVBQVUsR0FBa0U7SUFDaEY7UUFBQ0wsMERBQVE7UUFBRUQsdURBQWE7S0FBQztJQUN6QjtRQUFDRyxvRUFBYTtRQUFFRCw0REFBa0I7S0FBQztJQUNuQztRQUFDTCxzRUFBYztRQUFFRSw2REFBbUI7S0FBQztDQUN0QztBQUVELFNBQVNRLEtBQUssR0FBRzs7SUFDZixJQUFNLFNBQVcsR0FBS2QsOERBQVksRUFBRSxDQUE1QlksU0FBUztJQUNqQkcsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXdCLENBQXFCLE9BQW5CTCxPQUFPLENBQUNDLFNBQVMsQ0FBQyxDQUFFLENBQUM7SUFDM0QsT0FBTyxJQUFJO0NBQ1o7R0FKUUUsS0FBSzs7UUFDVWQsMERBQVk7OztBQUQzQmMsS0FBQUEsS0FBSztBQU1DLFNBQVNHLFFBQVEsR0FBRztJQUNqQyxxQkFDRSw4REFBQ2hCLCtEQUFpQjtRQUFDWSxVQUFVLEVBQUVBLFVBQVU7a0JBQ3ZDLDRFQUFDQyxLQUFLOzs7O2dCQUFHOzs7OztZQUNTLENBQ3JCO0NBQ0Y7QUFOdUJHLE1BQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm92aWRlci50c3g/NThkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2luYmFzZVdhbGxldCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvaW5iYXNlLXdhbGxldCdcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCwgV2ViM1JlYWN0SG9va3MsIFdlYjNSZWFjdFByb3ZpZGVyIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcbmltcG9ydCB7IE1ldGFNYXNrIH0gZnJvbSAnQHdlYjMtcmVhY3QvbWV0YW1hc2snXG5pbXBvcnQgdHlwZSB7IENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3R5cGVzJ1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QnXG5pbXBvcnQgeyBjb2luYmFzZVdhbGxldCwgaG9va3MgYXMgY29pbmJhc2VXYWxsZXRIb29rcyB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvY29pbmJhc2VXYWxsZXQnXG5pbXBvcnQgeyBob29rcyBhcyBtZXRhTWFza0hvb2tzLCBtZXRhTWFzayB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvbWV0YU1hc2snXG5pbXBvcnQgeyBob29rcyBhcyB3YWxsZXRDb25uZWN0SG9va3MsIHdhbGxldENvbm5lY3QgfSBmcm9tICcuLi9jb25uZWN0b3JzL3dhbGxldENvbm5lY3QnXG5cbmZ1bmN0aW9uIGdldE5hbWUoY29ubmVjdG9yOiBDb25uZWN0b3IpIHtcbiAgaWYgKGNvbm5lY3RvciBpbnN0YW5jZW9mIE1ldGFNYXNrKSByZXR1cm4gJ01ldGFNYXNrJ1xuICBpZiAoY29ubmVjdG9yIGluc3RhbmNlb2YgV2FsbGV0Q29ubmVjdCkgcmV0dXJuICdXYWxsZXRDb25uZWN0J1xuICBpZiAoY29ubmVjdG9yIGluc3RhbmNlb2YgQ29pbmJhc2VXYWxsZXQpIHJldHVybiAnQ29pbmJhc2UgV2FsbGV0J1xuICByZXR1cm4gJ1Vua25vd24nXG59XG5cbmNvbnN0IGNvbm5lY3RvcnM6IFtNZXRhTWFzayB8IFdhbGxldENvbm5lY3QgfCBDb2luYmFzZVdhbGxldCwgV2ViM1JlYWN0SG9va3NdW10gPSBbXG4gIFttZXRhTWFzaywgbWV0YU1hc2tIb29rc10sXG4gIFt3YWxsZXRDb25uZWN0LCB3YWxsZXRDb25uZWN0SG9va3NdLFxuICBbY29pbmJhc2VXYWxsZXQsIGNvaW5iYXNlV2FsbGV0SG9va3NdXG5dXG5cbmZ1bmN0aW9uIENoaWxkKCkge1xuICBjb25zdCB7IGNvbm5lY3RvciB9ID0gdXNlV2ViM1JlYWN0KClcbiAgY29uc29sZS5sb2coYFByaW9yaXR5IENvbm5lY3RvciBpczogJHtnZXROYW1lKGNvbm5lY3Rvcil9YClcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGNvbm5lY3RvcnM9e2Nvbm5lY3RvcnN9PlxuICAgICAgPENoaWxkIC8+XG4gICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkNvaW5iYXNlV2FsbGV0IiwidXNlV2ViM1JlYWN0IiwiV2ViM1JlYWN0UHJvdmlkZXIiLCJNZXRhTWFzayIsIldhbGxldENvbm5lY3QiLCJjb2luYmFzZVdhbGxldCIsImhvb2tzIiwiY29pbmJhc2VXYWxsZXRIb29rcyIsIm1ldGFNYXNrSG9va3MiLCJtZXRhTWFzayIsIndhbGxldENvbm5lY3RIb29rcyIsIndhbGxldENvbm5lY3QiLCJnZXROYW1lIiwiY29ubmVjdG9yIiwiY29ubmVjdG9ycyIsIkNoaWxkIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Provider.tsx\n");

/***/ })

});