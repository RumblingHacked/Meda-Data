import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { AuthGuard} from '../login/auth/auth.guard';


@NgModule({
  imports: [RouterModule.forChild([
    // { path: '', redirectTo: 'medicine', pathMatch: 'full'},
     { path: 'medicine', component: MedicineListComponent, canActivate: [AuthGuard] },
    // { path: '**', redirectTo: 'medicine' }
  ])
],
  exports: [ RouterModule ]
})
export class MedicineRoutingModule{}
