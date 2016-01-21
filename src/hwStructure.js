// const hwStructure = {
//   heap.Maxheapifiy(arr,i) {
//     var len = arr.length;
//     var largest = i;
//     var left = 2*i;
//     var right = 2*i +1;
//       if(left <= len && arr[i] < arr[left]) {
//           largest = left;
//       }
//       if(right <= len &&arr[i] < arr[right]) {
//           largest = right;
//       }
//       if(arr[i]!== arr[largest]) {
//         var temp = arr[i];
//         arr[i] = arr[largest];
//         arr[largest] = temp;
//         heapSort.heapifiy(arr,largest);
//       }
//   },
//   heap.buildMaxHeap(arr) {
//     var len = arr.length;
//     var mid = math.floor(len/2);
//     for(var i=mid; mid>=1; mid--) {
//       heapifiy(arr,i);
//     }
//   }
//
//   heap.Minheapifiy(arr,i,criteria) {
//     var len = arr.length;
//     var smallest = i;
//     var left = 2*i;
//     var right = 2*i +1;
//     if(arr[i].hasOwnProperty(criteria)) {
//       if(left <= len && arr[i][criteria] > arr[left][criteria]) {
//           smallest = left;
//       }
//       if(right <= len && arr[i][criteria] > arr[right][criteria]) {
//           smallest = right;
//       }
//       if(arr[i] !== arr[smallest]) {
//         var temp = arr[i];
//         arr[i] = arr[smallest];
//         arr[smallest] = temp;
//         heapSort.Minheapifiy(arr,smallest,criteria);
//       }
//     }
//       if(left <= len && arr[i] > arr[left]) {
//           smallest = left;
//       }
//       if(right <= len && arr[i] > arr[right]) {
//           smallest = right;
//       }
//       if(arr[i]!== arr[smallest]) {
//         var temp = arr[i];
//         arr[i] = arr[smallest];
//         arr[smallest] = temp;
//         heapSort.Minheapifiy(arr,smallest);
//       }
//   },
//   heap.buildMinHeap(arr,criteria) {
//     var len = arr.length;
//     var mid = math.floor(len/2);
//     for(var i=mid; mid>=1; mid--) {
//       Minheapifiy(arr,i,criteria);
//     }
//   }
// }
//
// export default hwGraph;
