function stringsCount(str) {
    let charCount = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            charCount[char] = ++charCount[char] || 1;
        }
    }
    return charCount;
}

console.log(stringsCount("Hello"));