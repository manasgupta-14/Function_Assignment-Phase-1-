let fun = (arr) => {
    arr.filter((item) => item % 2 === 0)
        .forEach(element => {
            console.log("Even Number is ", element)
        });
};

fun([20, 30, 13, 11]);