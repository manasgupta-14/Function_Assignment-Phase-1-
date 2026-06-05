let arr = [10, 20, 30];

function sum(array) {
    let sumofNum = 0;

    for (let item of array) {
        sumofNum = sumofNum + item
    }
    console.log(sumofNum);
}

sum(arr);