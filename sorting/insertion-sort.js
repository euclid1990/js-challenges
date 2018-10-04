/**
 * Implement [Insertion sort]
 *
 * Copyright (c) 2018, Puripat Arayasirikul.
 * Licensed under the MIT License.
 */

'use strict';
/**
 * Insertion sort algorithm.
 * Complexity: O(N^2).
 *
 * @example
 * console.log(insertionSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/insertionsort
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */
function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let value = array[i]
    let index = i - 1;
    while (index >= 0 && array[index] > value) {
      array[index + 1] = array[index];
      array[index--] = value;
    }
  }
  return array;
}

module.exports = insertionSort;
