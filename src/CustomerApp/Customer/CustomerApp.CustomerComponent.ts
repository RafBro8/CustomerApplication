import { Component, Injector } from '@angular/core';
import {Customer} from './CustomerApp.model';
import {BaseLogger} from '../Utility/CustomerApp.Logger';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './CustomerApp.CustomerView.component.html',
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Logobj: BaseLogger = null;
  constructor(_injector: Injector, public http: HttpClient) {
    this.Logobj = _injector.get('1');
    this.Logobj.Log();
  }

  PosttoServer() {

    // lightweight DTO
    const customerDTO: any = {};
    customerDTO.CustomerCode = this.CustomerModel.CustomerCode;
    customerDTO.CustomerName = this.CustomerModel.CustomerName;
    customerDTO.CustomerAmount = this.CustomerModel.CustomerAmount;

    this.http.post('http://localhost:3000/Customers',                                                // url
      customerDTO)                                                                                      // data
      .subscribe(res => this.Success(res), res => this.Error(res));                    // how success, error are handled
  }

  GetFromServer() {

    this.http.get('http://localhost:3000/Customers')     // url
      .subscribe(res => this.Success(res), res => this.Error(res));                  // how success, error are handled
  }

  Error(res) {
    console.log(res);
  }

  Success(res) {
    this.GetFromServer();
  }

  SuccessGet(res) {
    this.CustomerModels = res;
  }
  SelectCustomer(_selected: Customer) {
    this.CustomerModel = _selected;

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

