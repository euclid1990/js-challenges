/**
 * Implement [Heapsort]
 *
 * Copyright (c) 2018, Methusael Murmu.
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

function maxHeapify(arr, index, size, cmp) {
  const lIndex = 2 * index + 1;
  const rIndex = 2 * (index + 1);
  let maxIndex;

  if (lIndex < size && cmp(arr[index], arr[lIndex]) < 0) {
    maxIndex = lIndex;
  } else {
    maxIndex = index;
  }

  if (rIndex < size && cmp(arr[maxIndex], arr[rIndex]) < 0) {
    maxIndex = rIndex;
  }

  if (index !== maxIndex) {
    swap(arr, index, maxIndex);
    maxHeapify(arr, maxIndex, size, cmp);
  }
}

function buildMaxHeap(arr, cmp) {
  const size = arr.length;
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, i, size, cmp);
  }
}

/**
 * Heapsort algorithm.
 * Complexity: O(N.Log(N)).
 *
 * @example
 * console.log(heapSort([2, 5, 1, 0, 4, 3, 30, 6, 2])); // [ 0, 1, 2, 2, 3, 4, 5, 6, 30 ]
 *
 * @public
 * @module sorting/heapsort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
function heapSort(array, cmp) {
  cmp = cmp || comparator;

  let size = array.length;
  // Trivial case
  if (size < 2) { return array; }

  buildMaxHeap(array, cmp);
  for (let i = size - 1; i > 0; i--) {
    swap(array, 0, i);
    maxHeapify(array, 0, --size, cmp);
  }

  return array;
}

module.exports = heapSort;
