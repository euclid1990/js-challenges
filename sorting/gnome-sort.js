/**
 * Implement [Gnome sort]
 *
 * Copyright (c) 2018, David Reimers.
 * Licensed under the MIT License.
 */

'use strict';

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function comparator(a, b) {
  return a - b;
}

/**
 * Gnome sort algorithm.
 * Complexity: O(N^2).
 *
 * @example
 * console.log(gnomeSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/gnomesort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
function gnomeSort(array, cmp) {
  var index = 1;
  var nextPos = 2;
  cmp = cmp || comparator;

  while (index < array.length) {
    if (cmp(array[index - 1], array[index]) < 0) {
      index = nextPos;
      nextPos++;
    } else {
      swap(array, index - 1, index);
      index--;
      if (index === 0) {
        index = 1;
      }
    }
  }

  return array;
}

module.exports = gnomeSort;
