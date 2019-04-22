import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../service/medicine.service';
import { Medicine } from '../model/medicine';

@Component({
  moduleId: module.id,
  selector: 'medicine-list',
  templateUrl: 'medicine-list.component.html',
  styleUrls: [ 'medicine-list.component.css' ]
})
export class MedicineListComponent implements OnInit {

  private medicines: Medicine [] = [];

  constructor(private medicineService: MedicineService){ }

  ngOnInit(){
    this.getAddedMedicine();
    this.getUpdatedMedicine();
    this.getDeletedMedicine();
  }

  getAddedMedicine(){
    this.medicineService.getAddedMedicine()
      .subscribe(medicine => {
        this.medicines.push(medicine);
      },
      err => {
        console.error("Unable to get added Medicine - ", err);
      });
  }

  getUpdatedMedicine(){
    this.medicineService.changedListener()
    .subscribe(updatedMedicine => {
      const medicineIndex = this.medicines.map(index => index.id).indexOf(updatedMedicine['id']);
      this.medicines [medicineIndex] = updatedMedicine;
    },
    err => {
      console.error("Unable to get updated Medicine - ", err);
    });
  }

  getDeletedMedicine(){
    this.medicineService.deleteListener()
      .subscribe(deletedMedicine => {
        const delIndex = this.medicines.map(index => index.id).indexOf(deletedMedicine['id']);
        this.medicines.splice(delIndex, 1);
      },
      err => {
        console.error("Unable to delet Medicine - ", err);
      });
  }

}
