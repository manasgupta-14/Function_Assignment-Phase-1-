let fun = () => {
    return function (arr) {
        arr.sort((a, b) => a - b)
        console.log(arr[0]);
    }
}

let result = fun();
result([10, 30, 9, 20])