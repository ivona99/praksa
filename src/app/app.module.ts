import { ClosableWellComponent } from './collapsible-well.component';
import { TableService } from './table.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { AddressComponent } from './address/address.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { MultiSlotComponent } from './multi-slot.component';
import { TitleCasePipe } from './title-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AddressComponent,
    ChildComponent,
    HomeComponent,
    ClosableWellComponent,
    MultiSlotComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
