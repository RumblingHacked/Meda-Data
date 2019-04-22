//Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module'
import { ReactiveFormsModule } from '@angular/forms'

//Component
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

//Service
import { CustomerService } from './service/customer.service';

@NgModule({
  imports:[ SharedModule, CustomerRoutingModule, ReactiveFormsModule ],
  declarations:[ CustomerListComponent, CustomerDetailComponent ],
  exports:[],
  providers: [ CustomerService ]
})
export class CustomerModule { }
