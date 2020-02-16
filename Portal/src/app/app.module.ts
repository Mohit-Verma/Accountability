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
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TotalComponent},
  {path: 'dashboard/total', component: TotalComponent},
  {path: 'dashboard/credit', component: CreditComponent},
  {path: 'dashboard/debit', component: DebitComponent},
  {path: 'dashboard/lend', component: LendedComponent},
  {path: 'dashboard/debt', component: DebtComponent},
  {path: 'addTransaction', component: DataEntryComponent},
];

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
    RouterModule.forRoot(routes)
  ],
  providers: [AmountService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
