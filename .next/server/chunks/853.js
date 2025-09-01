"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 4853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BlogLayout: () => (/* binding */ BlogLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./lib/formatDate.ts
function formatDate(dateString) {
    return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    });
}

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(566);
;// CONCATENATED MODULE: ./src/components/Prose.tsx


function Prose({ children, className }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,clsx/* default */.Z)(className, "prose prose-sm prose-blue max-w-none prose-p:text-secondary prose-headings:text-primary"),
        children: children
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/Container.tsx


const Container = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: `max-w-4xl w-full mx-auto py-20 px-4 md:px-10`,
        children: children
    });
};

// EXTERNAL MODULE: ./src/components/Heading.tsx
var Heading = __webpack_require__(6150);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Paragraph.tsx
var Paragraph = __webpack_require__(4611);
;// CONCATENATED MODULE: ./src/components/BlogLayout.tsx
/* __next_internal_client_entry_do_not_use__ BlogLayout auto */ 








function ArrowLeftIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
function BlogLayout({ children, meta, isRssFeed = false, previousPathname }) {
    let router = (0,navigation.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            type: "button",
                            href: "/blog",
                            "aria-label": "Go back to articles",
                            className: "group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowLeftIcon, {
                                className: "h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Heading/* Heading */.X, {
                            className: " py-4",
                            children: meta.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("time", {
                            dateTime: meta.date,
                            className: "flex items-center text-base text-zinc-400 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Paragraph/* Paragraph */.n, {
                                className: " text-zinc-700",
                                children: formatDate(meta.date)
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full mt-4 aspect-w-16 aspect-h-10 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: meta.image,
                                alt: "thumbnail",
                                height: "800",
                                width: "800",
                                className: `object-cover object-left-top w-full max-h-96`
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Prose, {
                    className: "mt-8",
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 4611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9610);



const Paragraph = ({ className, children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__/* .twMerge */ .m)("text-sm lg:text-base font-normal text-secondary", className),
        children: children
    });
};


/***/ })

};
;