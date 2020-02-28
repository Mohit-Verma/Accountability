import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from '../utils/account-service';
import { Account } from '../utils/account-utils';

@Component({
  selector: 'app-forms-entry',
  templateUrl: './forms-entry.component.html',
  styleUrls: ['./forms-entry.component.css']
})
export class FormsEntryComponent implements OnInit, OnDestroy {

  @ViewChild('formData') formData: NgForm;
  @ViewChild('formHTML') formElement: ElementRef;
  transactionType: Array<{type: string, color: string, enable: boolean}> = [
    {type: 'credit', color: 'green', enable: true},
    {type: 'debit', color: 'lightsalmon', enable: true},
    {type: 'lend', color: 'blue', enable: true},
    {type: 'debt', color: 'red', enable: true}
  ];
  private subscription: Subscription;
  private trxType: string;

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let type = '';
    setTimeout(() => {
      this.subscription = this.route.queryParams.subscribe(params => {
        this.setType(params['type']);
      });
      // console.log(this.formData);
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  submitData(data: FormInterface) {
    let titleValue = data.title.trim();
    let amountValue = data.amount;
    let dateValue = new Date(data.date.split('T').join(' '));
    let commentValue = data.comment.trim();
    let transactionType = (data.type == undefined)? this.trxType: data.type;
    if(titleValue == ''){
      alert('Please enter the Name');
      return;
    }
    let account = new Account(titleValue, amountValue, 0, transactionType, dateValue, commentValue );
    this.accountService.updateAccountData(account);
  }
  private setType(data: string) {
    if(['credit', 'debit', 'lend', 'debt'].indexOf(data) != -1){
      this.transactionType.forEach((elem)=>{
        if(elem.type != data)
          elem.enable = false;
      });
      this.formData.form.patchValue({
        type: data
      });
      this.trxType = data;
    }
  }
  clearForm() {
    this.formData.reset();
  }
}

export interface FormInterface {
  title: string,
  amount: number,
  date: string,
  comment?: string,
  type: string
}