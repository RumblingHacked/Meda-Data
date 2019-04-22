"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customer_list_component_1 = require("./customer-list/customer-list.component");
var auth_guard_1 = require("../login/auth/auth.guard");
var CustomerRoutingModule = (function () {
    function CustomerRoutingModule() {
    }
    return CustomerRoutingModule;
}());
CustomerRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild([
                { path: 'customer', component: customer_list_component_1.CustomerListComponent, canActivate: [auth_guard_1.AuthGuard] },
            ])
        ],
        exports: [router_1.RouterModule]
    })
], CustomerRoutingModule);
exports.CustomerRoutingModule = CustomerRoutingModule;
//# sourceMappingURL=customer-routing.module.js.map