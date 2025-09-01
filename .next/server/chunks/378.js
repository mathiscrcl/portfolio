"use strict";
exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 6378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   meta: () => (/* binding */ meta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(586);
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7825);



const meta = {
    date: "2023-04-19",
    title: "Creating a Dark Mode Toggle with Next.js and Tailwind CSS",
    description: `As a web developer, you may be wondering how to create a dark mode toggle for your web application. In this tutorial, we will explore how to implement a dark mode toggle with Next.js and Tailwind CSS.`,
    image: "https://images.unsplash.com/photo-1607799632518-da91dd151b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    tags: [
        "tailwindcss",
        "css",
        "frontend"
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
        code: "code",
        strong: "strong"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a web developer, you may be wondering how to create a dark mode toggle for your web application. In this tutorial, we will explore how to implement a dark mode toggle with Next.js and Tailwind CSS."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Introduction"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The benefits of implementing a dark mode toggle in a web application are numerous. It can help reduce eye strain, improve readability, and even save battery life on mobile devices. The trend towards dark mode has been growing in popularity, and it's no surprise that users are now expecting it as a standard feature in their favorite applications."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Next.js is a React framework that provides server-side rendering, making it easier to create performant and scalable web applications. Tailwind CSS is a utility-first CSS framework that allows for quick and easy styling of web applications."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In this tutorial, we will be using Next.js and Tailwind CSS to create a dark mode toggle for our web application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Setting up the Project"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To get started, we need to install both Next.js and Tailwind CSS. We can install Next.js by running the following command in our terminal:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    children: "    npx create-next-app my-app\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Once Next.js is installed, we can install Tailwind CSS by running the following command:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "npm install tailwindcss"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "After installing Tailwind CSS, we need to create the basic structure of our application. We can do this by creating a new file called ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "index.js"
                    }),
                    " in the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "pages"
                    }),
                    " directory of our project."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In this file, we can add some basic HTML to display our content:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    children: '    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Dark Mode Toggle</title>\n      </head>\n      <body>\n        <div class="container mx-auto py-4">\n          <h1 class="text-4xl font-bold mb-4">Welcome to my Dark Mode Toggle!</h1>\n          <p class="text-lg">Click the button below to switch between light and dark mode.</p>\n          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n            Toggle Theme\n          </button>\n        </div>\n      </body>\n    </html>\n'
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "We can then add some basic styling to our application using Tailwind CSS. We can do this by creating a new file called ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "styles.css"
                    }),
                    " in the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "styles"
                    }),
                    " directory of our project."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In this file, we can add the following code to apply some basic styles to our application:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    children: "    @tailwind base;\n    @tailwind components;\n    @tailwind utilities;\n\n    body {\n      background-color: #f7fafc;\n    .container {\n      max-width: 800px;\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Implementing the Dark Mode Toggle"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Now that our basic application structure and styling are complete, we can move on to implementing the dark mode toggle functionality."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "To do this, we need to create a state variable to track the user's preferred theme. We can do this by adding the following code to our ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "index.js"
                    }),
                    " file:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    children: '    import { useState from "react";\n\n    export default function Home() {\n      const [theme, setTheme] = useState("light");\n\n      return (\n        <div className={theme === "light" ? "bg-white" : "bg-gray-800      <div className="container mx-auto py-4">\n            <h1 className="text-4xl font-bold mb-4">Welcome to my Dark Mode Toggle!</h1>\n            <p className="text-lg">Click the button below to switch between light and dark mode.</p>\n            <button\n              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"\n              onClick={() => setTheme(theme === "light" ? "dark" : "light        >\n              Toggle Theme\n            </button>\n          </div>\n        </div>\n      );\n'
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In this code, we are using the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "useState"
                    }),
                    " hook from React to create a state variable called ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "theme"
                    }),
                    ". The default value of ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "theme"
                    }),
                    " is set to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: '"light"'
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We are also using a ternary operator to conditionally apply a background color to our application based on the user's preferred theme. If the user has selected the light theme, we apply a white background color. If the user has selected the dark theme, we apply a dark gray background color."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "We are also using an ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "onClick"
                    }),
                    " event handler to toggle the user's preferred theme between light and dark."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Improving the User Experience"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Now that we have implemented the basic functionality of our dark mode toggle, we can improve the user experience by adding some additional features."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "First, we can persist the user's theme preference using localStorage. We can do this by adding the following code to our ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "index.js"
                    }),
                    " file:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    children: '    import { useEffect, useState from "react";\n\n    export default function Home() {\n      const [theme, setTheme] = useState("light");\n\n      useEffect(() => {\n        const savedTheme = localStorage.getItem("theme");\n        if (savedTheme) {\n          setTheme(savedTheme);\n         []);\n\n      useEffect(() => {\n        localStorage.setItem("theme", theme);\n      [theme]);\n\n      return (\n        <div className={theme === "light" ? "bg-white" : "bg-gray-800      <div className="container mx-auto py-4">\n            <h1 className="text-4xl font-bold mb-4">Welcome to my Dark Mode Toggle!</h1>\n            <p className="text-lg">Click the button below to switch between light and dark mode.</p>\n            <button\n              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"\n              onClick={() => setTheme(theme === "light" ? "dark" : "light        >\n              Toggle Theme\n            </button>\n          </div>\n        </div>\n      );\n'
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In this code, we are using the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "useEffect"
                    }),
                    " hook from React to load the user's preferred theme from localStorage when the component mounts. We are also using another ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "useEffect"
                    }),
                    " hook to save the user's preferred theme to localStorage whenever it changes."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Next, we can add some animations to our toggle button to enhance user feedback. We can do this by adding the following code to our ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "styles.css"
                    }),
                    " file:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    children: '    @tailwind base;\n    @tailwind components;\n    @tailwind utilities;\n\n    body {\n      background-color: #f7fafc;\n    .container {\n      max-width: 800px;\n    .theme-toggle {\n      position: fixed;\n      bottom: 2rem;\n      right: 2rem;\n    .theme-toggle-button {\n      width: 60px;\n      height: 30px;\n      border-radius: 15px;\n      position: relative;\n    .theme-toggle-button::before {\n      content: "";\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      background-color: #fff;\n      position: absolute;\n      top: 0;\n      left: ${({ theme => (theme === "light" ? "0" : "30px")  transition: all .2s ease-in-out;\n    .theme-toggle-button::after {\n      content: "";\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n      background-color: #000;\n      position: absolute;\n      top: 0;\n      right: ${({ theme => (theme === "light" ? "0" : "30px")  transition: all .2s ease-in-out;\n    .theme-toggle-button:hover::before {\n      transform: scale(1.2);\n    .theme-toggle-button:hover::after {\n      transform: scale(1.2);\n'
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In this code, we are using CSS to create a toggle button with two states - light and dark. We are also using CSS transitions to animate the button when it is hovered over."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Finally, we can implement a media query to automatically switch between light and dark themes based on the user's device settings. We can do this by adding the following code to our ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "styles.css"
                    }),
                    " file:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    children: "    @tailwind base;\n    @tailwind components;\n    @tailwind utilities;\n\n    @media (prefers-color-scheme: dark) {\n      body {\n        background-color: #1a202c;\n       .text-gray-800 {\n        color: #fff;\n       }\n    }\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In this code, we are using a media query to check for the user's preferred color scheme. If the user has selected a dark color scheme, we apply a dark background color and change the text color to white."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Conclusion"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Summary:"
                    }),
                    " We've covered creating a dark mode toggle in Next.js and Tailwind CSS, including project setup, implementing toggle functionality, enhancing UX with localStorage and animations, and auto-switching themes based on device settings."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "By implementing a dark mode toggle in your web application, you can improve the user experience and stay up-to-date with current design trends. With Next.js and Tailwind CSS, creating a dark mode toggle is quick and easy."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you want to further customize and improve the toggle functionality, you can explore the documentation for Next.js and Tailwind CSS to learn more about their capabilities."
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


/***/ })

};
;