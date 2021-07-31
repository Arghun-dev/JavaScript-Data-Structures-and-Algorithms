const swap = (arr, idx1, idx2) => {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

console.log(swap([1,2,5,9,6], 2, 3));