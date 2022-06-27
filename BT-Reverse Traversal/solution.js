class Solution {
    reverseLevelOrder(root){
        if (root == null) return []
        
        let q = [];
        q.push(root);
        let res = [];
        
        while(q.length>0){
            res.push(q[0].data);
            let node = q.shift();
            //first insert right then left because we have to print in reverse order.
            if(node.right!=null){
                q.push(node.right);
            }
            if(node.left!=null){
                q.push(node.left)
            }
        }
        let res2 = [];
        console.log(res)
        for(let i=res.length-1; i>=0; i--){
             res2.push(res[i])
        }
        return res2
    }
}