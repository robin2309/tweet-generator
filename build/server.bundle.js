/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/common/actions/constants.js":
/*!*****************************************!*\
  !*** ./src/common/actions/constants.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar actionNames = {\n  SELECT_COUNTRY: 'SELECT_COUNTRY',\n  SELECT_COUNTRY_FROM_URL: 'SELECT_COUNTRY_FROM_URL',\n  GET_COUNTRIES: 'GET_COUNTRIES',\n  SELECT_RETAILER: 'SELECT_RETAILER',\n  GET_RETAILERS: 'GET_RETAILERS',\n  EMPTY_RETAILERS_LIST: 'EMPTY_RETAILERS_LIST',\n  GET_AUTH: 'GET_AUTH'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (actionNames);\n\n//# sourceURL=webpack:///./src/common/actions/constants.js?");

/***/ }),

/***/ "./src/common/actions/nameHelpers.js":
/*!*******************************************!*\
  !*** ./src/common/actions/nameHelpers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  pendingType: function pendingType(name) {\n    return \"\".concat(name, \"_PENDING\");\n  },\n  rejectedType: function rejectedType(name) {\n    return \"\".concat(name, \"_REJECTED\");\n  },\n  fulfilledType: function fulfilledType(name) {\n    return \"\".concat(name, \"_FULFILLED\");\n  }\n});\n\n//# sourceURL=webpack:///./src/common/actions/nameHelpers.js?");

/***/ }),

/***/ "./src/common/components/App/App.jsx":
/*!*******************************************!*\
  !*** ./src/common/components/App/App.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config_renderRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config/renderRoutes */ \"react-router-config/renderRoutes\");\n/* harmony import */ var react_router_config_renderRoutes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config_renderRoutes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n/* harmony import */ var redux_connect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_connect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var Layouts_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Layouts/theme */ \"./src/common/layouts/theme.js\");\n\n\n\n\n\n\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"MuiThemeProvider\"], {\n    theme: Layouts_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }, react_router_config_renderRoutes__WEBPACK_IMPORTED_MODULE_2___default()(route.routes));\n};\n\nApp.propTypes = {\n  route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\nvar AppToExport;\n\nif (true) {\n  var _require = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\"),\n      hot = _require.hot;\n\n  AppToExport = hot(module)(App);\n} else {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_connect__WEBPACK_IMPORTED_MODULE_3__[\"asyncConnect\"])([{\n  promise: function promise(_ref2) {\n    var dispatch = _ref2.store.dispatch,\n        match = _ref2.match;\n    return Promise.resolve('');\n  }\n}])(AppToExport)); // export default AppToExport;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/common/components/App/App.jsx?");

/***/ }),

/***/ "./src/common/containers/Home/Home.jsx":
/*!*********************************************!*\
  !*** ./src/common/containers/Home/Home.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n/* harmony import */ var redux_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_connect__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Home = function Home(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_connect__WEBPACK_IMPORTED_MODULE_1__[\"asyncConnect\"])([{\n  promise: function promise(_ref) {\n    var _ref$store = _ref.store,\n        dispatch = _ref$store.dispatch,\n        getState = _ref$store.getState,\n        match = _ref.match,\n        helpers = _ref.helpers;\n    return Promise.resolve('async connect');\n  }\n}])(Home));\n\n//# sourceURL=webpack:///./src/common/containers/Home/Home.jsx?");

/***/ }),

/***/ "./src/common/layouts/main.js":
/*!************************************!*\
  !*** ./src/common/layouts/main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Configs */ \"./src/configs.js\");\n/* harmony import */ var Configs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Configs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref) {\n  var body = _ref.body,\n      preloadedState = _ref.preloadedState,\n      title = _ref.title;\n  var host = Configs__WEBPACK_IMPORTED_MODULE_0__[\"DEV_SERVER\"] ? 'http://localhost:3330/' : '/';\n  return \"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>\".concat(title, \"</title>\\n        <link rel=\\\"stylesheet\\\" href=\\\"\").concat(host, \"build/styles.css\\\">\\n        <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n      </head>\\n      \\n      <body>\\n        <div id=\\\"root\\\">\").concat(body, \"</div>\\n      </body>\\n      <script>\\n        // WARNING: See the following for security issues around embedding JSON in HTML:\\n        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\\n        window.__PRELOADED_STATE__ = \").concat(JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\"), \"\\n      </script>\\n      <script src=\\\"\").concat(host, \"build/client.bundle.js\\\"></script>\\n    </html>\\n  \");\n});\n\n//# sourceURL=webpack:///./src/common/layouts/main.js?");

/***/ }),

/***/ "./src/common/layouts/theme.js":
/*!*************************************!*\
  !*** ./src/common/layouts/theme.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/red */ \"@material-ui/core/colors/red\");\n/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default.a\n  },\n  typography: {\n    useNextVariants: true\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n//# sourceURL=webpack:///./src/common/layouts/theme.js?");

/***/ }),

/***/ "./src/common/reducers/auth.js":
/*!*************************************!*\
  !*** ./src/common/reducers/auth.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Actions/constants */ \"./src/common/actions/constants.js\");\n\nvar initialState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_AUTH:\n      return action.auth;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/common/reducers/auth.js?");

/***/ }),

/***/ "./src/common/reducers/countries/list.js":
/*!***********************************************!*\
  !*** ./src/common/reducers/countries/list.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Actions/constants */ \"./src/common/actions/constants.js\");\n/* harmony import */ var Actions_nameHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Actions/nameHelpers */ \"./src/common/actions/nameHelpers.js\");\n/* harmony import */ var _defaultState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultState */ \"./src/common/reducers/defaultState.js\");\nvar _handlers;\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar initialState = _objectSpread({}, _defaultState__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nvar handlers = (_handlers = {}, _defineProperty(_handlers, Actions_nameHelpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pendingType(Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_COUNTRIES), function (state, action) {\n  return _objectSpread({}, state, {\n    isPending: true,\n    isFulfilled: false,\n    isRejected: false\n  });\n}), _defineProperty(_handlers, Actions_nameHelpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].rejectedType(Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_COUNTRIES), function (state, action) {\n  var error = action.payload.error;\n  return {\n    isRejected: true,\n    isPending: false,\n    isFulfilled: false,\n    error: error,\n    items: []\n  };\n}), _defineProperty(_handlers, Actions_nameHelpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fulfilledType(Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_COUNTRIES), function (state, action) {\n  var items = action.payload.items;\n  var newItems = items.countries.map(function (country) {\n    return {\n      label: country.Name,\n      value: country.Acronym\n    };\n  });\n  return {\n    isRejected: false,\n    isPending: false,\n    isFulfilled: true,\n    error: null,\n    items: newItems\n  };\n}), _handlers);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var handler = handlers[action.type];\n\n  if (handler) {\n    return handler(state, action);\n  }\n\n  return state;\n});\n\n//# sourceURL=webpack:///./src/common/reducers/countries/list.js?");

/***/ }),

/***/ "./src/common/reducers/countries/selected.js":
/*!***************************************************!*\
  !*** ./src/common/reducers/countries/selected.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Actions/constants */ \"./src/common/actions/constants.js\");\n\nvar initialState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SELECT_COUNTRY:\n      return action.country;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/common/reducers/countries/selected.js?");

/***/ }),

/***/ "./src/common/reducers/defaultState.js":
/*!*********************************************!*\
  !*** ./src/common/reducers/defaultState.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar defaultState = {\n  isPending: false,\n  isFulfilled: false,\n  isRejected: false,\n  error: null,\n  items: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultState);\n\n//# sourceURL=webpack:///./src/common/reducers/defaultState.js?");

/***/ }),

/***/ "./src/common/reducers/helpers.js":
/*!****************************************!*\
  !*** ./src/common/reducers/helpers.js ***!
  \****************************************/
/*! exports provided: getMatchingCountryFromState, getMatchingRetailerFromState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMatchingCountryFromState\", function() { return getMatchingCountryFromState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMatchingRetailerFromState\", function() { return getMatchingRetailerFromState; });\nfunction getMatchingCountryFromState(state, countryName) {\n  return state.countries.list.items.find(function (country) {\n    return country.label.toLowerCase() === countryName.toLowerCase();\n  });\n}\nfunction getMatchingRetailerFromState(state, encodedRetailerName) {\n  var decodedRetailerName = decodeURIComponent(encodedRetailerName);\n  return state.retailers.list.items.find(function (retailer) {\n    return retailer.name.toLowerCase() === decodedRetailerName.toLowerCase();\n  });\n}\n\n//# sourceURL=webpack:///./src/common/reducers/helpers.js?");

/***/ }),

/***/ "./src/common/reducers/index.js":
/*!**************************************!*\
  !*** ./src/common/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _countries_selected__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries/selected */ \"./src/common/reducers/countries/selected.js\");\n/* harmony import */ var _countries_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries/list */ \"./src/common/reducers/countries/list.js\");\n/* harmony import */ var _retailers_selected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retailers/selected */ \"./src/common/reducers/retailers/selected.js\");\n/* harmony import */ var _retailers_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retailers/list */ \"./src/common/reducers/retailers/list.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth */ \"./src/common/reducers/auth.js\");\n\n\n\n\n\n\nvar myApp = {\n  countries: Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    selected: _countries_selected__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    list: _countries_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }),\n  retailers: Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    selected: _retailers_selected__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    list: _retailers_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }),\n  auth: _auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (myApp);\n\n//# sourceURL=webpack:///./src/common/reducers/index.js?");

/***/ }),

/***/ "./src/common/reducers/retailers/list.js":
/*!***********************************************!*\
  !*** ./src/common/reducers/retailers/list.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Actions/constants */ \"./src/common/actions/constants.js\");\n/* harmony import */ var Actions_nameHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Actions/nameHelpers */ \"./src/common/actions/nameHelpers.js\");\n/* harmony import */ var _defaultState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultState */ \"./src/common/reducers/defaultState.js\");\nvar _handlers;\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar initialState = _objectSpread({}, _defaultState__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\nvar handlers = (_handlers = {}, _defineProperty(_handlers, Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].EMPTY_RETAILERS_LIST, function (state, action) {\n  return _objectSpread({}, _defaultState__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n}), _defineProperty(_handlers, Actions_nameHelpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pendingType(Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_RETAILERS), function (state, action) {\n  return _objectSpread({}, state, {\n    isPending: true,\n    isFulfilled: false,\n    isRejected: false\n  });\n}), _defineProperty(_handlers, Actions_nameHelpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].rejectedType(Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_RETAILERS), function (state, action) {\n  var error = action.payload.error;\n  return {\n    isRejected: true,\n    isPending: false,\n    isFulfilled: false,\n    error: error,\n    items: []\n  };\n}), _defineProperty(_handlers, Actions_nameHelpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fulfilledType(Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GET_RETAILERS), function (state, action) {\n  var items = action.payload.items;\n  var newItems = items.retailers.map(function (retailer) {\n    return {\n      id: retailer.Id,\n      name: retailer.Name\n    };\n  });\n  return {\n    isRejected: false,\n    isPending: false,\n    isFulfilled: true,\n    error: null,\n    items: newItems\n  };\n}), _handlers);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var handler = handlers[action.type];\n\n  if (handler) {\n    return handler(state, action);\n  }\n\n  return state;\n});\n\n//# sourceURL=webpack:///./src/common/reducers/retailers/list.js?");

/***/ }),

/***/ "./src/common/reducers/retailers/selected.js":
/*!***************************************************!*\
  !*** ./src/common/reducers/retailers/selected.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Actions/constants */ \"./src/common/actions/constants.js\");\n\nvar initialState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case Actions_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SELECT_RETAILER:\n      return action.retailer;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/common/reducers/retailers/selected.js?");

/***/ }),

/***/ "./src/common/routes.js":
/*!******************************!*\
  !*** ./src/common/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Containers_Home_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Containers/Home/Home */ \"./src/common/containers/Home/Home.jsx\");\n/* harmony import */ var Components_App_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/App/App */ \"./src/common/components/App/App.jsx\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  component: Components_App_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  routes: [{\n    path: '/:country/:retailer',\n    component: Containers_Home_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }, {\n    path: '/:country',\n    component: Containers_Home_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/common/routes.js?");

/***/ }),

/***/ "./src/configs.js":
/*!************************!*\
  !*** ./src/configs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var PORT = process.env.PORT;\nvar NODE_ENV = \"development\";\nvar API_URL = \"\";\nvar DEV_SERVER = process.env.DEV_SERVER;\nvar API_HOST = process.env.API_HOST;\nvar AUTH_ENDPOINT = process.env.AUTH_ENDPOINT;\nvar AUTH_ENDPOINT_BACK = \"\";\nmodule.exports = {\n  PORT: PORT,\n  NODE_ENV: NODE_ENV,\n  API_URL: API_URL,\n  DEV_SERVER: DEV_SERVER,\n  API_HOST: API_HOST,\n  AUTH_ENDPOINT: AUTH_ENDPOINT,\n  AUTH_ENDPOINT_BACK: AUTH_ENDPOINT_BACK\n};\n\n//# sourceURL=webpack:///./src/configs.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Configs */ \"./src/configs.js\");\n/* harmony import */ var Configs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Configs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Utils_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Utils/logger.js */ \"./src/utils/logger.js\");\n/* harmony import */ var Utils_logger_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Utils_logger_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middleware_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/ssr */ \"./src/server/middleware/ssr.js\");\n/* harmony import */ var _middleware_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware/session */ \"./src/server/middleware/session.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()()).use('/build', express__WEBPACK_IMPORTED_MODULE_0___default.a.static('build')).use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a.static('static')).get('/ping', function (req, res) {\n  res.send('pong');\n}).get('/favicon.ico', function (req, res) {\n  res.send('');\n}).use(_middleware_session__WEBPACK_IMPORTED_MODULE_5__[\"session\"],\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.t0 = res;\n            _context.next = 3;\n            return Object(_middleware_ssr__WEBPACK_IMPORTED_MODULE_4__[\"middlewareSsr\"])(req);\n\n          case 3:\n            _context.t1 = _context.sent;\n\n            _context.t0.send.call(_context.t0, _context.t1);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.listen(Configs__WEBPACK_IMPORTED_MODULE_2__[\"PORT\"] || 3333, function () {\n  return Utils_logger_js__WEBPACK_IMPORTED_MODULE_3___default.a.info(\"App listening on port \".concat(Configs__WEBPACK_IMPORTED_MODULE_2__[\"PORT\"] || 3333));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/middleware/session.js":
/*!******************************************!*\
  !*** ./src/server/middleware/session.js ***!
  \******************************************/
/*! exports provided: sessionLogin, session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sessionLogin\", function() { return sessionLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"session\", function() { return session; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Configs */ \"./src/configs.js\");\n/* harmony import */ var Configs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Configs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Utils_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils/logger.js */ \"./src/utils/logger.js\");\n/* harmony import */ var Utils_logger_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Utils_logger_js__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar sessionLogin =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res, next) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            next();\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function sessionLogin(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar session =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res, next) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            next();\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function session(_x4, _x5, _x6) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/middleware/session.js?");

/***/ }),

/***/ "./src/server/middleware/ssr.js":
/*!**************************************!*\
  !*** ./src/server/middleware/ssr.js ***!
  \**************************************/
/*! exports provided: middlewareSsr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"middlewareSsr\", function() { return middlewareSsr; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-connect */ \"redux-connect\");\n/* harmony import */ var redux_connect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_connect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var Utils_logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Utils/logger.js */ \"./src/utils/logger.js\");\n/* harmony import */ var Utils_logger_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(Utils_logger_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var Layouts_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Layouts/main */ \"./src/common/layouts/main.js\");\n/* harmony import */ var Common_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Common/reducers */ \"./src/common/reducers/index.js\");\n/* harmony import */ var Common_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Common/routes */ \"./src/common/routes.js\");\n/* harmony import */ var Reducers_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Reducers/helpers */ \"./src/common/reducers/helpers.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar middlewareSsr =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req) {\n    var store, location;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            store = Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"createStore\"])(Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"combineReducers\"])(_objectSpread({\n              reduxAsyncConnect: redux_connect__WEBPACK_IMPORTED_MODULE_6__[\"reducer\"]\n            }, Common_reducers__WEBPACK_IMPORTED_MODULE_10__[\"default\"])), {\n              auth: req.session\n            }, Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7___default.a));\n            location = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(req.url);\n            return _context.abrupt(\"return\", Object(redux_connect__WEBPACK_IMPORTED_MODULE_6__[\"loadOnServer\"])({\n              store: store,\n              location: location,\n              routes: Common_routes__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n              helpers: Reducers_helpers__WEBPACK_IMPORTED_MODULE_12__\n            }).then(function () {\n              return Object(Layouts_main__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n                body: Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n                  store: store,\n                  key: \"provider\"\n                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n                  location: req.url,\n                  context: {}\n                }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_connect__WEBPACK_IMPORTED_MODULE_6__[\"ReduxAsyncConnect\"], {\n                  routes: Common_routes__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n                  helpers: Reducers_helpers__WEBPACK_IMPORTED_MODULE_12__\n                })))),\n                preloadedState: store.getState(),\n                title: 'App'\n              });\n            }).catch(function (error) {\n              Utils_logger_js__WEBPACK_IMPORTED_MODULE_8___default.a.error(error.message);\n              console.log(error.stack);\n            }));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function middlewareSsr(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/middleware/ssr.js?");

/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var moment = __webpack_require__(/*! moment */ \"moment\");\n\nvar winston = __webpack_require__(/*! winston */ \"winston\");\n\nvar _process$env$VERBOSE = process.env.VERBOSE,\n    VERBOSE = _process$env$VERBOSE === void 0 ? 'info' : _process$env$VERBOSE;\nvar logger = new winston.Logger({\n  transports: [new winston.transports.Console({\n    timestamp: function timestamp() {\n      return moment().format();\n    },\n    formatter: function formatter(options) {\n      // Return string will be passed to logger.\n      return \"[\".concat(options.timestamp(), \"]\") + ' ' + options.level.toUpperCase() + ' ' + (options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? '\\n\\t' + JSON.stringify(options.meta) : '');\n    },\n    level: VERBOSE,\n    colorize: true\n  })]\n});\nmodule.exports = logger;\n\n//# sourceURL=webpack:///./src/utils/logger.js?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi babel-polyfill ./src/server/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./src/server/index.js?");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/red\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/red%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config/renderRoutes":
/*!***************************************************!*\
  !*** external "react-router-config/renderRoutes" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config/renderRoutes\");\n\n//# sourceURL=webpack:///external_%22react-router-config/renderRoutes%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-connect":
/*!********************************!*\
  !*** external "redux-connect" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-connect\");\n\n//# sourceURL=webpack:///external_%22redux-connect%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });