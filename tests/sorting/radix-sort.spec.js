const { expect } = require('../test-utils');

const sort = require('../../sorting/radix-sort.js');

describe('Radix Sort', function() {
  it('should work with empty arrays', function() {
    expect(sort([])).deep.equal([]);
  });

  it('should work with sorted arrays', function() {
    expect(sort([1, 2, 3, 4])).to.have.ordered.members([1, 2, 3, 4]);
  });

  it('should work with non-sorted arrays', function() {
    let array = [2, 5, 1, 0, 4, 3];
    expect(sort(array)).to.be.sorted();

    let array2 = [20, 15, 10, 1, 40, 300000];
    expect(sort(array2)).to.be.sorted();
  });

  it('should work with large arrays', function() {
    this.timeout(3000);
    let array = Array(1000000).map(() => {
      return parseInt((Math.random() * 1000000000), 10);
    });
    expect(sort(array)).to.be.sorted();
  });
});
