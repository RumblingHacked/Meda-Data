"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
var core_1 = require("@angular/core");
var shared_module_1 = require("../shared/shared.module");
var customer_routing_module_1 = require("./customer-routing.module");
var forms_1 = require("@angular/forms");
//Component
var customer_list_component_1 = require("./customer-list/customer-list.component");
var customer_detail_component_1 = require("./customer-detail/customer-detail.component");
//Service
var customer_service_1 = require("./service/customer.service");
var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, customer_routing_module_1.CustomerRoutingModule, forms_1.ReactiveFormsModule],
        declarations: [customer_list_component_1.CustomerListComponent, customer_detail_component_1.CustomerDetailComponent],
        exports: [],
        providers: [customer_service_1.CustomerService]
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=customer.module.js.map