(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./core/core.module": [
                    "./src/app/core/core.module.ts"
                ],
                "./modules/auth/auth.module": [
                    "./src/app/modules/auth/auth.module.ts",
                    "modules-auth-auth-module"
                ]
            };
            function webpackAsyncContext(req) {
                if (!__webpack_require__.o(map, req)) {
                    return Promise.resolve().then(function () {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    });
                }
                var ids = map[req], id = ids[0];
                return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
                    return __webpack_require__(id);
                });
            }
            webpackAsyncContext.keys = function webpackAsyncContextKeys() {
                return Object.keys(map);
            };
            webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            module.exports = webpackAsyncContext;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row class=\"toolbar-row row-spc-btwn-cntr\">\r\n      <span>TODO list by Zdebskyy</span>\r\n      <button *ngIf=\"isLogined\"\r\n              mat-button\r\n              matTooltip=\"Log out\"\r\n              (click)=\"logout()\">\r\n          <mat-icon class=\"log-out-icon\"\r\n                    aria-hidden=\"false\">\r\n            power_settings_new\r\n          </mat-icon>\r\n      </button>\r\n\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</header>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container flex-center-center animation-bg\">\r\n  <div class=\"todo-container col-spc-btwn-cntr\">\r\n    <tdl-input-task (addTask)=\"onAddTask($event)\">\r\n    </tdl-input-task>\r\n    <mat-tab-group *ngIf=\"isTasks\">\r\n      <mat-tab label=\"All\">\r\n        <tdl-todo-list [tasks]=\"tasks\"\r\n                       (remove)=\"onRemove($event)\"\r\n                       (done)=\"onDone($event)\">\r\n        </tdl-todo-list>\r\n      </mat-tab>\r\n      <mat-tab label=\"Done\">\r\n        <tdl-todo-list [tasks]=\"doneTasks\"\r\n                        (remove)=\"onRemove($event)\"\r\n                        (done)=\"onDone($event)\">\r\n        </tdl-todo-list>\r\n      </mat-tab>\r\n      <mat-tab label=\"To Do\">\r\n        <tdl-todo-list [tasks]=\"todoTasks\"\r\n                        (remove)=\"onRemove($event)\"\r\n                        (done)=\"onDone($event)\">\r\n        </tdl-todo-list>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/layout.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/layout.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"layout-container\">\r\n  <tdl-header></tdl-header>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input-task/input-task.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input-task/input-task.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row-spc-btwn-cntr input-container\">\r\n  <mat-form-field class=\"form-field\">\r\n    <input matInput\r\n            placeholder=\"Add new task ...\"\r\n            [(ngModel)]=\"title\"\r\n            (keydown.enter)=\"onAddTask()\">\r\n  </mat-form-field>\r\n  <button mat-mini-fab\r\n          class=\"add-btn\"\r\n          (click)=\"onAddTask()\">\r\n    Add\r\n  </button>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/todo-list/todo-list.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/todo-list/todo-list.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-list role=\"list\">\r\n  <mat-list-item *ngFor=\"let task of tasks\"\r\n                 role=\"listitem\">\r\n    <div class=\"list-item row-spc-btwn-cntr\">\r\n      <span class=\"task-title\"\r\n            [class.done]=\"task.isDone\"\r\n            (click)=\"onDone(task)\">\r\n        {{ task.title }}\r\n      </span>\r\n      <button\r\n        class=\"remove-btn\">\r\n          <mat-icon\r\n            class=\"log-out-icon\"\r\n            aria-hidden=\"false\"\r\n            (click)=\"onRemove(task)\">\r\n            delete_forever\r\n          </mat-icon>\r\n      </button>\r\n    </div>\r\n    <mat-divider></mat-divider>\r\n  </mat-list-item>\r\n</mat-list>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules */ "./src/app/modules/index.ts");
            /* harmony import */ var _modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/auth/auth.guard */ "./src/app/modules/auth/auth.guard.ts");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
            //  Modules
            //  Services
            var routes = _services__WEBPACK_IMPORTED_MODULE_5__["Route"].withLayout([
                {
                    path: _modules__WEBPACK_IMPORTED_MODULE_3__["Constants"].ROUTERS.EMPTY,
                    loadChildren: './core/core.module#CoreModule',
                    canActivate: [_modules_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                },
                {
                    path: _modules__WEBPACK_IMPORTED_MODULE_3__["Constants"].ROUTERS.LOGIN,
                    loadChildren: './modules/auth/auth.module#AuthModule',
                },
                {
                    path: '**',
                    redirectTo: _modules__WEBPACK_IMPORTED_MODULE_3__["Constants"].ROUTERS.EMPTY,
                    pathMatch: 'full',
                },
            ]);
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'test-todo-list';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'tdl-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            //  Modules
            //  Components
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/core/core-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/core/core-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: CoreRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function () { return CoreRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules */ "./src/app/modules/index.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
            //  Modules
            // Components
            var routes = [
                {
                    path: _modules__WEBPACK_IMPORTED_MODULE_3__["Constants"].ROUTERS.EMPTY,
                    component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                },
            ];
            var CoreRoutingModule = /** @class */ (function () {
                function CoreRoutingModule() {
                }
                return CoreRoutingModule;
            }());
            CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], CoreRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/core/core.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/core/core.module.ts ***!
          \*************************************/
        /*! exports provided: CoreModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function () { return CoreModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
            /* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components */ "./src/app/shared/components/index.ts");
            /* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules */ "./src/app/modules/index.ts");
            /* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/core/layout/layout.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
            // Modules
            //  Components
            var CoreModule = /** @class */ (function () {
                function CoreModule() {
                }
                return CoreModule;
            }());
            CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _core_routing_module__WEBPACK_IMPORTED_MODULE_3__["CoreRoutingModule"],
                        _modules__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                        _shared_components__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                    ]
                })
            ], CoreModule);
            /***/ 
        }),
        /***/ "./src/app/core/header/header.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/core/header/header.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".toolbar-row {\n  padding: 0 30px;\n  height: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXEl0LWluZHVzdHJpZXNcXHdvcmtcXGlzcmFlbC10ZXN0XFx0ZXN0LXRvZG8tbGlzdC9zcmNcXGFwcFxcY29yZVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1yb3cge1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuIiwiLnRvb2xiYXItcm93IHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDEwdmg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/core/header/header.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/core/header/header.component.ts ***!
          \*************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
            //  Services
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(authService, storageService, router) {
                    this.authService = authService;
                    this.storageService = storageService;
                    this.router = router;
                }
                Object.defineProperty(HeaderComponent.prototype, "isLogined", {
                    get: function () {
                        return this.storageService.isLogined();
                    },
                    enumerable: true,
                    configurable: true
                });
                HeaderComponent.prototype.logout = function () {
                    this.authService.logout();
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'tdl-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/core/home/home.component.scss": 
        /*!***********************************************!*\
          !*** ./src/app/core/home/home.component.scss ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".todo-container {\n  background-color: #fff;\n  padding: 15px 25px;\n  min-width: 500px;\n}\n\ntdl-input-task {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ob21lL0M6XFxJdC1pbmR1c3RyaWVzXFx3b3JrXFxpc3JhZWwtdGVzdFxcdGVzdC10b2RvLWxpc3Qvc3JjXFxhcHBcXGNvcmVcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxudGRsLWlucHV0LXRhc2sge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi50b2RvLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxudGRsLWlucHV0LXRhc2sge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/core/home/home.component.ts": 
        /*!*********************************************!*\
          !*** ./src/app/core/home/home.component.ts ***!
          \*********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(storageService) {
                    this.storageService = storageService;
                    this.tasks = this.storageService.getTasks();
                }
                HomeComponent.prototype.onAddTask = function (title) {
                    this.storageService.saveTask(title);
                    this.update();
                };
                HomeComponent.prototype.onRemove = function (task) {
                    this.storageService.removeTask(task);
                    this.update();
                };
                HomeComponent.prototype.onDone = function (task) {
                    this.storageService.updateTask(task);
                    this.update();
                };
                Object.defineProperty(HomeComponent.prototype, "isTasks", {
                    get: function () {
                        return !!this.tasks.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HomeComponent.prototype, "doneTasks", {
                    get: function () {
                        return this.tasks.filter(function (task) { return task.isDone; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HomeComponent.prototype, "todoTasks", {
                    get: function () {
                        return this.tasks.filter(function (task) { return !task.isDone; });
                    },
                    enumerable: true,
                    configurable: true
                });
                HomeComponent.prototype.update = function () {
                    this.tasks = this.storageService.getTasks();
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'tdl-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/core/home/home.component.scss")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/core/layout/layout.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/core/layout/layout.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/core/layout/layout.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/core/layout/layout.component.ts ***!
          \*************************************************/
        /*! exports provided: LayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () { return LayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LayoutComponent = /** @class */ (function () {
                function LayoutComponent() {
                }
                LayoutComponent.prototype.ngOnInit = function () {
                };
                return LayoutComponent;
            }());
            LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'tdl-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/core/layout/layout.component.scss")).default]
                })
            ], LayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/auth/auth.guard.ts": 
        /*!********************************************!*\
          !*** ./src/app/modules/auth/auth.guard.ts ***!
          \********************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
            /* harmony import */ var _constants_constants_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants.module */ "./src/app/modules/constants/constants.module.ts");
            // Services
            // Modules
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, storageService) {
                    this.router = router;
                    this.storageService = storageService;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    if (!this.storageService.isLogined()) {
                        this.router.navigate([_constants_constants_module__WEBPACK_IMPORTED_MODULE_4__["Constants"].ROUTERS.LOGIN], { replaceUrl: true });
                        return false;
                    }
                    return true;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/modules/constants/constants.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/modules/constants/constants.module.ts ***!
          \*******************************************************/
        /*! exports provided: Constants */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function () { return Constants; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var Constants = /** @class */ (function () {
                function Constants() {
                }
                return Constants;
            }());
            Constants.ROUTERS = {
                EMPTY: '',
                LOGIN: 'login',
            };
            Constants = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    ],
                    declarations: [],
                })
            ], Constants);
            /***/ 
        }),
        /***/ "./src/app/modules/index.ts": 
        /*!**********************************!*\
          !*** ./src/app/modules/index.ts ***!
          \**********************************/
        /*! exports provided: Constants, MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _constants_constants_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constants.module */ "./src/app/modules/constants/constants.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Constants", function () { return _constants_constants_module__WEBPACK_IMPORTED_MODULE_1__["Constants"]; });
            /* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ "./src/app/modules/material/material.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]; });
            /***/ 
        }),
        /***/ "./src/app/modules/material/material.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/modules/material/material.module.ts ***!
          \*****************************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            //  Modules
            var MODULES = [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            ];
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
            MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: MODULES.slice(),
                    exports: MODULES.slice(),
                })
            ], MaterialModule);
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules */ "./src/app/modules/index.ts");
            var AuthService = /** @class */ (function () {
                function AuthService(storageService, router) {
                    this.storageService = storageService;
                    this.router = router;
                    this.MOCK_USER_DATA = {
                        name: 'Vasil',
                        lastName: 'Alibabaevich',
                        email: 'test@domain.url',
                        age: 30,
                        id: '30-vasil-alibabaevich',
                    };
                    this.MOCK_USER_PASSWORD = 'qwerty123';
                }
                AuthService.prototype.login = function (email, password) {
                    var _this = this;
                    if (this.MOCK_USER_DATA.email === email && this.MOCK_USER_PASSWORD === password) {
                        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                            observer.next(_this.MOCK_USER_DATA);
                        });
                    }
                    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                        observer.error({ msg: 'Wrong credentials' });
                    });
                };
                AuthService.prototype.logout = function () {
                    this.storageService.removeUser();
                    this.router.navigate([src_app_modules__WEBPACK_IMPORTED_MODULE_5__["Constants"].ROUTERS.LOGIN]);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/index.ts": 
        /*!***********************************!*\
          !*** ./src/app/services/index.ts ***!
          \***********************************/
        /*! exports provided: StorageService, AuthService, Route */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageService", function () { return _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]; });
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });
            /* harmony import */ var _router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.service */ "./src/app/services/router.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function () { return _router_service__WEBPACK_IMPORTED_MODULE_3__["Route"]; });
            /***/ 
        }),
        /***/ "./src/app/services/router.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/router.service.ts ***!
          \********************************************/
        /*! exports provided: Route */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function () { return Route; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules */ "./src/app/modules/index.ts");
            /* harmony import */ var _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/layout/layout.component */ "./src/app/core/layout/layout.component.ts");
            //  Modules
            // Components
            var Route = /** @class */ (function () {
                function Route() {
                }
                Route.withLayout = function (routes) {
                    return [
                        {
                            path: _modules__WEBPACK_IMPORTED_MODULE_1__["Constants"].ROUTERS.EMPTY,
                            component: _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                            children: routes,
                        },
                    ];
                };
                return Route;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/storage.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/storage.service.ts ***!
          \*********************************************/
        /*! exports provided: StorageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function () { return StorageService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var StorageService = /** @class */ (function () {
                function StorageService() {
                    this.USER_KEY = 'TODO-user';
                    this.TODO_LIST_KEY = 'TODO-list';
                    this.ID_LENGTH = 12;
                    this.CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                }
                StorageService.prototype.getUser = function () {
                    var userData = localStorage.getItem(this.USER_KEY);
                    return JSON.parse(userData);
                };
                StorageService.prototype.setUser = function (user) {
                    var userData = JSON.stringify(user);
                    localStorage.setItem(this.USER_KEY, userData);
                };
                StorageService.prototype.isLogined = function () {
                    var userData = localStorage.getItem(this.USER_KEY);
                    return !!userData;
                };
                StorageService.prototype.removeUser = function () {
                    localStorage.removeItem(this.USER_KEY);
                };
                StorageService.prototype.saveTask = function (title) {
                    var task = {
                        title: title,
                        id: this.generateId(),
                        isDone: false,
                    };
                    var tasksData = localStorage.getItem(this.TODO_LIST_KEY);
                    var tasks = tasksData ? JSON.parse(tasksData).concat([task]) : [task];
                    localStorage.setItem(this.TODO_LIST_KEY, JSON.stringify(tasks));
                };
                StorageService.prototype.getTasks = function () {
                    var tasksData = localStorage.getItem(this.TODO_LIST_KEY);
                    return tasksData ? JSON.parse(tasksData) : [];
                };
                StorageService.prototype.removeTask = function (task) {
                    var tasksData = localStorage.getItem(this.TODO_LIST_KEY);
                    var tasks = JSON.parse(tasksData).filter(function (item) { return item.id != task.id; });
                    localStorage.setItem(this.TODO_LIST_KEY, JSON.stringify(tasks));
                };
                StorageService.prototype.updateTask = function (task) {
                    var tasksData = localStorage.getItem(this.TODO_LIST_KEY);
                    var tasks = JSON.parse(tasksData).map(function (item) {
                        if (item.id === task.id) {
                            item.isDone = !item.isDone;
                        }
                        return item;
                    });
                    localStorage.setItem(this.TODO_LIST_KEY, JSON.stringify(tasks));
                };
                StorageService.prototype.generateId = function () {
                    var result = '';
                    var charactersLength = this.CHARACTERS.length;
                    for (var i = 0; i < this.ID_LENGTH; i++) {
                        result += this.CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                };
                return StorageService;
            }());
            StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], StorageService);
            /***/ 
        }),
        /***/ "./src/app/shared/components/components.module.ts": 
        /*!********************************************************!*\
          !*** ./src/app/shared/components/components.module.ts ***!
          \********************************************************/
        /*! exports provided: ComponentsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () { return ComponentsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/shared/components/todo-list/todo-list.component.ts");
            /* harmony import */ var src_app_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules */ "./src/app/modules/index.ts");
            /* harmony import */ var _input_task_input_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-task/input-task.component */ "./src/app/shared/components/input-task/input-task.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            //  Components
            //  Modules
            var COMPONENTS = [
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"],
                _input_task_input_task_component__WEBPACK_IMPORTED_MODULE_5__["InputTaskComponent"],
            ];
            var ComponentsModule = /** @class */ (function () {
                function ComponentsModule() {
                }
                return ComponentsModule;
            }());
            ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: COMPONENTS.slice(),
                    exports: COMPONENTS.slice(),
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        src_app_modules__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ]
                })
            ], ComponentsModule);
            /***/ 
        }),
        /***/ "./src/app/shared/components/index.ts": 
        /*!********************************************!*\
          !*** ./src/app/shared/components/index.ts ***!
          \********************************************/
        /*! exports provided: ComponentsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.module */ "./src/app/shared/components/components.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () { return _components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]; });
            /***/ 
        }),
        /***/ "./src/app/shared/components/input-task/input-task.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/shared/components/input-task/input-task.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".input-container {\n  width: 100%;\n  padding: 10px;\n}\n\n.form-field {\n  width: 100%;\n}\n\n.add-btn {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtdGFzay9DOlxcSXQtaW5kdXN0cmllc1xcd29ya1xcaXNyYWVsLXRlc3RcXHRlc3QtdG9kby1saXN0L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGlucHV0LXRhc2tcXGlucHV0LXRhc2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0LXRhc2svaW5wdXQtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtdGFzay9pbnB1dC10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWRkLWJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuIiwiLmlucHV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/input-task/input-task.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/components/input-task/input-task.component.ts ***!
          \**********************************************************************/
        /*! exports provided: InputTaskComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTaskComponent", function () { return InputTaskComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var InputTaskComponent = /** @class */ (function () {
                function InputTaskComponent() {
                    this.title = '';
                    this.addTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                InputTaskComponent.prototype.onAddTask = function () {
                    this.addTask.emit(this.title);
                    this.title = '';
                };
                return InputTaskComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], InputTaskComponent.prototype, "addTask", void 0);
            InputTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'tdl-input-task',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input-task/input-task.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-task.component.scss */ "./src/app/shared/components/input-task/input-task.component.scss")).default]
                })
            ], InputTaskComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/components/todo-list/todo-list.component.scss": 
        /*!**********************************************************************!*\
          !*** ./src/app/shared/components/todo-list/todo-list.component.scss ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".list-item {\n  width: 100%;\n  cursor: pointer;\n}\n\n.remove-btn {\n  transition: all 0.2s;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n\n.remove-btn:hover .log-out-icon {\n  transition: all 0.2s;\n  color: #ff0000;\n}\n\nmat-list-item {\n  transition: all 0.2s;\n}\n\nmat-list-item:hover {\n  background-color: #f2f2f2;\n}\n\n.done {\n  text-decoration: line-through;\n}\n\n.task-title {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9kby1saXN0L0M6XFxJdC1pbmR1c3RyaWVzXFx3b3JrXFxpc3JhZWwtdGVzdFxcdGVzdC10b2RvLWxpc3Qvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcdG9kby1saXN0XFx0b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0k7RUFDRSxvQkFBQTtFQUNBLGNBQUE7QUNDTjs7QURHQTtFQUNFLG9CQUFBO0FDQUY7O0FEQ0U7RUFDRSx5QkFBQTtBQ0NKOztBREdBO0VBQ0UsNkJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZW1vdmUtYnRuIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIC5sb2ctb3V0LWljb24ge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxubWF0LWxpc3QtaXRlbSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgfVxyXG59XHJcblxyXG4uZG9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi50YXNrLXRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIubGlzdC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZS1idG4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVtb3ZlLWJ0bjpob3ZlciAubG9nLW91dC1pY29uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuXG5tYXQtbGlzdC1pdGVtIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmRvbmUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRhc2stdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/components/todo-list/todo-list.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/shared/components/todo-list/todo-list.component.ts ***!
          \********************************************************************/
        /*! exports provided: TodoListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () { return TodoListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TodoListComponent = /** @class */ (function () {
                function TodoListComponent() {
                    this.tasks = [];
                    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                TodoListComponent.prototype.onRemove = function (task) {
                    this.remove.emit(task);
                };
                TodoListComponent.prototype.onDone = function (task) {
                    this.done.emit(task);
                };
                return TodoListComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TodoListComponent.prototype, "tasks", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], TodoListComponent.prototype, "remove", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], TodoListComponent.prototype, "done", void 0);
            TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'tdl-todo-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/todo-list/todo-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-list.component.scss */ "./src/app/shared/components/todo-list/todo-list.component.scss")).default]
                })
            ], TodoListComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\It-industries\work\israel-test\test-todo-list\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map