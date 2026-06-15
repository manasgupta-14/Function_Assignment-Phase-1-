function checkPerfect(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum = sum + i;
        }
    }
    if (sum === num) {
        console.log("Perfect Number is " + sum);
    } else {
        console.log("Not Perfect Number is " + sum)
    }
}

checkPerfect(6);
checkPerfect(28);
checkPerfect(12);