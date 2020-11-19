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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_differ_differ_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/differ/differ.component */ "./src/app/pages/differ/differ.component.ts");
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/history/history.component */ "./src/app/pages/history/history.component.ts");






const routes = [
    {
        path: 'differ',
        component: _pages_differ_differ_component__WEBPACK_IMPORTED_MODULE_2__["DifferComponent"],
    },
    {
        path: 'history',
        component: _pages_history_history_component__WEBPACK_IMPORTED_MODULE_3__["HistoryComponent"],
    },
    {
        path: '',
        redirectTo: 'differ',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'bpmn-gitlab-differ';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "navbar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "BPMN Gitlab diff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".navbar[_ngcontent-%COMP%] {\n  grid-area: header;\n  border-bottom: 1px #ccc solid;\n  display: flex;\n  background-color: #eee;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 20px;\n  z-index: 2;\n  box-shadow: 1px 1px 5px #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCAjY2NjIHNvbGlkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNjY2M7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _components_bpmn_bpmn_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bpmn/bpmn.module */ "./src/app/components/bpmn/bpmn.module.ts");
/* harmony import */ var _pipes_filename_extractor_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/filename-extractor.pipe */ "./src/app/pipes/filename-extractor.pipe.ts");
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/history/history.component */ "./src/app/pages/history/history.component.ts");
/* harmony import */ var _pages_differ_differ_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/differ/differ.component */ "./src/app/pages/differ/differ.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _components_bpmn_bpmn_module__WEBPACK_IMPORTED_MODULE_9__["BpmnModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pipes_filename_extractor_pipe__WEBPACK_IMPORTED_MODULE_10__["ExtractFilenamePipe"],
        _pages_history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"],
        _pages_differ_differ_component__WEBPACK_IMPORTED_MODULE_12__["DifferComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _components_bpmn_bpmn_module__WEBPACK_IMPORTED_MODULE_9__["BpmnModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pipes_filename_extractor_pipe__WEBPACK_IMPORTED_MODULE_10__["ExtractFilenamePipe"],
                    _pages_history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"],
                    _pages_differ_differ_component__WEBPACK_IMPORTED_MODULE_12__["DifferComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _components_bpmn_bpmn_module__WEBPACK_IMPORTED_MODULE_9__["BpmnModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/camunda/camunda.service.ts":
/*!********************************************!*\
  !*** ./src/app/camunda/camunda.service.ts ***!
  \********************************************/
/*! exports provided: CamundaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamundaService", function() { return CamundaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CamundaService {
    constructor(http) {
        this.http = http;
        this.defaultCamundaApiUrl = 'https://localhost:8080/workflow/camunda/engine-rest';
        this.retrieveBpmn = (definitionKey) => {
            return this.http.get(`${this.baseApiUrl}/process-definition/key/${definitionKey}/xml`, this.getAuthorizationHeaders());
        };
        this.retrieveExecution = (processInstanceId) => {
            return this.http.post(`${this.baseApiUrl}/history/activity-instance`, { processInstanceId }, this.getAuthorizationHeaders());
        };
        this.retrieveProcessInstance = (businessKey, processDefinitionKey) => {
            return this.http.post(`${this.baseApiUrl}/history/process-instance`, { processInstanceBusinessKey: businessKey, processDefinitionKey }, this.getAuthorizationHeaders());
        };
        this.retrieveProcessInstanceWithProcessInstanceId = (processInstanceId) => {
            return this.http.get(`${this.baseApiUrl}/history/process-instance/${processInstanceId}`, this.getAuthorizationHeaders());
        };
        this.retrieveIncidents = (processInstanceId) => {
            return this.http.get(`${this.baseApiUrl}/history/incident`, Object.assign(Object.assign({}, this.getAuthorizationHeaders()), { params: { processInstanceId } }));
        };
        this.getAuthorizationHeaders = () => ({
            headers: {
                Authorization: this.getBasicPassword(),
                'x-camunda-auth': 'enabled'
            }
        });
        this.getBasicPassword = () => {
            return `Basic ${btoa(this.username + ':' + this.password)}`;
        };
    }
    set baseApiUrl(baseApiUrl) {
        localStorage.baseCamundaApiUrl = baseApiUrl;
    }
    get baseApiUrl() {
        return localStorage.baseCamundaApiUrl || this.defaultCamundaApiUrl;
    }
    set username(value) {
        localStorage.camundaUsername = value;
    }
    get username() {
        return localStorage.camundaUsername;
    }
    set password(value) {
        localStorage.camundaPassword = value;
    }
    get password() {
        return localStorage.camundaPassword;
    }
}
CamundaService.ɵfac = function CamundaService_Factory(t) { return new (t || CamundaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CamundaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CamundaService, factory: CamundaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamundaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/bpmn/bpmn-diff-reader/bpmn-diff-reader.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/bpmn/bpmn-diff-reader/bpmn-diff-reader.component.ts ***!
  \********************************************************************************/
/*! exports provided: BpmnDiffReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpmnDiffReaderComponent", function() { return BpmnDiffReaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bpmn_diff_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bpmn-diff.service */ "./src/app/components/bpmn/bpmn-diff.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");




function BpmnDiffReaderComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BpmnDiffReaderComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.name, " ");
} }
function BpmnDiffReaderComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BpmnDiffReaderComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.type, " ");
} }
function BpmnDiffReaderComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Change Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BpmnDiffReaderComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.changeType, " ");
} }
function BpmnDiffReaderComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
} }
function BpmnDiffReaderComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
class BpmnDiffReaderComponent {
    constructor(bpmnDiffService) {
        this.bpmnDiffService = bpmnDiffService;
        this.diffList = [];
        this.displayedColumns = ['name', 'changeType', 'type'];
    }
    ngOnInit() {
        this.bpmnDiffService.diffResult$.subscribe(diffList => {
            this.diffList = diffList.filter(({ changeType, $type }) => changeType !== '_layoutChanged' && $type !== 'bpmn:SequenceFlow');
        });
    }
}
BpmnDiffReaderComponent.ɵfac = function BpmnDiffReaderComponent_Factory(t) { return new (t || BpmnDiffReaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_1__["BPMNDiffService"])); };
BpmnDiffReaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BpmnDiffReaderComponent, selectors: [["app-bpmn-diff-reader"]], decls: 12, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "changeType"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function BpmnDiffReaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BpmnDiffReaderComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BpmnDiffReaderComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BpmnDiffReaderComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BpmnDiffReaderComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BpmnDiffReaderComponent_th_8_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BpmnDiffReaderComponent_td_9_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BpmnDiffReaderComponent_tr_10_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BpmnDiffReaderComponent_tr_11_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.diffList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  background-color: white;\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icG1uL2JwbW4tZGlmZi1yZWFkZXIvYnBtbi1kaWZmLXJlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JwbW4vYnBtbi1kaWZmLXJlYWRlci9icG1uLWRpZmYtcmVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BpmnDiffReaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bpmn-diff-reader',
                templateUrl: './bpmn-diff-reader.component.html',
                styleUrls: ['./bpmn-diff-reader.component.scss']
            }]
    }], function () { return [{ type: _bpmn_diff_service__WEBPACK_IMPORTED_MODULE_1__["BPMNDiffService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/bpmn/bpmn-diff.service.ts":
/*!******************************************************!*\
  !*** ./src/app/components/bpmn/bpmn-diff.service.ts ***!
  \******************************************************/
/*! exports provided: BPMNDiffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BPMNDiffService", function() { return BPMNDiffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var bpmn_js_differ__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bpmn-js-differ */ "./node_modules/bpmn-js-differ/dist/index.esm.js");
/* harmony import */ var bpmn_moddle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bpmn-moddle */ "./node_modules/bpmn-moddle/index.js");

/* eslint @typescript-eslint/no-non-null-assertion: "off" */





class BPMNDiffService {
    constructor() {
        this.bpmnToCompare = [null, null];
        this.diffResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.getNewDiff = () => {
            return this.flattenDiffs(Object(bpmn_js_differ__WEBPACK_IMPORTED_MODULE_3__["diff"])(...this.bpmnToCompare));
        };
    }
    setBpmns(bpmns) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (Object.values(bpmns).every(Boolean)) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.parseBpmn(bpmns.oldVersion)),
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.parseBpmn(bpmns.newVersion))
                ]).subscribe((parsedBpmns) => {
                    this.bpmnToCompare = parsedBpmns;
                    this.setDiffResult();
                });
            }
        });
    }
    setDiffResult() {
        this.diffResult$.next(this.bpmnToCompare.every(Boolean)
            ? this.getNewDiff()
            : []);
    }
    parseBpmn(bpmn) {
        return new Promise((resolve, reject) => new bpmn_moddle__WEBPACK_IMPORTED_MODULE_4__["default"]().fromXML(bpmn, {}, (err, element) => {
            if (err) {
                return reject(err);
            }
            resolve(element);
        }));
    }
    flattenDiffs(diffResult) {
        const diffList = [];
        for (const changeType of Object.keys(diffResult)) {
            for (const name of Object.keys(diffResult[changeType])) {
                diffList.push(Object.assign(Object.assign({}, diffResult[changeType][name]), { changeType, name }));
            }
        }
        return diffList;
    }
}
BPMNDiffService.ɵfac = function BPMNDiffService_Factory(t) { return new (t || BPMNDiffService)(); };
BPMNDiffService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BPMNDiffService, factory: BPMNDiffService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BPMNDiffService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/bpmn/bpmn-viewer/bpmn-viewer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/bpmn/bpmn-viewer/bpmn-viewer.component.ts ***!
  \**********************************************************************/
/*! exports provided: BpmnViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpmnViewerComponent", function() { return BpmnViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var bpmn_js_lib_NavigatedViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmn-js/lib/NavigatedViewer */ "./node_modules/bpmn-js/lib/NavigatedViewer.js");
/* harmony import */ var _bpmn_diff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bpmn-diff.service */ "./src/app/components/bpmn/bpmn-diff.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class BpmnViewerComponent {
    constructor(bpmnDiffService) {
        this.bpmnDiffService = bpmnDiffService;
        this.updateViewer = (bpmn) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.viewer == null) {
                return;
            }
            yield this.viewer.importXML(bpmn);
            this.viewer.get('canvas').zoom('fit-viewport');
        });
        this.applyVisualToElement = (elementId, effectClass) => {
            try {
                this.viewer.get('canvas').addMarker(elementId, effectClass);
            }
            catch (e) {
                console.warn(e);
            }
        };
    }
    set bpmn(value) {
        this.bpmnValue = value;
        this.updateViewer(value);
    }
    ngAfterViewInit() {
        this.viewer = new bpmn_js_lib_NavigatedViewer__WEBPACK_IMPORTED_MODULE_2__["default"]({
            container: `.${this.version}-viewer`
        });
        this.bpmnDiffService.diffResult$.subscribe(diffResult => {
            if (Array.isArray(diffResult)) {
                diffResult.forEach(({ id, changeType }) => this.applyVisualToElement(id, changeType));
            }
        });
    }
}
BpmnViewerComponent.ɵfac = function BpmnViewerComponent_Factory(t) { return new (t || BpmnViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_3__["BPMNDiffService"])); };
BpmnViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BpmnViewerComponent, selectors: [["app-bpmn-viewer"]], inputs: { version: "version", bpmn: "bpmn" }, decls: 4, vars: 6, template: function BpmnViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, ctx.version));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("diff-section ", ctx.version + "-viewer", "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: [".diff-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icG1uL2JwbW4tdmlld2VyL2JwbW4tdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9icG1uL2JwbW4tdmlld2VyL2JwbW4tdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpZmYtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BpmnViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bpmn-viewer',
                templateUrl: './bpmn-viewer.component.html',
                styleUrls: ['./bpmn-viewer.component.scss']
            }]
    }], function () { return [{ type: _bpmn_diff_service__WEBPACK_IMPORTED_MODULE_3__["BPMNDiffService"] }]; }, { version: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bpmn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/bpmn/bpmn.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/bpmn/bpmn.module.ts ***!
  \************************************************/
/*! exports provided: BpmnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpmnModule", function() { return BpmnModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bpmn-diff-reader/bpmn-diff-reader.component */ "./src/app/components/bpmn/bpmn-diff-reader/bpmn-diff-reader.component.ts");
/* harmony import */ var _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bpmn-viewer/bpmn-viewer.component */ "./src/app/components/bpmn/bpmn-viewer/bpmn-viewer.component.ts");
/* harmony import */ var _history_viewer_history_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-viewer/history-viewer.component */ "./src/app/components/bpmn/history-viewer/history-viewer.component.ts");







class BpmnModule {
}
BpmnModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BpmnModule });
BpmnModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BpmnModule_Factory(t) { return new (t || BpmnModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BpmnModule, { declarations: [_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_3__["BpmnDiffReaderComponent"], _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_4__["BpmnViewerComponent"], _history_viewer_history_viewer_component__WEBPACK_IMPORTED_MODULE_5__["HistoryViewerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]], exports: [_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_3__["BpmnDiffReaderComponent"], _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_4__["BpmnViewerComponent"], _history_viewer_history_viewer_component__WEBPACK_IMPORTED_MODULE_5__["HistoryViewerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BpmnModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]],
                declarations: [_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_3__["BpmnDiffReaderComponent"], _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_4__["BpmnViewerComponent"], _history_viewer_history_viewer_component__WEBPACK_IMPORTED_MODULE_5__["HistoryViewerComponent"]],
                exports: [_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_3__["BpmnDiffReaderComponent"], _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_4__["BpmnViewerComponent"], _history_viewer_history_viewer_component__WEBPACK_IMPORTED_MODULE_5__["HistoryViewerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/bpmn/history-viewer/history-viewer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/bpmn/history-viewer/history-viewer.component.ts ***!
  \****************************************************************************/
/*! exports provided: HistoryViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryViewerComponent", function() { return HistoryViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var bpmn_js_lib_NavigatedViewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bpmn-js/lib/NavigatedViewer */ "./node_modules/bpmn-js/lib/NavigatedViewer.js");
/* harmony import */ var _bpmn_diff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bpmn-diff.service */ "./src/app/components/bpmn/bpmn-diff.service.ts");





class HistoryViewerComponent {
    constructor(bpmnDiffService) {
        this.bpmnDiffService = bpmnDiffService;
        this.historyValue = null;
        this._incidents = null;
        this.calledElement = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateViewer = (bpmn) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.viewer == null) {
                return;
            }
            yield this.viewer.importXML(bpmn);
            this.viewer.get('canvas').zoom('fit-viewport');
        });
        this.clearHistory = () => {
            if (this.historyValue === null) {
                return;
            }
            this.historyValue.forEach(element => {
                const state = element.endTime ? 'finished' : 'started';
                this.removeVisualToElement(element.activityId, state);
            });
        };
        this.handleIncidents = () => {
            if (this._incidents == null) {
                return;
            }
            const overlays = this.viewer.get('overlays');
            this._incidents.forEach(incident => {
                if (incident.open) {
                    overlays.add(incident.activityId, {
                        position: {
                            top: -5,
                            left: -5
                        },
                        html: '<div class="incident">!</div>'
                    });
                }
            });
        };
        this.applyVisualToElement = (elementId, effectClass) => {
            try {
                this.viewer.get('canvas').addMarker(elementId, effectClass);
            }
            catch (e) {
                console.warn(e);
            }
        };
        this.removeVisualToElement = (elementId, effectClass) => {
            try {
                this.viewer.get('canvas').removeMarker(elementId, effectClass);
            }
            catch (e) {
                // noop
            }
        };
    }
    set bpmn(value) {
        this.bpmnValue = value;
        this.updateViewer(value);
    }
    set history(value) {
        this.clearHistory();
        this.historyValue = value;
        this.updateHistory();
    }
    set incidents(incidents) {
        this._incidents = incidents;
        this.handleIncidents();
    }
    ngAfterViewInit() {
        this.viewer = new bpmn_js_lib_NavigatedViewer__WEBPACK_IMPORTED_MODULE_2__["default"]({
            container: `.history-viewer`
        });
        const eventBus = this.viewer.get('eventBus');
        eventBus.on('element.click', (event) => {
            if (event.element.type === 'bpmn:CallActivity') {
                this.calledElement.emit(event.element.businessObject.calledElement);
            }
        });
    }
    updateHistory() {
        if (this.historyValue === null) {
            return;
        }
        this.historyValue.forEach(element => {
            const state = element.endTime ? 'finished' : 'started';
            this.applyVisualToElement(element.activityId, state);
        });
    }
}
HistoryViewerComponent.ɵfac = function HistoryViewerComponent_Factory(t) { return new (t || HistoryViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_3__["BPMNDiffService"])); };
HistoryViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HistoryViewerComponent, selectors: [["app-history-viewer"]], inputs: { bpmn: "bpmn", history: "history", incidents: "incidents" }, outputs: { calledElement: "calledElement" }, decls: 0, vars: 0, template: function HistoryViewerComponent_Template(rf, ctx) { }, styles: [".diff-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icG1uL2hpc3Rvcnktdmlld2VyL2hpc3Rvcnktdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9icG1uL2hpc3Rvcnktdmlld2VyL2hpc3Rvcnktdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpZmYtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HistoryViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-history-viewer',
                templateUrl: './history-viewer.component.html',
                styleUrls: ['./history-viewer.component.scss']
            }]
    }], function () { return [{ type: _bpmn_diff_service__WEBPACK_IMPORTED_MODULE_3__["BPMNDiffService"] }]; }, { bpmn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], history: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], incidents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], calledElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/gitlab/gitlab.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/gitlab/gitlab.service.ts ***!
  \*****************************************************/
/*! exports provided: GitlabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitlabService", function() { return GitlabService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* eslint @typescript-eslint/no-non-null-assertion: "off" */







class GitlabService {
    constructor(http) {
        this.http = http;
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.diffIsBPMN = (diff) => /(.*)\.bpmn/.test(diff.old_path) && /(.*)\.bpmn/.test(diff.new_path);
        this.token = localStorage.getItem('gitToken');
        if (!this.token) {
            console.warn('You should set your gitToken in localStorage using URL param');
        }
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', `Bearer ${this.token}`) };
    }
    getBPMNContentsForMergeRequest(repositoryPath, mergeRequestId) {
        return this.projectMergeRequest$(repositoryPath, mergeRequestId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.isLoading$.next(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(project => (Object.assign(Object.assign({}, project), { id: /gid:\/\/gitlab\/Project\/(\d+)/.exec(project.id)[1] }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(project => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(project),
            this.commitsDiff$(project.id, project.mergeRequest.sourceBranch, project.mergeRequest.targetBranch)
        ])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([project, comparison]) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([...comparison.diffs.filter(this.diffIsBPMN).map(diff => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(diff.new_path),
                this.fileContent$(project.id, diff.old_path, project.mergeRequest.targetBranch),
                this.fileContent$(project.id, diff.new_path, project.mergeRequest.sourceBranch)
            ]))])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((bpmnDiffs) => bpmnDiffs.reduce((acc, [filePath, ...diff]) => (Object.assign(Object.assign({}, acc), { [filePath]: {
                oldVersion: diff[0],
                newVersion: diff[1]
            } })), {})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.isLoading$.next(false);
        }));
    }
    projectMergeRequest$(repositoryPath, mergeRequestId) {
        const query = `
    {
      project (fullPath: "${repositoryPath}") {
        id
        mergeRequest(iid: "${mergeRequestId}") {
          targetBranch
          sourceBranch
        }
      }
    }`;
        return this.http.post(this.baseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].gitProvider.graphQLPath, { query }, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => { var _a; return (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.project; }));
    }
    commitsDiff$(projectId, sourceBranch, targetBranch) {
        return this.http.get(`${this.baseURL}${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].gitProvider.restPath}/projects/${projectId}/repository/compare?from=${targetBranch}&to=${sourceBranch}`, this.options);
    }
    fileContent$(projectId, filePath, branchName) {
        return this.http.get(`${this.baseURL + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].gitProvider.restPath}/projects/${projectId}/repository/files/${encodeURIComponent(filePath)}?ref=${branchName}`, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => atob(result.content)));
    }
    setbaseURL(baseURL) {
        this.baseURL = baseURL;
    }
}
GitlabService.ɵfac = function GitlabService_Factory(t) { return new (t || GitlabService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GitlabService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GitlabService, factory: GitlabService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GitlabService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/differ/differ.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/differ/differ.component.ts ***!
  \**************************************************/
/*! exports provided: DifferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferComponent", function() { return DifferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_gitlab_gitlab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/gitlab/gitlab.service */ "./src/app/components/gitlab/gitlab.service.ts");
/* harmony import */ var _components_bpmn_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/bpmn/bpmn-diff.service */ "./src/app/components/bpmn/bpmn-diff.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_bpmn_bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/bpmn/bpmn-viewer/bpmn-viewer.component */ "./src/app/components/bpmn/bpmn-viewer/bpmn-viewer.component.ts");
/* harmony import */ var _components_bpmn_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/bpmn/bpmn-diff-reader/bpmn-diff-reader.component */ "./src/app/components/bpmn/bpmn-diff-reader/bpmn-diff-reader.component.ts");
/* harmony import */ var _pipes_filename_extractor_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/filename-extractor.pipe */ "./src/app/pipes/filename-extractor.pipe.ts");










function DifferComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DifferComponent_ng_container_2_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const filePath_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.changeSelectedFilePath(filePath_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "extractFilename");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filePath_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, filePath_r4));
} }
function DifferComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DifferComponent_ng_container_2_div_1_Template, 4, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.availableBpmnFilePaths);
} }
function DifferComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It is loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DifferComponent {
    constructor(activatedRoute, gitlabService, bpmnDiffService) {
        this.activatedRoute = activatedRoute;
        this.gitlabService = gitlabService;
        this.bpmnDiffService = bpmnDiffService;
        this.bpmnDiffs = {};
        this.oldVersion = 'old';
        this.newVersion = 'new';
        this.setBpmnDiffs = (bpmnDiffs) => {
            this.bpmnDiffs = bpmnDiffs;
        };
        this.changeSelectedFilePath = (filePath) => {
            this.selectedFilePath = filePath;
            this.bpmnDiffService.setBpmns(this.bpmnDiffs[filePath]);
        };
        this.setGitToken = (gitToken) => {
            localStorage.gitToken = gitToken;
        };
        this.pageReady = this.gitlabService.isLoading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(isLoading => !isLoading));
        this.activatedRoute.queryParams.subscribe(params => {
            const { mergeRequestId, repositoryPath, gitlabBaseUrl, gitToken } = params;
            if (!!gitToken) {
                this.setGitToken(gitToken);
            }
            if (!!mergeRequestId && !!repositoryPath && !!gitlabBaseUrl) {
                this.gitlabService.setbaseURL(gitlabBaseUrl);
                this.gitlabService.getBPMNContentsForMergeRequest(repositoryPath, mergeRequestId).subscribe(this.setBpmnDiffs);
            }
        });
    }
    get selectedDiff() {
        return this.bpmnDiffs.hasOwnProperty(this.selectedFilePath)
            ? this.bpmnDiffs[this.selectedFilePath]
            : { oldVersion: '', newVersion: '' };
    }
    get availableBpmnFilePaths() {
        return Object.keys(this.bpmnDiffs);
    }
}
DifferComponent.ɵfac = function DifferComponent_Factory(t) { return new (t || DifferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_gitlab_gitlab_service__WEBPACK_IMPORTED_MODULE_3__["GitlabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_bpmn_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_4__["BPMNDiffService"])); };
DifferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DifferComponent, selectors: [["app-differ"]], decls: 9, vars: 8, consts: [[1, "container"], [1, "sidebar"], [4, "ngIf", "ngIfElse"], [1, "diff-viewer", 3, "bpmn", "version"], [1, "diff-reader"], ["loader", ""], [4, "ngFor", "ngForOf"], [3, "click"]], template: function DifferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DifferComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-bpmn-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-bpmn-viewer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-bpmn-diff-reader", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DifferComponent_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.pageReady))("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bpmn", ctx.selectedDiff.oldVersion)("version", ctx.oldVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bpmn", ctx.selectedDiff.newVersion)("version", ctx.newVersion);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_bpmn_bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_6__["BpmnViewerComponent"], _components_bpmn_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_7__["BpmnDiffReaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _pipes_filename_extractor_pipe__WEBPACK_IMPORTED_MODULE_8__["ExtractFilenamePipe"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n  overflow: scroll;\n  border-right: 1px #ccc solid;\n  z-index: 1;\n  padding: 20px;\n  background-color: #eee;\n  box-shadow: 1px 1px 5px #ccc;\n}\n\n.diff-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  padding: 20px;\n  grid-area: content-new;\n}\n\n.diff-viewer[_ngcontent-%COMP%]:first-of-type {\n  grid-area: content-old;\n}\n\n.diff-reader[_ngcontent-%COMP%] {\n  grid-area: footer;\n  overflow-y: scroll;\n  border-top: 1px #ccc solid;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-columns: 250px auto;\n  grid-template-rows: auto auto 200px;\n  grid-template-areas: \"sidebar content-old\" \"sidebar content-new\" \"sidebar footer\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlmZmVyL2RpZmZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxzQkFBQTtBQUVKOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUZBQ0U7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpZmZlci9kaWZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI2NjYyBzb2xpZDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggI2NjYztcbn1cblxuLmRpZmYtdmlld2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGdyaWQtYXJlYTogY29udGVudC1uZXc7XG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZ3JpZC1hcmVhOiBjb250ZW50LW9sZDtcbiAgfVxufVxuXG4uZGlmZi1yZWFkZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBib3JkZXItdG9wOiAxcHggI2NjYyBzb2xpZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMjAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJzaWRlYmFyIGNvbnRlbnQtb2xkXCJcbiAgICBcInNpZGViYXIgY29udGVudC1uZXdcIlxuICAgIFwic2lkZWJhciBmb290ZXJcIjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DifferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-differ',
                templateUrl: './differ.component.html',
                styleUrls: ['./differ.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _components_gitlab_gitlab_service__WEBPACK_IMPORTED_MODULE_3__["GitlabService"] }, { type: _components_bpmn_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_4__["BPMNDiffService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/history/history.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/history/history.component.ts ***!
  \****************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _camunda_camunda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../camunda/camunda.service */ "./src/app/camunda/camunda.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_bpmn_history_viewer_history_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/bpmn/history-viewer/history-viewer.component */ "./src/app/components/bpmn/history-viewer/history-viewer.component.ts");





function HistoryComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.viewParent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View Parent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HistoryComponent {
    constructor(camundaService) {
        this.camundaService = camundaService;
        this.bpmn = null;
        this.processInstance = null;
        this.history = null;
        this.handleProcessInstance = (processInstance) => {
            this.processInstance = processInstance;
            this.setProcessKey(processInstance.processDefinitionKey);
            this.camundaService.retrieveBpmn(this.processKey).subscribe((xmlResponse) => {
                this.bpmn = xmlResponse.bpmn20Xml;
                this.camundaService
                    .retrieveExecution(processInstance.id)
                    .subscribe((execution) => (this.history = execution));
                this.camundaService.retrieveIncidents(processInstance.id).subscribe(incidents => (this.incidents = incidents));
            });
        };
        this.viewParent = () => {
            this.retrieveInformationsWithProcessInstanceId(this.processInstance.superProcessInstanceId);
        };
    }
    get username() {
        return this.camundaService.username;
    }
    setUsername(value) {
        this.camundaService.username = value;
    }
    get password() {
        return this.camundaService.password;
    }
    setPassword(value) {
        this.camundaService.password = value;
    }
    get baseApiUrl() {
        return this.camundaService.baseApiUrl;
    }
    setBaseApiUrl(value) {
        this.camundaService.baseApiUrl = value;
    }
    get processKey() {
        return localStorage.processKey || '';
    }
    setProcessKey(value) {
        localStorage.processKey = value;
    }
    get businessKey() {
        return localStorage.businessKey || '';
    }
    setBusinessKey(value) {
        localStorage.businessKey = value;
    }
    retrieveInformations() {
        this.camundaService
            .retrieveProcessInstance(this.businessKey, this.processKey)
            .subscribe(processInstances => this.handleProcessInstance(processInstances[0]));
    }
    retrieveInformationsWithProcessInstanceId(processInstanceId) {
        this.camundaService
            .retrieveProcessInstanceWithProcessInstanceId(processInstanceId)
            .subscribe(this.handleProcessInstance);
    }
    onCalledElement(calledElement) {
        this.setProcessKey(calledElement);
        this.retrieveInformations();
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_camunda_camunda_service__WEBPACK_IMPORTED_MODULE_1__["CamundaService"])); };
HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], decls: 21, vars: 9, consts: [[1, "container"], [1, "sidebar"], ["placeholder", "user", 3, "value", "change"], ["type", "password", "placeholder", "pwd", 3, "value", "change"], ["placeholder", "camunda url", 3, "value", "change"], ["placeholder", "definition key", 3, "value", "change"], ["placeholder", "business key", 3, "value", "change"], [3, "click"], [3, "click", 4, "ngIf"], [1, "history-viewer", 3, "bpmn", "history", "incidents", "calledElement"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HistoryComponent_Template_input_change_4_listener($event) { return ctx.setUsername($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HistoryComponent_Template_input_change_7_listener($event) { return ctx.setPassword($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Base Camunda api url: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HistoryComponent_Template_input_change_10_listener($event) { return ctx.setBaseApiUrl($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Process Definition Key: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HistoryComponent_Template_input_change_13_listener($event) { return ctx.setProcessKey($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Business Key: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HistoryComponent_Template_input_change_16_listener($event) { return ctx.setBusinessKey($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_Template_button_click_17_listener() { return ctx.retrieveInformations(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HistoryComponent_button_19_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-history-viewer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("calledElement", function HistoryComponent_Template_app_history_viewer_calledElement_20_listener($event) { return ctx.onCalledElement($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.baseApiUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.processKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.businessKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.processInstance && ctx.processInstance.superProcessInstanceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bpmn", ctx.bpmn)("history", ctx.history)("incidents", ctx.incidents);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_bpmn_history_viewer_history_viewer_component__WEBPACK_IMPORTED_MODULE_3__["HistoryViewerComponent"]], styles: [".sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-area: sidebar;\n  overflow: scroll;\n  border-right: 1px #ccc solid;\n  z-index: 1;\n  padding: 20px;\n  background-color: #eee;\n  box-shadow: 1px 1px 5px #ccc;\n}\n\n.history-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  padding: 20px;\n  grid-area: history;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-columns: 250px auto;\n  grid-template-areas: \"sidebar history\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBncmlkLWFyZWE6IHNpZGViYXI7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGJvcmRlci1yaWdodDogMXB4ICNjY2Mgc29saWQ7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNjY2M7XG59XG5cbi5oaXN0b3J5LXZpZXdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBwYWRkaW5nOiAyMHB4O1xuICBncmlkLWFyZWE6IGhpc3Rvcnk7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2lkZWJhciBoaXN0b3J5XCI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.scss']
            }]
    }], function () { return [{ type: _camunda_camunda_service__WEBPACK_IMPORTED_MODULE_1__["CamundaService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/filename-extractor.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/filename-extractor.pipe.ts ***!
  \**************************************************/
/*! exports provided: ExtractFilenamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractFilenamePipe", function() { return ExtractFilenamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ExtractFilenamePipe {
    transform(value) {
        return /.*\/(.*)$/.exec(value)[1];
    }
}
ExtractFilenamePipe.ɵfac = function ExtractFilenamePipe_Factory(t) { return new (t || ExtractFilenamePipe)(); };
ExtractFilenamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "extractFilename", type: ExtractFilenamePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtractFilenamePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'extractFilename' }]
    }], null, null); })();


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
const environment = {
    production: false,
    gitProvider: {
        graphQLPath: '/api/graphql',
        restPath: '/api/v4'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lechinoix/workspace/BPI/bpmn-gitlab-differ/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map