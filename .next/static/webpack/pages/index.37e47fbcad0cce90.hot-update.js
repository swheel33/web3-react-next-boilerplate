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

/***/ "./components/MetaMaskConnect.tsx":
/*!****************************************!*\
  !*** ./components/MetaMaskConnect.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MetaMaskConnect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _connectors_metaMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connectors/metaMask */ \"./connectors/metaMask.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MetaMaskConnect() {\n    _s();\n    // attempt to connect eagerly on mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        void _connectors_metaMask__WEBPACK_IMPORTED_MODULE_2__.metaMask.connectEagerly();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n        onClick: function() {\n            return _connectors_metaMask__WEBPACK_IMPORTED_MODULE_2__.metaMask.activate();\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n            justify: \"center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                    src: \"/mm-logo.png\",\n                    alt: \"metamask logo\",\n                    width: \"10%\"\n                }, void 0, false, {\n                    fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/MetaMaskConnect.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    children: \"Metamask\"\n                }, void 0, false, {\n                    fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/MetaMaskConnect.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/MetaMaskConnect.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/swheel/Desktop/dev/web3-react-next-boilerplate/components/MetaMaskConnect.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n};\n_s(MetaMaskConnect, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MetaMaskConnect;\nvar _c;\n$RefreshReg$(_c, \"MetaMaskConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGFNYXNrQ29ubmVjdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ2dCO0FBQ1k7O0FBSTlDLFNBQVNNLGVBQWUsR0FBRzs7SUFFdEMsc0NBQXNDO0lBQ3RDTixnREFBUyxDQUFDLFdBQU07UUFDWixLQUFLQyx5RUFBdUIsRUFBRTtLQUNqQyxFQUFFLEVBQUUsQ0FBQztJQUdOLHFCQUNJLDhEQUFDQyxvREFBTTtRQUFDTSxPQUFPLEVBQUU7bUJBQU1QLG1FQUFpQixFQUFFO1NBQUE7a0JBQ3RDLDRFQUFDRSxvREFBTTtZQUFDTyxPQUFPLEVBQUMsUUFBUTs7OEJBQ3BCLDhEQUFDTCxtREFBSztvQkFBQ00sR0FBRyxFQUFDLGNBQWM7b0JBQUNDLEdBQUcsRUFBQyxlQUFlO29CQUFDQyxLQUFLLEVBQUMsS0FBSzs7Ozs7d0JBQUU7OEJBQzNELDhEQUFDVCxrREFBSTs4QkFBQyxVQUFROzs7Ozt3QkFBTzs7Ozs7O2dCQUNoQjs7Ozs7WUFDSixDQUNaO0NBQ0o7R0FoQnVCRSxlQUFlO0FBQWZBLEtBQUFBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXRhTWFza0Nvbm5lY3QudHN4PzBjZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZXRhTWFzayB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvbWV0YU1hc2snXG5pbXBvcnQgeyBCdXR0b24sIEhTdGFjaywgVGV4dCwgSW1hZ2V9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhTWFza0Nvbm5lY3QoKSB7XG5cbiAgICAvLyBhdHRlbXB0IHRvIGNvbm5lY3QgZWFnZXJseSBvbiBtb3VudFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZvaWQgbWV0YU1hc2suY29ubmVjdEVhZ2VybHkoKVxuICAgIH0sIFtdKVxuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtZXRhTWFzay5hY3RpdmF0ZSgpfT5cbiAgICAgICAgICAgIDxIU3RhY2sganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvbW0tbG9nby5wbmcnIGFsdD0nbWV0YW1hc2sgbG9nbycgd2lkdGg9JzEwJScvPlxuICAgICAgICAgICAgICAgIDxUZXh0Pk1ldGFtYXNrPC9UZXh0PlxuICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwibWV0YU1hc2siLCJCdXR0b24iLCJIU3RhY2siLCJUZXh0IiwiSW1hZ2UiLCJNZXRhTWFza0Nvbm5lY3QiLCJjb25uZWN0RWFnZXJseSIsIm9uQ2xpY2siLCJhY3RpdmF0ZSIsImp1c3RpZnkiLCJzcmMiLCJhbHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MetaMaskConnect.tsx\n");

/***/ })

});