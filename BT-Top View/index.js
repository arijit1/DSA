class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Pair_Hd{          //Horizontal Distance
    constructor(root,hd){
        this.root = root;
        this.hd = 0
    }
}

class Solution{

    topView(root){
        let map = new Map();
        
        let queue = [];
        queue.push(new Pair_Hd(root,0));

        while(queue.length>0){
            let top = queue.shift();

            if(map.get(top.hd)==null){
                map.set(top.hd,top.Node.data);
            }

            if(top.Node.left!=null){
                queue.push(new Pair_Hd(top.Node.left,top.hd-1));
            }
            if(top.Node.right!=null){
                queue.push(new Pair_Hd(top.Node.right,top.hd+1));
            }
        }
        let res = [];
        let sortMap = new Map([...map.entries()].sort((a,b)=>a[0]-b[0]));
        for(let [key,val] of sortMap.entries()){
            res.push(val);
        }
        return res;
    }
}