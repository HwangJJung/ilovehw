import hwGraph from '../../src/hwGraph';
import chai from 'chai';
import sinon from 'sinon';


var expect = chai.expect;
var should = chai.should();

class Vertex {
  constructor(id) {
    this.adjacencyList = [];
    this.visitCode = 0;
    this.predecessor = {};
    this.distance = Number.MAX_VALUE;
    this.id = id;
  }
  addEdge(v1) {
    this.adjacencyList.push(vertex);
    vertex.adjacencyList.push(this);
  }
  static makeEdge(v1,v2) {
    v1.adjacencyList.push(v2);
    v2.adjacencyList.push(v1);
  }
}

describe('hwGraph', () => {
  describe('bfs()', function () {
    var v1 = new Vertex(1);
    var v2 = new Vertex(2);
    var v3 = new Vertex(3);
    var v4 = new Vertex(4);
    var v5 = new Vertex(5);
    var v6 = new Vertex(6);


    Vertex.makeEdge(v1,v2);
    Vertex.makeEdge(v1,v5);
    Vertex.makeEdge(v2,v3);
    Vertex.makeEdge(v2,v5);
    Vertex.makeEdge(v3,v4);
    Vertex.makeEdge(v4,v5);
    Vertex.makeEdge(v4,v6);


/** adjacencyGraph expression
 * var graph = [[0, 1, 0, 0, 1, 0],
 *              [1, 0, 1, 0, 1, 0],
 *              [0, 1, 0, 1, 0, 0],
 *              [0, 0, 1, 0, 1, 1],
 *              [1, 1, 0, 1, 0, 0],
 *              [0, 0, 0, 1, 0, 0]];
 */
    var graph = [v1,v2,v3,v4,v5,v6];
    it('should v2 distance is 1', function () {
     hwGraph.bfs(graph, 0);
     expect(graph[1].distance).to.equal(1);
    });
  });
});
