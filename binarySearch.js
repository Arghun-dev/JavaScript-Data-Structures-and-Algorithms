function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2);

    while(value !== arr[middle] && start <= end) {
        if (value < arr[middle]) end = middle - 1;
        else start = middle + 1
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([2, 5, 7, 9, 13, 19, 24], 6));