console.log(
    (function (str) {
        let res = ""

        for (let a of str) {
            let code = a.charCodeAt(0);

            if (code >= 65 && code <= 90) {
                res = res + String.fromCharCode(code + 32)
            } else {
                res = res + a;
            }
        }

        return res
    })("MANAS")
);