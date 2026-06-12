function countVowel(str) {
    let count=0;
    for (let i = 0; i<str.length; i++) {
        let res = str[i];
        count++;
        if (res === "A" || "a" || "E" || "e" || "I" || "i" || "O" || "o" || "U" || "u") {
            console.log("vowel", res);
            console.log(count);
        } else {
            console.log("Not Vowel");
        }
    }

}

countVowel("AEIOU")