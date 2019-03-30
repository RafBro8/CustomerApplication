import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import {MainRoutes} from '../Routing/CustomerApp.MainRouting';
import {BaseLogger, ConsoleLogger, DbLogger} from '../Utility/CustomerApp.Logger';

@NgModule({
  declarations: [
    HomeComponent, MasterPageComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: BaseLogger,
    useClass: ConsoleLogger
  },
    { provide: '1', useClass: DbLogger },
    { provide: '2', useClass: ConsoleLogger }],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
