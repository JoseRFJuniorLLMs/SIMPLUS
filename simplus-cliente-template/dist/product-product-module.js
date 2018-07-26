(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./src/app/layout/product/product-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/product/product-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/layout/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]
    }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/product/product.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/product/product.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Lista de Produtos'\" [icon]=\"'fa-wrench'\"></app-page-header>\n<div class=\"pos-f-t\">\n  <nav class=\"navbar navbar-dark btn-danger\"> Relatórios\n  </nav>\n</div>\n<div class=\"card text-center\">\n    <div class=\"col-md-14\">\n        <table class=\"table table-striped\">\n          <thead>\n          <tr>\n            <th class=\"hidden\">Código</th>\n            <th>GTIN</th>\n            <th>Descrição</th>\n            <th>Data Cadastro</th>\n            <th>Empresa</th>\n           </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let product of products\">\n            <td class=\"hidden\">{{product.id}}</td>\n            <td>{{product.gtln}}<span class=\"badge badge-pill badge-info\" data-toggle=\"tooltip\"\n                data-placement=\"left\" title=\"Número GTIN-13/14 codificado em código de barras EAN-13. O primeiro dígito é sempre colocado fora do símbolo; Além disso, um indicador direito é usado para indicar uma Zona Silenciosaque é necessária para que os scanners de código de barras funcionem corretamente.\" >Info</span></td>\n          \n            <td>{{product.description}}</td>\n            <td>{{product.lastUpdate}}</td>\n         <!--   <td>{{product.company}}</td>-->\n           </tr>\n          </tbody>\n        </table>\n      </div>\n  <div class=\"card-footer text-muted\">\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Gera um relatório com infomações da empresa A1, NO FORMATO XLS, compactado.\">\n      Download Relatório XLS <span class=\"badge badge-light\">{{errorMsg}}</span>\n    </button>\n  </div>\n  <div class=\"card-footer text-muted\">\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Gera um relatório com infomações da empresa A1, NO FORMATO XLS, compactado.\">\n      Download Relatório ZIP <span class=\"badge badge-light\">{{errorMsg}}</span>\n    </button>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/layout/product/product.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/product/product.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/product/product.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/product/product.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/layout/product/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, productService) {
        this.route = route;
        this.productService = productService;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/layout/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/layout/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/layout/product/product.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/product/product.module.ts ***!
  \**************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/layout/product/product-routing.module.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.component */ "./src/app/layout/product/product.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map