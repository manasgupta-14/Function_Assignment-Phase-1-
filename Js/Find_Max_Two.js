function checkNum(num, callback) {
    callback(num);
}

checkNum(10, (a) => {
    if (a > 0) {
        console.log("Positive Number");
    } else if (a === 0) {
        console.log("Zero");
    } else {
        console.log("Negative Number");
    }
});