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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function helper(lh,rh){
            if(lh == null || rh == null){
                return lh == rh 
            }
            if(lh.val != rh.val){
                return false
            }

            return helper(lh.right,rh.left) && helper(lh.left,rh.right) 

        }
        return helper(root.left,root.right)
    
};