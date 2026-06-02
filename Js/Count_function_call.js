function callCount() {
    let count = 0;

    return function () {
        count++;
        console.log("Function Call ", count, "Time");
    }
}

let myCount = callCount()
myCount();
myCount();
myCount();