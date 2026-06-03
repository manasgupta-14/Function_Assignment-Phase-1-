let A = 30;
let B = 50;
let C = 10;
let max;
function Max_out_of_three(a, b, c) {
    if (A === B && B === C) {
        return -1;
    }

    max = A;

    if (B > max) {
        max = B;
    } else if (C > max) {
        max = C;
    }

    return max;
}

let result = Max_out_of_three(A, B, C);
console.log("Largest Number Out of Three : " + result);
