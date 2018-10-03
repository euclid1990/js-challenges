/**
 * Implement [Bucket sort]
 *
 * Copyright (c) 2018, Eyal Rosenbaum.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Bucket sort algorithm.
 * Complexity: O(N).
 *
 * @example
 * console.log(bucketSort([1, 4, 1, 2, 7, 5, 2])); // [ 1, 1, 2, 2, 4, 5, 7 ]
 *
 * @public
 * @module sorting/bucketsort
 * @param {Array} array Input array.
 * @param {Number} range Input array range starting from 0.
 * @return {Array} Sorted array.
 */
function bucketSort(array, range) {
  const countArray = new Array(range + 1).fill(0);
  const resultArray = new Array(array.length);

  for (let i = 0; i < array.length; i += 1) {
    countArray[array[i]]++;
  }

  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  for (let i = 0; i < array.length; i += 1) {
    resultArray[countArray[array[i]] - 1] = array[i];
    countArray[array[i]]--;
  }

  return resultArray;
}

module.exports = bucketSort;
