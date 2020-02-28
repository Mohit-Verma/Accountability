import { Component } from '@angular/core';
import { AccountService } from '../utils/account-service';
import { Account } from "../utils/account-utils";
import { Router } from '@angular/router';
import { AmountService } from '../utils/amount-service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {

  title: string = 'Credited Balance';
  data: Array<Account> = [];
  total: number;

  constructor(
    private accountService: AccountService,
    private amountService: AmountService,
    private router: Router
  ) {
    this.data = accountService.getCreditAmountData();
    this.total = amountService.getTotalCreditedAmount();
    this.accountService.onUpdateEvent.subscribe((type: string) => {
      if(type === 'credit'){
        // console.log(`data updated with value: ${JSON.stringify(this.accountService.getCreditAmountData())}`);
        this.data = this.accountService.getCreditAmountData();
      }
    });
  }
  addTransaction(){
    this.router.navigate(['/transaction'], {
      queryParams: {
        type: 'credit'
      }
    });
  }

}