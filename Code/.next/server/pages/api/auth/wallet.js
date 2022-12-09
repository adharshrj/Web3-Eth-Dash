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
exports.id = "pages/api/auth/wallet";
exports.ids = ["pages/api/auth/wallet"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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

/***/ "(api)/./pages/api/auth/wallet.js":
/*!**********************************!*\
  !*** ./pages/api/auth/wallet.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/supabase */ \"(api)/./helpers/supabase.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst walletApi = async (req, res) => {\n  try {\n    const {\n      walletAddress,\n      signature,\n      secret\n    } = req.body;\n    const signerAddress = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.verifyMessage(secret, signature);\n    console.log(\"Signer Address\", signerAddress);\n    let {\n      data: user\n    } = await _helpers_supabase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].from('users').select('*').eq('walletAddress', walletAddress).eq('secret', secret).single();\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n      \"aud\": \"authenticated\",\n      \"exp\": Math.floor(Date.now() / 1000 * (60 * 60)),\n      \"sub\": user.id,\n      \"user_metadata\": {\n        id: user.id\n      },\n      \"role\": \"authenticated\"\n    }, process.env.SUPABASE_JWT_SECRET);\n    res.status(200).json({\n      user,\n      token\n    });\n  } catch (error) {\n    res.status(400).json({\n      error: error.message\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (walletApi);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC93YWxsZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1HLFNBQVMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7RUFDbEMsSUFBSTtJQUNBLE1BQU07TUFBQ0MsYUFBRDtNQUFnQkMsU0FBaEI7TUFBMkJDO0lBQTNCLElBQXFDSixHQUFHLENBQUNLLElBQS9DO0lBQ0EsTUFBTUMsYUFBYSxHQUFHViw4REFBQSxDQUEyQlEsTUFBM0IsRUFBbUNELFNBQW5DLENBQXRCO0lBRUFNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCSixhQUE5QjtJQUVBLElBQUk7TUFBRUssSUFBSSxFQUFFQztJQUFSLElBQWlCLE1BQU1mLDhEQUFBLENBQWMsT0FBZCxFQUF1QmlCLE1BQXZCLENBQThCLEdBQTlCLEVBQW1DQyxFQUFuQyxDQUFzQyxlQUF0QyxFQUF1RGIsYUFBdkQsRUFBc0VhLEVBQXRFLENBQXlFLFFBQXpFLEVBQW1GWCxNQUFuRixFQUEyRlksTUFBM0YsRUFBM0I7SUFFQSxNQUFNQyxLQUFLLEdBQUduQix3REFBQSxDQUFTO01BQ25CLE9BQU8sZUFEWTtNQUVuQixPQUFPcUIsSUFBSSxDQUFDQyxLQUFMLENBQVlDLElBQUksQ0FBQ0MsR0FBTCxLQUFhLElBQWQsSUFBdUIsS0FBRyxFQUExQixDQUFYLENBRlk7TUFHbkIsT0FBT1YsSUFBSSxDQUFDVyxFQUhPO01BSW5CLGlCQUFpQjtRQUNiQSxFQUFFLEVBQUVYLElBQUksQ0FBQ1c7TUFESSxDQUpFO01BT25CLFFBQVE7SUFQVyxDQUFULEVBUVhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFSRCxDQUFkO0lBVUF6QixHQUFHLENBQUMwQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7TUFBQ2hCLElBQUQ7TUFBT0s7SUFBUCxDQUFyQjtFQUNILENBbkJELENBb0JBLE9BQU9ZLEtBQVAsRUFBYztJQUNWNUIsR0FBRyxDQUFDMEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO01BQUNDLEtBQUssRUFBRUEsS0FBSyxDQUFDQztJQUFkLENBQXJCO0VBQ0g7QUFDSixDQXhCRDs7QUEwQkEsaUVBQWUvQixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViMy1ldGgtZGFzaC8uL3BhZ2VzL2FwaS9hdXRoL3dhbGxldC5qcz8wYjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL3N1cGFiYXNlXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xyXG5cclxuY29uc3Qgd2FsbGV0QXBpID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHt3YWxsZXRBZGRyZXNzLCBzaWduYXR1cmUsIHNlY3JldH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCBzaWduZXJBZGRyZXNzID0gZXRoZXJzLnV0aWxzLnZlcmlmeU1lc3NhZ2Uoc2VjcmV0LCBzaWduYXR1cmUpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ25lciBBZGRyZXNzXCIsIHNpZ25lckFkZHJlc3MpXHJcblxyXG4gICAgICAgIGxldCB7IGRhdGE6IHVzZXIgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ3VzZXJzJykuc2VsZWN0KCcqJykuZXEoJ3dhbGxldEFkZHJlc3MnLCB3YWxsZXRBZGRyZXNzKS5lcSgnc2VjcmV0Jywgc2VjcmV0KS5zaW5nbGUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7XHJcbiAgICAgICAgICAgIFwiYXVkXCI6IFwiYXV0aGVudGljYXRlZFwiLFxyXG4gICAgICAgICAgICBcImV4cFwiOiBNYXRoLmZsb29yKChEYXRlLm5vdygpIC8gMTAwMCkgKiAoNjAqNjApKSxcclxuICAgICAgICAgICAgXCJzdWJcIjogdXNlci5pZCxcclxuICAgICAgICAgICAgXCJ1c2VyX21ldGFkYXRhXCI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB1c2VyLmlkLCBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJyb2xlXCI6IFwiYXV0aGVudGljYXRlZFwiXHJcbiAgICAgICAgfSwgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfSldUX1NFQ1JFVClcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3VzZXIsIHRva2VufSlcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnJvcjogZXJyb3IubWVzc2FnZX0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdhbGxldEFwaTsiXSwibmFtZXMiOlsiZXRoZXJzIiwic3VwYWJhc2UiLCJqd3QiLCJ3YWxsZXRBcGkiLCJyZXEiLCJyZXMiLCJ3YWxsZXRBZGRyZXNzIiwic2lnbmF0dXJlIiwic2VjcmV0IiwiYm9keSIsInNpZ25lckFkZHJlc3MiLCJ1dGlscyIsInZlcmlmeU1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVzZXIiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJ0b2tlbiIsInNpZ24iLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiaWQiLCJwcm9jZXNzIiwiZW52IiwiU1VQQUJBU0VfSldUX1NFQ1JFVCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/wallet.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/wallet.js"));
module.exports = __webpack_exports__;

})();