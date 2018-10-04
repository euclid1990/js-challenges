const chai = require('chai');
const expect = chai.expect;
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
    array = sort(array);
    for (let i = 0; i < array.length - 1; i += 1) {
      expect(array[i] <= array[i + 1]).to.be.true;
    }
    let array2 = [20, 15, 10, 1, 40, 300000];
    array2 = sort(array2);
    for (let i = 0; i < array2.length - 1; i += 1) {
      expect(array2[i] <= array2[i + 1]).to.be.true;
    }
  });

  it('should work with large arrays', function() {
    let array = Array(1000000).map(() => {
      return parseInt((Math.random() * 1000000000), 10);
    });
    array = sort(array);
    for (let i = 0; i < array.length - 1; i += 1) {
      expect(array[i] <= array[i + 1]).to.be.true;
    }
  });
});
