//LEETCODE 1319. Number of Operations to Make Network Connected

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

 var dfs = function(i,adjList,visited){
    visited[i] = true;
   // console.log(i);
        let ng = adjList.get(i);
       // console.log(ng.length)
        for(let p=0;p<ng.length;p++){
            if(!visited[ng[p]]){
                dfs(ng[p],adjList,visited);
            }
        }
}

var makeConnected = function(n, connections) {
    //  create adjacency list. and count no of edges    

    //dft to find no of components
    // if 3 node we need 3-1=2 edges, so redundant edges will be 1.
    // N node , Edges = N-1, Redundant =. N-1-(C-1)
    //N=4 , C=2 , edges required =  4-1-(2-1) = 3-1 = 2
    
    let edge = 0 ;
    let adjList = new Map();
    for(let i=0;i<n;i++){
        adjList.get(connections[i][0]).set(connections[i][1]);
        adjList.get(connections[i][1]).set(connections[i][0]);
        // if(adjList.has(i)){
        //     edge++;
        //     adjList.get(i).set(connections[i]);
        // }
        // else{
        //     if(connections[i]===undefined){
        //         adjList.set(i,[]);
        //     }else{
        //         edge++;
        //         adjList.set(i,connections[i]);
        //     }
        // }
    }
    console.log(adjList)
    let visited = new Array(n).fill(false);
    let component = 0;
    for(let j=0;j<visited.length;j++){
        if(!visited[j]){
            component++;
            dfs(j,adjList,visited)
        }
    }
    //console.log(edge,component);

    if(edge< n-1){
        return -1;
    }
    let redundant = edge - ((n-1)-(component-1));
    if(redundant>= component-1){
        return component-1;
    }else{
        return -1;
    }
};

const  n1 = 4, connections1 = [[0,1],[0,2],[1,2]];
const n2=12 ,connections2 = [[1,5],[1,7],[1,2],[1,4],[3,7],[4,7],[3,5],[0,6],[0,1],[0,4],[2,6],[0,3],[0,2]]
let res = makeConnected(n2,connections2);
console.log(res);