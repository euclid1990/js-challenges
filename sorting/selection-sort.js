/**
 * Implement [Selection sort]
 *
 * Copyright (c) 2018, Uliana a.k.a. "The Nullable"
 * Licensed under the MIT License.
 */

'use strict';

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

/**
 * Selection sort algorithm.
 * Complexity: O(N^2).
 *
 * @example
 * console.log(selectionSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/selectionsort
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */
function selectionSort(array) {
  let minIdx;
  const len = array.length;
  for (let i = 0; i < len; i++) {
    minIdx = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    swap(array, i, minIdx);
  }
  return array;
}

module.exports = selectionSort;
