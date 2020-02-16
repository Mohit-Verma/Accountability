import { Component } from '@angular/core';
import { AccountService } from '../utils/account-service';
import { Account } from '../utils/account-utils';
import { Router } from '@angular/router';
import { AmountService } from '../utils/amount-service';

@Component({
  selector: 'app-lended',
  templateUrl: './lended.component.html',
  styleUrls: ['./lended.component.css']
})
export class LendedComponent {

  title: string = 'Lended Balance';
  data: Array<Account> = [];
  total: number;

  constructor(
    private accountService: AccountService,
    private amountService: AmountService,
    private router: Router
  ) {
    this.data = accountService.getLendAmountData();
    this.total = amountService.getTotalLendedAmount();
    this.accountService.onUpdateEvent.subscribe((type: string) => {
      if(type === 'lend'){
        // console.log(`data updated with value: ${JSON.stringify(this.accountService.getCreditAmountData())}`);
        this.data = this.accountService.getCreditAmountData();
        this.total = amountService.getTotalLendedAmount();
      }
    });
  }
  addTransaction(){
    this.router.navigate(['/addTransaction'], {
      queryParams: {
        type: 'lend'
      }
    });
  }

}