function power(x,y){
    let res=1;

    // res=Math.pow(x,y);
    // console.log(res);
    
    for(let i=1;i<=y;i++){
        // res=x**y;
        res=res*x;
    }

    console.log(res);
}

power(2,5);