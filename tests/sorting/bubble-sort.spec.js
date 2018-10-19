const { expect } = require('../test-utils');

const sort = require('../../sorting/bubble-sort.js');

describe('Bubble Sort', function() {
  it('should work with empty arrays', function() {
    expect(sort([])).deep.equal([]);
  });

  it('should work with sorted arrays', function() {
    expect(sort([1, 2, 3, 4])).to.be.sorted();
  });

  it('should work with non-sorted arrays', function() {
    let array = [2, 5, 1, 0, 4, 3];
    expect(sort(array)).to.be.sorted();
  });

  it('should support custom compare function', () => {
    const emptyStringFirst = (value) => !value ? -1 : 1;
    expect(sort(['a', 'b', '', 'c', ''], emptyStringFirst)).to.deep.equal(
      ['', '', 'a', 'b', 'c']
    );
  });
});
