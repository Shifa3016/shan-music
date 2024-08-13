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
exports.id = "app/api/song/route";
exports.ids = ["app/api/song/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsong%2Froute&page=%2Fapi%2Fsong%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsong%2Froute.js&appDir=E%3A%5Cfirst%20app%5Cshan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfirst%20app%5Cshan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsong%2Froute&page=%2Fapi%2Fsong%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsong%2Froute.js&appDir=E%3A%5Cfirst%20app%5Cshan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfirst%20app%5Cshan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_first_app_shan_app_api_song_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/song/route.js */ \"(rsc)/./app/api/song/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/song/route\",\n        pathname: \"/api/song\",\n        filename: \"route\",\n        bundlePath: \"app/api/song/route\"\n    },\n    resolvedPagePath: \"E:\\\\first app\\\\shan\\\\app\\\\api\\\\song\\\\route.js\",\n    nextConfigOutput,\n    userland: E_first_app_shan_app_api_song_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/song/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzb25nJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzb25nJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc29uZyUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDZmlyc3QlMjBhcHAlNUNzaGFuJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDZmlyc3QlMjBhcHAlNUNzaGFuJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNIO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhbi8/ODJmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxmaXJzdCBhcHBcXFxcc2hhblxcXFxhcHBcXFxcYXBpXFxcXHNvbmdcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Nvbmcvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zb25nXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zb25nL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcZmlyc3QgYXBwXFxcXHNoYW5cXFxcYXBwXFxcXGFwaVxcXFxzb25nXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zb25nL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsong%2Froute&page=%2Fapi%2Fsong%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsong%2Froute.js&appDir=E%3A%5Cfirst%20app%5Cshan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfirst%20app%5Cshan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/song/route.js":
/*!*******************************!*\
  !*** ./app/api/song/route.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function GET(req) {\n    const songsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"public\", \"Songs\");\n    try {\n        const folders = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(songsDirectory);\n        const result = {};\n        for (const folder of folders){\n            const folderPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(songsDirectory, folder);\n            const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(folderPath);\n            result[folder] = files.filter((file)=>file.endsWith(\".mp3\"));\n        }\n        return new Response(JSON.stringify(result), {\n            status: 200,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            error: \"Failed to list files\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Nvbmcvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUVqQixlQUFlRSxJQUFJQyxHQUFHO0lBQzNCLE1BQU1DLGlCQUFpQkgsZ0RBQVMsQ0FBQ0ssUUFBUUMsR0FBRyxJQUFJLFVBQVU7SUFFMUQsSUFBSTtRQUNGLE1BQU1DLFVBQVVSLHFEQUFjLENBQUNJO1FBRS9CLE1BQU1NLFNBQVMsQ0FBQztRQUVoQixLQUFLLE1BQU1DLFVBQVVILFFBQVM7WUFDNUIsTUFBTUksYUFBYVgsZ0RBQVMsQ0FBQ0csZ0JBQWdCTztZQUM3QyxNQUFNRSxRQUFRYixxREFBYyxDQUFDWTtZQUU3QkYsTUFBTSxDQUFDQyxPQUFPLEdBQUdFLE1BQU1DLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsUUFBUSxDQUFDO1FBQ3REO1FBRUEsT0FBTyxJQUFJQyxTQUFTQyxLQUFLQyxTQUFTLENBQUNULFNBQVM7WUFDMUNVLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU8sSUFBSUwsU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVHLE9BQU87UUFBdUIsSUFBSTtZQUNyRUYsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NoYW4vLi9hcHAvYXBpL3Nvbmcvcm91dGUuanM/NDNkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XHJcbiAgY29uc3Qgc29uZ3NEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYycsICdTb25ncycpO1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb2xkZXJzID0gZnMucmVhZGRpclN5bmMoc29uZ3NEaXJlY3RvcnkpO1xyXG4gICAgXHJcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGZvbGRlciBvZiBmb2xkZXJzKSB7XHJcbiAgICAgIGNvbnN0IGZvbGRlclBhdGggPSBwYXRoLmpvaW4oc29uZ3NEaXJlY3RvcnksIGZvbGRlcik7XHJcbiAgICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoZm9sZGVyUGF0aCk7XHJcblxyXG4gICAgICByZXN1bHRbZm9sZGVyXSA9IGZpbGVzLmZpbHRlcihmaWxlID0+IGZpbGUuZW5kc1dpdGgoJy5tcDMnKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSwge1xyXG4gICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnRmFpbGVkIHRvIGxpc3QgZmlsZXMnIH0pLCB7XHJcbiAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiR0VUIiwicmVxIiwic29uZ3NEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZvbGRlcnMiLCJyZWFkZGlyU3luYyIsInJlc3VsdCIsImZvbGRlciIsImZvbGRlclBhdGgiLCJmaWxlcyIsImZpbHRlciIsImZpbGUiLCJlbmRzV2l0aCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImhlYWRlcnMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/song/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsong%2Froute&page=%2Fapi%2Fsong%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsong%2Froute.js&appDir=E%3A%5Cfirst%20app%5Cshan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5Cfirst%20app%5Cshan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();