import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: [ 'customer-list.component.css' ]
})
export class CustomerListComponent implements OnInit {

  private customers: Customer[] = [];

  constructor(private customerService: CustomerService ){ }

  ngOnInit(){
    this.getAddedCustomers();
    this.getUpdatedCustomers();
    this.getDeletedCustomers();
  }

    getAddedCustomers(){
      this.customerService.getAddedCustomers()
        .subscribe(customer => {
          this.customers.push(customer);
        },
        err => {
          console.error("Unable to get added customer - ", err);
        });
    }

    getUpdatedCustomers(){
      this.customerService.changedListener()
        .subscribe(updatedCustomer => {
          const customerIndex = this.customers.map(index => index.id).indexOf(updatedCustomer['id']);
          this.customers[customerIndex] = updatedCustomer;
        },
      err => {
        console.error("Unable to get updated customer -", err);
      });
    }

    getDeletedCustomers(){
      this.customerService.deleteListener()
        .subscribe(deletedCustomer => {
          const delIndex = this.customers.map(index => index.id).indexOf(deletedCustomer['id']);
          this.customers.splice(delIndex, 1);
        },
      err => {
        console.error("Unable to delete customer -", err);
      });
    }
}
