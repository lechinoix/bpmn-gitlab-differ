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




const routes = [];
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_gitlab_gitlab_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/gitlab/gitlab.service */ "./src/app/components/gitlab/gitlab.service.ts");
/* harmony import */ var _components_bpmn_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bpmn/bpmn-diff.service */ "./src/app/components/bpmn/bpmn-diff.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_bpmn_bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bpmn/bpmn-viewer/bpmn-viewer.component */ "./src/app/components/bpmn/bpmn-viewer/bpmn-viewer.component.ts");
/* harmony import */ var _components_bpmn_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/bpmn/bpmn-diff-reader/bpmn-diff-reader.component */ "./src/app/components/bpmn/bpmn-diff-reader/bpmn-diff-reader.component.ts");
/* harmony import */ var _pipes_filename_extractor_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/filename-extractor.pipe */ "./src/app/pipes/filename-extractor.pipe.ts");










function AppComponent_ng_container_5_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_5_ul_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const filePath_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.changeSelectedFilePath(filePath_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "extractFilename");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filePath_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, filePath_r4));
} }
function AppComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_5_ul_1_Template, 5, 3, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.availableBpmnFilePaths);
} }
function AppComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "It is loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(activatedRoute, gitlabService, bpmnDiffService) {
        this.activatedRoute = activatedRoute;
        this.gitlabService = gitlabService;
        this.bpmnDiffService = bpmnDiffService;
        this.title = 'bpmn-gitlab-differ';
        this.bpmnDiffs = {};
        this.leftSide = 'left';
        this.rightSide = 'right';
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
                this.gitlabService.getBPMNContentsForMergeRequest(repositoryPath, mergeRequestId)
                    .subscribe(this.setBpmnDiffs);
            }
        });
    }
    get selectedDiff() {
        return this.bpmnDiffs.hasOwnProperty(this.selectedFilePath)
            ? this.bpmnDiffs[this.selectedFilePath]
            : ['', ''];
    }
    get availableBpmnFilePaths() {
        return Object.keys(this.bpmnDiffs);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_gitlab_gitlab_service__WEBPACK_IMPORTED_MODULE_3__["GitlabService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_bpmn_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_4__["BPMNDiffService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 8, consts: [[1, "container"], [1, "navbar"], [1, "sidebar"], [4, "ngIf", "ngIfElse"], [1, "diff-viewer", 3, "bpmn", "side"], [1, "diff-reader"], ["loader", ""], [4, "ngFor", "ngForOf"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "BPMN Gitlab diff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-bpmn-viewer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-bpmn-viewer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-bpmn-diff-reader", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_ng_template_10_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx.pageReady))("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bpmn", ctx.selectedDiff[0])("side", ctx.leftSide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bpmn", ctx.selectedDiff[1])("side", ctx.rightSide);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_bpmn_bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_6__["BpmnViewerComponent"], _components_bpmn_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_7__["BpmnDiffReaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _pipes_filename_extractor_pipe__WEBPACK_IMPORTED_MODULE_8__["ExtractFilenamePipe"]], styles: [".navbar[_ngcontent-%COMP%] {\n  grid-area: header;\n  border-bottom: 1px #ccc solid;\n  display: flex;\n  background-color: #eee;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 20px;\n  z-index: 2;\n  box-shadow: 1px 1px 5px #ccc;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n  overflow: scroll;\n  border-right: 1px #ccc solid;\n  z-index: 1;\n  padding: 20px;\n  background-color: #eee;\n  box-shadow: 1px 1px 5px #ccc;\n}\n\n.diff-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  padding: 20px;\n  grid-area: content-old;\n}\n\n.diff-viewer[_ngcontent-%COMP%]:first-of-type {\n  grid-area: content-new;\n}\n\n.diff-reader[_ngcontent-%COMP%] {\n  grid-area: footer;\n  overflow-y: scroll;\n  border-top: 1px #ccc solid;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-columns: 250px auto;\n  grid-template-rows: 60px auto auto 100px;\n  grid-template-areas: \"header header\" \"sidebar content-old\" \"sidebar content-new\" \"sidebar footer\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUFFO0VBQ0Usc0JBQUE7QUFFSjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGlHQUNFO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCAjY2NjIHNvbGlkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNjY2M7XG59XG5cbi5zaWRlYmFyIHtcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBib3JkZXItcmlnaHQ6IDFweCAjY2NjIHNvbGlkO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjY2NjO1xufVxuXG4uZGlmZi12aWV3ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgcGFkZGluZzogMjBweDtcbiAgZ3JpZC1hcmVhOiBjb250ZW50LW9sZDtcbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQtbmV3O1xuICB9XG59XG5cbi5kaWZmLXJlYWRlciB7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlci10b3A6IDFweCAjY2NjIHNvbGlkO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0byBhdXRvIDEwMHB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaGVhZGVyIGhlYWRlclwiXG4gICAgXCJzaWRlYmFyIGNvbnRlbnQtb2xkXCJcbiAgICBcInNpZGViYXIgY29udGVudC1uZXdcIlxuICAgIFwic2lkZWJhciBmb290ZXJcIjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _components_gitlab_gitlab_service__WEBPACK_IMPORTED_MODULE_3__["GitlabService"] }, { type: _components_bpmn_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_4__["BPMNDiffService"] }]; }, null); })();


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
        _pipes_filename_extractor_pipe__WEBPACK_IMPORTED_MODULE_10__["ExtractFilenamePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    _pipes_filename_extractor_pipe__WEBPACK_IMPORTED_MODULE_10__["ExtractFilenamePipe"]
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _bpmn_diff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bpmn-diff.service */ "./src/app/components/bpmn/bpmn-diff.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function BpmnDiffReaderComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const diff_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" name: ", diff_r1.name, ", change: ", diff_r1.changeType, ", type: ", diff_r1.$type, " ");
} }
class BpmnDiffReaderComponent {
    constructor(bpmnDiffService) {
        this.bpmnDiffService = bpmnDiffService;
    }
    ngOnInit() {
        this.bpmnDiffService.diffResult$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(diffResult => this.flattenDiffs(diffResult))).subscribe(diffList => {
            console.log('diffList', diffList);
            this.diffList = diffList;
        });
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
BpmnDiffReaderComponent.ɵfac = function BpmnDiffReaderComponent_Factory(t) { return new (t || BpmnDiffReaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bpmn_diff_service__WEBPACK_IMPORTED_MODULE_2__["BPMNDiffService"])); };
BpmnDiffReaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BpmnDiffReaderComponent, selectors: [["app-bpmn-diff-reader"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function BpmnDiffReaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BpmnDiffReaderComponent_li_1_Template, 2, 3, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diffList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  width: 100%;\n  background-color: white;\n  padding: 20px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icG1uL2JwbW4tZGlmZi1yZWFkZXIvYnBtbi1kaWZmLXJlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JwbW4vYnBtbi1kaWZmLXJlYWRlci9icG1uLWRpZmYtcmVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BpmnDiffReaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bpmn-diff-reader',
                templateUrl: './bpmn-diff-reader.component.html',
                styleUrls: ['./bpmn-diff-reader.component.scss']
            }]
    }], function () { return [{ type: _bpmn_diff_service__WEBPACK_IMPORTED_MODULE_2__["BPMNDiffService"] }]; }, null); })();


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
        this.diffResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    setBpmns(bpmns) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (bpmns.every(Boolean)) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(bpmns.map((bpmn) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.parseBpmn(bpmn)))).subscribe((parsedBpmns) => {
                    this.bpmnToCompare = parsedBpmns;
                    this.setDiffResult();
                });
            }
        });
    }
    setDiffResult() {
        this.diffResult$.next(this.bpmnToCompare.every(Boolean)
            ? Object(bpmn_js_differ__WEBPACK_IMPORTED_MODULE_3__["diff"])(...this.bpmnToCompare.reverse())
            : {});
    }
    parseBpmn(bpmn) {
        return new Promise((resolve, reject) => new bpmn_moddle__WEBPACK_IMPORTED_MODULE_4__["default"]().fromXML(bpmn, {}, (err, element) => {
            if (err) {
                return reject(err);
            }
            resolve(element);
        }));
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




class BpmnViewerComponent {
    constructor() {
        this.updateViewer = (bpmn) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.viewer == null) {
                return;
            }
            const { warnings } = yield this.viewer.importXML(bpmn);
            console.log('success !', warnings);
            this.viewer.get('canvas').zoom('fit-viewport');
        });
    }
    set bpmn(value) {
        this.bpmnValue = value;
        this.updateViewer(value);
    }
    ngAfterViewInit() {
        this.viewer = new bpmn_js_lib_NavigatedViewer__WEBPACK_IMPORTED_MODULE_2__["default"]({
            container: `.${this.side}-viewer`
        });
    }
}
BpmnViewerComponent.ɵfac = function BpmnViewerComponent_Factory(t) { return new (t || BpmnViewerComponent)(); };
BpmnViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BpmnViewerComponent, selectors: [["app-bpmn-viewer"]], inputs: { side: "side", bpmn: "bpmn" }, decls: 1, vars: 3, template: function BpmnViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("diff-section ", ctx.side + "-viewer", "");
    } }, styles: [".diff-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icG1uL2JwbW4tdmlld2VyL2JwbW4tdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9icG1uL2JwbW4tdmlld2VyL2JwbW4tdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpZmYtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BpmnViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bpmn-viewer',
                templateUrl: './bpmn-viewer.component.html',
                styleUrls: ['./bpmn-viewer.component.scss']
            }]
    }], null, { side: [{
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
/* harmony import */ var _bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bpmn-diff-reader/bpmn-diff-reader.component */ "./src/app/components/bpmn/bpmn-diff-reader/bpmn-diff-reader.component.ts");
/* harmony import */ var _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bpmn-viewer/bpmn-viewer.component */ "./src/app/components/bpmn/bpmn-viewer/bpmn-viewer.component.ts");





class BpmnModule {
}
BpmnModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BpmnModule });
BpmnModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BpmnModule_Factory(t) { return new (t || BpmnModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BpmnModule, { declarations: [_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_2__["BpmnDiffReaderComponent"], _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_3__["BpmnViewerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]], exports: [_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_2__["BpmnDiffReaderComponent"], _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_3__["BpmnViewerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BpmnModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
                declarations: [
                    _bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_2__["BpmnDiffReaderComponent"], _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_3__["BpmnViewerComponent"]
                ],
                exports: [_bpmn_diff_reader_bpmn_diff_reader_component__WEBPACK_IMPORTED_MODULE_2__["BpmnDiffReaderComponent"], _bpmn_viewer_bpmn_viewer_component__WEBPACK_IMPORTED_MODULE_3__["BpmnViewerComponent"]]
            }]
    }], null, null); })();


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
                this.fileContent$(project.id, diff.old_path, project.mergeRequest.sourceBranch),
                this.fileContent$(project.id, diff.new_path, project.mergeRequest.targetBranch)
            ]))])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((bpmnDiffs) => bpmnDiffs.reduce((acc, [filePath, ...diff]) => (Object.assign(Object.assign({}, acc), { [filePath]: diff })), {})), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
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