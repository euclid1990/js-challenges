/**
 * Implement [Selection sort]
 *
 * Copyright (c) 2018, Uliana a.k.a. "The Nullable"
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Selection sort algorithm.
 * Complexity: O(N^2).
 *
 * @example
 * console.log(selectionSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/bubblesort
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */
function selectionSort(array) {
  var minIdx;
  var temp;
  var len = array.length;
  for (var i = 0; i < len; i++) {
    minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }
  return array;
}

module.exports = selectionSort;
