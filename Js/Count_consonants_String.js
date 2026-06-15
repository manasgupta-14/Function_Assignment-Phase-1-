let countConsonants = (str) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let res = str[i]
        if (res === "A" || res === "a" || res === "E" || res === "e" || res === "I" || res === "i" || res === "O" || res === "o" || res === "U" || res === "u") {
            console.log("vowel", res);
        } else {
            count++;
            console.log("Consonants ", res);
        }
    }
    console.log("Total Consonants =", count);
}

countConsonants("ABCDEF")