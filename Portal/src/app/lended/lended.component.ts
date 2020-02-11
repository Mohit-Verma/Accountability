import { Component, Input } from '@angular/core';
import { AccountUtils } from '../utils/accountability-utils';

@Component({
  selector: 'app-lended',
  templateUrl: './lended.component.html',
  styleUrls: ['./lended.component.css']
})
export class LendedComponent {
  title: string = 'Amount Lended Balance';
  _data: any;
  
  @Input()
  get data(){
    return this._data;
  }
  set data(data){
    this._data = data;
    this.update();
  }
  
  total: number = 0;

  constructor(private accUtils: AccountUtils) {}
  
  private update(){
    this.total = this.accUtils.getTotal(this.data);
  }
}
