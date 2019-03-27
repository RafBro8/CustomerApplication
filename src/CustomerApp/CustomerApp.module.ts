import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { CustomerAppRoutingModule } from './CustomerApp-routing.module';
import { CustomerComponent } from './CustomerApp.component';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomerAppRoutingModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerAppModule { }
