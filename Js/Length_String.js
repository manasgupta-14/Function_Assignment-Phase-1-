function lengthStr(str) {
    let count = 0;

    for (let char of str) {
        count++
    }

    return count;
}

let lengthString = lengthStr("Manas-Gupta");
console.log(lengthString);