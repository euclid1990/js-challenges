/**
 * Implement [Merge sort]
 *
 * Copyright (c) 2018, Puripat Arayasirikul.
 * Licensed under the MIT License.
 */

'use strict';

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return [...result, ...left.slice(indexLeft), ...right.slice(indexRight)];
}

/**
 * Merge sort algorithm.
 * Complexity: O(N log N).
 *
 * @example
 * console.log(mergeSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/mergesort
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */
function mergeSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  const center = Math.floor(array.length / 2);
  const left = array.slice(0, center);
  const right = array.slice(center);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

module.exports = mergeSort;
