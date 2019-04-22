"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Module
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// CustomerModule child module
var customer_module_1 = require("./customer/customer.module");
// MedicineModule child module
var medicine_module_1 = require("./medicine/medicine.module");
//main routes
var app_routing_module_1 = require("./app-routing.module");
//Module used for the login and authentication component
var auth_module_1 = require("./login/auth/auth.module");
var firebase_config_service_1 = require("./core/service/firebase-config.service");
//Components
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var home_component_1 = require("./home/home.component");
var auth_guard_1 = require("./login/auth/auth.guard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            customer_module_1.CustomerModule,
            medicine_module_1.MedicineModule,
            app_routing_module_1.AppRoutingModule,
            auth_module_1.AuthModule
        ],
        declarations: [app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            home_component_1.HomeComponent
        ],
        providers: [firebase_config_service_1.FirebaseConfigService, auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map