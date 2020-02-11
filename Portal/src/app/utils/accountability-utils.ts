import { EventEmitter } from '@angular/core';

export class AccountUtils {

    getTotalAmount(accountData: []): {credited: number, debited: number, lended: number, debted: number, total: number} {
        var amountData: {credited: number, debited: number, lended: number, debted: number, total: number} = {
            credited: 0,
            debited: 0,
            lended: 0,
            debted: 0,
            total: 0
        };
        if(accountData != undefined){
            accountData.forEach((elem: {date: string, name: string, amount: number, credit: boolean, debit: boolean, debt: boolean, lend: boolean}) => {
                if(elem.credit){
                    amountData.credited += elem.amount;
                } else if(elem.debit){
                    amountData.debited += elem.amount;
                } else if(elem.lend){
                    amountData.lended += elem.amount;
                } else if(elem.debt){
                    amountData.debted += elem.amount;
                } 
            });
            amountData.total = amountData.credited + amountData.lended - amountData.debited - amountData.debted;
        }
        return amountData;
    }

    getTotal(data: []): number {
        var sum = 0;
        if(data != undefined){
            data.forEach((elem: {date: string, name: string, amount: number, credit: boolean, debit: boolean, debt: boolean, lend: boolean}) => {
                sum += elem.amount;
            });
        }
        return sum;
    }

}