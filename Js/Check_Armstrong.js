function checkArmstrong(num) {
    let original = num;
    let sum = 0;

    while(num>0){
        let digit = num % 10;
        sum = sum + digit * digit * digit;
        num = parseInt(num / 10);
    }

    if (original === sum) {
        console.log("This Number is Armstrong Number " + original);
    } else {
        console.log("This is not Armstrong Number " + sum);
    }
}

checkArmstrong(153);