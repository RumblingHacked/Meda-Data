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
var medicine_service_1 = require("../service/medicine.service");
var medicine_1 = require("../model/medicine");
var MedicineDetailComponent = (function () {
    function MedicineDetailComponent(formB, medicineService) {
        this.formB = formB;
        this.medicineService = medicineService;
        this.modalId = "medicineModal";
        this.currentMedicine = new medicine_1.Medicine(null, null, null, null);
    }
    MedicineDetailComponent.prototype.ngOnInit = function () {
        this.configureForm();
    };
    MedicineDetailComponent.prototype.configureForm = function (medicine) {
        if (medicine) {
            this.currentMedicine = new medicine_1.Medicine(medicine.id, medicine.medicineName, medicine.medicineQuantity, medicine.medicineMg);
        }
        this.medicineForm = new forms_1.FormGroup({
            medicineName: new forms_1.FormControl(this.currentMedicine.medicineName, forms_1.Validators.required),
            medicineQuantity: new forms_1.FormControl(this.currentMedicine.medicineQuantity, forms_1.Validators.required),
            medicineMg: new forms_1.FormControl(this.currentMedicine.medicineMg, forms_1.Validators.required)
        });
    };
    MedicineDetailComponent.prototype.submitForm = function () {
        this.currentMedicine.medicineName = this.medicineForm.value["medicineName"];
        this.currentMedicine.medicineQuantity = this.medicineForm.value["medicineQuantity"];
        this.currentMedicine.medicineMg = this.medicineForm.value["medicineMg"];
        if (this.currentMedicine.id) {
            this.updateMedicine();
        }
        else {
            this.addMedicine();
        }
    };
    MedicineDetailComponent.prototype.addMedicine = function () {
        this.medicineService.addMedicine(this.currentMedicine);
    };
    MedicineDetailComponent.prototype.updateMedicine = function () {
        this.medicineService.updateMedicine(this.currentMedicine);
    };
    MedicineDetailComponent.prototype.deleteMedicine = function () {
        this.medicineService.deleteMedicine(this.currentMedicine);
    };
    MedicineDetailComponent.prototype.freshForm = function () {
        this.medicineForm.reset();
        this.cleanMedicine();
    };
    MedicineDetailComponent.prototype.cleanMedicine = function () {
        this.currentMedicine = new medicine_1.Medicine(null, null, null, null);
    };
    return MedicineDetailComponent;
}());
MedicineDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'medicine-detail',
        templateUrl: 'medicine-detail.component.html',
        styleUrls: ['medicine-detail.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, medicine_service_1.MedicineService])
], MedicineDetailComponent);
exports.MedicineDetailComponent = MedicineDetailComponent;
//# sourceMappingURL=medicine-detail.component.js.map