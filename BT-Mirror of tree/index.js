class Solution{

    isSymmetric(left,right){
        if(left==null || right == null){
            return left==right;
        }

        if(left.data!= right.data) return false;

        return this.isSymmetric(left.left,right.right)&&this.isSymmetric(left.right,right.left);
    }

    mirror(root){
        if(root == null) return true;
        return this.isSymmetric(root.left,root.right);
    }
}