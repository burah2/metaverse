"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/CustomTexts.jsx":
/*!************************************!*\
  !*** ./components/CustomTexts.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TitleText: function() { return /* binding */ TitleText; },\n/* harmony export */   TypingText: function() { return /* binding */ TypingText; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/motion */ \"(app-pages-browser)/./utils/motion.js\");\n/* __next_internal_client_entry_do_not_use__ TypingText,TitleText auto */ \n\n // Assuming textVariant2 is imported from your motion utils\nconst TypingText = (param)=>/*#__PURE__*/ {\n    let { title, textStyles } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {\n        variants: _utils_motion__WEBPACK_IMPORTED_MODULE_1__.textContainer,\n        className: \"font-normal text-[14px] text-secondary-white \".concat(textStyles),\n        children: Array.from(title).map((letter, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_1__.textVariant2,\n                children: letter === \"\" ? \"\\xa0\" : letter\n            }, index, false, {\n                fileName: \"/Users/MAC/Desktop/metaverse/metaverse/components/CustomTexts.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/MAC/Desktop/metaverse/metaverse/components/CustomTexts.jsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, undefined);\n};\n_c = TypingText;\nconst TitleText = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Title Text\"\n    }, void 0, false, {\n        fileName: \"/Users/MAC/Desktop/metaverse/metaverse/components/CustomTexts.jsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n_c1 = TitleText;\nvar _c, _c1;\n$RefreshReg$(_c, \"TypingText\");\n$RefreshReg$(_c1, \"TitleText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ3VzdG9tVGV4dHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN1QztBQUN1QixDQUFDLDJEQUEyRDtBQUVuSCxNQUFNRyxhQUFhO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUU7V0FDOUMsOERBQUNMLGlEQUFNQSxDQUFDTSxDQUFDO1FBQUNDLFVBQVVOLHdEQUFhQTtRQUFFTyxXQUFXLGdEQUEyRCxPQUFYSDtrQkFDM0ZJLE1BQU1DLElBQUksQ0FBQ04sT0FBT08sR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUM5Qiw4REFBQ2IsaURBQU1BLENBQUNjLElBQUk7Z0JBQUNQLFVBQVVMLHVEQUFZQTswQkFDaENVLFdBQVcsS0FBSyxTQUFXQTtlQURZQzs7Ozs7Ozs7OztBQUlwQyxFQUNWO0tBUldWO0FBVU4sTUFBTVksWUFBWSxrQkFDdkIsOERBQUNDO2tCQUFHOzs7OztrQkFDSjtNQUZXRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1c3RvbVRleHRzLmpzeD9lY2U0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdGV4dENvbnRhaW5lciwgdGV4dFZhcmlhbnQyIH0gZnJvbSBcIi4uL3V0aWxzL21vdGlvblwiOyAvLyBBc3N1bWluZyB0ZXh0VmFyaWFudDIgaXMgaW1wb3J0ZWQgZnJvbSB5b3VyIG1vdGlvbiB1dGlsc1xuXG5leHBvcnQgY29uc3QgVHlwaW5nVGV4dCA9ICh7IHRpdGxlLCB0ZXh0U3R5bGVzIH0pID0+IChcbiAgPG1vdGlvbi5wIHZhcmlhbnRzPXt0ZXh0Q29udGFpbmVyfSBjbGFzc05hbWU9e2Bmb250LW5vcm1hbCB0ZXh0LVsxNHB4XSB0ZXh0LXNlY29uZGFyeS13aGl0ZSAke3RleHRTdHlsZXN9YH0+XG4gICAge0FycmF5LmZyb20odGl0bGUpLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxuICAgICAgPG1vdGlvbi5zcGFuIHZhcmlhbnRzPXt0ZXh0VmFyaWFudDJ9IGtleT17aW5kZXh9PlxuICAgICAgICB7bGV0dGVyID09PSAnJyA/ICdcXHUwMEEwJyA6IGxldHRlcn1cbiAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgKSl9XG4gIDwvbW90aW9uLnA+XG4pO1xuXG5leHBvcnQgY29uc3QgVGl0bGVUZXh0ID0gKCkgPT4gKFxuICA8aDI+VGl0bGUgVGV4dDwvaDI+XG4pO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInRleHRDb250YWluZXIiLCJ0ZXh0VmFyaWFudDIiLCJUeXBpbmdUZXh0IiwidGl0bGUiLCJ0ZXh0U3R5bGVzIiwicCIsInZhcmlhbnRzIiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwibGV0dGVyIiwiaW5kZXgiLCJzcGFuIiwiVGl0bGVUZXh0IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CustomTexts.jsx\n"));

/***/ })

});