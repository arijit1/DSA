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

let adjListMap = g.print();


let adjListArrayGFG = [[1, 2, 3], [0], [0, 4], [0], [2]]

function dfsOfGraph(adjList, noOfVertices, isMap) {
    let visited = new Array(noOfVertices).fill(false);
    let ans = []
    for (let i = 0; i < noOfVertices; i++) {
        if (!visited[i]) {
            //dfs()
            dfs(i, adjList, visited, ans, isMap)
        }
    }
    return ans;
}
function dfs(currentVertex, adjList, visited, ans, isMap) {
    visited[currentVertex] = true;
    ans.push(currentVertex);



    //If input adjecent List in form of 2D Array
    if (!isMap) {
        const adjNode = adjList[currentVertex];
        for (let p = 0; p < adjNode.length; p++) {
            if(!visited[adjNode[p]]){
                dfs(adjNode[p],adjList,visited,ans);
            }
        }
    }
    // if input adjacent list in form of Map
    if (isMap) {
        for (let curr of adjList.get(currentVertex)) {
            if (!visited[curr]) {
                dfs(curr, adjList, visited, ans);
            }
        }
    }
}

//isMap is false when input adjacent list is a Array.
//isMap is true when input adjacent list is a Map.

let result_array = dfsOfGraph(adjListArrayGFG, 5, false)
let result_map = dfsOfGraph(adjListMap, 5, true)
console.log("=====>", result_array)
//console.log("=====>", result_map);

//https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1#