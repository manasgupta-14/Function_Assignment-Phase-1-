function fun(arr) {
    console.log("Original Array ", arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                for (let k = j; k < arr.length - 1; k++) {
                    arr[k] = arr[k + 1]
                }
                arr.length--;
                j--
            }
        }
    }
    console.log(arr.sort((a, b) => a - b))
}
fun([10, 10, 20, 20, 40, 30, 30]);

//   let arr = [10, 20, 10, 30, 20, 40];

//   let result = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });

//   console.log(result);