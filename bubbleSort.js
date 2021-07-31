function swap(arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSortAscend(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j+1] < arr[j]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }

    return arr;
}

function bubbleSortDescend(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j+1] > arr[j]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }

    return arr;
}

console.log(bubbleSortAscend([9, 3, 6, 24, 17]));
console.log(bubbleSortDescend([9, 3, 6, 24, 17]));