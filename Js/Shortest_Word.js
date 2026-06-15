let fun=(str)=>{
    let words=str.split(" ");
    let short=words[0];

    for(let i=1;i<words.length;i++){
        if(words[i].length<short.length){
            short=words[i];   
        }
    }
    console.log(short)
}
fun("I'll go Delhi");