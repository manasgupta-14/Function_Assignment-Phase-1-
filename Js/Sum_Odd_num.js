let myfun=(num)=>{
    let sum=0;

    for(let i=1;i<=num;i++){
        if(i%2!==0){
            sum=sum+i;
        }
    }
    console.log("Sum of Odd Number is "+sum);
}

myfun(5);