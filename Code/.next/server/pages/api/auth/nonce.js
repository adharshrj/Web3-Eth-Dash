"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/nonce";
exports.ids = ["pages/api/auth/nonce"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "(api)/./helpers/env.js":
/*!************************!*\
  !*** ./helpers/env.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"alchemyApiKey\": () => (/* binding */ alchemyApiKey),\n/* harmony export */   \"ensContractAddress\": () => (/* binding */ ensContractAddress),\n/* harmony export */   \"supabase_key\": () => (/* binding */ supabase_key),\n/* harmony export */   \"supabase_url\": () => (/* binding */ supabase_url)\n/* harmony export */ });\nconst alchemyApiKey = process.env.ALCHEMY_API_KEY;\nconst ensContractAddress = process.env.ENS_CONTRACT_ADDRESS;\nconst supabase_url = process.env.NEXT_SUPABASE_URL;\nconst supabase_key = process.env.NEXT_SUPABASE_KEY;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2Vudi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsYUFBYSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZUFBbEM7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUF2QztBQUNBLE1BQU1DLFlBQVksR0FBR0wsT0FBTyxDQUFDQyxHQUFSLENBQVlLLGlCQUFqQztBQUNBLE1BQU1DLFlBQVksR0FBR1AsT0FBTyxDQUFDQyxHQUFSLENBQVlPLGlCQUFqQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjMtZXRoLWRhc2gvLi9oZWxwZXJzL2Vudi5qcz81OGU5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhbGNoZW15QXBpS2V5ID0gcHJvY2Vzcy5lbnYuQUxDSEVNWV9BUElfS0VZO1xyXG5leHBvcnQgY29uc3QgZW5zQ29udHJhY3RBZGRyZXNzID0gcHJvY2Vzcy5lbnYuRU5TX0NPTlRSQUNUX0FERFJFU1M7XHJcbmV4cG9ydCBjb25zdCBzdXBhYmFzZV91cmwgPSBwcm9jZXNzLmVudi5ORVhUX1NVUEFCQVNFX1VSTDtcclxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlX2tleSA9IHByb2Nlc3MuZW52Lk5FWFRfU1VQQUJBU0VfS0VZOyJdLCJuYW1lcyI6WyJhbGNoZW15QXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkFMQ0hFTVlfQVBJX0tFWSIsImVuc0NvbnRyYWN0QWRkcmVzcyIsIkVOU19DT05UUkFDVF9BRERSRVNTIiwic3VwYWJhc2VfdXJsIiwiTkVYVF9TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZV9rZXkiLCJORVhUX1NVUEFCQVNFX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./helpers/env.js\n");

/***/ }),

/***/ "(api)/./helpers/supabase.js":
/*!*****************************!*\
  !*** ./helpers/supabase.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ \"(api)/./helpers/env.js\");\n\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(_env__WEBPACK_IMPORTED_MODULE_1__.supabase_url, _env__WEBPACK_IMPORTED_MODULE_1__.supabase_key);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL3N1cGFiYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUcsUUFBUSxHQUFHSCxtRUFBWSxDQUN6QkUsOENBRHlCLEVBRXpCRCw4Q0FGeUIsQ0FBN0I7QUFJQSxpRUFBZUUsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjMtZXRoLWRhc2gvLi9oZWxwZXJzL3N1cGFiYXNlLmpzP2M5N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xyXG5pbXBvcnQgeyBzdXBhYmFzZV9rZXksIHN1cGFiYXNlX3VybCB9IGZyb20gJy4vZW52JztcclxuXHJcbmNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFxyXG4gICAgc3VwYWJhc2VfdXJsLCBcclxuICAgIHN1cGFiYXNlX2tleSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdXBhYmFzZTsiXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2Vfa2V5Iiwic3VwYWJhc2VfdXJsIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/supabase.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/nonce.js":
/*!*********************************!*\
  !*** ./pages/api/auth/nonce.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/supabase */ \"(api)/./helpers/supabase.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst nonceApi = async (req, res) => {\n  const {\n    walletAddress,\n    ens\n  } = req.body;\n  const secret = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();\n  let {\n    data,\n    error\n  } = await _helpers_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('users').select('secret').eq('walletAddress', walletAddress);\n\n  if (data.length > 0) {\n    let {\n      data,\n      error\n    } = await _helpers_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('users').update({\n      secret\n    }).match({\n      walletAddress\n    }).select();\n    console.log(\"Update Data\", data, error);\n  } else {\n    let {\n      data,\n      error\n    } = await _helpers_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('users').insert({\n      secret,\n      walletAddress,\n      ens\n    }).select();\n    console.log(\"create data\", data, error);\n  }\n\n  console.log(\"data\", data);\n  console.log(\"error\", error);\n\n  if (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  } else {\n    res.status(200).json({\n      secret\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nonceApi);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9ub25jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1HLFFBQVEsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7RUFFakMsTUFBTTtJQUFFQyxhQUFGO0lBQWlCQztFQUFqQixJQUF5QkgsR0FBRyxDQUFDSSxJQUFuQztFQUNBLE1BQU1DLE1BQU0sR0FBR1Asd0NBQU0sRUFBckI7RUFDQSxJQUFJO0lBQUNRLElBQUQ7SUFBT0M7RUFBUCxJQUFnQixNQUFNWCw4REFBQSxDQUFjLE9BQWQsRUFBdUJhLE1BQXZCLENBQThCLFFBQTlCLEVBQXdDQyxFQUF4QyxDQUEyQyxlQUEzQyxFQUE0RFIsYUFBNUQsQ0FBMUI7O0VBRUEsSUFBSUksSUFBSSxDQUFDSyxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7SUFDakIsSUFBSTtNQUFFTCxJQUFGO01BQVNDO0lBQVQsSUFBbUIsTUFBTVgsOERBQUEsQ0FBYyxPQUFkLEVBQXVCZ0IsTUFBdkIsQ0FBOEI7TUFBQ1A7SUFBRCxDQUE5QixFQUF3Q1EsS0FBeEMsQ0FBOEM7TUFBQ1g7SUFBRCxDQUE5QyxFQUErRE8sTUFBL0QsRUFBN0I7SUFDQUssT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQlQsSUFBM0IsRUFBaUNDLEtBQWpDO0VBQ0gsQ0FIRCxNQUdPO0lBQ0QsSUFBSTtNQUFFRCxJQUFGO01BQVNDO0lBQVQsSUFBbUIsTUFBTVgsOERBQUEsQ0FBYyxPQUFkLEVBQXVCb0IsTUFBdkIsQ0FBOEI7TUFBQ1gsTUFBRDtNQUFTSCxhQUFUO01BQXdCQztJQUF4QixDQUE5QixFQUE0RE0sTUFBNUQsRUFBN0I7SUFDQUssT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQlQsSUFBM0IsRUFBaUNDLEtBQWpDO0VBQ0w7O0VBRURPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JULElBQXBCO0VBQ0FRLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJSLEtBQXJCOztFQUVBLElBQUlBLEtBQUosRUFBVztJQUNQTixHQUFHLENBQUNnQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBQ1gsS0FBSyxFQUFFQSxLQUFLLENBQUNZO0lBQWQsQ0FBckI7RUFDSCxDQUZELE1BRU87SUFDSGxCLEdBQUcsQ0FBQ2dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtNQUFDYjtJQUFELENBQXJCO0VBQ0g7QUFDSixDQXRCRDs7QUF3QkEsaUVBQWVOLFFBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjMtZXRoLWRhc2gvLi9wYWdlcy9hcGkvYXV0aC9ub25jZS5qcz8zNWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBhYmFzZSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9zdXBhYmFzZVwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkVjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IG5vbmNlQXBpID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIFxyXG4gICAgY29uc3QgeyB3YWxsZXRBZGRyZXNzLCBlbnMgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCBzZWNyZXQgPSB1dWlkVjQoKTtcclxuICAgIGxldCB7ZGF0YSwgZXJyb3J9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgndXNlcnMnKS5zZWxlY3QoJ3NlY3JldCcpLmVxKCd3YWxsZXRBZGRyZXNzJywgd2FsbGV0QWRkcmVzcyk7XHJcblxyXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCB7IGRhdGEgLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgndXNlcnMnKS51cGRhdGUoe3NlY3JldH0pLm1hdGNoKHt3YWxsZXRBZGRyZXNzfSkuc2VsZWN0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGUgRGF0YVwiLCBkYXRhLCBlcnJvcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgeyBkYXRhICwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ3VzZXJzJykuaW5zZXJ0KHtzZWNyZXQsIHdhbGxldEFkZHJlc3MsIGVuc30pLnNlbGVjdCgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgZGF0YVwiLCBkYXRhLCBlcnJvcilcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe2Vycm9yOiBlcnJvci5tZXNzYWdlfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3NlY3JldH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vbmNlQXBpOyJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsInY0IiwidXVpZFY0Iiwibm9uY2VBcGkiLCJyZXEiLCJyZXMiLCJ3YWxsZXRBZGRyZXNzIiwiZW5zIiwiYm9keSIsInNlY3JldCIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJlcSIsImxlbmd0aCIsInVwZGF0ZSIsIm1hdGNoIiwiY29uc29sZSIsImxvZyIsImluc2VydCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/nonce.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/nonce.js"));
module.exports = __webpack_exports__;

})();