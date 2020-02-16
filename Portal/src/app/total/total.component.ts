import { Component } from '@angular/core';
import { Account } from '../utils/account-utils';
import { AccountService } from '../utils/account-service';
import { Router } from '@angular/router';
import { AmountService } from '../utils/amount-service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  title: string = 'Total Amount';
  data: Array<Account> = [];
  total: number;

  constructor(
    private accountService: AccountService,
    private amountService: AmountService,
    private router: Router
  ) {
    this.data = this.accountService.getTotalAmountData();
    this.total = this.amountService.getTotalAmount();
    this.accountService.onUpdateEvent.subscribe((type: string) => {
      if(type != ''){
        // console.log(`data updated with value: ${JSON.stringify(this.accountService.getCreditAmountData())}`);
        this.data = this.accountService.getTotalAmountData();
        this.total = this.amountService.getTotalAmount();
      }
    });
  }
  addTransaction(){
    this.router.navigate(['/addTransaction'], {
      queryParams: {
        type: ''
      }
    });
  }
}