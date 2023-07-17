"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 6978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6519);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(3488);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: external "next/server"
const server_namespaceObject = require("next/server");
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server_namespaceObject.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fpolinaren%2FDesktop%2Ftoster%2Fcrypto-detect%2Fsrc%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!/Users/polinaren/Desktop/toster/crypto-detect/src/app/favicon.ico?__next_metadata_route__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,451], () => (__webpack_exec__(6978)));
module.exports = __webpack_exports__;

})();