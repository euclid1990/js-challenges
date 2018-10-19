const { expect } = require('../test-utils');

const sort = require('../../sorting/counting-sort.js');

describe('Counting Sort', function() {
  it('should work with empty arrays', function() {
    expect(sort([], 0, 5)).deep.equal([]);
  });

  it('should work with sorted arrays', function() {
    expect(sort([1, 2, 3, 4], 1, 4)).to.be.sorted();
  });

  it('should work with non-sorted arrays', function() {
    let array = [2, 5, 1, 0, 4, 3];
    array = sort(array, 0, 5);
    expect(array).to.be.sorted();
  });
});
