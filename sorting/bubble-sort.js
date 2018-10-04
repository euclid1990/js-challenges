/**
 * Implement [Bubble sort]
 *
 * Copyright (c) 2018, Nguyen Van Vuong, Raphael Tomé Santana.
 * Licensed under the MIT License.
 */

'use strict';

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function comparator(a, b) {
  return a - b;
}

/**
 * Bubble sort algorithm.
 * Complexity: O(N^2).
 *
 * @example
 * console.log(bubbleSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/bubblesort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
function bubbleSort(array, cmp) {
  cmp = cmp || comparator;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (cmp(array[j], array[j - 1]) < 0) {
        swap(array, j, j - 1);
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
