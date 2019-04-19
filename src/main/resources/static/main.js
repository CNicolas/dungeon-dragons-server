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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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

module.exports = "<!--suppress HtmlUnknownAnchorTarget -->\n<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer\n               class=\"sidenav\"\n               fixedInViewport=\"true\"\n               [attr.role]=\"isHandset ? 'dialog' : 'navigation'\"\n               [mode]=\"isHandset ? 'over' : 'side'\"\n               [opened]=\"!isHandset\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a routerLink=\"/\"\n         routerLinkActive=\"active\"\n         mat-list-item\n         (click)=\"closeDrawer()\">Accueil</a>\n      <a routerLink=\"/characteristics\"\n         routerLinkActive=\"active\"\n         mat-list-item\n         (click)=\"closeDrawer()\">Characteristics</a>\n      <a routerLink=\"/actions\"\n         routerLinkActive=\"active\"\n         mat-list-item\n         (click)=\"closeDrawer()\">Actions</a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button *ngIf=\"isHandset\"\n              type=\"button\"\n              aria-label=\"Toggle sidenav\"\n              mat-icon-button\n              (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZHVuZ2Vvbi1kcmFnb25zLWNsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/utils */ "./src/app/shared/utils/index.ts");
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
    function AppComponent(breakpointObserver) {
        return _super.call(this, breakpointObserver) || this;
    }
    AppComponent.prototype.closeDrawer = function () {
        if (this.isHandset) {
            this.drawer.toggle();
        }
    };
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
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]])
    ], AppComponent);
    return AppComponent;
}(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["AbstractHandsetObserver"]));



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/store */ "./src/app/shared/store/index.ts");
/* harmony import */ var _shared_store_player_gateway__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/store/player.gateway */ "./src/app/shared/store/player.gateway.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot([_shared_store__WEBPACK_IMPORTED_MODULE_10__["PlayerState"]]),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [_shared_store_player_gateway__WEBPACK_IMPORTED_MODULE_11__["PlayerGateway"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button\n        (click)=\"fetchPlayers()\">Fetch players\n</button>\n\n<form [formGroup]=\"createPlayerForm\"\n      (ngSubmit)=\"createPlayer()\">\n  <input matInput\n         placeholder=\"Name\"\n         formControlName=\"name\">\n\n  <button mat-button\n          type=\"submit\">Submit\n  </button>\n</form>\n\n\n{{ players | json }}\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZHVuZ2Vvbi1kcmFnb25zLWNsaWVudC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _shared_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/store */ "./src/app/shared/store/index.ts");
/* harmony import */ var _shared_store_player_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/store/player.actions */ "./src/app/shared/store/player.actions.ts");
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
    function HomeComponent(store, formBuilder) {
        this.store = store;
        this.createPlayerForm = formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_shared_store__WEBPACK_IMPORTED_MODULE_3__["PlayerState"].players)
            .subscribe(function (players) { return _this.players = players; });
    };
    HomeComponent.prototype.createPlayer = function () {
        this.store.dispatch(new _shared_store_player_actions__WEBPACK_IMPORTED_MODULE_4__["CreatePlayer"](this.createPlayerForm.getRawValue()));
    };
    HomeComponent.prototype.fetchPlayers = function () {
        this.store.dispatch(new _shared_store_player_actions__WEBPACK_IMPORTED_MODULE_4__["FetchPlayers"]());
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dd-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/store/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/store/index.ts ***!
  \***************************************/
/*! exports provided: PlayerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.state */ "./src/app/shared/store/player.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return _player_state__WEBPACK_IMPORTED_MODULE_0__["PlayerState"]; });




/***/ }),

/***/ "./src/app/shared/store/player.actions.ts":
/*!************************************************!*\
  !*** ./src/app/shared/store/player.actions.ts ***!
  \************************************************/
/*! exports provided: FetchPlayers, CreatePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPlayers", function() { return FetchPlayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlayer", function() { return CreatePlayer; });
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



/***/ }),

/***/ "./src/app/shared/store/player.gateway.ts":
/*!************************************************!*\
  !*** ./src/app/shared/store/player.gateway.ts ***!
  \************************************************/
/*! exports provided: PlayerGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerGateway", function() { return PlayerGateway; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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
    PlayerGateway.prototype.fetchPlayers = function () {
        return this.httpClient.get('/player');
    };
    PlayerGateway.prototype.createPlayer = function (player) {
        return this.httpClient.post('/player', player);
    };
    PlayerGateway = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PlayerGateway);
    return PlayerGateway;
}());



/***/ }),

/***/ "./src/app/shared/store/player.state.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/store/player.state.ts ***!
  \**********************************************/
/*! exports provided: PlayerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return PlayerState; });
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _player_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.actions */ "./src/app/shared/store/player.actions.ts");
/* harmony import */ var _player_gateway__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.gateway */ "./src/app/shared/store/player.gateway.ts");
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
    function PlayerState(playerGateway) {
        this.playerGateway = playerGateway;
    }
    PlayerState.player = function (state) {
        return state.player;
    };
    PlayerState.players = function (state) {
        return state.players;
    };
    PlayerState.prototype.fetchPlayers = function (ctx) {
        return this.playerGateway.fetchPlayers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (players) { return ctx.patchState({ players: players }); }));
    };
    PlayerState.prototype.createPlayer = function (ctx, action) {
        return this.playerGateway.createPlayer(action.player)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return ctx.dispatch(new _player_actions__WEBPACK_IMPORTED_MODULE_3__["FetchPlayers"]()); }));
    };
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_player_actions__WEBPACK_IMPORTED_MODULE_3__["FetchPlayers"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], PlayerState.prototype, "fetchPlayers", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Action"])(_player_actions__WEBPACK_IMPORTED_MODULE_3__["CreatePlayer"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, _player_actions__WEBPACK_IMPORTED_MODULE_3__["CreatePlayer"]]),
        __metadata("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], PlayerState.prototype, "createPlayer", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], PlayerState, "player", null);
    __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["Selector"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Array)
    ], PlayerState, "players", null);
    PlayerState = __decorate([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_0__["State"])({
            name: 'digitalNetwork',
            defaults: {
                players: [],
                player: null
            }
        }),
        __metadata("design:paramtypes", [_player_gateway__WEBPACK_IMPORTED_MODULE_4__["PlayerGateway"]])
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

/***/ "./src/app/shared/utils/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/index.ts ***!
  \***************************************/
/*! exports provided: AbstractSubscriptionsDestroyer, AbstractHandsetObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstract_subscriptions_destroyer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-subscriptions-destroyer */ "./src/app/shared/utils/abstract-subscriptions-destroyer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractSubscriptionsDestroyer", function() { return _abstract_subscriptions_destroyer__WEBPACK_IMPORTED_MODULE_0__["AbstractSubscriptionsDestroyer"]; });

/* harmony import */ var _abstract_handset_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-handset-observer */ "./src/app/shared/utils/abstract-handset-observer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractHandsetObserver", function() { return _abstract_handset_observer__WEBPACK_IMPORTED_MODULE_1__["AbstractHandsetObserver"]; });





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