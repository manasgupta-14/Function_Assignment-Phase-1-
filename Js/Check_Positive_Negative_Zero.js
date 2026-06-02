function checkNum(callback) {
    callback(5);
}

function result(a) {
    if (a > 0) {
        console.log("Number is Positive");
    } else if (a === 0) {
        console.log("Number is Zero");
    } else {
        console.log("Number is Negative");
    }
}

checkNum(result);