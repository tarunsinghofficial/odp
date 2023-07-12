"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 4238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1320);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, html_react_parser__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, html_react_parser__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const BlogPost = ({ blogPost  })=>{
    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isLiked, setIsLiked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { slug  } = router.query;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (blogPost) {
            setLoading(false);
        }
    }, [
        blogPost
    ]);
    const handleLike = ()=>{
        if (!isLiked) {
            setLikes(likes + 1);
        } else {
            setLikes(likes - 1);
        }
        setIsLiked(!isLiked);
    };
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    // Sanitize the HTML content using DOMPurify
    const sanitizedContent = dompurify__WEBPACK_IMPORTED_MODULE_4___default().sanitize(blogPost.content);
    console.log(sanitizedContent);
    // Calculate the estimated read time
    const wordsPerMinute = 200; // Adjust this value based on the desired reading speed
    const wordCount = sanitizedContent.split(" ").length;
    const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mt-[73px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-3xl md:text-4xl lg:text-5xl text-left tracking-wide container mx-auto max-w-4xl mb-4 my-4 blog-title",
                    children: blogPost.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mx-auto flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-row justify-between items-center container mx-auto max-w-4xl py-2 text-left blog-first-details",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-md text-gray-500",
                                            children: [
                                                "Published on ",
                                                blogPost.date,
                                                " by",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-bold",
                                                    children: blogPost.author
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-xl",
                                            children: "\xb7"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-md text-gray-500 mt-1",
                                            children: [
                                                readTimeMinutes,
                                                " min ",
                                                readTimeMinutes > 1,
                                                " read"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "rounded-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        width: 40,
                                        height: 40,
                                        className: "rounded-full",
                                        src: "https://img.freepik.com/premium-vector/gamer-mascot-logo-gaming-badge_10051-451.jpg",
                                        alt: "author"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "bg-green-700 h-0.5 container mx-auto max-w-4xl my-6"
                        }),
                        blogPost.featuredImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full max-w-4xl mt-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                src: blogPost.featuredImage,
                                alt: "Featured Image",
                                width: 860,
                                height: 400,
                                className: "rounded-lg text-center"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full max-w-4xl overflow-clip mt-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "prose prose-lg post-content",
                                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_6__["default"])(sanitizedContent)
                            })
                        }),
                        blogPost.tags.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container px-3 w-screen md:max-w-4xl lg:max-w-4xl items-start mt-8",
                            children: Array.isArray(blogPost.tags) && blogPost.tags.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap space-x-2",
                                children: blogPost.tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-white bg-green-500 w-auto flex items-center justify-center h-10 p-4 rounded-full mt-2",
                                        children: tag
                                    }, tag))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "bg-green-700 h-0.5 container mx-auto max-w-4xl my-6"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container mx-auto max-w-4xl my-10 flex items-center justify-start",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        width: 100,
                                        height: 100,
                                        className: "rounded-full",
                                        src: "https://img.freepik.com/premium-vector/gamer-mascot-logo-gaming-badge_10051-451.jpg",
                                        alt: "author"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "text-3xl text-green-700 pt-3",
                                        children: [
                                            "Written by ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-bold",
                                                children: blogPost.author
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
async function getServerSideProps({ params  }) {
    try {
        const { slug  } = params;
        const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/posts?slug=${slug}`);
        if (response.data.length > 0) {
            const blog = response.data[0];
            const fetchedBlogPost = {
                title: blog.title.rendered,
                content: blog.content.rendered,
                date: new Date(blog.date).toLocaleDateString(),
                author: null,
                tags: [],
                featuredImage: null
            };
            // Fetch author data
            const authorResponse = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/users/${blog.author}`);
            fetchedBlogPost.author = authorResponse.data.name;
            // Fetch tags data
            const tagsResponse = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/tags?include=${blog.tags.join(",")}`);
            fetchedBlogPost.tags = tagsResponse.data.map((tag)=>tag.name);
            // Fetch featured image data
            if (blog.featured_media) {
                const featuredImageResponse = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get(`https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/media/${blog.featured_media}`);
                fetchedBlogPost.featuredImage = featuredImageResponse.data.source_url;
            }
            return {
                props: {
                    blogPost: fetchedBlogPost
                }
            };
        }
    } catch (error) {
        console.error(error);
    }
    return {
        props: {
            blogPost: null
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1320:
/***/ ((module) => {

module.exports = require("dompurify");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675], () => (__webpack_exec__(4238)));
module.exports = __webpack_exports__;

})();