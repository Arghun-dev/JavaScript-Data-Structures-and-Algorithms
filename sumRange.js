function sumRange(num) {
    if (num < 1) {
        console.log('number should be greater than 1!!!');
        return;
    }
    
    if (num === 1) return 1;

    return num + sumRange(num-1);
}

console.log(sumRange(0));