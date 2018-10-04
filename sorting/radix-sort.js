/**
 * Implement [Radix sort]
 *
 * Copyright (c) 2018, Edwin Guzman.
 * Licensed under the MIT License.
 */

'use strict';

function customCountingSort(array, maxValueChunk, fnGetChunk) {
  if (!array || array.length === 0) return array;
  maxValueChunk = maxValueChunk || (Math.max.apply(null, array) + 1);
  let counter = Array(maxValueChunk).fill(0);
  let aFiltered = fnGetChunk ? array.map(fnGetChunk) : array;
  aFiltered.forEach((v) => {
    counter[v]++;
  });
  for (let i = 1; i < maxValueChunk; i++) {
    counter[i] += counter[i - 1];
  }
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result[--counter[aFiltered[i]]] = array[i];
  }
  return result;
}

/**
 * Radix sort algorithm.
 * Complexity: O(w+N).
 *
 * @example
 * console.log(radixSort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/radixSort
 * @param {Array} array Input array.
 * @return {Array} Sorted array.
 */
function radixSort(array) {
  let bitsQuantity = 1;
  let maxK = 1 << bitsQuantity;
  let w = 32;
  for (let p = 0; p < w / bitsQuantity; p++) {
    array = customCountingSort(array, maxK, (x) => (
      (x >> bitsQuantity * p) & (maxK - 1)
    ));
  }
  return array;
}

module.exports = radixSort;
