//BFS APPROACH
// clone Map<node, clonedNode>
    // traversed Set
    
    // BFS to traverse the graph (use above Set to avoid circle)
    // every time when process a node
    //     check if it is already traversed
    //     for each neighbor, 
    //           if not cloned, create a new node
    //           connected the node's clone
    //           if it is not traversed
    //               push the neighbor into the queue
    // return the clonded input node


//DFS APpproach
var cloneGraph = function(node) {
    if (node === null) return null
    
  
    const clonedMap = new Map()
    const traversed = new Set()
    
    const stack = [node]
    
    // clone the head
    clonedMap.set(node, new Node(node.val))
    
    while (stack.length > 0) {
      const top = stack.pop()

      if (traversed.has(top)) {
        continue
      }
      
      const clonedHead = clonedMap.get(top)
      
      for (let neighbor of top.neighbors) {
        if (clonedMap.has(neighbor)) {
          clonedHead.neighbors.push(clonedMap.get(neighbor))
        } else {
          const clonedNeighbor = new Node(neighbor.val)
          clonedHead.neighbors.push(clonedNeighbor)
          clonedMap.set(neighbor, clonedNeighbor)
        }
        
        // if it not traversed yet, queue it
        if (!traversed.has(neighbor)) {
          stack.push(neighbor)
        }
      }
      
      
      traversed.add(top)
    }
  
    return clonedMap.get(node)
  //return dfs(node,oldNode);  
};
const adjList = [
    [2,4],
    [1,3],
    [2,4],
    [1,3]
];
const adjList2 = {
    val:1,
    neighbors: [{ val:2, neighbors: [2,4]}]
}
cloneGraph(adjList);

// {
//     val: 1,
//     neighbors: [ { val: 2, neighbors: [Array] }, { val: 4, neighbors: [Array] } ]
//   }
  