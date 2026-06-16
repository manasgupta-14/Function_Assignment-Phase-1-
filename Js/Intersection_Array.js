function interSectionArray(arr1, arr2) {
    // let res = arr1.filter((item) => {
    //    return arr2.includes(item);
    // });
    // console.log(res);

    let res=[];

    for(let i=0; i<arr1.length;i++){
        for(let j=0; j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                res.push(arr1[i]);
                break;
            }
        }
    }

    console.log(res)
}

interSectionArray([1,2,3],[3,4,1]);