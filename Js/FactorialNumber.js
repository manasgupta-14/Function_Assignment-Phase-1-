function myFun(num) {
    let res = 1;
    for (let i = 1; i <= num; i++) {
        res = res * i;
    }
    console.log(res);
}

myFun(4);