const array = [1, 3, 7, 90, 24, 92];


// indexOf
console.log(array.indexOf(90));

// findIndex => returns the index of the first element in the array which meets the condition
console.log(array.findIndex((item) => item % 3 === 0));

// find => The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
console.log(array.findIndex((item) => item % 3 === 0));

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

// includes => The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array2 = [1, 2, 3];

console.log(array2.includes(2));
