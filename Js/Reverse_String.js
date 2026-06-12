let myFun = (str) => {
    let newStr = str;
    let res = "";

    for (let i = newStr.length - 1; i >= 0; i--) {
        res = res + newStr[i];
    }

    console.log(res);

    let rev = str.split("").reverse("").join("");
    console.log(rev);
}

let res = myFun("Manas");
