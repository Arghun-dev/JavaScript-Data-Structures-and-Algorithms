function validAnagram(first, second) {
    let frequencyCounter1 = {};

    for (let val of first) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of second) {
        if (!frequencyCounter1[val]) {
            return false
        } else {
            frequencyCounter1[val]--;
        }
    }

    return true;
}

console.log(validAnagram("arghunnn", "arghunn"));