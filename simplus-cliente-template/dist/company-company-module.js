(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./src/app/layout/company/company-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/company/company-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.component */ "./src/app/layout/company/company.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _company_component__WEBPACK_IMPORTED_MODULE_2__["CompanyComponent"]
    }
];
var CompanyRoutingModule = /** @class */ (function () {
    function CompanyRoutingModule() {
    }
    CompanyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CompanyRoutingModule);
    return CompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/company/company.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/company/company.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-page-header [heading]=\"'Lista de Empresas'\" [icon]=\"'fa-wrench'\"></app-page-header>\n<div class=\"pos-f-t\">\n  <nav class=\"navbar navbar-dark btn-danger\"> Relatórios\n  </nav>\n</div>\n<div class=\"col-md-6\">\n   <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"hidden\">Código</th>\n      <th>Nome Fantasia</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let company of companys\">\n      <td class=\"hidden\">{{company.id}}</td>\n      <td>{{company.name}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>  \n\n<div class=\"card-footer text-muted\">\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Gera um relatório com infomações da empresa A1, NO FORMATO XLS, compactado.\">\n    Download Relatório XLS <span class=\"badge badge-light\">4</span>\n  </button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/layout/company/company.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/company/company.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/company.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/company/company.component.ts ***!
  \*****************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.service */ "./src/app/layout/company/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(route, companyService) {
        this.route = route;
        this.companyService = companyService;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getCompanys().subscribe(function (data) {
            _this.companys = data;
        });
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/layout/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/layout/company/company.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/company.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/company/company.module.ts ***!
  \**************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/layout/company/company-routing.module.ts");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.component */ "./src/app/layout/company/company.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]],
            declarations: [_company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"]]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map