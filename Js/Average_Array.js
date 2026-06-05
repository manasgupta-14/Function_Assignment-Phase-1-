function average(arr) {
    let sum = 0
    let average1 = 0
    let arrLength = arr.length;
    arr.forEach(element => {
        sum = sum + element;
        average1 = sum / arrLength
    })
    console.log(average1);
}
average([20, 30, 10]);