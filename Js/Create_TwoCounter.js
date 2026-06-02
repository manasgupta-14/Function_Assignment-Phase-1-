function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}

let Counter1 = counter();
let Counter2 = counter();

console.log(Counter1());
console.log(Counter1());
console.log(Counter2());