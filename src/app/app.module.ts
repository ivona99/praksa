import { TableService } from './table.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { AddressComponent } from './address/address.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AddressComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
