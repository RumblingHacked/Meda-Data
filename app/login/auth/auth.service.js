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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.newPw = "";
    }
    AuthService.prototype.signinUser = function (user) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            console.log(error);
            //gives an alert when Credentials are incorrect
            alert("Login Credentials are incorrect! ");
            // ...
        });
    };
    AuthService.prototype.forgotPassword = function (user) {
        firebase.auth().sendPasswordResetEmail(user.email)
            .then(function () {
        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(error);
        });
    };
    AuthService.prototype.verifyReset = function () {
        firebase.auth().verifyResetCode('ResetPassword').catch(function (error) {
            var errorMessage = error.message;
            console.log(error);
        });
    };
    AuthService.prototype.confirmReset = function () {
        firebase.auth().confirmPasswordReset('ResetPassword', this.newPw).catch(function (error) {
            var errorMessage = error.message;
            console.log(error);
        });
    };
    AuthService.prototype.logout = function () {
        console.log("test");
        firebase.auth().signOut();
        this.router.navigate(['']);
    };
    AuthService.prototype.isAuthenticated = function () {
        var subject = new Rx_1.Subject();
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                subject.next(true);
            }
            else {
                subject.next(false);
            }
        });
        return subject.asObservable();
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map