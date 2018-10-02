/**
 * Implement [Counting sort]
 *
 * Copyright (c) 2018, Azhar Mithani.
 * Licensed under the MIT License.
 */
  function countSort(arr, min, max) {
    var i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
}
/**
 * Counting sort algorithm.
 * Complexity: O(n+k).
 *
 * @example
 * console.log(countSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/countSort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
module.exports = countSort;
