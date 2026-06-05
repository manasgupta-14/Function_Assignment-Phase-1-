function maximumNum(arr) {
    let max = 0;
    arr.forEach(element => {
        if (max < element) {
            max = element
        }
    });
    console.log(max);
}

maximumNum([10, 90, 50, 40]);