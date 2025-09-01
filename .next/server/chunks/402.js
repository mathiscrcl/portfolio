"use strict";
exports.id = 402;
exports.ids = [402];
exports.modules = {

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   meta: () => (/* binding */ meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(586);
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7825);
/* harmony import */ var _components_CodeWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(463);




const meta = {
    date: "2023-08-18",
    title: "Writing Clean Code With React",
    description: "Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
        "Clean Code"
    ]
};
const MDXLayout = (props)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_1__/* .BlogLayout */ .E, Object.assign({
        meta: meta
    }, props));
function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        h2: "h2",
        pre: "pre",
        code: "code"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Velit cillum fugiat proident pariatur anim proident laborum incididunt magna in labore adipisicing veniam quis. Ut et exercitation dolor in enim quis. Et est excepteur exercitation voluptate in qui duis nulla in anim ut commodo deserunt nisi. Dolor pariatur irure occaecat Lorem mollit veniam adipisicing."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Deserunt qui ea do et laborum ad id. Tempor laborum aute fugiat tempor eu. Amet sint sint proident pariatur eiusmod mollit excepteur excepteur. Dolore cillum nulla enim tempor ad."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Laborum quis proident ut anim consectetur. Consequat fugiat eiusmod qui officia duis eu minim cillum do qui. Sunt sit veniam minim ad id sunt magna est enim."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Consectetur est sunt minim culpa quis aute officia incididunt ea laboris nulla officia dolor. Cupidatat cupidatat esse veniam cillum labore ullamco aliqua ex. Cillum incididunt ipsum laborum dolor enim incididunt consectetur id consectetur magna. Consequat mollit non ea cupidatat exercitation. Consequat reprehenderit eiusmod nisi ea esse id ut est consequat eu aliqua do quis."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Occaecat commodo velit ea consectetur ut sit. Duis eiusmod ad tempor nisi magna dolore incididunt ea dolore. Commodo proident eiusmod consequat cupidatat consectetur adipisicing dolor commodo tempor labore non dolore Lorem consectetur."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Code Snippet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CodeWindow__WEBPACK_IMPORTED_MODULE_2__/* .CodeWindow */ .y, {
                title: "BoxesContainer.tsx",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        className: "language-TSX",
                        children: 'import React from "react";\nimport { motion } from "framer-motion";\n\nexport const BoxesContainer = () => {\n  const rows = new Array(150).fill(1);\n  const cols = new Array(100).fill(1);\n  let colors = [\n    "--sky-300",\n    "--pink-300",\n    "--green-300",\n    "--yellow-300",\n    "--red-300",\n    "--purple-300",\n    "--blue-300",\n    "--indigo-300",\n    "--violet-300",\n  ];\n  const getRandomColor = () => {\n    return colors[Math.floor(Math.random() * colors.length)];\n  };\n\n  return (\n    <div\n      style={{\n        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,\n      }}\n      className="absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 "\n    >\n      {rows.map((_, i) => (\n        <motion.div\n          key={`row` + i}\n          className="w-16 h-8  border-l  border-slate-700 relative"\n        >\n          {cols.map((_, j) => (\n            <motion.div\n              whileHover={{\n                backgroundColor: `var(${getRandomColor()})`,\n                transition: { duration: 0 },\n              }}\n              animate={{\n                transition: { duration: 2 },\n              }}\n              key={`col` + j}\n              className="w-16 h-8  border-r border-t border-slate-700 relative"\n            >\n              {j % 2 === 0 && i % 2 === 0 ? (\n                <svg\n                  xmlns="http://www.w3.org/2000/svg"\n                  fill="none"\n                  viewBox="0 0 24 24"\n                  strokeWidth="1.5"\n                  stroke="currentColor"\n                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"\n                >\n                  <path\n                    strokeLinecap="round"\n                    strokeLinejoin="round"\n                    d="M12 6v12m6-6H6"\n                  />\n                </svg>\n              ) : null}\n            </motion.div>\n          ))}\n        </motion.div>\n      ))}\n    </div>\n  );\n};\n\n'
                    })
                })
            })
        ]
    });
}
function MDXContent(props = {}) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/mathis/Desktop/Projets/portfolio/portfolio/src/components/CodeWindow.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["CodeWindow"];


/***/ })

};
;