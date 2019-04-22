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
var forms_1 = require("@angular/forms");
var customer_service_1 = require("../service/customer.service");
var customer_1 = require("../model/customer");
var CustomerDetailComponent = (function () {
    function CustomerDetailComponent(formB, customerService) {
        this.formB = formB;
        this.customerService = customerService;
        this.modalId = "customerModal";
        this.currentCustomer = new customer_1.Customer(null, null, null, null, null, null, null, null);
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        this.configureForm();
    };
    CustomerDetailComponent.prototype.configureForm = function (customer) {
        if (customer) {
            this.currentCustomer = new customer_1.Customer(customer.id, customer.firstName, customer.lastName, customer.DateOfBirth, customer.adress, customer.phoneNumber, customer.email, customer.description);
        }
        this.customerForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(this.currentCustomer.firstName, forms_1.Validators.required),
            lastName: new forms_1.FormControl(this.currentCustomer.lastName, forms_1.Validators.required),
            dateOfBirth: new forms_1.FormControl(this.currentCustomer.DateOfBirth, forms_1.Validators.required),
            homeAddress: new forms_1.FormControl(this.currentCustomer.adress, forms_1.Validators.required),
            phoneNumber: new forms_1.FormControl(this.currentCustomer.phoneNumber),
            email: new forms_1.FormControl(this.currentCustomer.email),
            description: new forms_1.FormControl(this.currentCustomer.description)
        });
    };
    CustomerDetailComponent.prototype.submitForm = function () {
        this.currentCustomer.firstName = this.customerForm.value["firstName"];
        this.currentCustomer.lastName = this.customerForm.value["lastName"];
        this.currentCustomer.DateOfBirth = this.customerForm.value["dateOfBirth"];
        this.currentCustomer.adress = this.customerForm.value["homeAddress"];
        this.currentCustomer.phoneNumber = this.customerForm.value["phoneNumber"];
        this.currentCustomer.email = this.customerForm.value["email"];
        this.currentCustomer.description = this.customerForm.value["description"];
        if (this.currentCustomer.id) {
            this.updateCustomer();
        }
        else {
            this.addCustomer();
        }
    };
    CustomerDetailComponent.prototype.addCustomer = function () {
        this.customerService.addCustomer(this.currentCustomer);
    };
    CustomerDetailComponent.prototype.updateCustomer = function () {
        this.customerService.updateCustomer(this.currentCustomer);
    };
    CustomerDetailComponent.prototype.deleteCustomer = function () {
        this.customerService.deleteCustomer(this.currentCustomer);
    };
    CustomerDetailComponent.prototype.freshForm = function () {
        this.customerForm.reset();
        this.cleanCustomer();
    };
    CustomerDetailComponent.prototype.cleanCustomer = function () {
        this.currentCustomer = new customer_1.Customer(null, null, null, null, null, null, null, null);
    };
    return CustomerDetailComponent;
}());
CustomerDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'customer-detail',
        templateUrl: 'customer-detail.component.html',
        styleUrls: ['customer-detail.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, customer_service_1.CustomerService])
], CustomerDetailComponent);
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=customer-detail.component.js.map