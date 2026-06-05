let fun = ((a, b) => {
    return function () {
        return a > b ? 'Second Number is Minimum' : 'First Number is Minimum';
    }
})

let res = fun(20, 100);
console.log(res());