import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditComponent } from './credit/credit.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DebitComponent } from './debit/debit.component';
import { TotalComponent } from './total/total.component';
import { LendedComponent } from './lended/lended.component';
import { DebtComponent } from './debt/debt.component';
import { AccountUtils } from './utils/accountability-utils';

@NgModule({
  declarations: [
    AppComponent,
    CreditComponent,
    DataEntryComponent,
    DebitComponent,
    TotalComponent,
    LendedComponent,
    DebtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AccountUtils],
  bootstrap: [AppComponent]
})
export class AppModule { }
