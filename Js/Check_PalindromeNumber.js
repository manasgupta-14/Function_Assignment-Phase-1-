function myFun(num) {
    let original = num;
    let temp = num;
    let rev = 0;

    while (original > 0) {
        let digit = original % 10;
        rev = rev * 10 + digit;
        original = parseInt(original / 10);
    }

    if (rev === num) {
        console.log("Palindrome Number", rev);
    } else {
        console.log("Not Palindrome Number", rev);
    }
}
myFun(121);