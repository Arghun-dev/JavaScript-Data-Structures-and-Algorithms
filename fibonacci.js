const save = new Map();

function fibonacci(num) {
    if (num === 0 || num === 1) return num;

    const saves = save.get(num);

    if (saves) {
        return saves;
    }

    let left = save.get(num - 1)
    let right = save.get(num - 2)

    if (left === undefined) {
        left = fibonacci(num - 1)
    }

    if (right === undefined) {
        right = fibonacci(num - 2)
    }

    const fibvalue = left + right;
    
    save.set(num, fibvalue);

    return fibvalue;
}

const start = new Date();

console.log(fibonacci(10000));

const end = new Date();

console.log('diff is', end - start);