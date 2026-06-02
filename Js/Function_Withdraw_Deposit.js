function bank(currentBalance) {
    console.log(currentBalance);
    let balance = currentBalance;

    return {
        deposit(amount) {
            console.log("Deposit Balance is ", amount);
            balance = balance + amount;
            console.log("Current Balance is ", balance);
        },
        withDraw(amount) {
            if (amount < 0) {
                console.log("Not Enough Money");
            } else {
                console.log("WithDraw Balance is ", amount);
                balance = balance - amount;
                console.log("Current Balance is ", balance);
            }
        }
    }
}
let account = bank(1000);

account.deposit(200);
account.withDraw(100);