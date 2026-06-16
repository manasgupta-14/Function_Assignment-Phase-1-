function rightShiftArray(arr){
    let last=arr.pop();
    arr.unshift(last);
    console.log(arr);
}

rightShiftArray([1,2,3,4,5]);