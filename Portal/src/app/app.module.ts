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
import { AmountService } from './utils/amount-service';
import { AccountService } from './utils/account-service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsEntryComponent } from './forms-entry/forms-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditComponent,
    DataEntryComponent,
    DebitComponent,
    TotalComponent,
    LendedComponent,
    DebtComponent,
    PageNotFoundComponent,
    FormsEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AmountService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
