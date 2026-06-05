let fun = (() => {
    return function (arr) {
        arr.map(item => { console.log(item) })
    }
})
let res = fun();
res([20, 90, 10]);