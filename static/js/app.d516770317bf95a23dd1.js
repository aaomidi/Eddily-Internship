webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
    "company": "Eddily",
    "logo": "http://app.eddily.com/images/logo-eddily-color.svg",
    "position": "Software Developer",
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus.
    Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris 
    venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.`,
    "location": "San Francisco, CA",
    "dates": {
        "start": "June 24th, 2017",
        "end": "August 30th, 2017"
    },
    "paid": true
}, {
    "company": "Google",
    "logo": "https://maxcdn.icons8.com/Share/icon/Logos//google_logo1600.png",
    "position": "Software Developer",
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus.
    Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris 
    venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.`,
    "location": "Mountain View, CA",
    "dates": {
        "start": "June 24th, 2017",
        "end": "August 30th, 2017"
    },
    "paid": true
}, {
    "company": "Facebook",
    "logo": "https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-flogo-Blue-broadcast-2.png",
    "position": "Software Developer",
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus.
    Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris 
    venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.`,
    "location": "Menlo Park, CA",
    "dates": {
        "start": "June 24th, 2017",
        "end": "August 30th, 2017"
    },
    "paid": true
}, {
    "company": "Apple",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Apple-Apple.svg/748px-Apple-Apple.svg.png",
    "position": "Software Developer",
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus.
    Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris 
    venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.`,
    "location": "Cupertino, CA",
    "dates": {
        "start": "June 24th, 2017",
        "end": "August 30th, 2017"
    },
    "paid": true
}, {
    "company": "Microsoft",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png",
    "position": "Software Developer",
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus.
    Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris 
    venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.`,
    "location": "Redmond, WA",
    "dates": {
        "start": "June 24th, 2017",
        "end": "August 30th, 2017"
    },
    "paid": true
}, {
    "company": "Unisys",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Unisys_logo.svg/800px-Unisys_logo.svg.png",
    "position": "Software Developer",
    "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tincidunt elit, nec gravida risus.
    Sed rhoncus nisl vitae tincidunt facilisis. In congue vitae ex vitae feugiat. Sed sodales ante quis mauris 
    venenatis, eget elementum purus malesuada. Suspendisse et pellentesque sem. Nam nec eros commodo, cursus mi a, malesuada felis.`,
    "location": "Blue Bell, PA",
    "dates": {
        "start": "June 24th, 2017",
        "end": "August 30th, 2017"
    },
    "paid": true
}]);

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Index__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ViewJob__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ViewJob___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_ViewJob__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Index',
        component: __WEBPACK_IMPORTED_MODULE_2__components_Index___default.a
    }, {
        path: '/:id',
        name: 'ViewJob',
        component: __WEBPACK_IMPORTED_MODULE_3__components_ViewJob___default.a
    }]
}));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listings__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'index',
  data() {
    return {
      currentQuery: ""
    };
  },
  computed: {
    filteredListings() {
      if (this.currentQuery === null) {
        return __WEBPACK_IMPORTED_MODULE_0__listings__["a" /* default */];
      }

      return __WEBPACK_IMPORTED_MODULE_0__listings__["a" /* default */].filter(item => {
        return item.company.toLowerCase().includes(this.currentQuery.toLowerCase()) || item.position.toLowerCase().includes(this.currentQuery.toLowerCase()) || item.description.toLowerCase().includes(this.currentQuery.toLowerCase()) || item.location.toLowerCase().includes(this.currentQuery.toLowerCase());
      });
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listings__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'view-job',
  data() {
    return {
      listing: __WEBPACK_IMPORTED_MODULE_0__listings__["a" /* default */][this.$route.params.id]
    };
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(4);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_2__App___default.a }
});

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(21),
  /* scopeId */
  "data-v-488df7a0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  "data-v-14eeddb4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-container', {
    staticClass: "mt-4"
  }, [_c('v-row', [_c('v-col', {
    attrs: {
      "md4": ""
    }
  }, [_c('v-card', {
    staticClass: "mr-2"
  }, [_c('v-card-row', {
    attrs: {
      "img": _vm.listing.logo,
      "height": "300px"
    }
  }), _vm._v(" "), _c('v-card-title', {
    staticClass: "green white--text"
  }, [_vm._v(_vm._s(_vm.listing.company))])], 1)], 1), _vm._v(" "), _c('v-col', {
    attrs: {
      "md8": ""
    }
  }, [_c('v-card', {
    staticClass: "ml-2"
  }, [_c('v-card-title', {
    staticClass: "green white--text"
  }, [_vm._v(_vm._s(_vm.listing.position))]), _vm._v(" "), _c('v-card-text', {
    staticClass: "grey--text pb-0"
  }, [_vm._v("\n          " + _vm._s(_vm.listing.dates.start) + " to " + _vm._s(_vm.listing.dates.end) + "\n        ")]), _vm._v(" "), _c('v-card-text', [_vm._v("\n          " + _vm._s(_vm.listing.description) + "\n        ")]), _vm._v(" "), _c('v-card-row', [_c('v-chip', {
    staticClass: "green white--text"
  }, [_vm._v(_vm._s(_vm.listing.location))]), _vm._v(" "), (_vm.listing.paid) ? _c('v-chip', {
    staticClass: "green white--text"
  }, [_vm._v("Paid")]) : _vm._e()], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-container', [_c('v-text-field', {
    attrs: {
      "name": "input-1-3",
      "label": "Search jobs...",
      "single-line": ""
    },
    model: {
      value: (_vm.currentQuery),
      callback: function($$v) {
        _vm.currentQuery = $$v
      },
      expression: "currentQuery"
    }
  }), _vm._v(" "), _c('v-card', [(_vm.filteredListings.length > 0) ? _c('div', [_c('v-list', {
    attrs: {
      "three-line": ""
    }
  }, _vm._l((_vm.filteredListings), function(item, index) {
    return _c('v-list-item', {
      key: index
    }, [_c('v-list-tile', {
      attrs: {
        "avatar": "",
        "ripple": "",
        "router": "",
        "to": '/' + index
      }
    }, [_c('v-list-tile-avatar', [_c('img', {
      attrs: {
        "src": item.logo
      }
    })]), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v(_vm._s(item.company))]), _vm._v(" "), _c('v-list-tile-sub-title', {
      staticClass: "grey--text text--darken-4"
    }, [_vm._v(_vm._s(item.position) + " at " + _vm._s(item.location))]), _vm._v(" "), _c('v-list-tile-sub-title', [_vm._v(_vm._s(item.description))])], 1)], 1)], 1)
  }))], 1) : _c('v-card-text', {
    staticClass: "text-xs-center"
  }, [_c('i', [_vm._v("No listings found D:")])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('v-toolbar', {
    staticClass: "green"
  }, [_c('v-container', [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('v-toolbar-title', [_vm._v("\n          Job Thing\n        ")])], 1), _vm._v(" "), _c('v-spacer')], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "pt-3"
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ })
],[10]);
//# sourceMappingURL=app.d516770317bf95a23dd1.js.map