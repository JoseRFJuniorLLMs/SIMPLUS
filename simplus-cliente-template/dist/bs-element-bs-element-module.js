(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bs-element-bs-element-module"],{

/***/ "./src/app/layout/bs-element/bs-element-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BsElementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsElementRoutingModule", function() { return BsElementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bs_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-element.component */ "./src/app/layout/bs-element/bs-element.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _bs_element_component__WEBPACK_IMPORTED_MODULE_2__["BsElementComponent"]
    }
];
var BsElementRoutingModule = /** @class */ (function () {
    function BsElementRoutingModule() {
    }
    BsElementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BsElementRoutingModule);
    return BsElementRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/bs-element/bs-element.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Bootstrap Elements'\" [icon]=\"'fa-desktop'\"></app-page-header>\n    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"jumbotron\">\n        <h1>Hello, world!</h1>\n        <p>\n            This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.\n        </p>\n        <p>\n            <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-lg\" role=\"button\">Learn more »</a>\n        </p>\n    </div>\n\n    <div class=\"page-header\">\n        <h1>Buttons</h1>\n        <hr>\n    </div>\n    <p>\n        <button type=\"button\" class=\"btn btn-lg btn-default\">Default</button>\n        <button type=\"button\" class=\"btn btn-lg btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-lg btn-secondary\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-lg btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-lg btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-lg btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-lg btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-lg btn-link\">Link</button>\n    </p>\n    <p>\n        <button type=\"button\" class=\"btn btn-default\">Default</button>\n        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-link\">Link</button>\n    </p>\n    <p>\n        <button type=\"button\" class=\"btn btn-sm btn-default\">Default</button>\n        <button type=\"button\" class=\"btn btn-sm btn-primary\">Primary</button>\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\">Secondary</button>\n        <button type=\"button\" class=\"btn btn-sm btn-success\">Success</button>\n        <button type=\"button\" class=\"btn btn-sm btn-info\">Info</button>\n        <button type=\"button\" class=\"btn btn-sm btn-warning\">Warning</button>\n        <button type=\"button\" class=\"btn btn-sm btn-danger\">Danger</button>\n        <button type=\"button\" class=\"btn btn-sm btn-link\">Link</button>\n    </p>\n\n    <br>\n\n    <div class=\"page-header\">\n        <h1>Thumbnails</h1>\n        <hr>\n    </div>\n    <img class=\"img-thumbnail\" src=\"http://placehold.it/400x400\" alt=\"\">\n\n    <div class=\"page-header\">\n        <h1>Dropdown menus</h1>\n        <hr>\n    </div>\n    <div class=\"dropdown theme-dropdown clearfix\">\n        <button class=\"btn btn-secondary\">\n            Dropdown\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n        </div>\n    </div>\n    <br>\n\n    <div class=\"page-header\">\n        <h1>Navbars</h1>\n    </div>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Link</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n                </li>\n            </ul>\n      <!--     <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n            </form> -->\n        </div>\n    </nav>\n    <br>\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark mb-3\">\n        <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Link</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n                </li>\n            </ul>\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n            </form>\n        </div>\n    </nav>\n\n    <div class=\"page-header\">\n        <h1>Alerts</h1>\n        <hr>\n    </div>\n    <div class=\"alert alert-success\">\n        <strong>Well done!</strong> You successfully read this important alert message.\n    </div>\n    <div class=\"alert alert-info\">\n        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n    </div>\n    <div class=\"alert alert-warning\">\n        <strong>Warning!</strong> Best check yo self, you're not looking too good.\n    </div>\n    <div class=\"alert alert-danger\">\n        <strong>Oh snap!</strong> Change a few things up and try submitting again.\n    </div>\n\n    <div class=\"page-header\">\n        <h1>Progress bars</h1>\n        <hr>\n    </div>\n    <div class=\"progress\">\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 25%; height: 10px;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n    </div>\n    <br>\n    <div class=\"progress\">\n        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n    </div>\n    <br>\n    <div class=\"progress\">\n        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n    </div>\n    <br>\n    <div class=\"progress\">\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 30%\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n    </div>\n    <br>\n    <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-striped bg-danger\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n    </div>\n    <br>\n\n    <div class=\"page-header\">\n        <h1>List groups</h1>\n        <hr>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\">Cras justo odio</li>\n                <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                <li class=\"list-group-item\">Morbi leo risus</li>\n                <li class=\"list-group-item\">Porta ac consectetur ac</li>\n                <li class=\"list-group-item\">Vestibulum at eros</li>\n            </ul>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"list-group\">\n                <a href=\"javascript:void(0)\" class=\"list-group-item active\">Cras justo odio</a>\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">Morbi leo risus</a>\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">Porta ac consectetur ac</a>\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">Vestibulum at eros</a>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"list-group\">\n                <a href=\"javascript:void(0)\" class=\"list-group-item active\">\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\n                    <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\n                    <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">\n                    <h4 class=\"list-group-item-heading\">List group item heading</h4>\n                    <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n                </a>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n    </div>\n\n    <div class=\"page-header\">\n        <h1>Cards</h1>\n        <hr>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-primary mb-3\">\n                <div class=\"card-header\">Header</div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Primary card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-secondary mb-3\">\n                <div class=\"card-header\">Header</div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Secondary card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-success mb-3\">\n                <div class=\"card-header\">Header</div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Success card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-danger mb-3\">\n                <div class=\"card-header\">Header</div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Danger card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-warning mb-3\">\n                <div class=\"card-header\">Header</div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Warning card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-info mb-3\">\n                <div class=\"card-header\">Header</div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Info card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card bg-light mb-3\">\n                <div class=\"card-header\">Header</div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Light card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-dark mb-3\">\n                <div class=\"card-header\">Header</div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Dark card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n        <div class=\"col-sm-4\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Header</div>\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Dark card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <!-- /.col-sm-4 -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/bs-element/bs-element.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/bs-element/bs-element.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.component.ts ***!
  \***********************************************************/
/*! exports provided: BsElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsElementComponent", function() { return BsElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BsElementComponent = /** @class */ (function () {
    function BsElementComponent() {
    }
    BsElementComponent.prototype.ngOnInit = function () { };
    BsElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bs-element',
            template: __webpack_require__(/*! ./bs-element.component.html */ "./src/app/layout/bs-element/bs-element.component.html"),
            styles: [__webpack_require__(/*! ./bs-element.component.scss */ "./src/app/layout/bs-element/bs-element.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], BsElementComponent);
    return BsElementComponent;
}());



/***/ }),

/***/ "./src/app/layout/bs-element/bs-element.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/bs-element/bs-element.module.ts ***!
  \********************************************************/
/*! exports provided: BsElementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsElementModule", function() { return BsElementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bs_element_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs-element-routing.module */ "./src/app/layout/bs-element/bs-element-routing.module.ts");
/* harmony import */ var _bs_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bs-element.component */ "./src/app/layout/bs-element/bs-element.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BsElementModule = /** @class */ (function () {
    function BsElementModule() {
    }
    BsElementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _bs_element_routing_module__WEBPACK_IMPORTED_MODULE_2__["BsElementRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_bs_element_component__WEBPACK_IMPORTED_MODULE_3__["BsElementComponent"]]
        })
    ], BsElementModule);
    return BsElementModule;
}());



/***/ })

}]);
//# sourceMappingURL=bs-element-bs-element-module.js.map