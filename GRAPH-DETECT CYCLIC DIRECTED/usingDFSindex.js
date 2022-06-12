class Solution {
    // Function to detect cycle in a directed graph.
    
    cycle(curr,visited,adj,resC){
        visited[curr] = true; //3
        resC[curr] = true;
        const adjNode = adj[curr]; //3
        
        for(let p=0;p<adjNode.length;p++){
           //console.log(curr==adjNode[p],visited[adjNode[p]],adjNode[p])
            if(!visited[adjNode[p]]){
                if(this.cycle(adjNode[p],visited,adj,resC)){return true;}
            }
            else if(resC[adjNode[p]]){return true;}
        }
        resC[curr] = false;
        return false;
    }
    
    isCyclic(V, adj) {
        // code here
        //console.log(adj)
        let flag = false;
        let visited = new Array(V).fill(false);
        let resC = new Array(V).fill(false);
        
        for(let i =0; i<V;i++){
            if(!visited[i]){
                if(this.cycle(i,visited,adj,resC)) return true; 
            }
        }
        return false;
    }
}

const adjList = [ [ '1' ], [ '2' ], [ '3' ], [ '3' ] ];
let sol = new Solution();

console.log(sol.isCyclic(4,adjList));
