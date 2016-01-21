import hwSort from '../../src/hwSort';
import chai from 'chai';
import sinon from 'sinon';

var expect = chai.expect;
var should = chai.should();

describe('hwSort', function() {
  var tests =  [
    { msg:'undefined 오브젝트',   expected: -1 },
    { msg:'배열이 아닌 오브젝트', arg: { arr:[1] },   expected: -1 },
    { msg:'빈배열', arg: [],                      expected: -1 },
    { msg:'원소 1개', arg: [1],                    expected: [1] },
    { msg:'원소 2개', arg: [3, 1],                  expected: [1, 3] },
    { msg:'원소 20개', arg: [4, 5, 8, 10, 567, 423, 7686, 564, 2, 432, 132, 657, 18, 26, 51, 65, 7, 58126, 725, 1], expected: [1, 2, 4, 5, 7, 8, 10, 18, 26, 51, 65, 132, 423, 432, 564, 567, 657, 725, 7686, 58126] },
    { msg:'증가순 ', arg: [1, 3, 4, 5, 6, 7, 8, 9, 10],                    expected: [1, 3, 4, 5, 6, 7, 8, 9, 10] },
    { msg:'감소순 ', arg: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],                    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { msg:'동일한 숫자 ', arg: [1, 1, 2, 3, 3, 2],                    expected: [1, 1, 2, 2, 3, 3] },
  ];

  var randomArr = (function() {
    var arr = [];
    for (var i = 0; i < 15; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
  }());

  describe('isSorted()', function() {
    var unsortedArray = [1, 5, 2, 3, 6];
    var sortedArray = [1, 2, 3, 5, 6];
    it('should return true when sortedArray', function() {
      expect(hwSort.isSorted(sortedArray)).to.be.true;
    });

    it('should return false when UnsortedArray', function() {
      expect(hwSort.isSorted(unsortedArray)).to.be.false;
    });
  });

  describe('HW#1.C1 : insertionSort', function() {
    tests.forEach((test) => {
      it('input ' + test.msg + ': ' + test.arg, function() {
        var res = hwSort.insertionSort(test.arg);
        expect(res).to.deep.equal(test.expected);
      });
    });

    it('input random array : ' + randomArr, function() {
      hwSort.insertionSort(randomArr);
      expect(hwSort.isSorted(randomArr)).to.be.true;
    });
  });

  describe('HW#1.C2 : mergeSort', function() {
    tests.forEach((test) => {
      it('input ' + test.msg + ': ' + test.arg, function() {
        var res = hwSort.mergeSort(test.arg);
        expect(res).to.deep.equal(test.expected);
      });
    });
    it('input random array : ' + randomArr, function() {
      hwSort.mergeSort(randomArr);
      expect(hwSort.isSorted(randomArr)).to.be.true;
    });
  });

  describe('HW#1.C3.1 : O(n^2) maxSubArray', function() {
    tests =  [
      { msg:'undefined 오브젝트',   expected: -1 },
      { msg:'배열이 아닌 오브젝트', arg: { arr:[1] },   expected: -1 },
      { msg:'빈배열', arg: [],                      expected: -1 },
      {
        msg:'원소 1개',
        arg: [1],
        expected:  {
          start: 0,
          end: 1,
          max: 1,
        },
      },
      {
        msg:'원소 2개',
        arg: [1, 2],
        expected:  {
          start: 0,
          end: 2,
          max: 3,
        },
      },
      {
        msg:'원소 4개',
        arg: [1, -4, 7, 3],
        expected:  {
          start: 2,
          end: 4,
          max: 10,
        },
      },
      {
        msg:'원소 20개',
        arg: [4, 5, 8, -10, 57, -423, 70, 564, -2, 432, -232, -87, -18, 26, -51, 65, 7, 13, 9, 1],
        expected:  {
          start: 6,
          end: 10,
          max: 70 + 564 - 2 + 432,
        },
      },
    ];
    tests.forEach((test) => {
      it('input ' + test.msg + ': ' + test.arg, function() {
        var res = hwSort.slowMaxSubArray(test.arg);
        expect(res).to.deep.equal(test.expected);
      });
    });
  });

  describe('HW#1.C3.2 : O(nlgn) maxSubArray', function() {
    tests =  [
      { msg:'undefined 오브젝트',   expected: -1 },
      { msg:'배열이 아닌 오브젝트', arg: { arr:[1] },   expected: -1 },
      { msg:'빈배열', arg: [],                      expected: -1 },
      {
        msg:'원소 1개',
        arg: [1],
        expected:  {
          start: 0,
          end: 1,
          max: 1,
        },
      },
      {
        msg:'원소 2개',
        arg: [1, 2],
        expected:  {
          start: 0,
          end: 2,
          max: 3,
        },
      },
      {
        msg:'원소 4개',
        arg: [1, -4, 7, 3],
        expected:  {
          start: 2,
          end: 4,
          max: 10,
        },
      },
      {
        msg:'원소 20개',
        arg: [4, 5, 8, -10, 57, -423, 70, 564, 66, 432, -232, -87, -18, 26, -51, 65, 7, 13, 9, 1],
        expected:  {
          start: 6,
          end: 10,
          max: 70 + 564 + 66 + 432,
        },
      },
    ];
    tests.forEach((test) => {
      it('input ' + test.msg + ': ' + test.arg, function() {
        var res = hwSort.maxSubArray(test.arg);
        expect(res).to.deep.equal(test.expected);
      });
    });
  });
});
