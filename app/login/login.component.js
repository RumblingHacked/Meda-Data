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
var auth_service_1 = require("./auth/auth.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(fb, authService, router) {
        var _this = this;
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        //emitting the email string object to the navbar component
        this.navEmail = new core_1.EventEmitter();
        this.isAuthenticated = false;
        this.subscription = this.authService.isAuthenticated().subscribe(function (authStatus) { return _this.isAuthenticated = authStatus; });
    }
    LoginComponent.prototype.onSignin = function (emails) {
        //  alert(emails.value)
        //  alert(this.myForm.get('email').value)
        //  alert(JSON.stringify(this.myForm.value))
        this.authService.signinUser(this.myForm.value);
        if (this.isAuthenticated) {
            alert("Login Successful!");
            this.router.navigate(['customer']);
        }
        else {
            alert("Credentials Incorrect!");
            //  this.reset();
        }
    };
    LoginComponent.prototype.onAddEmail = function (emails) {
        console.log(emails.value);
        this.navEmail.emit({
            username: emails.value
        });
    };
    LoginComponent.prototype.isAuth = function () {
        return this.isAuthenticated;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
    };
    LoginComponent.prototype.forgotPassword = function (user) {
        alert("Password Reset Successful!");
        this.authService.forgotPassword(this.myForm.value);
    };
    LoginComponent.prototype.reset = function () {
        this.myForm.reset();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return LoginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormGroup)
], LoginComponent.prototype, "myForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "navEmail", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css']
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [forms_1.FormBuilder, auth_service_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map