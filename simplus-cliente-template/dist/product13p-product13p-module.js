(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product13p-product13p-module"],{

/***/ "./src/app/layout/product13p/product13p-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/product13p/product13p-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: Product13pRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product13pRoutingModule", function() { return Product13pRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product13p_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product13p.component */ "./src/app/layout/product13p/product13p.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _product13p_component__WEBPACK_IMPORTED_MODULE_2__["Product13pComponent"]
    }
];
var Product13pRoutingModule = /** @class */ (function () {
    function Product13pRoutingModule() {
    }
    Product13pRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Product13pRoutingModule);
    return Product13pRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/product13p/product13p.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/product13p/product13p.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Produtos E1'\" [icon]=\"'fa-wrench'\"></app-page-header>\n<div class=\"pos-f-t\">\n  <nav class=\"navbar navbar-dark btn-danger\"> Relatórios\n  </nav>\n</div>\n<div class=\"card text-center\">\n    <div class=\"col-md-14\">\n        <table class=\"table table-striped\">\n          <thead>\n          <tr>\n            <th class=\"hidden\">Código</th>\n            <th>GTIN</th>\n            <th>Descrição</th>\n            <th>Data Cadastro</th>\n           </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let product of products\">\n            <td class=\"hidden\">{{product.id}}</td>\n            <td>{{product.gtln}}<span class=\"badge badge-pill badge-info\" data-toggle=\"tooltip\"\n                data-placement=\"left\" title=\"Número GTIN-13/14 codificado em código de barras EAN-13. O primeiro dígito é sempre colocado fora do símbolo; Além disso, um indicador direito é usado para indicar uma Zona Silenciosaque é necessária para que os scanners de código de barras funcionem corretamente.\" >Info</span></td>\n            <td>{{product.description}}</td>\n            <td>{{product.lastUpdate}}</td>\n           </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"card-footer text-muted\"><!--REFATORAR USANDO responseType: ResponseContentType.Blob,-->\n\n        <a href=\"http://localhost:8080/download1p\" class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Gera um relatório com infomações da empresa A1, NO FORMATO XLS, compactado.\">Download Relatório XLS \n          <span class=\"badge badge-light\">1</span> \n        </a>\n    \n      </div>\n      <div class=\"card-footer text-muted\"><!--REFATORAR USANDO responseType: ResponseContentType.Blob,-->\n\n        <a href=\"http://localhost:8080/download1p\" class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Gera um relatório com infomações da empresa A1, NO FORMATO XLS, compactado.\">Download Relatório ZIP\n          <span class=\"badge badge-light\">1</span> \n        </a>\n    \n      </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/product13p/product13p.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/product13p/product13p.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/product13p/product13p.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/product13p/product13p.component.ts ***!
  \***********************************************************/
/*! exports provided: Product13pComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product13pComponent", function() { return Product13pComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product.service */ "./src/app/layout/product/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Product13pComponent = /** @class */ (function () {
    function Product13pComponent(route, productService) {
        this.route = route;
        this.productService = productService;
    }
    Product13pComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts14PROE1().subscribe(function (data) {
            _this.products = data;
        });
    };
    Product13pComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product13p',
            template: __webpack_require__(/*! ./product13p.component.html */ "./src/app/layout/product13p/product13p.component.html"),
            styles: [__webpack_require__(/*! ./product13p.component.scss */ "./src/app/layout/product13p/product13p.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], Product13pComponent);
    return Product13pComponent;
}());



/***/ }),

/***/ "./src/app/layout/product13p/product13p.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/product13p/product13p.module.ts ***!
  \********************************************************/
/*! exports provided: Product13pModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product13pModule", function() { return Product13pModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product13p_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product13p-routing.module */ "./src/app/layout/product13p/product13p-routing.module.ts");
/* harmony import */ var _product13p_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product13p.component */ "./src/app/layout/product13p/product13p.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Product13pModule = /** @class */ (function () {
    function Product13pModule() {
    }
    Product13pModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product13p_routing_module__WEBPACK_IMPORTED_MODULE_2__["Product13pRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_product13p_component__WEBPACK_IMPORTED_MODULE_3__["Product13pComponent"]]
        })
    ], Product13pModule);
    return Product13pModule;
}());



/***/ })

}]);
//# sourceMappingURL=product13p-product13p-module.js.map