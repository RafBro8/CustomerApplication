import {NgForm,
    FormGroup,
        FormControl,
            Validators,
    FormBuilder } from '@angular/forms';

export class Customer {
  CustomerCode: string = '';
  CustomerName: string = '';
  CustomerAmount: number = 0;
  formCustomerGroup: FormGroup = null; // Create object of FormGroup

  constructor() {
    const builder = new FormBuilder();
    this.formCustomerGroup = builder.group({});    // Use the builder to create tree structure
    // control --> validation
    // 1 control --> 1 validation
    this.formCustomerGroup.addControl('CustomerNameControl', new FormControl('', Validators.required));
    // Customer code control --> 2 validations: Required, 4 letter numeric
    const validationcollection = [];
    validationcollection.push(Validators.required);
    validationcollection.push(Validators.pattern('^[0-9]{4,4}$'));
    this.formCustomerGroup.addControl('CustomerCodeControl', new FormControl('', Validators.compose(validationcollection)));
  }
}
// next step is connect the validation model with UI
