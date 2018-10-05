/**
 * Implement [Bogo sort]
 *
 * Copyright (c) 2018, Raphael Tomé Santana.
 * Licensed under the MIT License.
 */

'use strict';

function shuffler(arr) {
  for (let i = arr.length; i > 0;) {
    const j = Math.floor(Math.random() * (--i));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
}

/**
 * Bogo sort algorithm.
 * Complexity: O(Undefined).
 *
 * @example
 * console.log(bogoSort([3, 1, 2])); // [ 1, 2, 3 ]
 *
 * @public
 * @module sorting/bogosort
 * @param {Array} array Input array.
 * @param {Function} shuffle Optional. A function that defines an
 * alternative shuffle order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
function bogoSort(array, shuffle) {
  shuffle = shuffle || shuffler;
  while (!isSorted(array)) {
    shuffler(array);
  }
  return array;
}

module.exports = bogoSort;
