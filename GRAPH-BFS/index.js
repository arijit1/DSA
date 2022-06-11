class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, [])
    }
    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }
}
let noOfVertices = 6;
let g = new Graph(noOfVertices);

let vertices = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i])
}
g.addEdge(0,1);
g.addEdge(0,3);
g.addEdge(1,2);
g.addEdge(3,4);
g.addEdge(2,4);
g.addEdge(4,5);


//Breadth First Search
let adjList = g.AdjList;
console.log(adjList);


function Bfs(adjList, src, dest, visited, noOfvertices, pred, dis) { 
    let v = noOfvertices;
    var queue = new Array();
    for(let i = 0 ;i<v;i++){
        visited[i] = false;
        dis[i] = 0;
        pred[i] = -1;
    }
    visited[src] = true;
    queue.push(src);
    while(queue.length!==0){
        console.log("Queue46",queue)
        var getQueueElement = queue.shift();
        console.log(getQueueElement)

        var get_list = adjList.get(getQueueElement);
        console.log(get_list)

        for(var i in get_list){
            console.log("Queue",queue)
            var neighbour = get_list[i];
            console.log('neighbour',neighbour , visited[neighbour])
            if(visited[neighbour]===false){
                visited[neighbour] = true;
                dis[neighbour]=dis[getQueueElement]+1;
                pred[neighbour] = getQueueElement;
                queue.push(neighbour);

                if(neighbour===dest){
                    let obj = {reached:true,pred:pred,dis:dis,queue}
                    return obj;
                }
            }
        }
    }
    return false;
}

//distance
//predecessor

let visited = [];
let result = Bfs(adjList,0,5,visited,noOfVertices,[],[]);
console.log("Result -> ",result,visited);
