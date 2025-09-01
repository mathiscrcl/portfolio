"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 6414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Products: () => (/* binding */ Products)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/components/Heading.tsx
var Heading = __webpack_require__(6150);
// EXTERNAL MODULE: ./public/images/opensource.png
var opensource = __webpack_require__(7717);
// EXTERNAL MODULE: ./public/images/CMSProjet.png
var CMSProjet = __webpack_require__(8583);
// EXTERNAL MODULE: ./public/images/CodeCMS.png
var CodeCMS = __webpack_require__(9644);
// EXTERNAL MODULE: ./public/images/CodeCMS2.png
var CodeCMS2 = __webpack_require__(268);
// EXTERNAL MODULE: ./public/images/entreeMACRO.png
var entreeMACRO = __webpack_require__(113);
// EXTERNAL MODULE: ./public/images/CodeMACRO1.png
var CodeMACRO1 = __webpack_require__(8247);
// EXTERNAL MODULE: ./public/images/ExportMACRO.png
var ExportMACRO = __webpack_require__(3834);
;// CONCATENATED MODULE: ./src/constants/products.tsx








const products = [
    {
        title: "Macros Excel Industrielles",
        description: "D\xe9veloppement de macros Excel en python pour l'industrie de l'hydrog\xe8ne.",
        thumbnail: entreeMACRO["default"],
        images: [
            CodeMACRO1["default"],
            ExportMACRO["default"]
        ],
        stack: [
            "XLWings",
            "Panda",
            "Python",
            "Excel/VBA"
        ],
        slug: "aceternity",
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "R\xe9alis\xe9 lors de mon alternance chez ATP System, ce projet consistait \xe0 d\xe9velopper des macros Excel-Python avanc\xe9es pour automatiser la g\xe9n\xe9ration de code Ladder destin\xe9 aux automates Rockwell ControlLogix dans l'industrie PSA (Pressure Swing Adsorption)."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "J'ai ma\xeetris\xe9 l'\xe9cosyst\xe8me Python avec les librairies XLwings et Pandas pour cr\xe9er une interface intelligente capable de convertir automatiquement les sp\xe9cifications clients en code d'automatisme industriel. Le projet incluait la manipulation avanc\xe9e de donn\xe9es Excel, le parsing de documentation technique, et la g\xe9n\xe9ration automatique de routines Ladder au format ASCII. Cette r\xe9alisation a permis de r\xe9duire significativement les temps de d\xe9veloppement tout en minimisant les erreurs humaines dans un contexte industriel critique."
                })
            ]
        })
    },
    {
        title: "Base de donn\xe9es CMS avec reconnaissance cam\xe9ra",
        description: "Syst\xe8me de gestion de contenu avec intelligence artificielle pour la reconnaissance d'objets via cam\xe9ra, d\xe9velopp\xe9 avec PyTorch.",
        thumbnail: CMSProjet["default"],
        images: [
            CodeCMS["default"],
            CodeCMS2["default"]
        ],
        stack: [
            "PyTorch",
            "Python"
        ],
        slug: "algochurn",
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "R\xe9alis\xe9 lors de mon alternance chez ATP System, ce projet consistait \xe0 d\xe9velopper des macros Excel-Python avanc\xe9es pour automatiser la g\xe9n\xe9ration de code Ladder destin\xe9 aux automates Rockwell ControlLogix dans l'industrie PSA (Pressure Swing Adsorption). . ",
                        " "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "J'ai con\xe7u et entra\xeen\xe9 un r\xe9seau de neurones convolutionnel (CNN) personnalis\xe9 avec PyTorch, capable de classifier diff\xe9rents types de composants \xe0 partir d'images. Le projet incluait la cr\xe9ation d'un dataset annot\xe9 collaboratif, l'optimisation de l'architecture r\xe9seau (LeNet modifi\xe9), et le d\xe9veloppement d'une application de d\xe9tection en temps r\xe9el. Cette premi\xe8re exp\xe9rience m'a permis de ma\xeetriser le cycle complet de d\xe9veloppement en IA : preprocessing de donn\xe9es, deep learning, computer vision et d\xe9ploiement d'applications intelligentes dans un contexte industriel."
                }),
                " "
            ]
        })
    },
    {
        title: "Code Open Source",
        description: "Participation au code open source de particulier sur Github.",
        thumbnail: opensource["default"],
        images: [],
        stack: [
            "Git"
        ],
        slug: "moonbeam",
        content: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Je participe r\xe9guli\xe8rement \xe0 des projets open source sur GitHub, contribuant principalement par des corrections de bugs et l'am\xe9lioration de documentation existante. Cette activit\xe9 me permet de travailler sur des projets vari\xe9s tout en appliquant les bonnes pratiques de d\xe9veloppement collaboratif. L'exp\xe9rience de la revue de code et du travail en \xe9quipe distribu\xe9e compl\xe8te ma formation technique. ",
                    " "
                ]
            })
        })
    }
];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Paragraph.tsx
var Paragraph = __webpack_require__(4611);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 192 modules
var motion = __webpack_require__(1691);
;// CONCATENATED MODULE: ./src/components/Products.tsx
/* __next_internal_client_entry_do_not_use__ Products auto */ 







const Products = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid grid-cols-1  gap-10",
            children: products.map((product, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.2,
                        delay: idx * 0.1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: product.slug ? `/projects/${product.slug}` : product.href || "#",
                        className: "group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: product.thumbnail,
                                alt: "thumbnail",
                                height: "200",
                                width: "200",
                                className: "rounded-md"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Heading/* Heading */.X, {
                                                as: "h4",
                                                className: "font-black text-lg md:text-lg lg:text-lg ",
                                                children: product.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph/* Paragraph */.n, {
                                                className: "text-sm md:text-sm lg:text-sm mt-2 max-w-xl",
                                                children: product.description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex space-x-2 md:mb-1 mt-2 md:mt-0",
                                        children: product.stack?.map((stack)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary",
                                                children: stack
                                            }, stack))
                                    })
                                ]
                            })
                        ]
                    }, product.slug || product.href || idx)
                }, product.href))
        })
    });
};


/***/ }),

/***/ 2623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/mathis/Desktop/Projets/portfolio/portfolio/src/components/Products.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Products"];


/***/ })

};
;