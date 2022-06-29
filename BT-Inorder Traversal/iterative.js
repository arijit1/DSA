class Solution{

    //REVIEW REQUIRED CHECK SOLUTION ON INTERNET
    
    inorderTraverse(root){
        let stack = [];
        let ans = [];
        stack.push(root);

        while(stack.length>0){
            let top = stack.shift();
            stack.push(top.left);
            ans.push(top.data);

            stack.push(top.right);
        }
        return ans;
    }


}