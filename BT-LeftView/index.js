class Solution {

    lview(root, ans, level) {
        if (root == null) return ans;

        if (ans.get(level) == null) {
            ans.set(level, root.data);
        }
        if (root.left != null) { this.lview(root.left, ans, level + 1) }

        if (root.right != null) { this.lview(root.right, ans, level + 1) }
    }

    leftView(root) {   //console.log(root)
        let ans = new Map();
        let res = [];
        this.lview(root, ans, 0);
        for (const [key, value] of ans.entries()) {
            res.push(value)
        }
        return res
    }
}