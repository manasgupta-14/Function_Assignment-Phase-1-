function fun(str) {
    let res = "";

    for (let char of str) {
        let code = char.charCodeAt(0);

        if (code >= 97 && code <= 122) {
            res = res + String.fromCharCode(code - 32);
        } else {
            res = res + char;
        }
    }
    return res;
}

console.log(fun("manas gupta"))