"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_service_1 = require("../service/customer.service");
var CustomerListComponent = (function () {
    function CustomerListComponent(customerService) {
        this.customerService = customerService;
        this.customers = [];
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.getAddedCustomers();
        this.getUpdatedCustomers();
        this.getDeletedCustomers();
    };
    CustomerListComponent.prototype.getAddedCustomers = function () {
        var _this = this;
        this.customerService.getAddedCustomers()
            .subscribe(function (customer) {
            _this.customers.push(customer);
        }, function (err) {
            console.error("Unable to get added customer - ", err);
        });
    };
    CustomerListComponent.prototype.getUpdatedCustomers = function () {
        var _this = this;
        this.customerService.changedListener()
            .subscribe(function (updatedCustomer) {
            var customerIndex = _this.customers.map(function (index) { return index.id; }).indexOf(updatedCustomer['id']);
            _this.customers[customerIndex] = updatedCustomer;
        }, function (err) {
            console.error("Unable to get updated customer -", err);
        });
    };
    CustomerListComponent.prototype.getDeletedCustomers = function () {
        var _this = this;
        this.customerService.deleteListener()
            .subscribe(function (deletedCustomer) {
            var delIndex = _this.customers.map(function (index) { return index.id; }).indexOf(deletedCustomer['id']);
            _this.customers.splice(delIndex, 1);
        }, function (err) {
            console.error("Unable to delete customer -", err);
        });
    };
    return CustomerListComponent;
}());
CustomerListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'customer-list',
        templateUrl: 'customer-list.component.html',
        styleUrls: ['customer-list.component.css']
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerListComponent);
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customer-list.component.js.map