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

/***/ "./components/App.tsx":
/*!****************************!*\
  !*** ./components/App.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _connectors_metaMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connectors/metaMask */ \"./connectors/metaMask.ts\");\n/* harmony import */ var _connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connectors/coinbaseWallet */ \"./connectors/coinbaseWallet.ts\");\n/* harmony import */ var _connectors_walletConnect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../connectors/walletConnect */ \"./connectors/walletConnect.ts\");\n/* harmony import */ var _ConnectModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConnectModal */ \"./components/ConnectModal.tsx\");\n/* harmony import */ var _MetamaskDApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MetamaskDApp */ \"./components/MetamaskDApp.tsx\");\n/* harmony import */ var _CoinbaseWalletDApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CoinbaseWalletDApp */ \"./components/CoinbaseWalletDApp.tsx\");\n/* harmony import */ var _WalletConnectDApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WalletConnectDApp */ \"./components/WalletConnectDApp.tsx\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    _s();\n    var useIsActiveMM = _connectors_metaMask__WEBPACK_IMPORTED_MODULE_2__.hooks.useIsActive;\n    var useIsActiveCB = _connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_3__.hooks.useIsActive;\n    var useIsActiveWC = _connectors_walletConnect__WEBPACK_IMPORTED_MODULE_4__.hooks.useIsActive;\n    var isActiveMM = useIsActiveMM();\n    var isActiveCB = useIsActiveCB();\n    var isActiveWC = useIsActiveWC();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), connector = ref[0], setConnector = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (isActiveMM) {\n            setConnector(\"Metamask\");\n        } else if (isActiveCB) {\n            setConnector(\"Coinbase Wallet\");\n        } else if (isActiveWC) {\n            setConnector(\"Wallet Connect\");\n        } else {\n            setConnector(\"\");\n        }\n    }, [\n        isActiveMM,\n        isActiveWC,\n        isActiveCB\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !connector && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConnectModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/App.tsx\",\n                lineNumber: 37,\n                columnNumber: 28\n            }, this),\n            connector === \"Metamask\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MetamaskDApp__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/App.tsx\",\n                lineNumber: 38,\n                columnNumber: 42\n            }, this),\n            connector === \"Coinbase Wallet\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoinbaseWalletDApp__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/App.tsx\",\n                lineNumber: 39,\n                columnNumber: 49\n            }, this),\n            connector === \"Wallet Connect\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WalletConnectDApp__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/App.tsx\",\n                lineNumber: 40,\n                columnNumber: 48\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/App.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n};\n_s(App, \"BE+DchNPfXFFmWQuOfKLP8RE+/M=\", true);\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMkM7QUFDbUI7QUFDYTtBQUNZO0FBQzdDO0FBQ0E7QUFDWTtBQUNGOztBQUdyQyxTQUFTVSxHQUFHLEdBQUc7O0lBQzFCLElBQVFDLGFBQTBCLEdBQUtSLG1FQUFwQjtJQUNuQixJQUFRUSxhQUEwQixHQUFLUCx5RUFBcEI7SUFDbkIsSUFBUU8sYUFBMEIsR0FBS04sd0VBQXBCO0lBRW5CLElBQU1VLFVBQVUsR0FBR0gsYUFBYSxFQUFFO0lBQ2xDLElBQU1JLFVBQVUsR0FBR0gsYUFBYSxFQUFFO0lBQ2xDLElBQU1JLFVBQVUsR0FBR0gsYUFBYSxFQUFFO0lBRWxDLElBQWtDYixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBcEJsRCxTQW9Cb0IsR0FBa0JBLEdBQVksR0FBOUIsRUFwQnBCLFlBb0JrQyxHQUFJQSxHQUFZLEdBQWhCO0lBRTlCRCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFJZSxVQUFVLEVBQUU7WUFDWkksWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVCLE1BQU0sSUFBSUgsVUFBVSxFQUFFO1lBQ25CRyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNuQyxNQUFNLElBQUlGLFVBQVUsRUFBRTtZQUNuQkUsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1NBQ2pDLE1BQU07WUFDSEEsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BCO0tBQ0osRUFBRTtRQUFDSixVQUFVO1FBQUVFLFVBQVU7UUFBRUQsVUFBVTtLQUFDLENBQUM7SUFFeEMscUJBQ0ksOERBQUNJLEtBQUc7O1lBQ0MsQ0FBQ0YsU0FBUyxrQkFBSSw4REFBQ1oscURBQVk7Ozs7b0JBQUc7WUFDOUJZLFNBQVMsS0FBSyxVQUFVLGtCQUFJLDhEQUFDWCxxREFBWTs7OztvQkFBRztZQUM1Q1csU0FBUyxLQUFLLGlCQUFpQixrQkFBSSw4REFBQ1YsMkRBQWtCOzs7O29CQUFHO1lBQ3pEVSxTQUFTLEtBQUssZ0JBQWdCLGtCQUFJLDhEQUFDVCwwREFBaUI7Ozs7b0JBQUc7Ozs7OztZQUN0RCxDQUNUO0NBQ0o7R0EvQnVCQyxHQUFHO0FBQUhBLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHAudHN4P2MwZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBob29rcyBhcyBtZXRhbWFza0hvb2tzfSBmcm9tICcuLi9jb25uZWN0b3JzL21ldGFNYXNrJ1xuaW1wb3J0IHsgaG9va3MgYXMgY29pbmJhc2VXYWxsZXRIb29rcyB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvY29pbmJhc2VXYWxsZXQnXG5pbXBvcnQgeyBob29rcyBhcyB3YWxsZXRDb25uZWN0SG9va3MsIHdhbGxldENvbm5lY3R9IGZyb20gJy4uL2Nvbm5lY3RvcnMvd2FsbGV0Q29ubmVjdCdcbmltcG9ydCBDb25uZWN0TW9kYWwgZnJvbSAnLi9Db25uZWN0TW9kYWwnO1xuaW1wb3J0IE1ldGFtYXNrREFwcCBmcm9tICcuL01ldGFtYXNrREFwcCc7XG5pbXBvcnQgQ29pbmJhc2VXYWxsZXREQXBwIGZyb20gJy4vQ29pbmJhc2VXYWxsZXREQXBwJztcbmltcG9ydCBXYWxsZXRDb25uZWN0REFwcCBmcm9tICcuL1dhbGxldENvbm5lY3REQXBwJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gICAgY29uc3QgeyB1c2VJc0FjdGl2ZTogdXNlSXNBY3RpdmVNTSB9ID0gbWV0YW1hc2tIb29rcztcbiAgICBjb25zdCB7IHVzZUlzQWN0aXZlOiB1c2VJc0FjdGl2ZUNCIH0gPSBjb2luYmFzZVdhbGxldEhvb2tzO1xuICAgIGNvbnN0IHsgdXNlSXNBY3RpdmU6IHVzZUlzQWN0aXZlV0MgfSA9IHdhbGxldENvbm5lY3RIb29rcztcblxuICAgIGNvbnN0IGlzQWN0aXZlTU0gPSB1c2VJc0FjdGl2ZU1NKCk7XG4gICAgY29uc3QgaXNBY3RpdmVDQiA9IHVzZUlzQWN0aXZlQ0IoKTtcbiAgICBjb25zdCBpc0FjdGl2ZVdDID0gdXNlSXNBY3RpdmVXQygpO1xuICAgIFxuICAgIGNvbnN0IFtjb25uZWN0b3IsIHNldENvbm5lY3Rvcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNBY3RpdmVNTSkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdG9yKCdNZXRhbWFzaycpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQWN0aXZlQ0IpIHtcbiAgICAgICAgICAgIHNldENvbm5lY3RvcignQ29pbmJhc2UgV2FsbGV0Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmVXQykge1xuICAgICAgICAgICAgc2V0Q29ubmVjdG9yKCdXYWxsZXQgQ29ubmVjdCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRDb25uZWN0b3IoJycpO1xuICAgICAgICB9XG4gICAgfSwgW2lzQWN0aXZlTU0sIGlzQWN0aXZlV0MsIGlzQWN0aXZlQ0JdKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IWNvbm5lY3RvciAmJiA8Q29ubmVjdE1vZGFsIC8+fVxuICAgICAgICAgICAge2Nvbm5lY3RvciA9PT0gJ01ldGFtYXNrJyAmJiA8TWV0YW1hc2tEQXBwIC8+fVxuICAgICAgICAgICAge2Nvbm5lY3RvciA9PT0gJ0NvaW5iYXNlIFdhbGxldCcgJiYgPENvaW5iYXNlV2FsbGV0REFwcCAvPn1cbiAgICAgICAgICAgIHtjb25uZWN0b3IgPT09ICdXYWxsZXQgQ29ubmVjdCcgJiYgPFdhbGxldENvbm5lY3REQXBwIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaG9va3MiLCJtZXRhbWFza0hvb2tzIiwiY29pbmJhc2VXYWxsZXRIb29rcyIsIndhbGxldENvbm5lY3RIb29rcyIsIkNvbm5lY3RNb2RhbCIsIk1ldGFtYXNrREFwcCIsIkNvaW5iYXNlV2FsbGV0REFwcCIsIldhbGxldENvbm5lY3REQXBwIiwiQXBwIiwidXNlSXNBY3RpdmUiLCJ1c2VJc0FjdGl2ZU1NIiwidXNlSXNBY3RpdmVDQiIsInVzZUlzQWN0aXZlV0MiLCJpc0FjdGl2ZU1NIiwiaXNBY3RpdmVDQiIsImlzQWN0aXZlV0MiLCJjb25uZWN0b3IiLCJzZXRDb25uZWN0b3IiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/App.tsx\n");

/***/ })

});