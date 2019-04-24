(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_player_create_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-player/create-player.component */ "./src/app/create-player/create-player.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _playersheet_player_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playersheet/player.resolver */ "./src/app/playersheet/player.resolver.ts");
/* harmony import */ var _playersheet_playersheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playersheet/playersheet.component */ "./src/app/playersheet/playersheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'create-player',
        component: _create_player_create_player_component__WEBPACK_IMPORTED_MODULE_2__["CreatePlayerComponent"]
    },
    {
        path: 'player/:playerId',
        component: _playersheet_playersheet_component__WEBPACK_IMPORTED_MODULE_5__["PlayersheetComponent"],
        resolve: {
            player: _playersheet_player_resolver__WEBPACK_IMPORTED_MODULE_4__["PlayerResolver"]
        }
    },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--suppress HtmlUnknownAnchorTarget -->\r\n<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #drawer\r\n               class=\"sidenav\"\r\n               fixedInViewport=\"true\"\r\n               [attr.role]=\"isHandset ? 'dialog' : 'navigation'\"\r\n               [mode]=\"isHandset ? 'over' : 'side'\"\r\n               [opened]=\"!isHandset\">\r\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\r\n    <mat-nav-list>\r\n      <a routerLink=\"/\"\r\n         routerLinkActive=\"active\"\r\n         mat-list-item\r\n         (click)=\"closeDrawer()\">Accueil</a>\r\n      <a routerLink=\"/create-player\"\r\n         routerLinkActive=\"active\"\r\n         mat-list-item\r\n         (click)=\"closeDrawer()\">Créer un personnage</a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <button *ngIf=\"isHandset\"\r\n              type=\"button\"\r\n              aria-label=\"Toggle sidenav\"\r\n              mat-icon-button\r\n              (click)=\"drawer.toggle()\">\r\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n      </button>\r\n      {{ toolbarTitle$ | async }}\r\n    </mat-toolbar>\r\n\r\n    <div class=\"page_content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-sidenav-container {\n  height: 100%; }\n  .mat-sidenav-container .mat-drawer-side, .mat-sidenav-container .mat-drawer-over {\n    border-right: 0;\n    width: 256px; }\n  .mat-sidenav-container .page_content {\n    padding: 10px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kdW5nZW9uLWRyYWdvbnMtY2xpZW50L3NyYy9hcHAvQzpcXFVzZXJzXFxuaWNvbGFzY1xcUFJPSkVUU1xcZHVuZ2Vvbi1kcmFnb25zLWNsaWVudC9hcHBcXGR1bmdlb24tZHJhZ29ucy1jbGllbnRcXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7RUFEZDtJQUlJLGVBQWU7SUFDZixZQUFZLEVBQUE7RUFMaEI7SUFTSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJhcHAvZHVuZ2Vvbi1kcmFnb25zLWNsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLm1hdC1kcmF3ZXItc2lkZSwgLm1hdC1kcmF3ZXItb3ZlciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMjU2cHg7XHJcbiAgfVxyXG5cclxuICAucGFnZV9jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_store_core_core_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/store/core/core.state */ "./src/app/shared/store/core/core.state.ts");
/* harmony import */ var _shared_store_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/store/player */ "./src/app/shared/store/player/index.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/utils */ "./src/app/shared/utils/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(store, breakpointObserver) {
        var _this = _super.call(this, breakpointObserver) || this;
        _this.store = store;
        return _this;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _shared_store_player__WEBPACK_IMPORTED_MODULE_6__["FetchPlayers"]());
    };
    AppComponent.prototype.closeDrawer = function () {
        if (this.isHandset) {
            this.drawer.toggle();
        }
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(_shared_store_core_core_state__WEBPACK_IMPORTED_MODULE_5__["CoreState"].toolbarTitle),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AppComponent.prototype, "toolbarTitle$", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppComponent.prototype, "drawer", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dd-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]])
    ], AppComponent);
    return AppComponent;
}(_shared_utils__WEBPACK_IMPORTED_MODULE_7__["AbstractHandsetObserver"]));



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _create_player_create_player_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-player/create-player.module */ "./src/app/create-player/create-player.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _playersheet_playersheet_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./playersheet/playersheet.module */ "./src/app/playersheet/playersheet.module.ts");
/* harmony import */ var _shared_store_core_core_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/store/core/core.state */ "./src/app/shared/store/core/core.state.ts");
/* harmony import */ var _shared_store_player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/store/player */ "./src/app/shared/store/player/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appModules = [_home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"], _create_player_create_player_module__WEBPACK_IMPORTED_MODULE_8__["CreatePlayerModule"], _playersheet_playersheet_module__WEBPACK_IMPORTED_MODULE_10__["PlayersheetModule"]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["NgxsModule"].forRoot([_shared_store_core_core_state__WEBPACK_IMPORTED_MODULE_11__["CoreState"], _shared_store_player__WEBPACK_IMPORTED_MODULE_12__["PlayerState"]]),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _shared_store_player__WEBPACK_IMPORTED_MODULE_12__["PlayerStoreModule"]
            ].concat(appModules),
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-player/create-player.component.html":
/*!************************************************************!*\
  !*** ./src/app/create-player/create-player.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"createPlayerForm\"\r\n      (ngSubmit)=\"createPlayer()\"\r\n      fxLayout=\"row\"\r\n      fxLayoutAlign=\"center center\">\r\n  <mat-form-field fxFlex=\"80\"\r\n                  fxFlex.xs=\"70\">\r\n    <input matInput\r\n           placeholder=\"Nom du personnage\"\r\n           formControlName=\"name\">\r\n  </mat-form-field>\r\n\r\n  <div fxFlex>\r\n    <button mat-button\r\n            type=\"submit\"\r\n            color=\"primary\"\r\n            [disabled]=\"createPlayerForm.invalid\">Submit\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/create-player/create-player.component.scss":
/*!************************************************************!*\
  !*** ./src/app/create-player/create-player.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZHVuZ2Vvbi1kcmFnb25zLWNsaWVudC9zcmMvYXBwL2NyZWF0ZS1wbGF5ZXIvY3JlYXRlLXBsYXllci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/create-player/create-player.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-player/create-player.component.ts ***!
  \**********************************************************/
/*! exports provided: CreatePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlayerComponent", function() { return CreatePlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_store_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/store/player */ "./src/app/shared/store/player/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatePlayerComponent = /** @class */ (function () {
    function CreatePlayerComponent(store, formBuilder) {
        this.store = store;
        this.createPlayerForm = formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    CreatePlayerComponent.prototype.createPlayer = function () {
        this.store.dispatch(new _shared_store_player__WEBPACK_IMPORTED_MODULE_3__["CreatePlayer"](this.createPlayerForm.getRawValue()));
    };
    CreatePlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dd-create-player',
            template: __webpack_require__(/*! ./create-player.component.html */ "./src/app/create-player/create-player.component.html"),
            styles: [__webpack_require__(/*! ./create-player.component.scss */ "./src/app/create-player/create-player.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreatePlayerComponent);
    return CreatePlayerComponent;
}());



/***/ }),

/***/ "./src/app/create-player/create-player.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-player/create-player.module.ts ***!
  \*******************************************************/
/*! exports provided: CreatePlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlayerModule", function() { return CreatePlayerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_store_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/store/player */ "./src/app/shared/store/player/index.ts");
/* harmony import */ var _create_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-player.component */ "./src/app/create-player/create-player.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CreatePlayerModule = /** @class */ (function () {
    function CreatePlayerModule() {
    }
    CreatePlayerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_create_player_component__WEBPACK_IMPORTED_MODULE_8__["CreatePlayerComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forFeature([_shared_store_player__WEBPACK_IMPORTED_MODULE_7__["PlayerState"]])
            ]
        })
    ], CreatePlayerModule);
    return CreatePlayerModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\r\n  <mat-list-item *ngFor=\"let player of players$ | async\"\r\n                 routerLink=\"/player/{{player.id}}\"\r\n                 matRipple>{{ player.name }}</mat-list-item>\r\n</mat-list>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item:hover {\n  font-weight: bold;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kdW5nZW9uLWRyYWdvbnMtY2xpZW50L3NyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG5pY29sYXNjXFxQUk9KRVRTXFxkdW5nZW9uLWRyYWdvbnMtY2xpZW50L2FwcFxcZHVuZ2Vvbi1kcmFnb25zLWNsaWVudFxcc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6ImFwcC9kdW5nZW9uLWRyYWdvbnMtY2xpZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWl0ZW0ge1xyXG4gICY6aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_store_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/store/player */ "./src/app/shared/store/player/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_shared_store_player__WEBPACK_IMPORTED_MODULE_3__["PlayerState"].players),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], HomeComponent.prototype, "players$", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dd-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_store_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/store/player */ "./src/app/shared/store/player/index.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forFeature([_shared_store_player__WEBPACK_IMPORTED_MODULE_8__["PlayerState"]]),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/playersheet/player-characteristics/player-characteristics.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/playersheet/player-characteristics/player-characteristics.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"playerForm\"\n      fxLayout=\"row\">\n  <mat-form-field fxFlex=\"60\"\n                  fxFlex.xs=\"100\">\n    <input matInput\n           placeholder=\"Nom du personnage\"\n           formControlName=\"name\">\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./src/app/playersheet/player-characteristics/player-characteristics.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/playersheet/player-characteristics/player-characteristics.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZHVuZ2Vvbi1kcmFnb25zLWNsaWVudC9zcmMvYXBwL3BsYXllcnNoZWV0L3BsYXllci1jaGFyYWN0ZXJpc3RpY3MvcGxheWVyLWNoYXJhY3RlcmlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/playersheet/player-characteristics/player-characteristics.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/playersheet/player-characteristics/player-characteristics.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PlayerCharacteristicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCharacteristicsComponent", function() { return PlayerCharacteristicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-deep-equal */ "../../node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_store_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/store/player */ "./src/app/shared/store/player/index.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/utils */ "./src/app/shared/utils/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PlayerCharacteristicsComponent = /** @class */ (function (_super) {
    __extends(PlayerCharacteristicsComponent, _super);
    function PlayerCharacteristicsComponent(store, formBuilder) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.loadPlayer = function (player) {
            _this.player = player;
            _this.playerForm.get('name').setValue(player.name);
        };
        _this.playerForm = formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        _this.willUnsubscribe(_this.player$.subscribe(_this.loadPlayer));
        return _this;
    }
    PlayerCharacteristicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.willUnsubscribe(this.playerForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(2000))
            .subscribe(function () { return _this.savePlayer(); }));
    };
    PlayerCharacteristicsComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.savePlayer();
    };
    PlayerCharacteristicsComponent.prototype.savePlayer = function () {
        if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__(this.extractPlayerFromForm(), this.player)) {
            this.store.dispatch(new _shared_store_player__WEBPACK_IMPORTED_MODULE_6__["UpdatePlayer"](this.extractPlayerFromForm()));
        }
    };
    PlayerCharacteristicsComponent.prototype.extractPlayerFromForm = function () {
        var formValue = this.playerForm.getRawValue();
        return __assign({}, this.player, { name: formValue.name });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_shared_store_player__WEBPACK_IMPORTED_MODULE_6__["PlayerState"].player),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], PlayerCharacteristicsComponent.prototype, "player$", void 0);
    PlayerCharacteristicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dd-player-characteristics',
            template: __webpack_require__(/*! ./player-characteristics.component.html */ "./src/app/playersheet/player-characteristics/player-characteristics.component.html"),
            styles: [__webpack_require__(/*! ./player-characteristics.component.scss */ "./src/app/playersheet/player-characteristics/player-characteristics.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PlayerCharacteristicsComponent);
    return PlayerCharacteristicsComponent;
}(_shared_utils__WEBPACK_IMPORTED_MODULE_7__["AbstractSubscriptionsDestroyer"]));



/***/ }),

/***/ "./src/app/playersheet/player.resolver.ts":
/*!************************************************!*\
  !*** ./src/app/playersheet/player.resolver.ts ***!
  \************************************************/
/*! exports provided: PlayerResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerResolver", function() { return PlayerResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_store_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/store/player */ "./src/app/shared/store/player/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerResolver = /** @class */ (function () {
    function PlayerResolver(store) {
        this.store = store;
    }
    PlayerResolver.prototype.resolve = function (route, state) {
        return this.store.dispatch(new _shared_store_player__WEBPACK_IMPORTED_MODULE_2__["FetchPlayer"](route.params.playerId));
    };
    PlayerResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], PlayerResolver);
    return PlayerResolver;
}());



/***/ }),

/***/ "./src/app/playersheet/playersheet.component.html":
/*!********************************************************!*\
  !*** ./src/app/playersheet/playersheet.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Caractéristiques\">\n    <dd-player-characteristics></dd-player-characteristics>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/playersheet/playersheet.component.scss":
/*!********************************************************!*\
  !*** ./src/app/playersheet/playersheet.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZHVuZ2Vvbi1kcmFnb25zLWNsaWVudC9zcmMvYXBwL3BsYXllcnNoZWV0L3BsYXllcnNoZWV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/playersheet/playersheet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/playersheet/playersheet.component.ts ***!
  \******************************************************/
/*! exports provided: PlayersheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersheetComponent", function() { return PlayersheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_store_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/store/player */ "./src/app/shared/store/player/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayersheetComponent = /** @class */ (function () {
    function PlayersheetComponent(store) {
        var _this = this;
        this.store = store;
        this.player$.subscribe(function (player) { return _this.player = player; });
    }
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Select"])(_shared_store_player__WEBPACK_IMPORTED_MODULE_3__["PlayerState"].player),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PlayersheetComponent.prototype, "player$", void 0);
    PlayersheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dd-playersheet',
            template: __webpack_require__(/*! ./playersheet.component.html */ "./src/app/playersheet/playersheet.component.html"),
            styles: [__webpack_require__(/*! ./playersheet.component.scss */ "./src/app/playersheet/playersheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], PlayersheetComponent);
    return PlayersheetComponent;
}());



/***/ }),

/***/ "./src/app/playersheet/playersheet.module.ts":
/*!***************************************************!*\
  !*** ./src/app/playersheet/playersheet.module.ts ***!
  \***************************************************/
/*! exports provided: PlayersheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersheetModule", function() { return PlayersheetModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _player_characteristics_player_characteristics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player-characteristics/player-characteristics.component */ "./src/app/playersheet/player-characteristics/player-characteristics.component.ts");
/* harmony import */ var _player_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.resolver */ "./src/app/playersheet/player.resolver.ts");
/* harmony import */ var _playersheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playersheet.component */ "./src/app/playersheet/playersheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PlayersheetModule = /** @class */ (function () {
    function PlayersheetModule() {
    }
    PlayersheetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_playersheet_component__WEBPACK_IMPORTED_MODULE_7__["PlayersheetComponent"], _player_characteristics_player_characteristics_component__WEBPACK_IMPORTED_MODULE_5__["PlayerCharacteristicsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"]
            ],
            providers: [_player_resolver__WEBPACK_IMPORTED_MODULE_6__["PlayerResolver"]]
        })
    ], PlayersheetModule);
    return PlayersheetModule;
}());



/***/ }),

/***/ "./src/app/shared/store/core/core.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/store/core/core.actions.ts ***!
  \***************************************************/
/*! exports provided: SetToolbarTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetToolbarTitle", function() { return SetToolbarTitle; });
var SetToolbarTitle = /** @class */ (function () {
    function SetToolbarTitle(title) {
        this.title = title;
    }
    SetToolbarTitle.type = '[Core] Set toolbar title';
    return SetToolbarTitle;
}());



/***/ }),

/***/ "./src/app/shared/store/core/core.state.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/store/core/core.state.ts ***!
  \*************************************************/
/*! exports provided: CoreState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreState", function() { return CoreState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.actions */ "./src/app/shared/store/core/core.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoreState = /** @class */ (function () {
    function CoreState() {
    }
    CoreState.toolbarTitle = function (state) {
        return state.toolbarTitle;
    };
    CoreState.prototype.setToolbarTitle = function (ctx, action) {
        ctx.patchState({ toolbarTitle: action.title });
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_core_actions__WEBPACK_IMPORTED_MODULE_1__["SetToolbarTitle"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _core_actions__WEBPACK_IMPORTED_MODULE_1__["SetToolbarTitle"]]),
        __metadata("design:returntype", void 0)
    ], CoreState.prototype, "setToolbarTitle", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", String)
    ], CoreState, "toolbarTitle", null);
    CoreState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'core',
            defaults: {
                toolbarTitle: 'Donjon et Dragons'
            }
        })
    ], CoreState);
    return CoreState;
}());



/***/ }),

/***/ "./src/app/shared/store/player/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/store/player/index.ts ***!
  \**********************************************/
/*! exports provided: PlayerState, PlayerStoreModule, FetchPlayer, FetchPlayers, CreatePlayer, UpdatePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.state */ "./src/app/shared/store/player/player.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return _player_state__WEBPACK_IMPORTED_MODULE_0__["PlayerState"]; });

/* harmony import */ var _player_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.actions */ "./src/app/shared/store/player/player.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchPlayer", function() { return _player_actions__WEBPACK_IMPORTED_MODULE_1__["FetchPlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchPlayers", function() { return _player_actions__WEBPACK_IMPORTED_MODULE_1__["FetchPlayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePlayer", function() { return _player_actions__WEBPACK_IMPORTED_MODULE_1__["CreatePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePlayer", function() { return _player_actions__WEBPACK_IMPORTED_MODULE_1__["UpdatePlayer"]; });

/* harmony import */ var _player_store_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-store.module */ "./src/app/shared/store/player/player-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerStoreModule", function() { return _player_store_module__WEBPACK_IMPORTED_MODULE_2__["PlayerStoreModule"]; });






/***/ }),

/***/ "./src/app/shared/store/player/player-store.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/store/player/player-store.module.ts ***!
  \************************************************************/
/*! exports provided: PlayerStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStoreModule", function() { return PlayerStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_gateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.gateway */ "./src/app/shared/store/player/player.gateway.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlayerStoreModule = /** @class */ (function () {
    function PlayerStoreModule() {
    }
    PlayerStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_player_gateway__WEBPACK_IMPORTED_MODULE_1__["PlayerGateway"]]
        })
    ], PlayerStoreModule);
    return PlayerStoreModule;
}());



/***/ }),

/***/ "./src/app/shared/store/player/player.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/store/player/player.actions.ts ***!
  \*******************************************************/
/*! exports provided: FetchPlayer, FetchPlayers, CreatePlayer, UpdatePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPlayer", function() { return FetchPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPlayers", function() { return FetchPlayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlayer", function() { return CreatePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePlayer", function() { return UpdatePlayer; });
var FetchPlayer = /** @class */ (function () {
    function FetchPlayer(playerId) {
        this.playerId = playerId;
    }
    FetchPlayer.type = '[Player] Fetch player';
    return FetchPlayer;
}());

var FetchPlayers = /** @class */ (function () {
    function FetchPlayers() {
    }
    FetchPlayers.type = '[Player] Fetch players';
    return FetchPlayers;
}());

var CreatePlayer = /** @class */ (function () {
    function CreatePlayer(player) {
        this.player = player;
    }
    CreatePlayer.type = '[Player] Create player';
    return CreatePlayer;
}());

var UpdatePlayer = /** @class */ (function () {
    function UpdatePlayer(player) {
        this.player = player;
    }
    UpdatePlayer.type = '[Player] Update player';
    return UpdatePlayer;
}());



/***/ }),

/***/ "./src/app/shared/store/player/player.gateway.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/store/player/player.gateway.ts ***!
  \*******************************************************/
/*! exports provided: PlayerGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerGateway", function() { return PlayerGateway; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/app/shared/utils/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerGateway = /** @class */ (function () {
    function PlayerGateway(httpClient) {
        this.httpClient = httpClient;
    }
    PlayerGateway.prototype.fetchPlayer = function (playerId) {
        var url = _utils__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].player.replace(':playerId', String(playerId));
        return this.httpClient.get(url);
    };
    PlayerGateway.prototype.fetchPlayers = function () {
        return this.httpClient.get(_utils__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].players);
    };
    PlayerGateway.prototype.createPlayer = function (player) {
        return this.httpClient.post(_utils__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].players, player);
    };
    PlayerGateway.prototype.updatePlayer = function (player) {
        return this.httpClient.put(_utils__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].players, player);
    };
    PlayerGateway = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PlayerGateway);
    return PlayerGateway;
}());



/***/ }),

/***/ "./src/app/shared/store/player/player.state.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/store/player/player.state.ts ***!
  \*****************************************************/
/*! exports provided: PlayerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return PlayerState; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_core_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.actions */ "./src/app/shared/store/core/core.actions.ts");
/* harmony import */ var _player_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player.actions */ "./src/app/shared/store/player/player.actions.ts");
/* harmony import */ var _player_gateway__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.gateway */ "./src/app/shared/store/player/player.gateway.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlayerState = /** @class */ (function () {
    function PlayerState(router, playerGateway) {
        this.router = router;
        this.playerGateway = playerGateway;
    }
    PlayerState.player = function (state) {
        return state.player;
    };
    PlayerState.players = function (state) {
        return state.players;
    };
    PlayerState.prototype.fetchPlayer = function (ctx, action) {
        return this.playerGateway.fetchPlayer(action.playerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (player) {
            ctx.patchState({ player: player });
            ctx.dispatch(new _core_core_actions__WEBPACK_IMPORTED_MODULE_4__["SetToolbarTitle"](player.name));
        }));
    };
    PlayerState.prototype.fetchPlayers = function (ctx) {
        return this.playerGateway.fetchPlayers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (players) { return ctx.patchState({ players: players }); }));
    };
    PlayerState.prototype.createPlayer = function (ctx, action) {
        var _this = this;
        return this.playerGateway.createPlayer(action.player)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (player) {
            ctx.dispatch(new _player_actions__WEBPACK_IMPORTED_MODULE_5__["FetchPlayers"]());
            _this.router.navigate(['/player', player.id]);
        }));
    };
    PlayerState.prototype.updatePlayer = function (ctx, action) {
        return this.playerGateway.updatePlayer(action.player)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (player) {
            ctx.dispatch(new _player_actions__WEBPACK_IMPORTED_MODULE_5__["FetchPlayers"]());
            ctx.dispatch(new _core_core_actions__WEBPACK_IMPORTED_MODULE_4__["SetToolbarTitle"](player.name));
        }));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_player_actions__WEBPACK_IMPORTED_MODULE_5__["FetchPlayer"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _player_actions__WEBPACK_IMPORTED_MODULE_5__["FetchPlayer"]]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PlayerState.prototype, "fetchPlayer", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_player_actions__WEBPACK_IMPORTED_MODULE_5__["FetchPlayers"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PlayerState.prototype, "fetchPlayers", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_player_actions__WEBPACK_IMPORTED_MODULE_5__["CreatePlayer"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _player_actions__WEBPACK_IMPORTED_MODULE_5__["CreatePlayer"]]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PlayerState.prototype, "createPlayer", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_player_actions__WEBPACK_IMPORTED_MODULE_5__["UpdatePlayer"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _player_actions__WEBPACK_IMPORTED_MODULE_5__["UpdatePlayer"]]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PlayerState.prototype, "updatePlayer", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], PlayerState, "player", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Array)
    ], PlayerState, "players", null);
    PlayerState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'player',
            defaults: {
                players: [],
                player: null
            }
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _player_gateway__WEBPACK_IMPORTED_MODULE_6__["PlayerGateway"]])
    ], PlayerState);
    return PlayerState;
}());



/***/ }),

/***/ "./src/app/shared/utils/abstract-handset-observer.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/utils/abstract-handset-observer.ts ***!
  \***********************************************************/
/*! exports provided: AbstractHandsetObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractHandsetObserver", function() { return AbstractHandsetObserver; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _abstract_subscriptions_destroyer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-subscriptions-destroyer */ "./src/app/shared/utils/abstract-subscriptions-destroyer.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var AbstractHandsetObserver = /** @class */ (function (_super) {
    __extends(AbstractHandsetObserver, _super);
    function AbstractHandsetObserver(breakpointObserver) {
        var _this = _super.call(this) || this;
        _this.breakpointObserver = breakpointObserver;
        _this.isHandset$ = _this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) { return result.matches; }));
        _this.willUnsubscribe(_this.isHandset$.subscribe(function (handset) { return _this.isHandset = handset; }));
        return _this;
    }
    return AbstractHandsetObserver;
}(_abstract_subscriptions_destroyer__WEBPACK_IMPORTED_MODULE_2__["AbstractSubscriptionsDestroyer"]));



/***/ }),

/***/ "./src/app/shared/utils/abstract-subscriptions-destroyer.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/utils/abstract-subscriptions-destroyer.ts ***!
  \******************************************************************/
/*! exports provided: AbstractSubscriptionsDestroyer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSubscriptionsDestroyer", function() { return AbstractSubscriptionsDestroyer; });
var AbstractSubscriptionsDestroyer = /** @class */ (function () {
    function AbstractSubscriptionsDestroyer() {
        this.subscriptions = [];
    }
    AbstractSubscriptionsDestroyer.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(unsubscribe);
    };
    AbstractSubscriptionsDestroyer.prototype.willUnsubscribe = function () {
        var subscriptions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            subscriptions[_i] = arguments[_i];
        }
        var _a;
        (_a = this.subscriptions).push.apply(_a, subscriptions);
    };
    return AbstractSubscriptionsDestroyer;
}());

function unsubscribe(subscription) {
    subscription.unsubscribe();
}


/***/ }),

/***/ "./src/app/shared/utils/endpoints.enum.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/endpoints.enum.ts ***!
  \************************************************/
/*! exports provided: Endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoints", function() { return Endpoints; });
var Endpoints;
(function (Endpoints) {
    Endpoints["players"] = "/api/player";
    Endpoints["player"] = "/api/player/:playerId";
})(Endpoints || (Endpoints = {}));


/***/ }),

/***/ "./src/app/shared/utils/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/*! exports provided: AbstractSubscriptionsDestroyer, AbstractHandsetObserver, Endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_subscriptions_destroyer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-subscriptions-destroyer */ "./src/app/shared/utils/abstract-subscriptions-destroyer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractSubscriptionsDestroyer", function() { return _abstract_subscriptions_destroyer__WEBPACK_IMPORTED_MODULE_0__["AbstractSubscriptionsDestroyer"]; });

/* harmony import */ var _abstract_handset_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-handset-observer */ "./src/app/shared/utils/abstract-handset-observer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractHandsetObserver", function() { return _abstract_handset_observer__WEBPACK_IMPORTED_MODULE_1__["AbstractHandsetObserver"]; });

/* harmony import */ var _endpoints_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoints.enum */ "./src/app/shared/utils/endpoints.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Endpoints", function() { return _endpoints_enum__WEBPACK_IMPORTED_MODULE_2__["Endpoints"]; });






/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nicolasc\PROJETS\dungeon-dragons-client\app\dungeon-dragons-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map