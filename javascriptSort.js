function numberCompare(num1, num2) {
    return num1 - num2;
}

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

console.log(['aa', 'a', 'ggggg', 'ggg'].sort(compareByLen))