export class Account {

    constructor(
        private title: string, 
        private amount: number, 
        private netAmount: number, 
        private type: string, //credit, debit, lend, debt
        private date: Date, 
        private comment: string
    ) {}
    updateTitle(title: string) { this.title = title; }
    updateAmount(amount: number) { this.amount = amount; }
    updateNetAmount(netAmount: number) { this.netAmount = netAmount;}
    updateType(type: string) { this.type = type; }
    updateDate(date: Date) { this.date = date; }
    updateComment(comment: string) { this.comment = comment; }
    getTitle(): string { return this.title; }
    getAmount(): number { return this.amount; }
    getNetAmount(): number { return this.netAmount; }
    getType(): string { return this.type; }
    getDate(): Date { return this.date; }
    getComment(): string { return this.comment; }

}