function findMissing(arr) {
    let n = arr.length + 1;

    let xor1 = 0;
    let xor2 = 0;

    for (let i = 1; i <= n; i++) {
        xor1 ^= i;
    }

    for (let i = 0; i < arr.length; i++) {
        xor2 ^= arr[i];
    }

    return xor1 ^ xor2;
}

console.log(findMissing([1, 2, 3, 5]));