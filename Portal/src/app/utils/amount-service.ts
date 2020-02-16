export class AmountService {

    private credited: number = 0; 
    private debited: number = 0; 
    private lended: number = 0; 
    private debted: number = 0; 
    private total: number = 0;
    
    updateCreditedAmount(amount: number) {
        this.credited += amount;
        this.updateTotalAmount(amount);
        // console.log(`credit amounts to ${this.credited}`);
    }
    updateDebitedAmount(amount: number) {
        this.debited += amount;
        this.updateTotalAmount(amount);
        // console.log(`debit amounts to ${this.debited}`);
    }
    updateDebtedAmount(amount: number) {
        this.debted += amount;
        this.updateTotalAmount(amount);
        // console.log(`debt amounts to ${this.debted}`);
    }
    updateLendedAmount(amount: number) {
        this.lended += amount;
        this.updateTotalAmount(amount);
        // console.log(`lend amounts to ${this.lended}`);
    }
    private updateTotalAmount(amount: number) { 
        this.total = ( this.credited + this.lended ) - ( this.debted + this.debited );
        // console.log(`total amounts to ${this.total}`);
    }
    getTotalCreditedAmount(): number { return this.credited; }
    getTotalDebitedAmount(): number { return this.debited; }
    getTotalLendedAmount(): number { return this.lended; }
    getTotalDebtedAmount(): number { return this.debted; }
    getTotalAmount(): number { return this.total; }

}