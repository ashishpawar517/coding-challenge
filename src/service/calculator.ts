import { Account } from '../types/account';

export class AccountingCalculator {
    private data: Account[];

    constructor(data: Account[]) {
        this.data = data;
    }
    calculateRevenue(): number {
        return this.data
            .filter(account => account.account_category === 'revenue')
            .reduce((sum, account) => sum + account.total_value, 0);
    }
}
   
