const { expect } = require('../test-utils');

const sort = require('../../sorting/gnome-sort.js');

describe('Gnome Sort', function() {
  it('should work with empty arrays', function() {
    expect(sort([])).deep.equal([]);
  });

  it('should work with sorted arrays', function() {
    expect(sort([1, 2, 3, 4])).to.have.ordered.members([1, 2, 3, 4]);
  });

  it('should work with non-sorted arrays', function() {
    let array = [2, 5, 1, 0, 4, 3];
    expect(sort(array)).to.be.sorted();
  });
});
