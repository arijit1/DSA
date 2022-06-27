/*class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}*/

class Solution {
    //Function to find the height of a binary tree.
    height(node)
    {   let root = node;
        let queue = [];
        let level = 0;
        if(root == null) return 0;
        queue.push(root);
        queue.push(null);
        while(queue.length!=0){
            let cur = queue.shift();
            if(cur==null){
                if(queue.length==0){
                    return level+1;
                }else{
                    level++;
                queue.push(null);
                continue
                }
            }
            
            if(cur.left!=null){
                queue.push(cur.left);
            }
            if(cur.right!=null){
                queue.push(cur.right);
            }
        }
    }
}

// Nother Efficient Approach

class Solution {
    // Function to return the diameter of a Binary Tree.
    height(node)
    {
        let queue = [];
        
        if(node == null) return 0;
        
        let left = this.height(node.left);
        let right = this.height(node.right);
        
        if(left>right){
            var h = 1 + left;
        }else{
            var h = 1 + right;
        }
        return h;
    }
}