function checkNum(num1,num2, callback) {
    callback(num1,num2);
}

checkNum(100,30, (a,b) => {
    if (a > b) {
        console.log("Number 1 is Greater than Number 2");
    } else if (a< b) {
        console.log("Number 2 is Greater than Number 1");
    } else {
        console.log("Numbers are equal");
    }
});