let C = "p";

function getValue(C) {
    if (C === "P" || C === "p") {
        console.log("PrepBytes");
    } else if (C === "Z" || C === "z") {
        console.log("Zenith");
    } else if (C === "E" || C === "e") {
        console.log("Exper Coder");
    } else if (C === "D" || C === "d") {
        console.log("Data Structure");
    }
}

let result = getValue(C);
