/**
 * Implement [Shell sort]
 *
 * Copyright (c) 2018, Jorge Yanez.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Shell sort algorithm.
 * Complexity: O(N^2).
 *
 * @example
 * console.log(shellsort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/shellsort
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */
function shellsort(array) {
  let gaps = [701, 301, 132, 57, 23, 10, 4, 1];

  let j = 0;

  for (let g = 0; g < gaps.length; g++) {
    let gap = gaps[g];
    for (let i = gap; i < array.length; i++) {
      let temp = array[i];
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
}

module.exports = shellsort;
