class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }
    addVertices(v) {
        this.adjList.set(v, []);
    }
    addEdge(src, dest) {
        this.adjList.get(src).push(dest);
        this.adjList.get(dest).push(src);
    }
    print() {
        //console.log(this.adjList);
        return this.adjList;
    }
}
//=========================================
//driver code
let vertices = [0, 1, 2, 3, 4, 5];
let g = new Graph(5);
for (let i = 0; i < vertices.length; i++) {
    g.addVertices(vertices[i]);
}
g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(2, 4);
g.addEdge(4, 5);

//let adjListMap = g.print();

let gfg = [
    [4],
    [2, 4],
    [1, 3],
    [2, 4],
    [0, 1, 3]
];

let adjListArrayGFG = [[1, 2, 3], [0], [0, 4], [0], [2]]

function dfsOfGraph(adjList, noOfVertices, isMap) {
    let visited = new Array(noOfVertices).fill(false);
    for (let i = 0; i < noOfVertices; i++) {
        if (!visited[i]) {
            //dfs()
            if (dfs(i, adjList, visited, -1)) return true;
        }
    }
    return false;
}
function dfs(currentVertex, adjList, visited, parent) {
    visited[currentVertex] = true;
    //ans.push(currentVertex);
    const adjNode = adjList[currentVertex];
    for (let j = 0; j < adjNode.length; j++) {
        if (!visited[adjNode[j]]) {
            if (dfs(adjNode[j], adjList, visited, currentVertex)) {
                return true;
            }
        }
        else if (parent != adjNode[j]) {
            return true;
        }
    }
    return false;
}

//isMap is false when input adjacent list is a Array.
//isMap is true when input adjacent list is a Map.

//let result_array = dfsOfGraph(adjListArrayGFG, 5, false)
let result_map = dfsOfGraph(gfg, 5, -1)
//console.log("=====>", result_array)
console.log("=====>", result_map);