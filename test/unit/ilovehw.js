import ilovehw from '../../src/ilovehw';
import chai from 'chai';
import sinon from 'sinon';


var expect = chai.expect;
var should = chai.should();


Array.prototype.isSorted = function () {
  // array 내 모든 인자들이 true를 리턴할 경우에만 true 리턴
  return this.every(function(value, index, array){
    // array 내 인자들이 앞선 인자보다 클때만 true 리턴
    // 첫번째 원소일 경우엔 바로 true 리턴
    return index === 0 || array[index - 1] <= value;
  });
}

describe('ilovehw', () => {
  describe('isSorted()', function () {
    var unsortedArray = [1,5,2,3,6];
    var sortedArray = [1,2,3,5,6];
    it('should return true when sortedArray', function () {
     expect(sortedArray.isSorted()).to.be.true;
    });
    it('should return false when UnsortedArray', function () {
     expect(unsortedArray.isSorted()).to.be.false;
    });
  });
  describe('insertionSort()', () => {
    var tests = [
      {msg:'빈배열', arg: [],       expected: -1},
      {msg:'원소 1개',arg: [1],    expected: [1]},
      {msg:'원소 2개',arg: [3,1], expected: [1,3]},
      {msg:'원소 20개',arg: [4,5,8,10,567,423,7686,564,2,432,132,657,18,26,51,65,7,58126,725,1],
        expected: [1,2,4,5,7,8,10,18,26,51,65,132,423,432,564,567,657,725,7686,58126]}
    ];
    tests.forEach((test) => {
      it('should correctly Sort ' + test.msg , () => {
        var res = ilovehw.insertionSort(test.arg);
        expect(res).to.deep.equal(test.expected);
      });
    });
  });
});
