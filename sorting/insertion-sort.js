/**
 * Implement [Insertion sort]
 *
 * Copyright (c) 2018, Ionut Alixandroae.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Bubble sort algorithm.
 * Complexity: O(N^2).
 *
 * @example
 * console.log(insertionSort([54, 26, 93, 17, 77, 31, 44, 55, 20])); // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
 *
 * @public
 * @module sorting/insertionsort
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */
function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

module.exports = insertionSort;
