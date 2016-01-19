const ilovehw = {
  greet() {
    return 'hello';
  },
  foo() {
    return 'bar';
  },
  bar() {
    return 'foo';
  },
  isSorted(arr) {
    // 배열의 모든 인자들이 자신보다 앞에 있는 인자보다 큰지 검사
    // 첫번째 인자일 경우에만 바로 true 리턴
    return arr.every(function(value, index, array){
      return index === 0 || array[index - 1] <= value;
    });
  },
  insertionSort(arr) {
    //array 인지 아닌지 검사
    if( Object.prototype.toString.call(arr) !== '[object Array]') {
      return -1;
    }
    // 빈 배열 검사
    if( arr.length === 0) {
      return -1;
    }
    const L = arr.length;
    // 배열이 하나일 경우
    if( L === 1) {
      return arr;
    } else {
      for(var i=1; i<L; i++) {
        let  temp = arr[i];
        let  j = i-1;
        while ( j >= 0 && temp <= arr[j]) {
          arr[j+1] = arr[j];
          j--;
        }
        arr[j+1] = temp;
      }
      return arr;
    }
  }
};
export default ilovehw;
