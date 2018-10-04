/**
 * Implement [Quick sort]
 *
 * Copyright (c) 2018, Ashok Subedi.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Quick sort algorithm.
 * Complexity: Best O(n log(n)).
 *            Worst O(n^2)
 *
 * @example
 * var myArray = [3, 0, 2, 5, -1, 4, 1 ];
 * console.log("Original array: " + myArray);
 * var sortedArray = quickSort(myArray);
 * console.log("Sorted array: " + sortedArray);
 *
 * @public
 * @module sorting/quicksort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
function quickSort(origArray) {
 if (origArray.length <= 1) { 
    return origArray;
  } else {

    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i] <= pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}

module.exports = quickSort;
