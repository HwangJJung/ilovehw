//import hwStructure from 'hwStructure';

const hwGraph = {
  bfs(graph, sourceIdx) {
    // graph undefined 체크
    if(typeof graph === 'undefined') return -1;
    var source = graph[sourceIdx];
    var q = [];
    var current;

    // vertices 초기화
    graph.forEach((vertex) => {
      vertex.visitCode = 0;
      vertex.predecessor = {};
      vertex.distance = Number.MAX_VALUE;
    });
    // source vertex 초기화
    source.distance = 0;
    source.visitCode = 1;
    source.predecessor = {};
    q.push(source);

    while(q.length > 0) {
      current = q.shift();
      current.adjacencyList.forEach(function(v) {
        if(v.visitCode == 0) {
          v.distance = current.distance +1;
          v.predecessor = current;
          v.visitCode = 1;
          q.push(v);
        }
      });
      current.visitCode = 2;
    }
  }
  // dijkstra(graph,weight,sourceIdx) {
  //   graph.forEach((vertex) => {
  //     vertex.distance = Number.MAX_VALUE;
  //     vertex.parent = {};
  //   })
  //   var source = graph[sourceIdx];
  //   var set = [];
  //   var q = [];
  //   hwStructure.heap.buildMinHeap(graph,"distance");
  //   while(q.length > 0) {
  //     var current = q.shift();
  //     set.push(current);
  //     current.adjacencyList.forEach((vertex) => {
  //       if(vertex.distance > current.distance + w(current,vertex))
  //     })
  //   }
  // }
}

export default hwGraph;
