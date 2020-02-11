import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent {

  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('amount', {static: false}) amount: ElementRef;
  @ViewChild('date', {static: false}) date: ElementRef;
  @Output() transitData = new EventEmitter<{name: string, amount: number, date: string, type: string}>();

  onSubmitData(transactionType: string){
    let nameValue = this.name.nativeElement.value.toString().trim();
    let amountValue = this.amount.nativeElement.value;
    let dateValue = this.date.nativeElement.value;
    if(nameValue == ''){
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

    let data = {
      name: nameValue,
      amount: parseFloat(amountValue),
      date: dateValue,
      type: transactionType
    }
    this.transitData.emit(data);
  }
  onClear(){
    this.name.nativeElement.value = null;
    this.amount.nativeElement.value = null;
    this.date.nativeElement.value = null;
  }

}
