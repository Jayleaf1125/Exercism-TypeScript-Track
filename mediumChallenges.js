"use strict";
// Binary Search
function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middleIndex = Math.floor((start + end) / 2);
        if (target === array[middleIndex]) {
            return middleIndex;
        }
        if (target > array[middleIndex]) {
            console.log("Searching the right side of Array");
            start = middleIndex + 1;
        }
        if (target < array[middleIndex]) {
            console.log("Searching the left side of array");
            end = middleIndex - 1;
        }
    }
    return 'Target not found';
}
console.log(binarySearch([1, 2], 0));
