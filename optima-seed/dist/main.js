(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\aventix\optima-seed\src\main.ts */"zUnb");


/***/ }),

/***/ "50uS":
/*!***************************************!*\
  !*** ./src/app/shared/demo.module.ts ***!
  \***************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "Ynp+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/table */ "GXRp");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/accordion */ "GF+f");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/platform */ "SCoL");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ "9b/N");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/core */ "8Y7J");









































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule.ɵfac = function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); };
    DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
    DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__["CdkTableModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_35__["BidiModule"],
            _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_33__["CdkAccordionModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_36__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_37__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__["PortalModule"]] });
    return DemoMaterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_35__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_33__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_36__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_37__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_39__["PortalModule"]] }); })();


/***/ }),

/***/ "ADQ8":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

var MENUITEMS = [
    {
        state: 'home',
        name: 'HOME',
        type: 'link',
        icon: 'explore'
    },
    {
        state: 'users',
        name: 'USERS',
        type: 'sub',
        icon: 'format_line_spacing',
        children: [
            { state: 'all', name: 'Users' },
            { state: 'add', name: 'New' },
            { state: 'pending', name: 'Pending' }
        ]
    },
    {
        state: 'employee',
        name: 'EMPLOYEE',
        type: 'sub',
        icon: 'format_line_spacing',
        children: [
            { state: 'add', name: 'ADD' },
            { state: 'view', name: 'VIEW' }
        ]
    },
    {
        state: 'check',
        name: 'Check',
        type: 'sub',
        icon: 'format_line_spacing',
        children: [
            { state: 'add', name: 'Add_CHECK' },
            { state: 'view', name: 'VIEW_CHECKS' }
        ]
    },
    {
        state: 'material',
        name: 'MATERIAL',
        type: 'sub',
        icon: 'equalizer',
        children: [
            { state: 'material/button', name: 'BUTTON' },
            { state: 'material/cards', name: 'CARDS' },
            { state: 'material/select', name: 'SELECT' },
            { state: 'material/chips', name: 'CHIPS' },
            { state: 'input', name: 'INPUT' },
            { state: 'material/checkbox', name: 'CHECKBOX' },
            { state: 'material/radio', name: 'RADIO' },
            { state: 'material/toolbar', name: 'TOOLBAR' },
            { state: 'lists', name: 'LISTS' },
            { state: 'material/grid', name: 'GRID' },
            { state: 'material/progress', name: 'PROGRESS' },
            { state: 'material/tabs', name: 'TABS' },
            { state: 'material/switch', name: 'SWITCH' },
            { state: 'material/tooltip', name: 'TOOLTIP' },
            { state: 'material/menu', name: 'MENU' },
            { state: 'material/slider', name: 'SLIDER' },
            { state: 'material/snackbar', name: 'SNACKBAR' },
            { state: 'material/dialog', name: 'DIALOG' }
        ]
    },
    {
        state: 'authentication',
        name: 'AUTHENTICATION',
        type: 'sub',
        icon: 'security',
        children: [
            { state: 'login', name: 'LOGIN' },
            { state: 'register', name: 'REGISTER' },
            { state: 'forgot-password', name: 'FORGOT' },
            { state: 'lockscreen', name: 'LOCKSCREEN' }
        ]
    },
    {
        state: 'error',
        name: 'ERROR',
        type: 'sub',
        icon: 'error_outline',
        children: [
            { state: '404', name: '404' },
            { state: '503', name: '503' }
        ]
    }
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
    MenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });
    return MenuItems;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    keycloak: {
        issuer: 'http://localhost:8080/auth/',
        realm: 'UsersManagement',
        clientId: 'Angular-app'
    },
    admin_keycloak: 'http://localhost:8080/auth/admin/realms/UsersManagement',
    api_host: 'http://localhost:8080'
};


/***/ }),

/***/ "C0NU":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
    AccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });
    return AccordionDirective;
}());



/***/ }),

/***/ "JNRg":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ "C0NU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: false,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
        if (this.group) {
            var routeUrl = this.nav.getUrl();
            var currentUrl = routeUrl.split('/');
            if (currentUrl.indexOf(this.group) > 0) {
                this.toggle();
            }
        }
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionDirective"])); };
    AccordionLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open);
        } }, inputs: { group: "group", open: "open" } });
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "LO2+":
/*!****************************************!*\
  !*** ./src/app/initializer.service.ts ***!
  \****************************************/
/*! exports provided: initializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializer", function() { return initializer; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "AytR");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function initializer(keycloak) {
    var _this = this;
    return function () {
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, keycloak.init({
                                config: {
                                    url: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].keycloak.issuer,
                                    realm: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].keycloak.realm,
                                    clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].keycloak.clientId,
                                },
                                loadUserProfileAtStartUp: true,
                                initOptions: {
                                    onLoad: 'login-required'
                                },
                                bearerExcludedUrls: []
                            }).then(resolve)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
}


/***/ }),

/***/ "MwDm":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "xXHC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "JNRg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "C0NU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items/menu-items */ "ADQ8");
/* harmony import */ var _menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/horizontal-menu-items */ "sF2t");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "MwDm");
/* harmony import */ var _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen/toggle-fullscreen.directive */ "znWB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__["MenuItems"], _menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_1__["HorizontalMenuItems"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
        _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleFullscreenDirective"]], exports: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
        _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleFullscreenDirective"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keycloak-angular */ "uxjv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");







var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router, keycloak) {
        this.translate = translate;
        this.router = router;
        this.keycloak = keycloak;
        this.title = 'pet-store';
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = this.keycloak.getUserRoles();
        this.keycloak.loadUserProfile().then(function (profile) {
            _this.username = profile.firstName + " " + profile.lastName;
        });
    };
    AppComponent.prototype.logout = function () {
        this.keycloak.logout();
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"]], encapsulation: 2 });
    return AppComponent;
}());



/***/ }),

/***/ "YGuC":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "ADQ8");
/* harmony import */ var _shared_menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu-items/horizontal-menu-items */ "sF2t");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! keycloak-angular */ "uxjv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "9gLZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "ura0");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/accordion/accordion.directive */ "C0NU");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ "VDRc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _shared_fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/fullscreen/toggle-fullscreen.directive */ "znWB");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shared/accordion/accordionlink.directive */ "JNRg");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shared/accordion/accordionanchor.directive */ "xXHC");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");





































var _c0 = ["sidemenu"];
function AdminLayoutComponent_mat_list_item_30_a_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("menu-badge mat-", badge_r20.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](badge_r20.value);
} }
var _c1 = function (a1) { return ["/", a1]; };
function AdminLayoutComponent_mat_list_item_30_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AdminLayoutComponent_mat_list_item_30_a_1_span_7_Template, 2, 4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c1, menuitem_r13.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](menuitem_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, menuitem_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", menuitem_r13.badge);
} }
function AdminLayoutComponent_mat_list_item_30_a_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("menu-badge mat-", badge_r23.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](badge_r23.value);
} }
function AdminLayoutComponent_mat_list_item_30_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AdminLayoutComponent_mat_list_item_30_a_2_span_7_Template, 2, 4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", menuitem_r13.state, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](menuitem_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, menuitem_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", menuitem_r13.badge);
} }
function AdminLayoutComponent_mat_list_item_30_a_3_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("menu-badge mat-", badge_r26.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](badge_r26.value);
} }
function AdminLayoutComponent_mat_list_item_30_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AdminLayoutComponent_mat_list_item_30_a_3_span_7_Template, 2, 4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", menuitem_r13.state, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](menuitem_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, menuitem_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", menuitem_r13.badge);
} }
function AdminLayoutComponent_mat_list_item_30_a_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("menu-badge mat-", badge_r29.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](badge_r29.value);
} }
function AdminLayoutComponent_mat_list_item_30_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AdminLayoutComponent_mat_list_item_30_a_4_span_7_Template, 2, 4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](menuitem_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 3, menuitem_r13.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", menuitem_r13.badge);
} }
var _c2 = function (a1, a2) { return ["/", a1, a2]; };
function AdminLayoutComponent_mat_list_item_30_mat_nav_list_5_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var childitem_r32 = ctx.$implicit;
    var menuitem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](4, _c2, menuitem_r13.state, childitem_r32.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, childitem_r32.name));
} }
function AdminLayoutComponent_mat_list_item_30_mat_nav_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-nav-list", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AdminLayoutComponent_mat_list_item_30_mat_nav_list_5_mat_list_item_1_Template, 4, 7, "mat-list-item", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", menuitem_r13.children);
} }
function AdminLayoutComponent_mat_list_item_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-list-item", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AdminLayoutComponent_mat_list_item_30_a_1_Template, 8, 8, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AdminLayoutComponent_mat_list_item_30_a_2_Template, 8, 6, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AdminLayoutComponent_mat_list_item_30_a_3_Template, 8, 6, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AdminLayoutComponent_mat_list_item_30_a_4_Template, 10, 5, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AdminLayoutComponent_mat_list_item_30_mat_nav_list_5_Template, 2, 1, "mat-nav-list", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuitem_r13.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuitem_r13.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuitem_r13.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuitem_r13.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuitem_r13.type === "sub");
} }
var _c3 = function (a0) { return [a0]; };
function AdminLayoutComponent_li_211_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c3, "/" + menuitem_r35.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](menuitem_r35.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 3, menuitem_r35.name));
} }
function AdminLayoutComponent_li_211_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c3, "/" + menuitem_r35.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](menuitem_r35.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 3, menuitem_r35.name));
} }
function AdminLayoutComponent_li_211_ul_3_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subchild_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c3, "/" + subchild_r45.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, subchild_r45.name));
} }
function AdminLayoutComponent_li_211_ul_3_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AdminLayoutComponent_li_211_ul_3_li_1_ul_4_li_1_Template, 4, 6, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var childitem_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", childitem_r42.subchildren);
} }
function AdminLayoutComponent_li_211_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AdminLayoutComponent_li_211_ul_3_li_1_ul_4_Template, 2, 1, "ul", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var childitem_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c3, "/" + childitem_r42.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, childitem_r42.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", childitem_r42.type === "super-sub");
} }
function AdminLayoutComponent_li_211_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AdminLayoutComponent_li_211_ul_3_li_1_Template, 5, 7, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", menuitem_r35.children);
} }
function AdminLayoutComponent_li_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AdminLayoutComponent_li_211_a_1_Template, 6, 7, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AdminLayoutComponent_li_211_a_2_Template, 6, 7, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AdminLayoutComponent_li_211_ul_3_Template, 2, 1, "ul", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuitem_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuitem_r35.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuitem_r35.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", menuitem_r35.type === "sub");
} }
function AdminLayoutComponent_ng_template_218_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Today");
} }
function AdminLayoutComponent_ng_template_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Notifications");
} }
function AdminLayoutComponent_mat_card_320_mat_option_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var lang_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", lang_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](lang_r50);
} }
var _c4 = function (a0) { return { "border-active": a0 }; };
function AdminLayoutComponent_mat_card_320_Template(rf, ctx) { if (rf & 1) {
    var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-toolbar", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r51.showSettings = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Sidebar Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r53.onSelectSidebarImage("bg-1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r54.onSelectSidebarImage("bg-2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r55.onSelectSidebarImage("bg-3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r56.onSelectSidebarImage("bg-4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-checkbox", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r57.sidebarBg = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Sidebar Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Sidebar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r58.onSelectedSidebarColor("sidebar-default"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, " Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r59.onSelectedSidebarColor("sidebar-green"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](41, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " Green");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r60.onSelectedSidebarColor("sidebar-red"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, " Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r61.onSelectedSidebarColor("sidebar-purple"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, " Purple");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r62.onSelectedSidebarColor("sidebar-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, " Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r63.onSelectedSidebarColor("sidebar-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](57, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, " Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r64.onSelectedSidebarColor("sidebar-green-deep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](61, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62, " Green Deep");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r65.onSelectedSidebarColor("sidebar-brown"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, " Brown");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r66.onSelectedSidebarColor("sidebar-orange"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, " Orange");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, "Header Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r67.onSelectedHeaderColor("header-default"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](78, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, " Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r68.onSelectedHeaderColor("header-green"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](82, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, " Green");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r69.onSelectedHeaderColor("header-red"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](86, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, " Red");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r70.onSelectedHeaderColor("header-purple"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](90, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, " Purple");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r71.onSelectedHeaderColor("header-pink"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](94, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, " Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_97_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r72.onSelectedHeaderColor("header-blue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](98, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, " Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_101_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r73.onSelectedHeaderColor("header-green-deep"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](102, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, " Green Deep");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_105_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r74.onSelectedHeaderColor("header-brown"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](106, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, " Brown");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_320_Template_a_click_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r75.onSelectedHeaderColor("header-orange"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](110, "i", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, " Orange");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "Layouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "mat-checkbox", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_ngModelChange_117_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r76.horizontal = $event; })("change", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_change_117_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r77.changeMenuLayout($event.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, "Horizontal Menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "mat-checkbox", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_ngModelChange_120_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r78.collapseSidebar = $event; })("change", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_change_120_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r79.compactSidebar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "Collapsed Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "mat-checkbox", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_ngModelChange_123_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r80.compactSidebar = $event; })("change", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_change_123_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r81.collapseSidebar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124, "Compact Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](125, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "mat-checkbox", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_ngModelChange_126_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r82.boxed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127, "Boxed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "mat-checkbox", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_ngModelChange_129_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r83.dark = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130, "Dark Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "mat-checkbox", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AdminLayoutComponent_mat_card_320_Template_mat_checkbox_change_132_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r84.layoutDir = ctx_r84.layoutDir == "rtl" ? "ltr" : "rtl"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](133, "RTL");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "mat-select", 130, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AdminLayoutComponent_mat_card_320_Template_mat_select_ngModelChange_139_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r85.currentLang = $event; })("ngModelChange", function AdminLayoutComponent_mat_card_320_Template_mat_select_ngModelChange_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r86.translate.use(ctx_r86.currentLang); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](141, AdminLayoutComponent_mat_card_320_mat_option_141_Template, 2, 2, "mat-option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](30, _c4, ctx_r12.isBgActive("bg-1")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](32, _c4, ctx_r12.isBgActive("bg-2")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](34, _c4, ctx_r12.isBgActive("bg-3")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](36, _c4, ctx_r12.isBgActive("bg-4")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r12.sidebarBg);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](38, _c4, ctx_r12.isSidebarActive("sidebar-default")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](40, _c4, ctx_r12.isSidebarActive("sidebar-green")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](42, _c4, ctx_r12.isSidebarActive("sidebar-red")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](44, _c4, ctx_r12.isSidebarActive("sidebar-purple")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](46, _c4, ctx_r12.isSidebarActive("sidebar-pink")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](48, _c4, ctx_r12.isSidebarActive("sidebar-blue")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](50, _c4, ctx_r12.isSidebarActive("sidebar-green-deep")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](52, _c4, ctx_r12.isSidebarActive("sidebar-brown")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](54, _c4, ctx_r12.isSidebarActive("sidebar-orange")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](56, _c4, ctx_r12.isHeaderActive("header-default")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](58, _c4, ctx_r12.isHeaderActive("header-green")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](60, _c4, ctx_r12.isHeaderActive("header-red")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](62, _c4, ctx_r12.isHeaderActive("header-purple")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](64, _c4, ctx_r12.isHeaderActive("header-pink")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](66, _c4, ctx_r12.isHeaderActive("header-blue")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](68, _c4, ctx_r12.isHeaderActive("header-green-deep")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](70, _c4, ctx_r12.isHeaderActive("header-brown")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](72, _c4, ctx_r12.isHeaderActive("header-orange")));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r12.horizontal);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r12.collapseSidebar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r12.compactSidebar);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r12.boxed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r12.dark);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r12.currentLang);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r12.translate.getLangs());
} }
var _c5 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, keycloak, menuItems, horizontalMenuItems, translate) {
        this.router = router;
        this.keycloak = keycloak;
        this.menuItems = menuItems;
        this.horizontalMenuItems = horizontalMenuItems;
        this.translate = translate;
        this.today = Date.now();
        this.showSettings = false;
        this.horizontal = false;
        this.sidebarBg = true;
        this.currentLang = 'en';
        this.layoutDir = 'ltr';
        this.searchFocus = false;
        this.menuLayout = 'vertical-menu';
        this.selectedSidebarImage = 'bg-1';
        this.selectedSidebarColor = 'sidebar-default';
        this.selectedHeaderColor = 'header-default';
        this.collapsedClass = 'side-panel-opened';
        this.config = {};
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemSidebar = document.querySelector('.sidebar-container ');
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac() && !this.compactSidebar && this.layoutDir != 'rtl') {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemSidebar, {
                wheelSpeed: 2,
                suppressScrollX: true
            });
        }
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]; })).subscribe(function (event) {
            _this.url = event.url;
            if (_this.isOver()) {
                _this.sidemenu.close();
            }
            if (window.matchMedia("(min-width: 960px)").matches && !_this.isMac() && !_this.compactSidebar && _this.layoutDir != 'rtl') {
                // Ps.update(elemContent);
            }
        });
    };
    AdminLayoutComponent.prototype.onClick = function (e) {
        var _this = this;
        var elemSidebar = document.querySelector('.sidebar-container ');
        setTimeout(function () {
            if (window.matchMedia("(min-width: 960px)").matches && !_this.isMac() && !_this.compactSidebar && _this.layoutDir != 'rtl') {
                var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](elemSidebar, {
                    wheelSpeed: 2,
                    suppressScrollX: true
                });
            }
        }, 350);
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.isOver = function () {
        if (this.url === '/apps/messages' || this.url === '/apps/calendar' || this.url === '/apps/media' || this.url === '/maps/leaflet') {
            return true;
        }
        else {
            return window.matchMedia("(max-width: 960px)").matches;
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.prototype.menuMouseOver = function () {
        if (window.matchMedia("(min-width: 960px)").matches && this.collapseSidebar) {
            this.sidemenu.mode = 'over';
        }
    };
    AdminLayoutComponent.prototype.menuMouseOut = function () {
        if (window.matchMedia("(min-width: 960px)").matches && this.collapseSidebar) {
            this.sidemenu.mode = 'side';
        }
    };
    AdminLayoutComponent.prototype.menuToggleFunc = function () {
        this.sidemenu.toggle();
        if (this.collapsedClass == 'side-panel-opened') {
            this.collapsedClass = 'side-panel-closed';
        }
        else {
            this.collapsedClass = 'side-panel-opened';
        }
    };
    AdminLayoutComponent.prototype.changeMenuLayout = function (value) {
        console.log(value);
        if (value) {
            this.menuLayout = 'top-menu';
        }
        else {
            this.menuLayout = 'vertical-menu';
            this.menuToggleFunc();
        }
    };
    AdminLayoutComponent.prototype.onSelectSidebarImage = function (selectedClass, event) {
        this.selectedSidebarImage = selectedClass;
    };
    AdminLayoutComponent.prototype.onSelectedSidebarColor = function (selectedClass) {
        this.selectedSidebarColor = selectedClass;
    };
    AdminLayoutComponent.prototype.onSelectedHeaderColor = function (selectedClass) {
        this.selectedHeaderColor = selectedClass;
    };
    AdminLayoutComponent.prototype.isBgActive = function (value) {
        if (value == this.selectedSidebarImage) {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.isSidebarActive = function (value) {
        if (value == this.selectedSidebarColor) {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.isHeaderActive = function (value) {
        if (value == this.selectedHeaderColor) {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.addMenuItem = function () {
        this.menuItems.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'timelmenuine', name: 'MENU' }
            ]
        });
    };
    AdminLayoutComponent.prototype.logout = function () {
        console.log("i am here");
        this.keycloak.logout();
    };
    AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_7__["KeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_menu_items_horizontal_menu_items__WEBPACK_IMPORTED_MODULE_2__["HorizontalMenuItems"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
    AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-layout"]], viewQuery: function AdminLayoutComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 3);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sidemenu = _t.first);
        } }, hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, decls: 321, vars: 56, consts: [[1, "app", "search-i", 3, "dir", "ngClass"], [1, "app-inner"], ["id", "sidebar-panel", 1, "sidebar-panel", 3, "mode", "opened", "mouseover", "mouseout"], ["sidemenu", ""], [1, "opt-side", "relative"], [1, "sidebar-container"], [1, "branding", "text-center"], ["aria-hidden", "true", 1, "fa", "fa-superpowers"], [1, "main-nav"], [1, "user-pro-wrap"], [1, "user-profile-thumb", "text-center"], [1, "user-i"], ["src", "assets/images/userpic.jpg", "width", "100", "height", "100", "alt", "", 1, "rad-full", "mb-1"], [1, "most-used", "text-center"], ["color", "primary", 1, "most-link"], ["appAccordion", "", 1, "navigation", "relative"], ["appAccordionLink", "", 4, "ngFor", "ngForOf"], [3, "click"], [1, "bg-overlay"], [1, "main-header"], [1, "horizontal-top-bar", "w-100"], ["fxFlex.sm", "100", "fxFlex.xs", "100", "fxFlex.md", "33.33", "fxFlex.lg", "33.33", "fxFlex.xl", "33.33", "fxFlex", "100"], ["fxFlex", "", 1, "search-bar"], [1, "search-form"], ["type", "text", "placeholder", "Search"], [1, "horizontal-logo"], [1, "menu-links"], ["appToggleFullscreen", "", "mat-icon-button", ""], ["mat-icon-button", "", 1, "ml-xs", "overflow-visible", 3, "mat-menu-trigger-for"], ["x-position", "after", 1, "opt-menu"], ["user2", "matMenu"], ["mat-menu-item", "", 1, "head-menu", "grad-blue"], ["mat-menu-item", ""], ["width", "40", "src", "assets/images/user-1.jpg", "alt", ""], ["width", "40", "src", "assets/images/user-2.jpg", "alt", ""], ["width", "40", "src", "assets/images/user-3.jpg", "alt", ""], ["width", "40", "src", "assets/images/user-4.jpg", "alt", ""], [1, "notification-label"], ["x-position", "before", 1, "opt-menu"], ["user1", "matMenu"], ["mat-icon-button", "", 1, "ml-xs", "overflow-visible", 3, "click"], ["mat-icon-button", "", 1, "ml-xs", 3, "mat-menu-trigger-for"], ["user", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "vertical-menu", "w-100"], ["mat-icon-button", "", 1, "lines-btn", 3, "click"], ["type", "text", "placeholder", "Search", 3, "focus", "focusout"], ["fxFlex", ""], ["appToggleFullscreen", "", "mat-icon-button", "", 1, "sm-disable"], ["mat-icon-button", "", 1, "ml-xs", "overflow-visible", "sm-disable", 3, "mat-menu-trigger-for"], [1, "horizontal-menu", "text-center"], [1, "main-h-list"], [4, "ngFor", "ngForOf"], [1, "body-container"], ["position", "end", "mode", "over", "opened", "false", 1, "chat-panel"], ["end", ""], ["mat-stretch-tabs", "", 3, "selectedIndex"], ["mat-tab-label", ""], [1, "scroll"], [1, "pt-1", "pb-1"], ["fxLayout", "column"], [1, "ma-0"], [1, "mat-text-muted", "ma-0"], ["mat-subheader", "", 1, "text-uppercase", "font-weight-bold"], ["mat-line", "", 1, "text-mat"], ["mat-line", "", "mode", "determinate", "color", "warn", "value", "20"], ["mat-line", "", "mode", "determinate", "color", "accent", "value", "80"], ["mat-line", "", "mode", "determinate", "value", "30"], ["mat-line", "", "href", "javascript:;"], ["mat-line", "", 1, "mat-text-muted", "text-mat"], ["mat-list-avatar", "", 1, "mat-text-primary"], ["mat-line", ""], ["mat-list-avatar", "", 1, "mat-text-warn"], ["mat-list-avatar", "", 1, "mat-text-accent"], ["mat-list-avatar", "", 1, "mat-deep-purple"], ["mat-line", "", 1, "text-mat", "mat-text-muted"], ["mat-list-avatar", ""], ["mat-fab", "", "color", "warn", 1, "mat-fab-bottom-right", 3, "click"], [1, "mat-24"], ["class", "settings-panel", 4, "ngIf"], ["appAccordionLink", ""], ["appAccordionToggle", "", "class", "relative", "mat-ripple", "", 3, "routerLink", 4, "ngIf"], ["appAccordionToggle", "", "class", "relative", "mat-ripple", "", 3, "href", 4, "ngIf"], ["appAccordionToggle", "", "class", "relative", "mat-ripple", "", "target", "_blank", 3, "href", 4, "ngIf"], ["appAccordionToggle", "", "class", "relative", "mat-ripple", "", "href", "javascript:;", 4, "ngIf"], ["class", "sub-menu", 4, "ngIf"], ["appAccordionToggle", "", "mat-ripple", "", 1, "relative", 3, "routerLink"], [3, "class", 4, "ngFor", "ngForOf"], ["appAccordionToggle", "", "mat-ripple", "", 1, "relative", 3, "href"], ["appAccordionToggle", "", "mat-ripple", "", "target", "_blank", 1, "relative", 3, "href"], ["appAccordionToggle", "", "mat-ripple", "", "href", "javascript:;", 1, "relative"], [1, "menu-caret"], [1, "sub-menu"], ["routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["routerLinkActive", "open"], ["mat-ripple", "", 1, "relative", 3, "routerLink"], [3, "routerLink", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], [3, "routerLink"], [1, "dropdown"], [1, "settings-panel"], ["color", "warn"], ["mat-icon-button", "", 3, "click"], [1, "demo-checkbox"], [1, "sep-block"], [1, "sep-block-header"], [1, "bg-img", "clearfix"], [1, "pb-1", 3, "ngClass"], ["src", "assets/images/bg-5.jpg", "alt", ""], ["src", "assets/images/bg-2.jpg", "alt", ""], ["src", "assets/images/bg-3.jpg", "alt", ""], [1, "pb-2", 3, "ngClass"], ["src", "assets/images/bg-4.jpg", "alt", ""], [3, "ngModel", "ngModelChange"], [1, "color-sidebar", "clearfix"], [1, "mb-1", 3, "ngClass"], ["href", "javascript:void(0)", 3, "click"], ["aria-hidden", "true", 1, "color-default", "fa", "fa-circle", "fa-lg", "def"], ["aria-hidden", "true", 1, "color-green", "fa", "fa-circle", "fa-lg"], ["aria-hidden", "true", 1, "color-red", "fa", "fa-circle", "fa-lg"], ["aria-hidden", "true", 1, "color-purple", "fa", "fa-circle", "fa-lg"], ["aria-hidden", "true", 1, "color-pink", "fa", "fa-circle", "fa-lg"], ["aria-hidden", "true", 1, "color-blue", "fa", "fa-circle", "fa-lg"], ["aria-hidden", "true", 1, "color-green-deep", "fa", "fa-circle", "fa-lg"], ["aria-hidden", "true", 1, "color-brown", "fa", "fa-circle", "fa-lg"], ["aria-hidden", "true", 1, "color-orange", "fa", "fa-circle", "fa-lg"], [1, "color-header", "clearfix"], [1, "pb-1"], [3, "ngModel", "ngModelChange", "change"], [3, "change"], [1, "mt-0", 3, "ngModel", "ngModelChange"], ["langSelect", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-sidenav-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseover", function AdminLayoutComponent_Template_mat_sidenav_mouseover_2_listener() { return ctx.menuMouseOver(); })("mouseout", function AdminLayoutComponent_Template_mat_sidenav_mouseout_2_listener() { return ctx.menuMouseOut(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " OPTIMA");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "John Doeee");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "home");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "person");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-nav-list", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, AdminLayoutComponent_mat_list_item_30_Template, 6, 5, "mat-list-item", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "mat-divider");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_a_click_33_listener() { return ctx.addMenuItem(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Add");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "mat-toolbar", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "form", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, " OPTIMA");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "fullscreen");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "message");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "mat-menu", 29, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, " Message Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](67, "img", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68, " Next Update for angular 5 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](70, "img", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, " Check out our new admin theme ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](73, "img", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74, " Expedita quo, laboriosam officia. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](76, "img", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, " Lorem ipsum dolor sit amet consectetur. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "reorder");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "span", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "mat-menu", 38, 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86, " User Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "show_chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, " Charts ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94, " Maps ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "web");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, " Calendar Settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "button", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_99_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r87); var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](215); return _r9.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, "notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "span", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "person");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "mat-menu", 38, 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, " Settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113, "settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, " Setting ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117, "account_box");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, " Profile ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121, "notifications_off");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122, " Disable notifications ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "button", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_123_listener() { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "exit_to_app");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](126, " Sign Out ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](128, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_128_listener() { return ctx.menuToggleFunc(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](130, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "form", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "input", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function AdminLayoutComponent_Template_input_focus_135_listener() { return ctx.searchFocus = true; })("focusout", function AdminLayoutComponent_Template_input_focusout_135_listener() { return ctx.searchFocus = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](136, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](137, "button", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, "fullscreen");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "message");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "mat-menu", 29, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](146, " Message Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](148, "img", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](149, " Next Update for angular 5 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](151, "img", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](152, " Check out our new admin theme ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](154, "img", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](155, " Expedita quo, laboriosam officia. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](157, "img", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](158, " Lorem ipsum dolor sit amet consectetur. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "button", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161, "reorder");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "span", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "mat-menu", 38, 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](166, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](167, " User Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](169, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](170, "show_chart");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](171, " Charts ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](172, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](173, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](174, "navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](175, " Maps ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](176, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](177, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](178, "web");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](179, " Calendar Settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](180, "button", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_180_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r87); var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](215); return _r9.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](181, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](182, "notifications");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](183, "span", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](184, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](185, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](186, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](187, "person");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](188, "mat-menu", 38, 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](190, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](191, " Settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](192, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](193, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](194, "settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](195, " Setting ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](196, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](197, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](198, "account_box");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](199, " Profile ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](200, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](201, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](202, "notifications_off");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](203, " Disable notifications ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](204, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](205, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](206, "exit_to_app");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](207, " Sign Out ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](208, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](209, "nav");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](210, "ul", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](211, AdminLayoutComponent_li_211_Template, 4, 3, "li", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](212, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](213, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](214, "mat-sidenav", 54, 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](216, "mat-tab-group", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](217, "mat-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](218, AdminLayoutComponent_ng_template_218_Template, 1, 0, "ng-template", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](219, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](220, "mat-list", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](221, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](222, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](223, "h2", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](224);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](225, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](226, "h6", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](227, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](228);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](229, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](230, "\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](231, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](232);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](233, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](234, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](235, "mat-divider");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](236, "h3", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](237, "Projects Stats");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](238, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](239, "p", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](240, "Project A");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](241, "mat-progress-bar", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](242, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](243, "p", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](244, "Project B ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](245, "mat-progress-bar", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](246, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](247, "p", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](248, "Project C");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](249, "mat-progress-bar", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](250, "mat-divider");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](251, "h3", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](252, "Todo");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](253, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](254, "a", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](255, "Consectetur adipisicing elit. Nemo omnis.");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](256, "p", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](257, "2:45PM");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](258, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](259, "a", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](260, " Temporibus cumque cupiditate ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](261, "p", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](262, "3:20PM");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](263, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](264, "a", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](265, "Libero voluptatibus harum quis accusamus");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](266, "p", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](267, "16:00PM");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](268, "mat-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](269, AdminLayoutComponent_ng_template_269_Template, 1, 0, "ng-template", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](270, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](271, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](272, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](273, "mat-icon", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](274, "people");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](275, "h4", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](276, "Social");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](277, "p", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](278, " 5 new members joined today");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](279, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](280, "mat-icon", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](281, "local_offer");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](282, "h4", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](283, "Promotions");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](284, "p", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](285, "Updated your email ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](286, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](287, "mat-icon", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](288, "info");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](289, "h4", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](290, "Updates");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](291, "p", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](292, " 15 new product added");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](293, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](294, "mat-icon", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](295, "delete_sweep");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](296, "h4", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](297, " 2 order cancelled");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](298, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](299);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](300, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](301, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](302, "mat-icon", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](303, "check_circle");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](304, "h4", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](305, "System Scan completed");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](306, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](307);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](308, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](309, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](310, "mat-icon", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](311, "person_add");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](312, "h4", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](313, "4 Users connected");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](314, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](315);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](316, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](317, "button", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_317_listener() { return ctx.showSettings = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](318, "mat-icon", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](319, "settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](320, AdminLayoutComponent_mat_card_320_Template, 142, 74, "mat-card", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](63);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](84);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](108);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("app-dark", ctx.dark)("boxed", ctx.boxed)("collapsed-sidebar", ctx.collapseSidebar)("compact-sidebar", ctx.compactSidebar)("bg-img-disable", !ctx.sidebarBg);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.layoutDir)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction5"](50, _c5, ctx.menuLayout, ctx.selectedSidebarImage, ctx.selectedSidebarColor, ctx.selectedHeaderColor, ctx.collapsedClass));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mode", ctx.isOver() ? "over" : "side")("opened", !ctx.isOver());
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.menuItems.getAll());
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-menu-trigger-for", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-menu-trigger-for", _r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-menu-trigger-for", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("search-active", ctx.searchFocus);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-menu-trigger-for", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-menu-trigger-for", _r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-menu-trigger-for", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.horizontalMenuItems.getAll());
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedIndex", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](225, 32, ctx.today, "EEEE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](229, 35, ctx.today, "dd"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](233, 38, ctx.today, "MMMM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](67);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](300, 41, 1427207139000, "fullDate"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](308, 44, 1427412725000, "fullDate"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](316, 47, 1428275520000, "fullDate"));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showSettings);
        } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_15__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _shared_fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_21__["ToggleFullscreenDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabLabel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatList"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__["DefaultLayoutDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatLine"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListAvatarCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_26__["AccordionLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_27__["AccordionAnchorDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2 });
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "aLe/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "u9T3");
/* harmony import */ var _shared_demo_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/demo.module */ "50uS");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "YGuC");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "le+r");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _initializer_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./initializer.service */ "LO2+");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! keycloak-angular */ "uxjv");

































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http);
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["APP_INITIALIZER"],
                useFactory: _initializer_service__WEBPACK_IMPORTED_MODULE_27__["initializer"],
                deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_28__["KeycloakService"]],
                multi: true
            }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_22__["AppRoutes"], { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                keycloak_angular__WEBPACK_IMPORTED_MODULE_28__["KeycloakAngularModule"],
                _shared_demo_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]
            ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
        _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_24__["AdminLayoutComponent"],
        _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_25__["AuthLayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_26__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
        keycloak_angular__WEBPACK_IMPORTED_MODULE_28__["KeycloakAngularModule"],
        _shared_demo_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "YGuC");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "le+r");


var AppRoutes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [{
                path: 'home',
                loadChildren: function () { return __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(function (m) { return m.DashboardModule; }); }
            },
            {
                path: 'material',
                loadChildren: function () { return __webpack_require__.e(/*! import() | material-material-module */ "material-material-module").then(__webpack_require__.bind(null, /*! ./material/material.module */ "hctd")).then(function (m) { return m.MaterialComponentsModule; }); }
            },
            {
                path: 'employee',
                loadChildren: function () { return __webpack_require__.e(/*! import() | employee-employee-module */ "employee-employee-module").then(__webpack_require__.bind(null, /*! ./employee/employee.module */ "PgJR")).then(function (m) { return m.EmployeeModule; }); }
            },
            {
                path: 'users',
                loadChildren: function () { return __webpack_require__.e(/*! import() | user-management-users-users-module */ "user-management-users-users-module").then(__webpack_require__.bind(null, /*! ./user-management/users/users.module */ "Vd+s")).then(function (m) { return m.UsersModule; }); }
            }]
    }, {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [{
                path: 'authentication',
                loadChildren: function () { return __webpack_require__.e(/*! import() | session-session-module */ "session-session-module").then(__webpack_require__.bind(null, /*! ./session/session.module */ "7dfE")).then(function (m) { return m.SessionModule; }); }
            }, {
                path: 'error',
                loadChildren: function () { return __webpack_require__.e(/*! import() | error-error-module */ "error-error-module").then(__webpack_require__.bind(null, /*! ./error/error.module */ "PQ9+")).then(function (m) { return m.ErrorModule; }); }
            }]
    }, {
        path: '**',
        redirectTo: 'session/404'
    }];


/***/ }),

/***/ "le+r":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
    AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-layout"]], decls: 2, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%]     .mat-sidenav-content {padding: 0;} .mat-sidenav-container[_ngcontent-%COMP%] {z-index: 1000}"] });
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "sF2t":
/*!************************************************************!*\
  !*** ./src/app/shared/menu-items/horizontal-menu-items.ts ***!
  \************************************************************/
/*! exports provided: HorizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuItems", function() { return HorizontalMenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

var HORIZONTALMENUITEMS = [
    {
        state: 'home',
        name: 'HOME',
        type: 'link',
        icon: 'home'
    },
    {
        state: 'users',
        name: 'USERS',
        type: 'sub',
        icon: 'format_line_spacing',
        children: [
            { state: 'all', name: 'Users' },
            { state: 'add', name: 'New' },
            { state: 'pending', name: 'Pending' }
        ]
    },
    {
        state: 'employee',
        name: 'EMPLOYEE',
        type: 'sub',
        icon: 'format_line_spacing',
        children: [
            { state: 'employee/add', name: 'ADD' },
            { state: 'employee/view', name: 'VIEW' }
        ]
    },
    {
        state: 'check',
        name: 'CHECK',
        type: 'sub',
        icon: 'format_line_spacing',
        children: [
            { state: 'check/view', name: 'Add_CHECK' },
            { state: 'check/add', name: 'VIEW_CHECKS' }
        ]
    },
    {
        state: 'material',
        name: 'MATERIAL',
        type: 'sub',
        icon: 'equalizer',
        children: [
            { state: 'material/button', name: 'BUTTON' },
            { state: 'material/cards', name: 'CARDS' },
            { state: 'material/select', name: 'SELECT' },
            { state: 'material/chips', name: 'CHIPS' },
            { state: 'material/input', name: 'INPUT' },
            { state: 'material/checkbox', name: 'CHECKBOX' },
            { state: 'material/radio', name: 'RADIO' },
            { state: 'material/toolbar', name: 'TOOLBAR' },
            { state: 'material/lists', name: 'LISTS' },
            { state: 'material/grid', name: 'GRID' },
            { state: 'material/progress', name: 'PROGRESS' },
            { state: 'material/tabs', name: 'TABS' },
            { state: 'material/switch', name: 'SWITCH' },
            { state: 'material/tooltip', name: 'TOOLTIP' },
            { state: 'material/menu', name: 'MENU' },
            { state: 'material/slider', name: 'SLIDER' },
            { state: 'material/snackbar', name: 'SNACKBAR' },
            { state: 'material/dialog', name: 'DIALOG' }
        ]
    },
    {
        state: 'authentication',
        name: 'AUTHENTICATIONs',
        type: 'sub',
        icon: 'security',
        children: [
            { state: 'authentication/login', name: 'LOGIN' },
            { state: 'authentication/register', name: 'REGISTER' },
            { state: 'authentication/forgot-password', name: 'FORGOT' },
            { state: 'authentication/lockscreen', name: 'LOCKSCREEN' },
            {
                state: 'error',
                name: 'ERROR',
                type: 'super-sub',
                icon: 'error_outline',
                subchildren: [
                    { state: 'error/404', name: '404' },
                    { state: 'error/503', name: '503' }
                ]
            }
        ]
    }
];
var HorizontalMenuItems = /** @class */ (function () {
    function HorizontalMenuItems() {
    }
    HorizontalMenuItems.prototype.getAll = function () {
        return HORIZONTALMENUITEMS;
    };
    HorizontalMenuItems.prototype.add = function (menu) {
        // HORIZONTALMENUITEMS.push(Menu);
    };
    HorizontalMenuItems.ɵfac = function HorizontalMenuItems_Factory(t) { return new (t || HorizontalMenuItems)(); };
    HorizontalMenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HorizontalMenuItems, factory: HorizontalMenuItems.ɵfac });
    return HorizontalMenuItems;
}());



/***/ }),

/***/ "xXHC":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ "JNRg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionLinkDirective"])); };
    AccordionAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "znWB":
/*!******************************************************************!*\
  !*** ./src/app/shared/fullscreen/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! screenfull */ "k7+O");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_0__["isEnabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_0__["request"]();
        }
    };
    ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) { return new (t || ToggleFullscreenDirective)(); };
    ToggleFullscreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ToggleFullscreenDirective, selectors: [["", "appToggleFullscreen", ""]], hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } } });
    return ToggleFullscreenDirective;
}());



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map