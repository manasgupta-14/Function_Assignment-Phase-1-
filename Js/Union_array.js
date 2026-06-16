function unionArray(arr1,arr2){
    let res=[...new Set([...arr1,...arr2])]
    console.log(res);
}

unionArray([1,2,3,4],[4,3,6,5]);