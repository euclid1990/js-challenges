/**
 * Implement [Bucket sort]
 *
 * Copyright (c) 2018, Theran Brigowatz.
 * Licensed under the MIT License.
*/

// Swap helper function

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

('use strict');

function selectionSort(array) {
	for (var i = 0; i < array.length; i++) {
		let min = i;
		for (var j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		if (i !== min) {
			swap(array, i, min);
		}
	}
	return array;
}

module.exports = selectionSort
