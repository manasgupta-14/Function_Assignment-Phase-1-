function leftShift(arr){
    let first=arr.shift();
    arr.push(first);

    console.log(arr);
}

leftShift([1,2,3,4,5,6])