class Solution {

    rview(root, ans, level) {
        if (root == null) return ans;

        if (ans.get(level) == null) {
            ans.set(level, root.data);
        }

        if (root.right != null) { this.rview(root.right, ans, level + 1) }

        if (root.left != null) { this.rview(root.left, ans, level + 1) }
    }

    rightView(root) {
        let ans = new Map();
        let res = [];
        this.rview(root, ans, 0);
        for(let [key,values] of ans.entries()){
            res.push(values);
        }
        return res;
    }

}