/**
 * Counting sort algorithm.
 * Complexity: O(N).
 *
 * @example
 * console.log(countingSort([2, 5, 1, 0, 4]),0,5); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module sorting/counting-sort
 * @param {Array} arr Input array.
 * @return {Array} Sorted array.
 */

function countingSort(arr, min, max)
  {
    var i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }

    return arr;
}

module.exports = countingSort;