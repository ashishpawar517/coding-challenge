import { Account } from '../types/account';

export class AccountingCalculator {
    private data: Account[];

    constructor(data: Account[]) {
        this.data = data;
    }

}
