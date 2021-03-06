"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var auth_routing_module_1 = require("./auth-routing.module");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var auth_service_1 = require("./auth.service");
var firebase_config_service_1 = require("../../core/service/firebase-config.service");
var login_component_1 = require("../login.component");
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        declarations: [
            login_component_1.LoginComponent
        ],
        imports: [
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            auth_routing_module_1.AuthRoutingModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule
        ],
        providers: [
            auth_service_1.AuthService,
            firebase_config_service_1.FirebaseConfigService
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map