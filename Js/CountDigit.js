let myFun = (num) => {
    let count = 0;
    let number = num;
    while (number) {
        let digit = number % 10;
        count++;
        number = parseInt(number / 10);
    }
    console.log(count);
}
myFun(12345);