const chai = require('chai');
const expect = chai.expect;
const sort = require('../../sorting/heap-sort.js');

describe('Heap Sort', function() {
  it('should work with empty arrays', function() {
    expect(sort([])).deep.equal([]);
  });

  it('should work with sorted arrays', function() {
    expect(sort([1, 2, 3, 4, 6, 10, 20])).to.have.ordered.members([1, 2, 3, 4, 6, 10, 20]);
  });

  it('should work with non-sorted arrays', function() {
    let array = [2, 5, 1, 0, 4, 3, 30, 6, 2];
    array = sort(array);
    for (let i = 0; i < array.length - 1; i += 1) {
      expect(array[i] <= array[i + 1]).to.be.true;
    }
  });

  it('should work with custom comparator (descending order)', function() {
    let array = [2, 5, 1, 0, 4, 3, 30, 6, 2];
    array = sort(array, (a, b) => (b - a));
    for (let i = 0; i < array.length - 1; i += 1) {
      expect(array[i] >= array[i + 1]).to.be.true;
    }
  });
});
