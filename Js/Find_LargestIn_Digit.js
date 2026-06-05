let fun = (num) => {
    let original = num;
    let max = 0;
    while (original > 0) {
        let digit = original % 10;
        if (max < digit) {
            max = digit
        }
        original = parseInt(original / 10);
    }
    console.log(max);
}
fun(1223453)