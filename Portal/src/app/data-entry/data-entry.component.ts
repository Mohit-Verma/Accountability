import { Component, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Account } from '../utils/account-utils';
import { AccountService } from '../utils/account-service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit, OnDestroy {
  @ViewChild('title') title: ElementRef;
  @ViewChild('amount') amount: ElementRef;
  @ViewChild('date') date: ElementRef;
  @ViewChild('comment') comment: ElementRef;

  private componentSubs: Subscription;
  action: any = {
    credit: false,
    debit: false,
    debt: false,
    lend: false
  }
  constructor(private accountService: AccountService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.componentSubs = this.route.queryParams.subscribe((params: Params) => {
      switch(params['type']) {
        case 'credit': {
          this.action.debit = true;
          this.action.debt = true;
          this.action.lend = true;
          this.action.credit = false;
          break;
        }
        case 'debit': {
          this.action.debt = true;
          this.action.lend = true;
          this.action.credit = true;
          this.action.debit = false;
          break;
        }
        case 'debt': {
          this.action.lend = true;
          this.action.credit = true;
          this.action.debit = true;
          this.action.debt = false;
          break;
        }
        case 'lend': {
          this.action.credit = true;
          this.action.debit = true;
          this.action.debt = true;
          this.action.lend = false;
          break;
        }
        default:{
          break
        }
      }
      // console.log(JSON.stringify(this.action) + " : " + params['type']);
    });
  }
  ngOnDestroy() {
    this.componentSubs.unsubscribe();

  }
  submitData(transactionType: string){
    let titleValue = this.title.nativeElement.value.toString().trim();
    let amountValue = this.amount.nativeElement.value;
    let dateValue = this.date.nativeElement.value;
    let commentValue = this.comment.nativeElement.value.toString().trim();
    if(titleValue == ''){
      alert('Please enter the Name');
      return;
    }
    else if(amountValue == ''){
      alert('Please enter the Amount');
      return;
    }
    else if(dateValue == ''){
      alert('Please enter the Date with Time');
      return;
    }
    let account = new Account(titleValue, parseInt(amountValue), 0, transactionType, dateValue, commentValue);
    this.accountService.updateAccountData(account);
  }
  clearForm() {
    this.title.nativeElement.value = null;
    this.amount.nativeElement.value = null;
    this.date.nativeElement.value = null;
    this.comment.nativeElement.value = null;
  }
}