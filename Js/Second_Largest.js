function second(arr) {
    arr.sort((a, b) => b - a)
    console.log(arr[1]);
}
second([80, 20, 50])