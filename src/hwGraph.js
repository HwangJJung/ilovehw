var hwGraph = {
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
}

export default hwGraph;
