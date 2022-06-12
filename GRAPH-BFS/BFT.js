/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/

class BreadthFirstTraversal {
    bfs(adj,V){
        let visited = new Array(V).fill(false);
        let ans = [];
        var queue = new Array();
        visited[0] = true;
        queue.push(0);
        ans.push(0);
        
        while(queue.length!==0){
            var currentEle = queue.shift(); //0
            const adjNode = adj[currentEle]; //[1,2,3]
            
            for(let p=0; p < adjNode.length; p++){
                if(visited[adjNode[p]]===false){
                    visited[adjNode[p]] = true;
                    queue.push(adjNode[p]);
                    ans.push(adjNode[p]);
                }
            }
        }
        return ans;
        
    }
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj) {
        //var adj = adj.split(',').split(',').map(Number);
        
        let ans = this.bfs(adj,V);
        
        //console.log(ans)
        return ans;
    }
}