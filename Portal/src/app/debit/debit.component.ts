import { Component } from '@angular/core';
import { AccountService } from '../utils/account-service';
import { Account } from '../utils/account-utils';
import { Router } from '@angular/router';
import { AmountService } from '../utils/amount-service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent {

  title: string = 'Debited Balance';
  data: Array<Account> = [];
  total: number;

  constructor(
    private accountService: AccountService,
    private amountService: AmountService,
    private router: Router
  ) {
    this.data = accountService.getDebitAmountData();
    this.total = amountService.getTotalDebitedAmount();
    this.accountService.onUpdateEvent.subscribe((type: string) => {
      if(type === 'debit'){
        // console.log(`data updated with value: ${JSON.stringify(this.accountService.getCreditAmountData())}`);
        this.data = this.accountService.getCreditAmountData();
      }
    });
  }
  addTransaction(){
    this.router.navigate(['/transaction'], {
      queryParams: {
        type: 'debit'
      }
    });
  }

}