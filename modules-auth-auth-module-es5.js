(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container flex-center-center animation-bg\">\r\n    <form\r\n    class=\"login-form col-spc-btwn-cntr\"\r\n    [formGroup]=\"loginForm\"\r\n  >\r\n    <div class=\"flex-center-center title-container\">\r\n      <h3>\r\n        Login\r\n      </h3>\r\n    </div>\r\n    <mat-form-field  class=\"form-field\">\r\n      <input\r\n        autocomplete=\"off\"\r\n        matInput\r\n        (keydown.enter)=\"onLogin()\"\r\n        type=\"email\"\r\n        placeholder=\"email\"\r\n        formControlName=\"email\">\r\n        <mat-error *ngIf=\"!getEmailErrors('required') && getEmailErrors('email')\">\r\n          Please enter a valid email address\r\n        </mat-error>\r\n        <mat-error *ngIf=\"getEmailErrors('required')\">\r\n          Email is <strong>required</strong>\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field  class=\"form-field\" >\r\n      <input\r\n        matInput\r\n        (keydown.enter)=\"onLogin()\"\r\n        placeholder=\"password\"\r\n        formControlName=\"password\"\r\n        [type]=\"hidePswrd ? 'password' : 'text'\"\r\n      >\r\n      <mat-icon\r\n        class=\"pswrd-icon\"\r\n        mat-icon-button\r\n        matSuffix\r\n        [attr.aria-label]=\"'Hide password'\"\r\n        [attr.aria-pressed]=\"hidePswrd\"\r\n        (click)=\"hidePswrd = !hidePswrd\"\r\n      >\r\n        {{hidePswrd ? 'visibility_off' : 'visibility'}}\r\n      </mat-icon>\r\n      <mat-error *ngIf=\"!loginForm.hasError('required')\">\r\n        Password is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <button\r\n      mat-raised-button\r\n      color=\"accent\"\r\n      (click)=\"onLogin()\"\r\n      [disabled]=\"loginForm.invalid\">\r\n      login\r\n    </button>\r\n  </form>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./src/app/modules/auth/auth-routing.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/modules/auth/auth-routing.module.ts ***!
          \*****************************************************/
        /*! exports provided: AuthRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () { return AuthRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/app/modules/index.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
            // Modules
            //  Components
            var routes = [
                {
                    path: ___WEBPACK_IMPORTED_MODULE_3__["Constants"].ROUTERS.EMPTY,
                    component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                },
            ];
            var AuthRoutingModule = /** @class */ (function () {
                function AuthRoutingModule() {
                }
                return AuthRoutingModule;
            }());
            AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AuthRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/auth/auth.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/modules/auth/auth.module.ts ***!
          \*********************************************/
        /*! exports provided: AuthModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function () { return AuthModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
            /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./src/app/modules/index.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
            //  Modules
            //  Components
            var AuthModule = /** @class */ (function () {
                function AuthModule() {
                }
                return AuthModule;
            }());
            AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                        ___WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    ],
                })
            ], AuthModule);
            /***/ 
        }),
        /***/ "./src/app/modules/auth/login/login.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/modules/auth/login/login.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  width: 300px;\n  padding: 5px;\n}\n\n.form-field {\n  width: 100%;\n}\n\n.pswrd-icon {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL0M6XFxJdC1pbmR1c3RyaWVzXFx3b3JrXFxpc3JhZWwtdGVzdFxcdGVzdC10b2RvLWxpc3Qvc3JjXFxhcHBcXG1vZHVsZXNcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wc3dyZC1pY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLmxvZ2luLWZvcm0ge1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBzd3JkLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/auth/login/login.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/modules/auth/login/login.component.ts ***!
          \*******************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../.. */ "./src/app/modules/index.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(formBuilder, storageService, authService, router, snackBar) {
                    this.formBuilder = formBuilder;
                    this.storageService = storageService;
                    this.authService = authService;
                    this.router = router;
                    this.snackBar = snackBar;
                    this.durationInSeconds = 5;
                    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
                    this.hidePswrd = true;
                    this.initForm();
                }
                LoginComponent.prototype.ngOnDestroy = function () {
                    this.subs.unsubscribe();
                };
                LoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    var subId = this.authService
                        .login(this.loginForm.getRawValue().email, this.loginForm.getRawValue().password)
                        .subscribe(function (user) {
                        _this.storageService.setUser(user);
                        _this.router.navigate([___WEBPACK_IMPORTED_MODULE_7__["Constants"].ROUTERS.EMPTY]);
                    }, function (error) {
                        _this.showError(error.msg);
                        _this.loginForm.reset();
                    });
                    this.subs.add(subId);
                };
                LoginComponent.prototype.getEmailErrors = function (type) {
                    if (!this.loginForm.get('email').errors) {
                        return false;
                    }
                    return this.loginForm.get('email').errors.hasOwnProperty(type);
                };
                LoginComponent.prototype.initForm = function () {
                    this.loginForm = this.formBuilder.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    });
                };
                LoginComponent.prototype.showError = function (msg) {
                    this.snackBar.open(msg, 'Error !', {
                        duration: 3000,
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'tdl-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-auth-auth-module-es2015.js.map
//# sourceMappingURL=modules-auth-auth-module-es5.js.map
//# sourceMappingURL=modules-auth-auth-module-es5.js.map