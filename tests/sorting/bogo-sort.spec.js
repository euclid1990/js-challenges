const { expect } = require('../test-utils');

const sort = require('../../sorting/bogo-sort.js');

describe('Bogo Sort', function() {
  it('should work with empty arrays', function() {
    expect(sort([])).deep.equal([]);
  });

  it('should work with sorted arrays', function() {
    expect(sort([5, 6, 7, 8])).to.be.sorted();
  });

  it('should work with non-sorted arrays', function() {
    let array = [2, 5, 1, 0, 4, 3, 7, -1];
    expect(sort(array)).to.be.sorted();
  });
});
