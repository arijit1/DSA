//https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1
class Solution {
    reverseLevelOrder(root){
        //console.log(root);
        let ans = [];
      let ansMap = new Map();
        let queue = [];
        let level = 0;
        queue.push(root);
        queue.push(null);
        while(queue.length!=0){
            let cur = queue.shift();
            if(cur==null){
                if(queue.length==0){
                    return;
                }
                level++;
                //ans.push(null);
                //ansMap.set(level,)
                continue;
            }
            if(ansMap.has(level)){
                let newAns = [ansMap.get(level), cur.data]
                ansMap.set(level,newAns.join(""))
            }
            else{ ansMap.set(level,cur.data); }
            //ans.push(cur.data);
            if(cur.left!=null){
                queue.push(cur.left);
            }
            if(cur.right!=null){
                queue.push(cur.right);
            }
        }
        //console.log(level,ansMap)
        for(let i=level; i>=0; i--){
            //console.log(i)
            if(ansMap.get(i).length>1){
                ans.push([...ansMap.get(i)])
            }
            else ans.push(ansMap.get(i))
        }
        return ans;
    }
}