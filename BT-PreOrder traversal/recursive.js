/**
 * Definition for a binary tree node.
 * function TreeNode(data, left, right) {
 *     this.data = (data===undefined ? 0 : data)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 class Solution{

    preOrder(root,ans){
        if(root == null) return ans;

        //NLR

        ans.push(root.data);
        this.preOrder(root.left,ans);
        this.preOrder(root.right,ans);
    }

    preOrderTraversal(root){
        let ans = [];
        preOrder(root,ans);
        return ans;
    }

}