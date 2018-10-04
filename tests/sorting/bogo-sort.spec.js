const chai = require('chai');
const expect = chai.expect;
const sort = require('../../sorting/bogo-sort.js');

describe('Bogo Sort', function() {
  it('should work with empty arrays', function() {
    expect(sort([])).deep.equal([]);
  });

  it('should work with sorted arrays', function() {
    expect(sort([1, 2, 3, 4])).to.have.ordered.members([1, 2, 3, 4]);
  });

  it('should work with non-sorted arrays', function() {
    let array = [2, 5, 1, 0, 4, 3, 7, -1];
    array = sort(array);
    for (let i = 0; i < array.length - 1; i += 1) {
      expect(array[i] <= array[i + 1]).to.be.true;
    }
  });
});
