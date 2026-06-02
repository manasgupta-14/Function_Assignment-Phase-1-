function onlyOne(fn) {
    let data = false;
    return function () {
        if (data === false) {
            console.log("Hello", fn);
            data = true;
        }
    }
}

let greet = onlyOne("Manas");

greet();
greet();
greet();