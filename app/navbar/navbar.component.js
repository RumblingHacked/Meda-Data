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
var auth_service_1 = require("../login/auth/auth.service");
var router_1 = require("@angular/router");
var core_2 = require("@angular/core");
var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.emailElement = [{ name: 'userEmail' }];
        this.isAuthenticated = false;
        this.test = 'test@test.com';
        this.subscription = this.authService.isAuthenticated().subscribe(function (authStatus) { return _this.isAuthenticated = authStatus; });
    }
    NavbarComponent.prototype.return = function (myForm) {
        alert(this.myForm.get('email').value);
        return this.myForm.get('email').value;
    };
    NavbarComponent.prototype.isAuth = function () {
        return this.isAuthenticated;
    };
    NavbarComponent.prototype.onLogout = function () {
        console.log("test");
        this.authService.logout();
    };
    NavbarComponent.prototype.onEmailAdded = function (emailData) {
        this.emailElement.push({
            name: emailData.email
        });
        //  return JSON.stringify(this.myForm.value)
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return NavbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], NavbarComponent.prototype, "myForm", void 0);
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navbar',
        templateUrl: 'navbar.component.html',
        styleUrls: ['navbar.component.css']
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map