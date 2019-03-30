import { Component, Injector } from '@angular/core';
import {Customer} from './CustomerApp.model';
import {BaseLogger} from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.CustomerView.component.html',
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Logobj: BaseLogger = null;
  constructor(_injector: Injector) {
    this.Logobj = _injector.get('1');
    this.Logobj.Log();
  }
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); // clear UI
  }
  hasError(typeofvalidator: string, controlname: string): boolean {
      return this.CustomerModel.
        formCustomerGroup.
        controls[controlname].
        hasError(typeofvalidator);
  }
}

