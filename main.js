(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inputdetails_inputdetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputdetails/inputdetails.component */ "./src/app/inputdetails/inputdetails.component.ts");






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'inputdetails', component: _inputdetails_inputdetails_component__WEBPACK_IMPORTED_MODULE_5__["InputdetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'WebProject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _inputdetails_inputdetails_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputdetails/inputdetails.component */ "./src/app/inputdetails/inputdetails.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _inputdetails_inputdetails_component__WEBPACK_IMPORTED_MODULE_7__["InputdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/inputdetails/inputdetails.component.html":
/*!**********************************************************!*\
  !*** ./src/app/inputdetails/inputdetails.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n\n  <div class=\"jumbotron text-center\">\n    <h1 style=\"color:white\">Enter Details</h1>\n    <hr>\n\n    <!-- First Name  Last Name -->\n    <div class=\"input-group input-group-lg\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">First Name</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\n\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Last Name</span>\n      </div>\n      <input type=\"text\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\n    </div>\n    <br>\n\n    <!-- Age -->\n    <div class=\"input-group input-group-lg\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Age</span>\n      </div>\n      <input type=\"number\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\n    </div>\n    <br>\n\n    <!-- Gender -->\n    <div class=\"input-group input-group-lg\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Gender</span>\n        </div>\n        <select class=\"form-control\">\n            <option>Male</option>\n            <option>Female</option>\n          </select>\n        </div>\n      <br>\n\n      <!-- Date of birth -->\n      <div class=\"input-group input-group-lg\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Date of Birth</span>\n          </div>\n          <input type=\"date\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\n        </div>\n        <br>\n\n        <!-- CNIC Number -->\n        <div class=\"input-group input-group-lg\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">CNIC</span>\n            </div>\n            <input type=\"number\"  class=\"form-control cnic\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\n          </div>\n          <br>\n\n        <!-- Picture -->\n        <div class=\"input-group input-group-lg\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Picture</span>\n            </div>\n            <div class=\"custom-file form-control\"  >\n                <input type=\"file\" class=\"custom-file-input\">\n                <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n              </div>\n          </div>\n          <br>\n          <br>\n          <br>\n\n          <h4 style=\"color:white\" >Additional Infromation</h4>\n\n      <!-- Skills -->\n      <div class=\"input-group input-group-lg\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Skills</span>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\n        </div>\n        <br>\n\n      <!-- Activities -->\n      <div class=\"input-group input-group-lg\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Activities</span>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\n        </div>\n        <br>\n\n        \n      <!-- Achievements -->\n      <div class=\"input-group input-group-lg\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Achievements</span>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\n        </div>\n        <br>\n\n        \n      <!-- Exprience -->\n      <div class=\"input-group input-group-lg\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\" id=\"inputGroup-sizing-lg\">Exprience</span>\n          </div>\n          <input type=\"text\" class=\"form-control\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\n        </div>\n        <br>\n    <br>\n    <button>Confirm</button>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/inputdetails/inputdetails.component.less":
/*!**********************************************************!*\
  !*** ./src/app/inputdetails/inputdetails.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #fdad63;\n  width: 30%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\nbutton:hover,\nbutton:active,\nbutton:focus {\n  background: #ff9c3f;\n}\n.jumbotron {\n  width: 70%;\n  padding-left: 7%;\n  padding-right: 7%;\n  margin: auto;\n  background: rgba(0, 0, 0, 0.6);\n  margin-bottom: 0px;\n  background-position: 0% 25%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXRkZXRhaWxzL1o6L0RyaXZlJ1UvU2VtZXN0ZXItOC9XZWIvUHJvamVjdC9XZWJQcm9qZWN0L3NyYy9hcHAvaW5wdXRkZXRhaWxzL2lucHV0ZGV0YWlscy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvaW5wdXRkZXRhaWxzL2lucHV0ZGV0YWlscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLHdCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0E7OztFQUNJLG1CQUFBO0FDQ0o7QURFQTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2lucHV0ZGV0YWlscy9pbnB1dGRldGFpbHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b25cbntcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZkYWQ2MztcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIsIGJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogI2ZmOWMzZjtcbiAgfVxuICBcbi5qdW1ib3Ryb25cbntcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmctbGVmdDogNyU7XG4gICAgcGFkZGluZy1yaWdodDogNyU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjYpO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyNSU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLy8gIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLy8gIC1vLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIC8vICAtbXMtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLy8gIGZpbHRlcjogYmx1cig1cHgpO1xuXG59XG5cbiIsImJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmRhZDYzO1xuICB3aWR0aDogMzAlO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpob3ZlcixcbmJ1dHRvbjphY3RpdmUsXG5idXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmY5YzNmO1xufVxuLmp1bWJvdHJvbiB7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmctbGVmdDogNyU7XG4gIHBhZGRpbmctcmlnaHQ6IDclO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyNSU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/inputdetails/inputdetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/inputdetails/inputdetails.component.ts ***!
  \********************************************************/
/*! exports provided: InputdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputdetailsComponent", function() { return InputdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputdetailsComponent = /** @class */ (function () {
    function InputdetailsComponent() {
    }
    InputdetailsComponent.prototype.ngOnInit = function () {
    };
    InputdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inputdetails',
            template: __webpack_require__(/*! ./inputdetails.component.html */ "./src/app/inputdetails/inputdetails.component.html"),
            styles: [__webpack_require__(/*! ./inputdetails.component.less */ "./src/app/inputdetails/inputdetails.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputdetailsComponent);
    return InputdetailsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"form\">\n    <h1>InternUp</h1>\n    <form class=\"login-form\">\n      <input type=\"text\" placeholder=\"Username\" required=\"required\"/>\n      <input type=\"password\" placeholder=\"Password\" required=\"required\"/>\n      <button>login</button>\n      <p class=\"message\">Not registered? <a routerLink=\"/register\">Create an account</a></p>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/login/login.component.less":
/*!********************************************!*\
  !*** ./src/app/login/login.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form h1 {\n  font-family: unset;\n}\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #fdad63;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover,\n.form button:active,\n.form button:focus {\n  background: #ff9c3f;\n}\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form .message a {\n  color: #fdad63;\n  text-decoration: none;\n}\n.form .message a:hover {\n  color: #fc7a00;\n  text-decoration: none;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #fc7a00;\n  border-color: #fc7a00;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vWjovRHJpdmUnVS9TZW1lc3Rlci04L1dlYi9Qcm9qZWN0L1dlYlByb2plY3Qvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRUFBQTtBQ0FKO0FERUU7RUFDRSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0FDREo7QURJRTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLHdCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUU7OztFQUNFLG1CQUFBO0FDQUo7QURFRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBSjtBREVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDQUo7QURHRTtFQUNDLGNBQUE7RUFDQSxxQkFBQTtBQ0RIO0FESUM7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0ZIIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0hFUkUgTkVXIExPR0lOXG4uZm9ybSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgIHBhZGRpbmc6IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB9XG4gIC5mb3JtIGlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuIFxuICAuZm9ybSBoMXtcbiAgICBmb250LWZhbWlseTp1bnNldDtcbiAgfVxuIFxuICAuZm9ybSBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmRhZDYzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogI2ZmOWMzZjtcbiAgfVxuICAuZm9ybSAubWVzc2FnZSB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgICBjb2xvcjogI2IzYjNiMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmZvcm0gLm1lc3NhZ2UgYSB7XG4gICAgY29sb3I6ICNmZGFkNjM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gXG4gIC5mb3JtIC5tZXNzYWdlIGE6aG92ZXIge1xuICAgY29sb3I6ICNmYzdhMDA7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gfVxuIFxuIC5idG4tcHJpbWFyeSB7XG4gICBjb2xvcjogI2ZmZjtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmYzdhMDA7XG4gICBib3JkZXItY29sb3I6ICNmYzdhMDA7XG4gfSIsIi5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBtYXgtd2lkdGg6IDM2MHB4O1xuICBtYXJnaW46IDAgYXV0byAxMDBweDtcbiAgcGFkZGluZzogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbi5mb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3JtIGgxIHtcbiAgZm9udC1mYW1pbHk6IHVuc2V0O1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6ICNmZGFkNjM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtIGJ1dHRvbjpob3Zlcixcbi5mb3JtIGJ1dHRvbjphY3RpdmUsXG4uZm9ybSBidXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmY5YzNmO1xufVxuLmZvcm0gLm1lc3NhZ2Uge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvcm0gLm1lc3NhZ2UgYSB7XG4gIGNvbG9yOiAjZmRhZDYzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9ybSAubWVzc2FnZSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmYzdhMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM3YTAwO1xuICBib3JkZXItY29sb3I6ICNmYzdhMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/login/login.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <h1>InternUp</h1>\n  <form class=\"login-form\">\n    <input type=\"text\" placeholder=\"Username\" required=\"required\"/>\n    <input type=\"email\" placeholder=\"Email\" required=\"required\"/>\n    <input type=\"text\" placeholder=\"Roll no\" required=\"required\"/>\n    <input type=\"password\" placeholder=\"Password\" required=\"required\"/>\n    <button routerLink=\"/inputdetails\">Register</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.less":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form h1 {\n  font-family: unset;\n}\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #fdad63;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover,\n.form button:active,\n.form button:focus {\n  background: #ff9c3f;\n}\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form .message a {\n  color: #fdad63;\n  text-decoration: none;\n}\n.form .message a:hover {\n  color: #fc7a00;\n  text-decoration: none;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #fc7a00;\n  border-color: #fc7a00;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvWjovRHJpdmUnVS9TZW1lc3Rlci04L1dlYi9Qcm9qZWN0L1dlYlByb2plY3Qvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRUFBQTtBQ0FKO0FERUU7RUFDRSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0FDREo7QURJRTtFQUNFLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLHdCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUU7OztFQUNFLG1CQUFBO0FDQUo7QURFRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBSjtBREVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDQUo7QURHRTtFQUNDLGNBQUE7RUFDQSxxQkFBQTtBQ0RIO0FESUM7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0ZIIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0hFUkUgTkVXIExPR0lOXG4uZm9ybSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICAgIHBhZGRpbmc6IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB9XG4gIC5mb3JtIGlucHV0IHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuIFxuICAuZm9ybSBoMXtcbiAgICBmb250LWZhbWlseTp1bnNldDtcbiAgfVxuIFxuICAuZm9ybSBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmRhZDYzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogI2ZmOWMzZjtcbiAgfVxuICAuZm9ybSAubWVzc2FnZSB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgICBjb2xvcjogI2IzYjNiMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmZvcm0gLm1lc3NhZ2UgYSB7XG4gICAgY29sb3I6ICNmZGFkNjM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gXG4gIC5mb3JtIC5tZXNzYWdlIGE6aG92ZXIge1xuICAgY29sb3I6ICNmYzdhMDA7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gfVxuIFxuIC5idG4tcHJpbWFyeSB7XG4gICBjb2xvcjogI2ZmZjtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmYzdhMDA7XG4gICBib3JkZXItY29sb3I6ICNmYzdhMDA7XG4gfSIsIi5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBtYXgtd2lkdGg6IDM2MHB4O1xuICBtYXJnaW46IDAgYXV0byAxMDBweDtcbiAgcGFkZGluZzogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbi5mb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb3JtIGgxIHtcbiAgZm9udC1mYW1pbHk6IHVuc2V0O1xufVxuLmZvcm0gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6ICNmZGFkNjM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtIGJ1dHRvbjpob3Zlcixcbi5mb3JtIGJ1dHRvbjphY3RpdmUsXG4uZm9ybSBidXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmY5YzNmO1xufVxuLmZvcm0gLm1lc3NhZ2Uge1xuICBtYXJnaW46IDE1cHggMCAwO1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvcm0gLm1lc3NhZ2UgYSB7XG4gIGNvbG9yOiAjZmRhZDYzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9ybSAubWVzc2FnZSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmYzdhMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM3YTAwO1xuICBib3JkZXItY29sb3I6ICNmYzdhMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/register/register.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! Z:\Drive'U\Semester-8\Web\Project\WebProject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map