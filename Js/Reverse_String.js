let str="Manas";
let res="";

for(let i=str.length-1;i>=0;i--){
    res=res+str[i];
}

console.log(res);

let rev=str.split("").reverse("").join("");
console.log(rev);