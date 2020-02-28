import { Component } from '@angular/core';
import { Account } from '../utils/account-utils';
import { AccountService } from '../utils/account-service';
import { Router } from '@angular/router';
import { AmountService } from '../utils/amount-service';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent {

  title: string = 'Debted Balance';
  data: Array<Account> = [];
  total: number;

  constructor(
    private accountService: AccountService,
    private amountService: AmountService,
    private router: Router
  ) {
    this.data = accountService.getDebtAmountData();
    this.total = amountService.getTotalDebtedAmount();
    this.accountService.onUpdateEvent.subscribe((type: string) => {
      if(type === 'debt'){
        // console.log(`data updated with value: ${JSON.stringify(this.accountService.getCreditAmountData())}`);
        this.data = this.accountService.getCreditAmountData();
      }
    });
  }
  addTransaction(){
    this.router.navigate(['/transaction'], {
      queryParams: {
        type: 'debt'
      }
    });
  }

}