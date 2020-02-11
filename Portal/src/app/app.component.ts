import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private dataPrototype: {date: string, name: string, amount: number, credit: boolean, debit: boolean, debt: boolean, lend: boolean};
  title: string = 'Portal';  
  creditSheetData = [];
  debitSheetData = [];
  debtSheetData = [];
  lendedSheetData = [];
  totalSheetData = [];

  dataHandle(data: {name: string, amount: number, date: string, type: string}){
    console.log(JSON.stringify(data));
    let record = this.getFormatedRecord(data);
    if(data.type == 'credited'){
      record.credit = true;
      this.creditSheetData = [...this.creditSheetData, record];
    }else if(data.type == 'debited'){
      record.debit = true;
      this.debitSheetData = [...this.debitSheetData, record];
    }else if(data.type == 'lended'){
      record.lend = true;
      this.lendedSheetData = [...this.lendedSheetData, record];
    }else if(data.type == 'debted'){
      record.debt = true;
      this.debtSheetData = [...this.debtSheetData, record];
    }
    this.totalSheetData = [...this.totalSheetData, record];
  }
  private getFormatedRecord(data: {name: string, amount: number, date: string, type: string}):
  {date: string, name: string, amount: number, credit: boolean, debit: boolean, debt: boolean, lend: boolean} {
    return {
      date: data.date,
      name: data.name,
      amount: data.amount,
      credit: false,
      debit: false,
      debt: false,
      lend: false
    };
  } 
}