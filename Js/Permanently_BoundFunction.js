
let bindFn = {
    name: "Manas",
    greet() {
        console.log("Hello", this.name);
    }
}

let bound = bindFn.greet.bind(bindFn);
bound();

const another = bound;
another();