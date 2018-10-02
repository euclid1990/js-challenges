/**
 * Implement [Shell sort]
 *
 * Copyright (c) 2018, Nima Yazdanmehr.
 * Licensed under the MIT License.
 */

'use strict';

function comparator(a, b) {
  return a - b;
}

/**
 * Bubble sort algorithm.
 * Best Case Complexity: O(N*logN).
 * Worst Case Complexity: O(N*(logN)^2)
 * 
 * @example
 * console.log(shellSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/shellsort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */

function shellSort(arr, cmp) {
    var increment = arr.length / 2;
    cmp = cmp || comparator;
    while (increment > 0) {
        for (let i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
            while (cmp(j, increment) >= 0 && cmp(arr[j-increment], temp) > 0) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
            arr[j] = temp;
        }
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}

module.exports = shellSort;