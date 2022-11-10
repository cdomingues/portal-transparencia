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
exports.id = "pages/api/totalizador/receitas";
exports.ids = ["pages/api/totalizador/receitas"];
exports.modules = {

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "(api)/./src/database/index.ts":
/*!*******************************!*\
  !*** ./src/database/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knex */ \"knex\");\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_0__);\n\nconst database = knex__WEBPACK_IMPORTED_MODULE_0___default()({\n    client: \"mssql\",\n    connection: {\n        host: process.env.DB_HOST,\n        user: process.env.DB_USER,\n        password: process.env.DB_PASSWORD,\n        port: Number(process.env.DB_PORT),\n        database: process.env.DATABASE\n    },\n    pool: {\n        min: 3,\n        max: 7,\n        acquireTimeoutMillis: 60000\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (database);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGF0YWJhc2UvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBRXhCLE1BQU1DLFFBQVEsR0FBR0QsMkNBQUksQ0FBQztJQUNwQkUsTUFBTSxFQUFFLE9BQU87SUFDZkMsVUFBVSxFQUFFO1FBQ1ZDLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU87UUFDekJDLElBQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLE9BQU87UUFDekJDLFFBQVEsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLFdBQVc7UUFDakNDLElBQUksRUFBRUMsTUFBTSxDQUFDUixPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsT0FBTyxDQUFDO1FBQ2pDYixRQUFRLEVBQUVJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxRQUFRO0tBQy9CO0lBQ0RDLElBQUksRUFBRTtRQUNKQyxHQUFHLEVBQUUsQ0FBQztRQUNOQyxHQUFHLEVBQUUsQ0FBQztRQUNOQyxvQkFBb0IsRUFBRSxLQUFLO0tBQzVCO0NBQ0YsQ0FBQztBQUVGLGlFQUFlbEIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG1tYy8uL3NyYy9kYXRhYmFzZS9pbmRleC50cz85ZjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBrbmV4IGZyb20gXCJrbmV4XCI7XG5cbmNvbnN0IGRhdGFiYXNlID0ga25leCh7XG4gIGNsaWVudDogXCJtc3NxbFwiLFxuICBjb25uZWN0aW9uOiB7XG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuREJfUE9SVCksXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFLFxuICB9LFxuICBwb29sOiB7XG4gICAgbWluOiAzLFxuICAgIG1heDogNyxcbiAgICBhY3F1aXJlVGltZW91dE1pbGxpczogNjAwMDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YWJhc2U7XG4iXSwibmFtZXMiOlsia25leCIsImRhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdGlvbiIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsInBvcnQiLCJOdW1iZXIiLCJEQl9QT1JUIiwiREFUQUJBU0UiLCJwb29sIiwibWluIiwibWF4IiwiYWNxdWlyZVRpbWVvdXRNaWxsaXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/database/index.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/totalizador/receitas.ts":
/*!***********************************************!*\
  !*** ./src/pages/api/totalizador/receitas.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../database */ \"(api)/./src/database/index.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(404);\n    }\n    const startOfYear = moment__WEBPACK_IMPORTED_MODULE_0___default()().startOf(\"year\").toDate();\n    const sum = await (0,_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().sum(\"valor as valor\").from(\"RECEITAS\").where(\"data\", \">=\", startOfYear);\n    const amountProvided = await (0,_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().sum(\"valor as valor\").from(\"RECEITAS_ORC\").where(\"ano\", \">=\", moment__WEBPACK_IMPORTED_MODULE_0___default()().year());\n    return res.status(200).json({\n        valor: Number(sum[0].valor),\n        valorPrevisto: Number(amountProvided[0].valor)\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RvdGFsaXphZG9yL3JlY2VpdGFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFFYTtBQU8xQixlQUFlRSxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBMEMsRUFDMUM7SUFDQSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEI7SUFFRCxNQUFNQyxXQUFXLEdBQUdQLDZDQUFNLEVBQUUsQ0FBQ1EsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLEVBQUU7SUFFckQsTUFBTUMsR0FBRyxHQUFHLE1BQU1ULHFEQUFRLEVBQUUsQ0FDekJTLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNyQkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUNoQkMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUVMLFdBQVcsQ0FBQztJQUVuQyxNQUFNTSxjQUFjLEdBQUcsTUFBTVoscURBQVEsRUFBRSxDQUNwQ1MsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQ3JCQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQ3BCQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRVosNkNBQU0sRUFBRSxDQUFDYyxJQUFJLEVBQUUsQ0FBQztJQUV0QyxPQUFPVixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1MsSUFBSSxDQUFDO1FBQzFCQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDTSxLQUFLLENBQUM7UUFDM0JFLGFBQWEsRUFBRUQsTUFBTSxDQUFDSixjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQUssQ0FBQztLQUMvQyxDQUFDLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BtbWMvLi9zcmMvcGFnZXMvYXBpL3RvdGFsaXphZG9yL3JlY2VpdGFzLnRzPzc1NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZVwiO1xuXG5leHBvcnQgdHlwZSBUb3RhbGl6ZXJSZXZlbnVlRGF0YSA9IHtcbiAgdmFsb3I6IG51bWJlcjtcbiAgdmFsb3JQcmV2aXN0bzogbnVtYmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VG90YWxpemVyUmV2ZW51ZURhdGE+XG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpO1xuICB9XG5cbiAgY29uc3Qgc3RhcnRPZlllYXIgPSBtb21lbnQoKS5zdGFydE9mKFwieWVhclwiKS50b0RhdGUoKTtcblxuICBjb25zdCBzdW0gPSBhd2FpdCBkYXRhYmFzZSgpXG4gICAgLnN1bShcInZhbG9yIGFzIHZhbG9yXCIpXG4gICAgLmZyb20oXCJSRUNFSVRBU1wiKVxuICAgIC53aGVyZShcImRhdGFcIiwgXCI+PVwiLCBzdGFydE9mWWVhcik7XG5cbiAgY29uc3QgYW1vdW50UHJvdmlkZWQgPSBhd2FpdCBkYXRhYmFzZSgpXG4gICAgLnN1bShcInZhbG9yIGFzIHZhbG9yXCIpXG4gICAgLmZyb20oXCJSRUNFSVRBU19PUkNcIilcbiAgICAud2hlcmUoXCJhbm9cIiwgXCI+PVwiLCBtb21lbnQoKS55ZWFyKCkpO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgdmFsb3I6IE51bWJlcihzdW1bMF0udmFsb3IpLFxuICAgIHZhbG9yUHJldmlzdG86IE51bWJlcihhbW91bnRQcm92aWRlZFswXS52YWxvciksXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm1vbWVudCIsImRhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXJ0T2ZZZWFyIiwic3RhcnRPZiIsInRvRGF0ZSIsInN1bSIsImZyb20iLCJ3aGVyZSIsImFtb3VudFByb3ZpZGVkIiwieWVhciIsImpzb24iLCJ2YWxvciIsIk51bWJlciIsInZhbG9yUHJldmlzdG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/totalizador/receitas.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/totalizador/receitas.ts"));
module.exports = __webpack_exports__;

})();