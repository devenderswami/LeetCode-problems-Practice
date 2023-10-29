/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
     if (root === null) {
            return root;
        }

        let left = flatten(root.left);
        let right = flatten(root.right);

        if (left !== null) {
            let temp = left;
            while (temp.right !== null) {
                temp = temp.right;
            }
            temp.right = root.right;
            root.right = left;
            root.left = null;
        }

        return root;
    
};