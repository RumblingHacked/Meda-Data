//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MedicineRoutingModule } from './medicine-routing.module'
import { ReactiveFormsModule } from '@angular/forms'

//Component
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineDetailComponent } from './medicine-detail/medicine-detail.component';

//Service
import { MedicineService } from './service/medicine.service';

@NgModule({
  imports:[ SharedModule, MedicineRoutingModule, ReactiveFormsModule ],
  declarations:[ MedicineListComponent, MedicineDetailComponent ],
  exports:[],
  providers: [ MedicineService ]
})
export class MedicineModule { }
