let A = 100;
let B = 10;
let C = 10;
function Triangle_Check(A, B, C) {

    if (A > 90 || B > 90 || C > 90) {
        return "obtuse";
    }
    else {
        return "acute";
    }
}

let res = Triangle_Check(A, B, C);
console.log("Triangle is " + res);