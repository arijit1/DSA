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

    //LRN

    postOrder(root,ans){
        if(root == null) return ans;

        this.postOrder(root.left,ans);
        this.postOrder(root.right,ans);
        ans.push(root.data);
    }

    postOrderTraversal(root){
        let ans = [];
        postOrder(root,ans);
        return ans;
    }

}