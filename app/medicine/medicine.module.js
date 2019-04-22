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
var medicine_routing_module_1 = require("./medicine-routing.module");
var forms_1 = require("@angular/forms");
//Component
var medicine_list_component_1 = require("./medicine-list/medicine-list.component");
var medicine_detail_component_1 = require("./medicine-detail/medicine-detail.component");
//Service
var medicine_service_1 = require("./service/medicine.service");
var MedicineModule = (function () {
    function MedicineModule() {
    }
    return MedicineModule;
}());
MedicineModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, medicine_routing_module_1.MedicineRoutingModule, forms_1.ReactiveFormsModule],
        declarations: [medicine_list_component_1.MedicineListComponent, medicine_detail_component_1.MedicineDetailComponent],
        exports: [],
        providers: [medicine_service_1.MedicineService]
    })
], MedicineModule);
exports.MedicineModule = MedicineModule;
//# sourceMappingURL=medicine.module.js.map