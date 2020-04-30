webpackHotUpdate("cms",{

/***/ "./src/components/Carousel/index.js":
/*!******************************************!*\
  !*** ./src/components/Carousel/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/gatsby/node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/Users/allie/src/blocktag/website/src/components/Carousel/index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var Carousel = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeEl: null
    };
    _this.onHover = _this.onHover.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.onHover = function onHover(event) {
    var _this$setState;

    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    this.setState((_this$setState = {}, _this$setState[name] = value, _this$setState));
  };

  _proto.render = function render() {
    var _this2 = this;

    var activeEl = this.state.activeEl;
    var data = this.props.data.data;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "flex flex-wrap py-12 mt-32 items-end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, this.props.data.map(function (c) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "w-1/5 text-center first:opacity-50 last:opacity-50",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
        className: "inline",
        style: {
          maxWidth: "100px",
          maxHeight: "300px"
        },
        src: c.img,
        onHover: _this2.onHover,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "w-full my-24 text-center justify-center text-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "max-w-md mx-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, activeEl ? data[activeEl].description : this.props.defaultDescription)));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);


Carousel.defaultProps = {
  defaultDescription: "asdfasdf default description"
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Carousel, "Carousel", "/Users/allie/src/blocktag/website/src/components/Carousel/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.c7ecfcffaf5b6462fe70.hot-update.js.map