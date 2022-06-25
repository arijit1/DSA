//https://practice.geeksforgeeks.org/problems/level-order-traversal/1#
class Solution {
    //Function to return the level order traversal of a tree.
    levelOrder(node)
    {
    let array = [];
    let queue = [];
    queue.push(node);
    while(queue.length!=0){
        let cur = queue.shift();
        array.push(cur.data);
        //console.log(cur)
        if(cur.left != null){
            queue.push(cur.left)
        }
        if(cur.right != null){
            queue.push(cur.right)
        }
    }
        return array;
    }
}

// const node =  {
//     data: 1,
//     left: Node { data: 3, left: null, right: null },
//     right: Node { data: 2, left: null, right: null }
//   }