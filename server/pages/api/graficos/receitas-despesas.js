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
exports.id = "pages/api/graficos/receitas-despesas";
exports.ids = ["pages/api/graficos/receitas-despesas"];
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

/***/ "(api)/./src/pages/api/graficos/receitas-despesas.ts":
/*!*****************************************************!*\
  !*** ./src/pages/api/graficos/receitas-despesas.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../database */ \"(api)/./src/database/index.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(404);\n    }\n    const year = moment__WEBPACK_IMPORTED_MODULE_0___default()().year();\n    const month = moment__WEBPACK_IMPORTED_MODULE_0___default()().month() + 1;\n    //TODO: PEGAR VALORES DOS ULTIMOS 5 ANOS , AGRUPAR POR ANO RECEITAS X DESPESAS.\n    const graphs = [];\n    let expenseAcumulatedAmount = 0;\n    let revenueAcumulatedAmount = 0;\n    for(let index = 1; index <= month; index++){\n        const expenseAmount = await (0,_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().sum(\"valorliquidado as valor\").from(\"V1_DESPESA\").where(\"ano\", \">=\", year).where(\"mes\", index);\n        expenseAcumulatedAmount += Number(expenseAmount[0].valor || 0);\n        const revenueAmount = await (0,_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().sum(\"valor as valor\").from(\"V1_RECEITAS\").where(\"ano\", year).where(\"mes\", index);\n        revenueAcumulatedAmount += Number(revenueAmount[0].valor || 0);\n        graphs.push({\n            name: `Arrecadações - ${year}`,\n            ano: year,\n            mes: index,\n            valor: Number(revenueAmount[0].valor || 0),\n            data: `${index}/${year}`,\n            valorAcumulado: revenueAcumulatedAmount\n        }, {\n            name: `Despesas e Investimentos - ${year}`,\n            ano: year,\n            mes: index,\n            valor: Number(expenseAmount[0].valor || 0),\n            data: `${index}/${year}`,\n            valorAcumulado: expenseAcumulatedAmount\n        });\n    }\n    return res.status(200).json(graphs);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dyYWZpY29zL3JlY2VpdGFzLWRlc3Blc2FzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFFYTtBQVcxQixlQUFlRSxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBK0MsRUFDL0M7SUFDQSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDeEI7SUFFRCxNQUFNQyxJQUFJLEdBQUdQLDZDQUFNLEVBQUUsQ0FBQ08sSUFBSSxFQUFFO0lBQzVCLE1BQU1DLEtBQUssR0FBR1IsNkNBQU0sRUFBRSxDQUFDUSxLQUFLLEVBQUUsR0FBRyxDQUFDO0lBQ2xDLCtFQUErRTtJQUUvRSxNQUFNQyxNQUFNLEdBQUcsRUFBRTtJQUVqQixJQUFJQyx1QkFBdUIsR0FBRyxDQUFDO0lBQy9CLElBQUlDLHVCQUF1QixHQUFHLENBQUM7SUFFL0IsSUFBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLElBQUlKLEtBQUssRUFBRUksS0FBSyxFQUFFLENBQUU7UUFDM0MsTUFBTUMsYUFBYSxHQUFHLE1BQU1aLHFEQUFRLEVBQUUsQ0FDbkNhLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUM5QkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNsQkMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUVULElBQUksQ0FBQyxDQUN4QlMsS0FBSyxDQUFDLEtBQUssRUFBRUosS0FBSyxDQUFDO1FBRXRCRix1QkFBdUIsSUFBSU8sTUFBTSxDQUFDSixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUNLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUvRCxNQUFNQyxhQUFhLEdBQUcsTUFBTWxCLHFEQUFRLEVBQUUsQ0FDbkNhLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNyQkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUNuQkMsS0FBSyxDQUFDLEtBQUssRUFBRVQsSUFBSSxDQUFDLENBQ2xCUyxLQUFLLENBQUMsS0FBSyxFQUFFSixLQUFLLENBQUM7UUFFdEJELHVCQUF1QixJQUFJTSxNQUFNLENBQUNFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRS9EVCxNQUFNLENBQUNXLElBQUksQ0FDVDtZQUNFQyxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUVkLElBQUksQ0FBQyxDQUFDO1lBQzlCZSxHQUFHLEVBQUVmLElBQUk7WUFDVGdCLEdBQUcsRUFBRVgsS0FBSztZQUNWTSxLQUFLLEVBQUVELE1BQU0sQ0FBQ0UsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDRCxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQzFDTSxJQUFJLEVBQUUsQ0FBQyxFQUFFWixLQUFLLENBQUMsQ0FBQyxFQUFFTCxJQUFJLENBQUMsQ0FBQztZQUN4QmtCLGNBQWMsRUFBRWQsdUJBQXVCO1NBQ3hDLEVBQ0Q7WUFDRVUsSUFBSSxFQUFFLENBQUMsMkJBQTJCLEVBQUVkLElBQUksQ0FBQyxDQUFDO1lBQzFDZSxHQUFHLEVBQUVmLElBQUk7WUFDVGdCLEdBQUcsRUFBRVgsS0FBSztZQUNWTSxLQUFLLEVBQUVELE1BQU0sQ0FBQ0osYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDSyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQzFDTSxJQUFJLEVBQUUsQ0FBQyxFQUFFWixLQUFLLENBQUMsQ0FBQyxFQUFFTCxJQUFJLENBQUMsQ0FBQztZQUN4QmtCLGNBQWMsRUFBRWYsdUJBQXVCO1NBQ3hDLENBQ0YsQ0FBQztLQUNIO0lBRUQsT0FBT04sR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNvQixJQUFJLENBQUNqQixNQUFNLENBQUMsQ0FBQztDQUNyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BtbWMvLi9zcmMvcGFnZXMvYXBpL2dyYWZpY29zL3JlY2VpdGFzLWRlc3Blc2FzLnRzPzkxYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZVwiO1xuXG5leHBvcnQgdHlwZSBHcmFwaEV4cGVuc2VSZXZlbnVlRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBhbm86IG51bWJlcjtcbiAgbWVzOiBudW1iZXI7XG4gIHZhbG9yOiBudW1iZXI7XG4gIGRhdGE6IHN0cmluZztcbiAgdmFsb3JBY3VtdWxhZG86IG51bWJlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPEdyYXBoRXhwZW5zZVJldmVudWVEYXRhW10+XG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpO1xuICB9XG5cbiAgY29uc3QgeWVhciA9IG1vbWVudCgpLnllYXIoKTtcbiAgY29uc3QgbW9udGggPSBtb21lbnQoKS5tb250aCgpICsgMTtcbiAgLy9UT0RPOiBQRUdBUiBWQUxPUkVTIERPUyBVTFRJTU9TIDUgQU5PUyAsIEFHUlVQQVIgUE9SIEFOTyBSRUNFSVRBUyBYIERFU1BFU0FTLlxuXG4gIGNvbnN0IGdyYXBocyA9IFtdO1xuXG4gIGxldCBleHBlbnNlQWN1bXVsYXRlZEFtb3VudCA9IDA7XG4gIGxldCByZXZlbnVlQWN1bXVsYXRlZEFtb3VudCA9IDA7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBtb250aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGV4cGVuc2VBbW91bnQgPSBhd2FpdCBkYXRhYmFzZSgpXG4gICAgICAuc3VtKFwidmFsb3JsaXF1aWRhZG8gYXMgdmFsb3JcIilcbiAgICAgIC5mcm9tKFwiVjFfREVTUEVTQVwiKVxuICAgICAgLndoZXJlKFwiYW5vXCIsIFwiPj1cIiwgeWVhcilcbiAgICAgIC53aGVyZShcIm1lc1wiLCBpbmRleCk7XG5cbiAgICBleHBlbnNlQWN1bXVsYXRlZEFtb3VudCArPSBOdW1iZXIoZXhwZW5zZUFtb3VudFswXS52YWxvciB8fCAwKTtcblxuICAgIGNvbnN0IHJldmVudWVBbW91bnQgPSBhd2FpdCBkYXRhYmFzZSgpXG4gICAgICAuc3VtKFwidmFsb3IgYXMgdmFsb3JcIilcbiAgICAgIC5mcm9tKFwiVjFfUkVDRUlUQVNcIilcbiAgICAgIC53aGVyZShcImFub1wiLCB5ZWFyKVxuICAgICAgLndoZXJlKFwibWVzXCIsIGluZGV4KTtcblxuICAgIHJldmVudWVBY3VtdWxhdGVkQW1vdW50ICs9IE51bWJlcihyZXZlbnVlQW1vdW50WzBdLnZhbG9yIHx8IDApO1xuXG4gICAgZ3JhcGhzLnB1c2goXG4gICAgICB7XG4gICAgICAgIG5hbWU6IGBBcnJlY2FkYcOnw7VlcyAtICR7eWVhcn1gLFxuICAgICAgICBhbm86IHllYXIsXG4gICAgICAgIG1lczogaW5kZXgsXG4gICAgICAgIHZhbG9yOiBOdW1iZXIocmV2ZW51ZUFtb3VudFswXS52YWxvciB8fCAwKSxcbiAgICAgICAgZGF0YTogYCR7aW5kZXh9LyR7eWVhcn1gLFxuICAgICAgICB2YWxvckFjdW11bGFkbzogcmV2ZW51ZUFjdW11bGF0ZWRBbW91bnQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBgRGVzcGVzYXMgZSBJbnZlc3RpbWVudG9zIC0gJHt5ZWFyfWAsXG4gICAgICAgIGFubzogeWVhcixcbiAgICAgICAgbWVzOiBpbmRleCxcbiAgICAgICAgdmFsb3I6IE51bWJlcihleHBlbnNlQW1vdW50WzBdLnZhbG9yIHx8IDApLFxuICAgICAgICBkYXRhOiBgJHtpbmRleH0vJHt5ZWFyfWAsXG4gICAgICAgIHZhbG9yQWN1bXVsYWRvOiBleHBlbnNlQWN1bXVsYXRlZEFtb3VudCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGdyYXBocyk7XG59XG4iXSwibmFtZXMiOlsibW9tZW50IiwiZGF0YWJhc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwieWVhciIsIm1vbnRoIiwiZ3JhcGhzIiwiZXhwZW5zZUFjdW11bGF0ZWRBbW91bnQiLCJyZXZlbnVlQWN1bXVsYXRlZEFtb3VudCIsImluZGV4IiwiZXhwZW5zZUFtb3VudCIsInN1bSIsImZyb20iLCJ3aGVyZSIsIk51bWJlciIsInZhbG9yIiwicmV2ZW51ZUFtb3VudCIsInB1c2giLCJuYW1lIiwiYW5vIiwibWVzIiwiZGF0YSIsInZhbG9yQWN1bXVsYWRvIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/graficos/receitas-despesas.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/graficos/receitas-despesas.ts"));
module.exports = __webpack_exports__;

})();