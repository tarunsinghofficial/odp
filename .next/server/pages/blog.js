"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195,86];
exports.modules = {

/***/ 5540:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);
axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/posts"
        );

        const fetchedBlogs = response.data.map((blog) => {
          return {
            id: blog.id,
            title: blog.title.rendered,
            description: blog.excerpt.rendered,
            date: new Date(blog.date).toLocaleDateString(),
            author: blog.author,
            slug: blog.slug,
            featured_media: blog.featured_media,
            content: blog.content.rendered,
          };
        });

        const featuredImagePromises = fetchedBlogs.map(async (blog) => {
          if (blog.featured_media) {
            const featuredImageResponse = await axios.get(
              `https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/media/${blog.featured_media}`
            );
            blog.featuredImage = featuredImageResponse.data.source_url;
          }
          return blog;
        });

        const blogsWithFeaturedImage = await Promise.all(featuredImagePromises);

        setBlogs(blogsWithFeaturedImage);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  const calculateReadTime = (content) => {
    if (!content) {
      return 0;
    }
    const wordsPerMinute = 200; // Adjust this value as needed
    const words = content.split(" ");
    const readTimeMinutes = Math.ceil(words.length / wordsPerMinute);
    return readTimeMinutes;
  };

  const truncateContent = (content, wordLimit) => {
    if (!content) {
      return "";
    }
    const words = content.trim().split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return content;
  };

  return (
      <div className="mt-[73px]">
        <div className="flex flex-col md:flex-row lg:flex-row p-4 bg-green-900 items-center justify-center gap-1 md:gap-60 lg:gap-72">
          <div className="flex flex-col p-4 gap-4 items-center my-12 max-w-3xl text-left">
            <h1 className="text-5xl md:text-7xl lg:text-7xl text-white font-bold">
              OneDevPlace <span className="text-yellow-400">Blogs</span>
            </h1>
            <p className="text-lg text-white">Latest posts</p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.id}>
                <div className="cursor-pointer">
                  <div className="bg-white rounded-lg overflow-hidden transition duration-300">
                    <div className="">
                      {blog.featuredImage && (
                        <Image
                          src={blog.featuredImage}
                          alt="Featured Image"
                          layout="responsive"
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                      )}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center space-x-1 mt-5">
                      <p>
                        {blog.date}, {calculateReadTime(blog.content)} min read
                      </p>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Blog;
 */ 




const Blog = ({ blogs  })=>{
    const calculateReadTime = (content)=>{
        if (!content) {
            return 0;
        }
        const wordsPerMinute = 200; // Adjust this value as needed
        const words = content.split(" ");
        const readTimeMinutes = Math.ceil(words.length / wordsPerMinute);
        return readTimeMinutes;
    };
    const truncateContent = (content, wordLimit)=>{
        if (!content) {
            return "";
        }
        const words = content.trim().split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return content;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-[73px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col md:flex-row lg:flex-row p-4 bg-green-900 items-center justify-center gap-1 md:gap-60 lg:gap-72",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col p-4 gap-4 items-center my-12 max-w-3xl text-left",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-5xl md:text-7xl lg:text-7xl text-white font-bold",
                            children: [
                                "OneDevPlace ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-yellow-400",
                                    children: "Blogs"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg text-white",
                            children: "Latest posts"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10",
                    children: blogs.map((blog)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/blog/${blog.slug}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "cursor-pointer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "bg-white rounded-lg overflow-hidden transition duration-300",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "",
                                            children: blog.featuredImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: blog.featuredImage,
                                                alt: "Featured Image",
                                                layout: "responsive",
                                                width: 100,
                                                height: 100,
                                                className: "rounded-lg"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-sm text-gray-500 flex items-center space-x-1 mt-5",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    blog.date,
                                                    ", ",
                                                    calculateReadTime(blog.content),
                                                    " min read"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "text-2xl font-bold mb-2",
                                            children: blog.title
                                        })
                                    ]
                                })
                            })
                        }, blog.id))
                })
            })
        ]
    });
};
async function getServerSideProps() {
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get("https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/posts");
        const fetchedBlogs = response.data.map((blog)=>{
            return {
                id: blog.id,
                title: blog.title.rendered,
                description: blog.excerpt.rendered,
                date: new Date(blog.date).toLocaleDateString(),
                author: blog.author,
                slug: blog.slug,
                featured_media: blog.featured_media,
                content: blog.content.rendered
            };
        });
        const featuredImagePromises = fetchedBlogs.map(async (blog)=>{
            if (blog.featured_media) {
                const featuredImageResponse = await axios__WEBPACK_IMPORTED_MODULE_4__["default"].get(`https://dev-onedevplaceblog.pantheonsite.io/wp-json/wp/v2/media/${blog.featured_media}`);
                blog.featuredImage = featuredImageResponse.data.source_url;
            }
            return blog;
        });
        const blogsWithFeaturedImage = await Promise.all(featuredImagePromises);
        return {
            props: {
                blogs: blogsWithFeaturedImage
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                blogs: []
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,664], () => (__webpack_exec__(5540)));
module.exports = __webpack_exports__;

})();