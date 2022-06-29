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
    
    //LNR

    inorder(root,ans){
        if(root == null) return ans;

        //traverse through left first.
        this.inorder(root.left,ans);
        
        //after reaching the bottom node of left side put inside ans array.
        ans.push(root.data);

        //traverse through right node
        this.inorder(root.right,ans);
    }

    inOrderTraversal(root){
        let ans = [];
        inorder(root,ans);
        return ans;
    }

}