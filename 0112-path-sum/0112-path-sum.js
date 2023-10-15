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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    function helper(A,B){
            if(A==null){return 0}
            if(A.left == null && A.right == null){
                if(B == A.val) return 1
                else { return 0 }
            }

            return helper(A.left,B-A.val) || helper(A.right,B-A.val)

        }
       return helper(root, targetSum)
    
};