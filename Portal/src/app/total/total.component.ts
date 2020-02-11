import { Component, Input } from '@angular/core';
import { AccountUtils } from '../utils/accountability-utils';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  _data: any;
  @Input()
  get data() {
    return this._data;
  }
  set data(data) {
    this._data = data;
    this.update();
  }

  title: string = 'Total Amount';
  amounts: {credited: number, debited: number, lended: number, debted: number, total: number};
  total: number;
  creditAmount: number;
  debitedAmount: number;
  lendedAmount: number;
  debtedAmount: number;
  
  constructor(private accUtils: AccountUtils) {}
  
  private update() {    
    this.amounts = this.accUtils.getTotalAmount(this.data);
    this.total = this.amounts.total;
    this.creditAmount = this.amounts.credited;
    this.debitedAmount = this.amounts.debited;
    this.lendedAmount = this.amounts.lended;
    this.debtedAmount = this.amounts.debted;
  }
}