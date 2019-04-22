import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CustomerService } from '../service/customer.service';

import { Customer } from '../model/customer';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html',
  styleUrls:[ 'customer-detail.component.css' ]
})
export class CustomerDetailComponent implements OnInit {
  private modalId = "customerModal";
  private customerForm: FormGroup;
  private currentCustomer = new Customer(null, null, null, null, null, null, null, null);

  constructor(private formB: FormBuilder, private customerService: CustomerService){}

  ngOnInit(){
    this.configureForm();
  }

  configureForm(customer?: Customer){

    if(customer){
      this.currentCustomer = new Customer(
        customer.id,
        customer.firstName,
        customer.lastName,
        customer.DateOfBirth,
        customer.adress,
        customer.phoneNumber,
        customer.email,
        customer.description
      );
    }

    this.customerForm = new FormGroup({
      firstName: new FormControl(this.currentCustomer.firstName, Validators.required),
      lastName: new FormControl(this.currentCustomer.lastName, Validators.required),
      dateOfBirth: new FormControl(this.currentCustomer.DateOfBirth, Validators.required),
      homeAddress: new FormControl(this.currentCustomer.adress, Validators.required),
      phoneNumber: new FormControl(this.currentCustomer.phoneNumber),
      email: new FormControl(this.currentCustomer.email),
      description: new FormControl(this.currentCustomer.description)
    });
  }

  submitForm(){
    this.currentCustomer.firstName = this.customerForm.value["firstName"];
    this.currentCustomer.lastName = this.customerForm.value["lastName"];
    this.currentCustomer.DateOfBirth = this.customerForm.value["dateOfBirth"];
    this.currentCustomer.adress = this.customerForm.value["homeAddress"];
    this.currentCustomer.phoneNumber = this.customerForm.value["phoneNumber"];
    this.currentCustomer.email = this.customerForm.value["email"];
    this.currentCustomer.description = this.customerForm.value["description"];
    if(this.currentCustomer.id){
      this.updateCustomer();
    }else{
      this.addCustomer();
    }
  }

  addCustomer(){
    this.customerService.addCustomer(this.currentCustomer);
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.currentCustomer);
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.currentCustomer);
  }

  freshForm(){
    this.customerForm.reset();
    this.cleanCustomer();
  }

cleanCustomer(){
  this.currentCustomer = new Customer(null, null, null, null, null, null, null, null);
}

}
