const { expect } = require('../test-utils');

const sort = require('../../sorting/bucket-sort.js');

describe('Bucket Sort', function() {
  it('should work with empty arrays', function() {
    expect(sort([], 0)).deep.equal([]);
  });

  it('should work with sorted arrays', function() {
    expect(sort([1, 2, 3, 4], 4)).to.be.sorted();
  });

  it('should work with non-sorted arrays', function() {
    let array = [2, 5, 1, 0, 4, 3];
    array = sort(array, Math.max(...array) - Math.min(...array));
    expect(array).to.be.sorted();
  });

  it('should work with non-sorted arrays after shifting to start with 0', function() {
    let array = [-2, 5, 1, 0, -4, 3];
    const shiftAmount = Math.abs(Math.min(...array));
    let shiftArray = new Array(array.length);
    for (let i = 0; i < shiftArray.length; i++) {
      shiftArray[i] = array[i] + shiftAmount;
    }
    shiftArray = sort(shiftArray, Math.max(...array) - Math.min(...array));
    for (let i = 0; i < array.length; i++) {
      array[i] = shiftArray[i] - shiftAmount;
    }

    expect(array).to.be.sorted();
  });
});
