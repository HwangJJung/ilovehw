const hwSort = {
  insertionSort(arr) {
    //undefined 인지 아닌지 검사
    if (typeof arr === 'undefined') {
      return -1;
    }

    //array 인지 아닌지 검사
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
      return -1;
    }

    // 빈 배열 검사
    if (arr.length === 0) {
      return -1;
    }

    var L = arr.length;

    // 배열이 하나일 경우
    if (L === 1) {
      return arr;
    } else {
      for (var i = 1; i < L; i++) {
        var  temp = arr[i];
        var  j = i - 1;
        while (j >= 0 && temp <= arr[j]) {
          arr[j + 1] = arr[j];
          j--;
        }

        arr[j + 1] = temp;
      }

      return arr;
    }
  },

  mergeSort(arr, start, end) {
    if (!this.isvalid(arr)) return -1;
    start = start || 0;
    end = end || arr.length;
    if (start > end) return -1;
    if (end  - start <= 1) return arr;

    var mid = Math.floor((end - start) / 2) + start;
    this.mergeSort(arr, start, mid);
    this.mergeSort(arr, mid, end);
    this.merge(arr, start, mid, end);

    return arr;
  },

  merge(arr, start, mid, end) {
    var left = arr.slice(start, mid);
    var right = arr.slice(mid);
    var idx;
    var leftIdx = 0;
    var rightIdx = 0;

    for (idx = start; idx < end; idx++) {
      if (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
          arr[idx] = left[leftIdx];
          leftIdx++;
        } else {
          arr[idx] = right[rightIdx];
          rightIdx++;
        }
      } else if (leftIdx < left.length) {
        arr[idx] = left[leftIdx];
        leftIdx++;
      } else {
        arr[idx] = right[rightIdx];
        rightIdx++;
      }
    }
  },

  slowMaxSubArray(arr) {
    if (!this.isvalid(arr)) return -1;
    var length = arr.length;
    var max = Number.MIN_VALUE;
    var sum = 0;
    var maxBegin;
    var maxEnd;
    for (var i = 0; i < length; i++) {
      sum = 0;
      for (var j = i; j < length; j++) {
        sum += arr[j];
        if (sum > max) {
          maxBegin = i;
          maxEnd = j + 1;
          max = sum;
        }
      }
    }

    return {
      start: maxBegin,
      end: maxEnd,
      max: max,
    };
  },

  maxSubArray(arr, start, end) {
    if (!this.isvalid(arr)) return -1;
    start = start || 0;
    end = end || arr.length;
    if (start > end) return -1;
    if (end  - start <= 1) {
      return {
          start: start,
          end: end,
          max: arr[start],
        };
    }

    var mid = Math.floor((end - start) / 2) + start;

    var left = this.maxSubArray(arr, start, mid);
    var right = this.maxSubArray(arr, mid, end);
    var cross = this.maxSubCrossArray(arr, start, mid, end);

    var max;

    if (left.max >= right.max && left.max >= cross.max) {
      max = left;
    } else if (right.max >= cross.max) {
      max = right;
    } else {
      max = cross;
    }

    return max;
  },

  maxSubCrossArray(arr, start, mid, end) {
    if (!hwSort.isvalid(arr)) return -1;
    if (start > end) return -1;

    var maxBegin;
    var maxEnd;
    var leftMax = Number.MIN_VALUE;
    var rightMax = Number.MIN_VALUE;
    var leftSum = 0;
    var rightSum = 0;

    // 왼쪽 탐색
    for (var i = mid - 1; i >= start; i--) {
      leftSum = leftSum + arr[i];
      if (leftSum > leftMax) {
        maxBegin = i;
        leftMax = leftSum;
      }
    }

    //오른쪽 탐색
    for (var j = mid; j < end; j++) {
      rightSum = rightSum + arr[j];
      if (rightSum > rightMax) {
        maxEnd = j + 1;
        rightMax = rightSum;
      }
    }

    return {
        start: maxBegin,
        end: maxEnd,
        max: leftMax + rightMax,
      };
  },

  heapifiy(arr, i, heapSize) {
    var largest = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    if (left < heapSize && arr[i] < arr[left]) {
      largest = left;
    }

    if (right < heapSize && arr[largest] < arr[right]) {
      largest = right;
    }

    if (i !== largest) {
      var temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      this.heapifiy(arr, largest, heapSize);
    }
  },

  buildMaxHeap: function(arr) {
    var mid = Math.floor(arr.length / 2);
    for (var i = mid; i >= 0; i -= 1) {
      this.heapifiy(arr, i, arr.length);
    }

    return arr;
  },

  heapSort: function(arr) {
    this.buildMaxHeap(arr);
    var heapSize = arr.length;
    var temp;
    for (var i = arr.length - 1; i > 0; i -= 1) {
      temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      heapSize -=  1;
      this.heapifiy(arr, 0, heapSize);
    }

    return arr;
  },

  partition(a) {
    var l = a.length;
    var idx = l - 1;
    var fivot = a[idx];
    for (i = 0; i < l; i++) {
      var target = a[i];
      if (target < fivot) {
        if (idx < i) {
          this.swap(a, idx + 1, i);
          this.swap(a, idx, idx + 1);
          idx++;
        }
      } else {
        if (idx > i) {
          this.swap(a, i, idx);
          idx = i;
        }
      }
    }

    return idx;
  },

  isvalid(arr) {
    //undefined 인지 아닌지 검사
    if (typeof arr === 'undefined') {
      return false;
    }

    //array 인지 아닌지 검사
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
      return false;
    }

    // 빈 배열 검사
    if (arr.length === 0) {
      return false;
    }

    return true;
  },

  isSorted(arr) {
    // array 내 모든 인자들이 true를 리턴할 경우에만 true 리턴
    return arr.every(function(value, index, array) {
      // array 내 인자들이 앞선 인자보다 클때만 true 리턴
      // 첫번째 원소일 경우엔 바로 true 리턴
      return index === 0 || array[index - 1] <= value;
    });
  },

  swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  },
};

export default hwSort;
