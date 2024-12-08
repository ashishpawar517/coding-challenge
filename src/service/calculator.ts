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
    calculateExpenses(): number {
        return this.data
            .filter(account => account.account_category === 'expense')
            .reduce((sum, account) => sum + account.total_value, 0);
    }
    calculateGrossProfitMargin(): number {
        const salesValue = this.data
            .filter(account => 
                account.account_type === 'sales' && 
                account.value_type === 'debit'
            )
            .reduce((sum, account) => sum + account.total_value, 0);
        
        const revenue = this.calculateRevenue();
        return revenue !== 0 ? salesValue / revenue : 0;
    }


    calculateNetProfitMargin(): number {
        const revenue = this.calculateRevenue();
        const expenses = this.calculateExpenses();
        return revenue !== 0 ? (revenue - expenses) / revenue : 0;
    }
}
   
