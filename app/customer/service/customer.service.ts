import { Injectable } from '@angular/core';

import { Observable } from  'rxjs/Observable';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import { Customer } from '../model/customer';

@Injectable()
export class CustomerService{

  private customerDbRef = this.fire.database.ref('/Customer');

  constructor( private fire: FirebaseConfigService ){}

    getAddedCustomers(): Observable<any>{
      return Observable.create(obs => {
          this.customerDbRef.on('child_added', customer => {
            const newCustomer = customer.val() as Customer;
            newCustomer.id = customer.key;
            obs.next(newCustomer);
          },
        err => {
    //////////
        });
      });
    }

    changedListener(): Observable<any>{
      return Observable.create(obs => {
        this.customerDbRef.on('child_changed', customer => {
          const updatedCustomer = customer.val() as Customer;
          updatedCustomer.id = customer.key;
          obs.next(updatedCustomer);
        },
        err => {
          obs.throw(err);
        });
      });
    }

    deleteListener(): Observable<any>{
      return Observable.create(obs => {
        this.customerDbRef.on('child_removed', customer => {
          const deletedCustomer = customer.val() as Customer;
          deletedCustomer.id = customer.key;
          obs.next(deletedCustomer);
        },
      err => {
        obs.throw(err);
        });
      });
    }

    addCustomer(customer: Customer){
      const newCustRef = this.customerDbRef.push();
      newCustRef.set({
        firstName: customer.firstName,
        lastName: customer.lastName,
        DateOfBirth: customer.DateOfBirth,
        adress: customer.adress,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
        description: customer.description
      })
      .catch(err => console.error("Unable to add customer to firebase - ", err));
    }

    updateCustomer(customer: Customer){
      const currentCustomerRef = this.customerDbRef.child(customer.id);
      customer.id = null;
      currentCustomerRef.update(customer);
    }

    deleteCustomer(customer: Customer){
      const delCustRef = this.customerDbRef.child(customer.id);
      delCustRef.remove();
    }
}
