class Solution {
    // Function to detect cycle in a directed graph.
    // BFS => Kahn's Algorithm
    isCyclic(V, adj) {
        // code here
       const queue = [];
        const inDegree = new Array(V).fill(0);
        let no = 0; //starting vertex
        const visited = new Array(V).fill(false);
        
        for(let i=0;i<V;i++) {
            for(let neighbour of adj[i]) {
                inDegree[neighbour]++;
            }
        }
        console.log(inDegree)
        for(let i=0;i<V;i++) {
            if(inDegree[i] === 0) {
                queue.push(i);
            }
        }
        
        while(queue.length) {
            const currV = queue.shift();
            
            if(visited[currV]) continue;
            
            visited[currV] = true;
            no++;
            for(let n of adj[currV]) {
                inDegree[n]--;
                
                if(inDegree[n]===0) {
                    queue.push(n);
                }
                
            }
        }   
        console.log(inDegree,no,V)
        if(no!==V) return true;
        else return false;
    }
}
const adjList = [ [ '1' ], [ '2' ], [ '3' ], [ '3' ] ];

let sol = new Solution();

console.log(sol.isCyclic(4,adjList));