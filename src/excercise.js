// function isRedBlack(tree) {
//   if( typeof tree === 'undefined' || typeof tree.root === 'undefined') return -1;
//
//   var res = countBlackHeight(tree.root);
//
//   if(res === -1) {
//     return false;
//   } else {
//     return true;
//   }
//
// }
//
// function countBlackHeight(root) {
//   if(typeof root ==='undefined') return -1;
//
//   var leftCount = countBlackHeight(root.left);
//   var rightCount = countBlackHeight(root.right);
//
//   if(leftCount === -1 || rightCount === -1) return -1;
//
//   if(typeof root.left ==='undefined' || root.left.color="black") {
//     leftCount++;
//   }
//   if(typeof root.right ==='undefined' || root.right.color="black") {
//     leftCount++;
//   }
//   if( leftCount !== rightCount) {
//     return -1;
//   }
//   return leftCount;
// }
//
// function leftRotate(tree, x) {
//   if(typeof x ==='undefined') return -1;
//   var y = x.right;
//   x.right = y.left;
//   if(y.left) {
//     y.parent = x;
//   }
// }
//
// function BFS(graph,srcIdx) {
//   var src = graph.vertices[srcIdx];
//   graph.vertices.forEach((v) => {
//     v.distance = Number.MAX_VALUE;
//     v.predecessor = {};
//     v.visitCode = 0;
//   });
//   src.distance = 0;
//   src.visitCode = 1;
//   var distanceCompare = {};
//   var q = [];
//   //var heap = Heap.buildMinHeap(graph.vertices, distanceCompare);
//   var u;
//   q.push(src);
//   while(q.length > 0) {
//     u = q.shift();
//     u.visitCode=2;
//     u.vertices.forEach(function(v) {
//       if(v.visitCode == 0) {
//         v.visitCode = 1;
//         v.distance = u.distance + 1;
//         v.pre = u;
//         q.push(v);
//         }
//       }
//     });
//     u.visitCode = 2;
//   }
//
// }
