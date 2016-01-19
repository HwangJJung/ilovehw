const ilovehw = {
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
