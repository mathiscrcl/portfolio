"use strict";
exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 4431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeWindow: () => (/* binding */ CodeWindow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566);
/* __next_internal_client_entry_do_not_use__ CodeWindow auto */ 

// import "prism-theme-night-owl";

const CodeWindow = ({ title, children })=>{
    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsClient(true);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // Prism.highlightAll();
    }, []);
    let child = react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children);
    const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Copy");
    const childRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleClick = (e)=>{
        if (childRef.current) {
            const textToCopy = childRef.current.innerText;
            navigator.clipboard.writeText(textToCopy).then(()=>{
                setButtonText("Copied!");
                setTimeout(()=>{
                    setButtonText("Copy");
                }, 1000);
            }).catch((err)=>{
                console.error("Error copying text to clipboard:", err);
            });
        }
    };
    return isClient && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("bg-slate-900 rounded-md w-auto overflow-hidden flex flex-col my-10 prose prose-sm ", "prose prose-slate max-w-none dark:prose-invert dark:text-slate-400", // headings
        "prose-headings:scroll-mt-28  prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]", // lead
        "prose-lead:text-slate-500 dark:prose-lead:text-slate-400", // links
        "prose-a:font-semibold dark:prose-a:text-sky-400", // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]", // pre
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10", // hr
        "dark:prose-hr:border-slate-800"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center bg-slate-800 py-2  px-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: " text-emerald-500 text-sm font-medium bg-emerald-600/[0.3] px-2 !my-0 shadow-sm",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: handleClick,
                        className: "group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6 shadow-xl shadow-zinc-950 text-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute inset-0 overflow-hidden rounded-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10",
                                children: buttonText
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: childRef,
                children: children
            })
        ]
    });
};


/***/ })

};
;