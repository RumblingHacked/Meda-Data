import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerListComponent} from './customer-list/customer-list.component';
import { AuthGuard} from '../login/auth/auth.guard';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'customer', component: CustomerListComponent, canActivate: [AuthGuard] },
  //  { path: '**', redirectTo: 'customer' }
  ])
],
  exports: [ RouterModule ]
})
export class CustomerRoutingModule{}
