function meregeTwoArray(arr1, arr2) {

    // let res=[];

    // for(let i=0;i<arr1.length;i++){
    //     res.push(arr1[i])
    // }

    // for(let j=0;j<arr2.length;j++){
    //     res.push(arr2[j]);
    // }

    // console.log(res);

    let res = [];
    res = arr1.concat(arr2);
    console.log(res)
}

meregeTwoArray([1, 2, 3], [4, 5, 6])