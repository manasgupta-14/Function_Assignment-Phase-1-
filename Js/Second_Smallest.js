let X = 30;
let Y = 20;
let Z = 10;

function findSndSmallest(X, Y, Z) {
    if ((X > Y && X < Z) || (X > Z && X < Y)) {
        return X;
    }
    else if ((Y > X && Y < Z) || (Y > Z && Y < X)) {
        return Y;
    }
    else {
        return Z;
    }
}

let small = findSndSmallest(X, Y, Z);
console.log("Second Smallest Number is " + small);