function myFun(num) {
    let number = num;
    let rev = 0;

    while (number > 0) {
        let digit = number % 10;
        rev = rev * 10 + digit;
        number = parseInt(number / 10);
    }

    console.log(rev);
}

myFun(123);