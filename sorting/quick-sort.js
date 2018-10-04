/**
 * Implement [Quick sort]
 *
 * Copyright (c) 2018, Jorge Yanez.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Quick sort algorithm.
 * Complexity: O(N^2).
 *
 * @example
 * console.log(quicksort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/quicksort
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */
function quicksort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[0];
  let lesser = [];
  let greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksort(lesser).concat(pivot, quicksort(greater));
}

module.exports = quicksort;
