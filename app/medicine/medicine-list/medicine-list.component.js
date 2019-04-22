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
var medicine_service_1 = require("../service/medicine.service");
var MedicineListComponent = (function () {
    function MedicineListComponent(medicineService) {
        this.medicineService = medicineService;
        this.medicines = [];
    }
    MedicineListComponent.prototype.ngOnInit = function () {
        this.getAddedMedicine();
        this.getUpdatedMedicine();
        this.getDeletedMedicine();
    };
    MedicineListComponent.prototype.getAddedMedicine = function () {
        var _this = this;
        this.medicineService.getAddedMedicine()
            .subscribe(function (medicine) {
            _this.medicines.push(medicine);
        }, function (err) {
            console.error("Unable to get added Medicine - ", err);
        });
    };
    MedicineListComponent.prototype.getUpdatedMedicine = function () {
        var _this = this;
        this.medicineService.changedListener()
            .subscribe(function (updatedMedicine) {
            var medicineIndex = _this.medicines.map(function (index) { return index.id; }).indexOf(updatedMedicine['id']);
            _this.medicines[medicineIndex] = updatedMedicine;
        }, function (err) {
            console.error("Unable to get updated Medicine - ", err);
        });
    };
    MedicineListComponent.prototype.getDeletedMedicine = function () {
        var _this = this;
        this.medicineService.deleteListener()
            .subscribe(function (deletedMedicine) {
            var delIndex = _this.medicines.map(function (index) { return index.id; }).indexOf(deletedMedicine['id']);
            _this.medicines.splice(delIndex, 1);
        }, function (err) {
            console.error("Unable to delet Medicine - ", err);
        });
    };
    return MedicineListComponent;
}());
MedicineListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'medicine-list',
        templateUrl: 'medicine-list.component.html',
        styleUrls: ['medicine-list.component.css']
    }),
    __metadata("design:paramtypes", [medicine_service_1.MedicineService])
], MedicineListComponent);
exports.MedicineListComponent = MedicineListComponent;
//# sourceMappingURL=medicine-list.component.js.map