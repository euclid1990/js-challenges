/**
 * Implement [Selection sort]
 *
 * Copyright (c) 2018, Andrew Robilliard.
 * Licensed under the MIT License.
 */

'use strict';

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
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
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, i, min);
    }
  }
  return array;
}

module.exports = selectionSort;
