import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { MedicineService } from '../service/medicine.service';

import { Medicine } from '../model/medicine';

@Component({
  moduleId: module.id,
  selector: 'medicine-detail',
  templateUrl: 'medicine-detail.component.html',
  styleUrls:[ 'medicine-detail.component.css' ]
})
export class MedicineDetailComponent implements OnInit {
  private modalId = "medicineModal";
  private medicineForm: FormGroup;
  private currentMedicine = new Medicine(null, null, null, null);

  constructor(private formB: FormBuilder, private medicineService: MedicineService){}

  ngOnInit(){
    this.configureForm();
  }

  configureForm(medicine?: Medicine){

    if(medicine){
      this.currentMedicine = new Medicine(
        medicine.id,
        medicine.medicineName,
        medicine.medicineQuantity,
        medicine.medicineMg
      );
    }

    this.medicineForm = new FormGroup({
      medicineName: new FormControl(this.currentMedicine.medicineName, Validators.required),
      medicineQuantity: new FormControl(this.currentMedicine.medicineQuantity, Validators.required),
      medicineMg: new FormControl(this.currentMedicine.medicineMg, Validators.required)
    });
  }

  submitForm(){
    this.currentMedicine.medicineName = this.medicineForm.value["medicineName"];
    this.currentMedicine.medicineQuantity = this.medicineForm.value["medicineQuantity"];
    this.currentMedicine.medicineMg = this.medicineForm.value["medicineMg"];
    if (this.currentMedicine.id){
      this.updateMedicine();
    }else{
      this.addMedicine();
    }
  }

  addMedicine(){
    this.medicineService.addMedicine(this.currentMedicine);
  }

  updateMedicine(){
    this.medicineService.updateMedicine(this.currentMedicine);
  }

  deleteMedicine(){
    this.medicineService.deleteMedicine(this.currentMedicine);
  }

  freshForm(){
    this.medicineForm.reset();
    this.cleanMedicine();
  }

  cleanMedicine(){
    this.currentMedicine = new Medicine(null, null, null, null);
  }
}
