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
var Observable_1 = require("rxjs/Observable");
var firebase_config_service_1 = require("../../core/service/firebase-config.service");
var CustomerService = (function () {
    function CustomerService(fire) {
        this.fire = fire;
        this.customerDbRef = this.fire.database.ref('/Customer');
    }
    CustomerService.prototype.getAddedCustomers = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            _this.customerDbRef.on('child_added', function (customer) {
                var newCustomer = customer.val();
                newCustomer.id = customer.key;
                obs.next(newCustomer);
            }, function (err) {
                //////////
            });
        });
    };
    CustomerService.prototype.changedListener = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            _this.customerDbRef.on('child_changed', function (customer) {
                var updatedCustomer = customer.val();
                updatedCustomer.id = customer.key;
                obs.next(updatedCustomer);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    CustomerService.prototype.deleteListener = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            _this.customerDbRef.on('child_removed', function (customer) {
                var deletedCustomer = customer.val();
                deletedCustomer.id = customer.key;
                obs.next(deletedCustomer);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    CustomerService.prototype.addCustomer = function (customer) {
        var newCustRef = this.customerDbRef.push();
        newCustRef.set({
            firstName: customer.firstName,
            lastName: customer.lastName,
            DateOfBirth: customer.DateOfBirth,
            adress: customer.adress,
            phoneNumber: customer.phoneNumber,
            email: customer.email,
            description: customer.description
        })
            .catch(function (err) { return console.error("Unable to add customer to firebase - ", err); });
    };
    CustomerService.prototype.updateCustomer = function (customer) {
        var currentCustomerRef = this.customerDbRef.child(customer.id);
        customer.id = null;
        currentCustomerRef.update(customer);
    };
    CustomerService.prototype.deleteCustomer = function (customer) {
        var delCustRef = this.customerDbRef.child(customer.id);
        delCustRef.remove();
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [firebase_config_service_1.FirebaseConfigService])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map