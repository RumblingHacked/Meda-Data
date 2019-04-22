import { Injectable } from '@angular/core';

import { Observable } from  'rxjs/Observable';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import { Medicine } from '../model/medicine';

@Injectable()
export class MedicineService{

private medicineDbRef = this.fire.database.ref('/Medicine');

constructor ( private fire: FirebaseConfigService ) {}

getAddedMedicine(): Observable<any>{
  return Observable.create(obs => {
    this.medicineDbRef.on('child_added', medicine => {
      const newMedicine = medicine.val() as Medicine;
      newMedicine.id = medicine.key;
      obs.next(newMedicine);
    },
    err => {
      obs.throw(err);
      });
    });
  }

  changedListener(): Observable<any>{
    return Observable.create(obs =>{
      this.medicineDbRef.on('child_changed', medicine => {
        const updatedMedicine = medicine.val() as Medicine;
        updatedMedicine.id = medicine.key;
        obs.next(updatedMedicine);
      },
      err => {
        obs.throw(err);
      });
    });
  }

  deleteListener(): Observable<any>{
    return Observable.create(obs =>{
      this.medicineDbRef.on('child_removed', medicine =>{
        const deletedMedicine = medicine.val() as Medicine;
        deletedMedicine.id = medicine.key;
        obs.next(deletedMedicine);
      },
      err => {
        obs.throw(err);
      });
    });
  }

  addMedicine(medicine: Medicine){
    const newMedicineRef = this.medicineDbRef.push();
    newMedicineRef.set({
      medicineName: medicine.medicineName,
      medicineQuantity: medicine.medicineQuantity,
      medicineMg: medicine.medicineMg
    })
    .catch(err => console.error("Unable to add Medicine to firebase - ", err));
  }

updateMedicine(medicine: Medicine){
  const currentMedicineRef = this.medicineDbRef.child(medicine.id);
  medicine.id = null;
  currentMedicineRef.update(medicine);
  }

deleteMedicine(medicine: Medicine){
  const delMedicineRef = this.medicineDbRef.child(medicine.id);
  delMedicineRef.remove();
  }
}
