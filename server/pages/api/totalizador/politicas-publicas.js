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
exports.id = "pages/api/totalizador/politicas-publicas";
exports.ids = ["pages/api/totalizador/politicas-publicas"];
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

/***/ "(api)/./src/pages/api/totalizador/politicas-publicas.ts":
/*!*********************************************************!*\
  !*** ./src/pages/api/totalizador/politicas-publicas.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../database */ \"(api)/./src/database/index.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(404);\n    }\n    const year = moment__WEBPACK_IMPORTED_MODULE_0___default()().year();\n    const health = await (0,_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().sum(\"valorliquidado as valor\").from(\"V1_DESPESA\").where(\"funcao\", \"10 - SA\\xdaDE\").where(\"ano\", year);\n    const security = await (0,_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().sum(\"valorliquidado as valor\").from(\"V1_DESPESA\").where(\"funcao\", \"06 - SEGURAN\\xc7A P\\xdaBLICA\").where(\"ano\", year);\n    const education = await (0,_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().sum(\"valorliquidado as valor\").from(\"V1_DESPESA\").where(\"funcao\", \"12 - EDUCA\\xc7\\xc3O\").where(\"ano\", year);\n    const socialAssistance = await (0,_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().sum(\"valorliquidado as valor\").from(\"V1_DESPESA\").where(\"funcao\", \"08 - ASSIST\\xcaNCIA SOCIAL\").where(\"ano\", year);\n    const policies = [\n        {\n            funcao: \"Aplica\\xe7\\xe3o em Sa\\xfade\",\n            valor: Number(health[0].valor)\n        },\n        {\n            funcao: \"Aplica\\xe7\\xe3o em Seguran\\xe7a\",\n            valor: Number(security[0].valor)\n        },\n        {\n            funcao: \"Aplica\\xe7\\xe3o em Educa\\xe7\\xe3o\",\n            valor: Number(education[0].valor)\n        },\n        {\n            funcao: \"Aplica\\xe7\\xe3o em Assist\\xeancia Social\",\n            valor: Number(socialAssistance[0].valor)\n        }, \n    ];\n    return res.status(200).json(policies);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RvdGFsaXphZG9yL3BvbGl0aWNhcy1wdWJsaWNhcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRCO0FBRWE7QUFPMUIsZUFBZUUsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQXdDLEVBQ3hDO0lBQ0EsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hCO0lBRUQsTUFBTUMsSUFBSSxHQUFHUCw2Q0FBTSxFQUFFLENBQUNPLElBQUksRUFBRTtJQUU1QixNQUFNQyxNQUFNLEdBQUcsTUFBTVAscURBQVEsRUFBRSxDQUM1QlEsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQzlCQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2xCQyxLQUFLLENBQUMsUUFBUSxFQUFFLGVBQVksQ0FBQyxDQUM3QkEsS0FBSyxDQUFDLEtBQUssRUFBRUosSUFBSSxDQUFDO0lBRXJCLE1BQU1LLFFBQVEsR0FBRyxNQUFNWCxxREFBUSxFQUFFLENBQzlCUSxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FDOUJDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDbEJDLEtBQUssQ0FBQyxRQUFRLEVBQUUsOEJBQXdCLENBQUMsQ0FDekNBLEtBQUssQ0FBQyxLQUFLLEVBQUVKLElBQUksQ0FBQztJQUVyQixNQUFNTSxTQUFTLEdBQUcsTUFBTVoscURBQVEsRUFBRSxDQUMvQlEsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQzlCQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2xCQyxLQUFLLENBQUMsUUFBUSxFQUFFLHFCQUFlLENBQUMsQ0FDaENBLEtBQUssQ0FBQyxLQUFLLEVBQUVKLElBQUksQ0FBQztJQUVyQixNQUFNTyxnQkFBZ0IsR0FBRyxNQUFNYixxREFBUSxFQUFFLENBQ3RDUSxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FDOUJDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDbEJDLEtBQUssQ0FBQyxRQUFRLEVBQUUsNEJBQXlCLENBQUMsQ0FDMUNBLEtBQUssQ0FBQyxLQUFLLEVBQUVKLElBQUksQ0FBQztJQUVyQixNQUFNUSxRQUFRLEdBQUc7UUFDZjtZQUNFQyxNQUFNLEVBQUUsNkJBQW9CO1lBQzVCQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDUyxLQUFLLENBQUM7U0FDL0I7UUFDRDtZQUNFRCxNQUFNLEVBQUUsaUNBQXdCO1lBQ2hDQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ04sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDSyxLQUFLLENBQUM7U0FDakM7UUFDRDtZQUNFRCxNQUFNLEVBQUUsbUNBQXVCO1lBQy9CQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0wsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDSSxLQUFLLENBQUM7U0FDbEM7UUFDRDtZQUNFRCxNQUFNLEVBQUUsMENBQWlDO1lBQ3pDQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0osZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQUssQ0FBQztTQUN6QztLQUNGO0lBRUQsT0FBT2IsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNhLElBQUksQ0FBQ0osUUFBUSxDQUFDLENBQUM7Q0FDdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbW1jLy4vc3JjL3BhZ2VzL2FwaS90b3RhbGl6YWRvci9wb2xpdGljYXMtcHVibGljYXMudHM/NjQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlXCI7XG5cbmV4cG9ydCB0eXBlIFB1YmxpY1BvbGljeURhdGEgPSB7XG4gIHZhbG9yOiBudW1iZXI7XG4gIGZ1bmNhbzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UHVibGljUG9saWN5RGF0YVtdPlxuKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KTtcbiAgfVxuXG4gIGNvbnN0IHllYXIgPSBtb21lbnQoKS55ZWFyKCk7XG5cbiAgY29uc3QgaGVhbHRoID0gYXdhaXQgZGF0YWJhc2UoKVxuICAgIC5zdW0oXCJ2YWxvcmxpcXVpZGFkbyBhcyB2YWxvclwiKVxuICAgIC5mcm9tKFwiVjFfREVTUEVTQVwiKVxuICAgIC53aGVyZShcImZ1bmNhb1wiLCBcIjEwIC0gU0HDmkRFXCIpXG4gICAgLndoZXJlKFwiYW5vXCIsIHllYXIpO1xuXG4gIGNvbnN0IHNlY3VyaXR5ID0gYXdhaXQgZGF0YWJhc2UoKVxuICAgIC5zdW0oXCJ2YWxvcmxpcXVpZGFkbyBhcyB2YWxvclwiKVxuICAgIC5mcm9tKFwiVjFfREVTUEVTQVwiKVxuICAgIC53aGVyZShcImZ1bmNhb1wiLCBcIjA2IC0gU0VHVVJBTsOHQSBQw5pCTElDQVwiKVxuICAgIC53aGVyZShcImFub1wiLCB5ZWFyKTtcblxuICBjb25zdCBlZHVjYXRpb24gPSBhd2FpdCBkYXRhYmFzZSgpXG4gICAgLnN1bShcInZhbG9ybGlxdWlkYWRvIGFzIHZhbG9yXCIpXG4gICAgLmZyb20oXCJWMV9ERVNQRVNBXCIpXG4gICAgLndoZXJlKFwiZnVuY2FvXCIsIFwiMTIgLSBFRFVDQcOHw4NPXCIpXG4gICAgLndoZXJlKFwiYW5vXCIsIHllYXIpO1xuXG4gIGNvbnN0IHNvY2lhbEFzc2lzdGFuY2UgPSBhd2FpdCBkYXRhYmFzZSgpXG4gICAgLnN1bShcInZhbG9ybGlxdWlkYWRvIGFzIHZhbG9yXCIpXG4gICAgLmZyb20oXCJWMV9ERVNQRVNBXCIpXG4gICAgLndoZXJlKFwiZnVuY2FvXCIsIFwiMDggLSBBU1NJU1TDik5DSUEgU09DSUFMXCIpXG4gICAgLndoZXJlKFwiYW5vXCIsIHllYXIpO1xuXG4gIGNvbnN0IHBvbGljaWVzID0gW1xuICAgIHtcbiAgICAgIGZ1bmNhbzogXCJBcGxpY2HDp8OjbyBlbSBTYcO6ZGVcIixcbiAgICAgIHZhbG9yOiBOdW1iZXIoaGVhbHRoWzBdLnZhbG9yKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZ1bmNhbzogXCJBcGxpY2HDp8OjbyBlbSBTZWd1cmFuw6dhXCIsXG4gICAgICB2YWxvcjogTnVtYmVyKHNlY3VyaXR5WzBdLnZhbG9yKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZ1bmNhbzogXCJBcGxpY2HDp8OjbyBlbSBFZHVjYcOnw6NvXCIsXG4gICAgICB2YWxvcjogTnVtYmVyKGVkdWNhdGlvblswXS52YWxvciksXG4gICAgfSxcbiAgICB7XG4gICAgICBmdW5jYW86IFwiQXBsaWNhw6fDo28gZW0gQXNzaXN0w6puY2lhIFNvY2lhbFwiLFxuICAgICAgdmFsb3I6IE51bWJlcihzb2NpYWxBc3Npc3RhbmNlWzBdLnZhbG9yKSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihwb2xpY2llcyk7XG59XG4iXSwibmFtZXMiOlsibW9tZW50IiwiZGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwieWVhciIsImhlYWx0aCIsInN1bSIsImZyb20iLCJ3aGVyZSIsInNlY3VyaXR5IiwiZWR1Y2F0aW9uIiwic29jaWFsQXNzaXN0YW5jZSIsInBvbGljaWVzIiwiZnVuY2FvIiwidmFsb3IiLCJOdW1iZXIiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/totalizador/politicas-publicas.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/totalizador/politicas-publicas.ts"));
module.exports = __webpack_exports__;

})();