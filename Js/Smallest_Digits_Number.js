function myFun(num) {
    let original = num;
    let min = 9;

    while (original > 0) {
        let digit = original % 10;

        if (min > digit) {
            min = digit;
        }

        original = parseInt(original / 10);
    }

    console.log(min)
}
myFun(1263);