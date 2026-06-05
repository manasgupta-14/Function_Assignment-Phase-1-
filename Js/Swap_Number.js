let myFun = function (a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log("A number is ", a);
    console.log("Second Number is ", b)
}

myFun(20, 10)