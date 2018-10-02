/**
 * Implement [Shell Sort]
 *
 * Copyright (c) 2018, Ritesh Prasad.
 * Licensed under the MIT License.
 */

function comparator(a, b) {
  return a - b;
}

/**
 * Shell sort algorithm.
 * Complexity: O(N^(3/2)).
 *
 * @example
 * console.log(shellSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/shell-sort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
function shellSort(array, cmp) {
  cmp = cmp || comparator;
  let n = array.length;
  let interval = 1;
  while (interval <= n / 3) {
    interval = interval * 3 + 1;
  }
  while (interval > 0) {
    for (let i = interval; i < n; i += 1) {
      let temp = array[i];
      let j = i;
      while (j > interval - 1 && cmp(array[j - interval], temp) > 0) {
        array[j] = array[j - interval];
        j -= interval;
      }
      array[j] = temp;
    }
    interval = (interval - 1) / 3;
  }

  return array;
}

module.exports = shellSort;
