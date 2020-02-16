import { Account } from './account-utils';
import { EventEmitter, Injectable } from '@angular/core';
import { AmountService } from './amount-service';

@Injectable()
export class AccountService {
    private totalAmount: Array<Account> = [];
    private totalCreditAmount: Array<Account> = [];
    private totalDebitAmount: Array<Account> = [];
    private totalDebtAmount: Array<Account> = [];
    private totalLendAmount: Array<Account> = [];

    onUpdateEvent = new EventEmitter<string>();

    constructor(private amountService: AmountService) {}

    updateAccountData(account: Account) {
        switch(account.getType()){
            case 'credit': {
                this.totalCreditAmount.push(account);
                this.amountService.updateCreditedAmount(account.getAmount());
            } break;
            case 'debit': {
                this.totalDebitAmount.push(account);
                this.amountService.updateDebitedAmount(account.getAmount());
            } break;
            case 'debt': {
                this.totalDebtAmount.push(account);
                this.amountService.updateDebtedAmount(account.getAmount());
            } break;
            case 'lend': {
                this.totalLendAmount.push(account);
                this.amountService.updateLendedAmount(account.getAmount());
            } break;
            default: break;                    
        }
        // console.log(`Data recieved for updation: ${JSON.stringify(account)}`);
        this.totalAmount.push(account);
        account.updateNetAmount(this.amountService.getTotalAmount());
        this.onUpdateEvent.emit(account.getType());
        // console.log('Successfully emitted the data');
    }
    getTotalAmountData(): Array<Account> {return [...this.totalAmount];}
    getCreditAmountData(): Array<Account> {return [...this.totalCreditAmount];}
    getDebitAmountData(): Array<Account> {return [...this.totalDebitAmount];}
    getDebtAmountData(): Array<Account> {return [...this.totalDebtAmount];}
    getLendAmountData(): Array<Account> {return [...this.totalLendAmount];}
}