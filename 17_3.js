class BankAccount {
    constructor(balance){
        this.balance = balance
    }
    deposit(num) {
    this.balance += num
    }
    withdraw(num) {
        if (num <= this.balance) {
            this.balance -= num 
        }
    }
    getBalance() {
        return this.balance
    }

}

const account1 = new BankAccount(1000)

console.log(account1.getBalance())

account1.deposit(500)

console.log(account1.getBalance())

account1.withdraw(200)

console.log(account1.getBalance())