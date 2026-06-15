let myFun = (str) => {
    let spa = " ";
    for (let i = 0; i < str.length; i++) {
        let res = str[i];
        if (res === "A" || res === "a" || res === "E" || res === "e" || res === "I" || res === "i" || res === "O" || res === "o" || res === "U" || res === "u") {
            spa = spa + "*";
        } else {
            spa = spa + res;
        }
    }

    console.log(spa);
}
myFun("Manas")