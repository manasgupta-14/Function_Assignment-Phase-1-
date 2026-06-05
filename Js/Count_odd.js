(function (arr) {
    arr.map(item => {
        if (item % 2 !== 0) {
            console.log("Odd Number is ", item)
        }
    })
})([20, 12, 19, 3, 9]);