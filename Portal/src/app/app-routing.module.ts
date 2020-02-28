import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalComponent } from './total/total.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { LendedComponent } from './lended/lended.component';
import { DebtComponent } from './debt/debt.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsEntryComponent } from './forms-entry/forms-entry.component';

const routes: Routes = [
  {path: '', component: TotalComponent},
  {path: 'dashboard/total', component: TotalComponent},
  {path: 'dashboard/credit', component: CreditComponent},
  {path: 'dashboard/debit', component: DebitComponent},
  {path: 'dashboard/lend', component: LendedComponent},
  {path: 'dashboard/debt', component: DebtComponent},
  {path: 'addTransaction', component: DataEntryComponent},
  {path: 'transaction', component: FormsEntryComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}