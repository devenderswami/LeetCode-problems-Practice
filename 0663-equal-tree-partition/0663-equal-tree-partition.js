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
var checkEqualTree = function(root) {
   
         
        function sum(root) {
            if (root == null) {
                return 0;
            }
            return sum(root.left) + sum(root.right) + root.val;
        }

        let totalSum = sum(root);
        if (totalSum % 2 === 1) {
            return false;
        }
        let ans = false;

        function sum2(root) {
            if (root == null) {
                return false;
            }
            let lans = sum2(root.left);
            let rans = sum2(root.right);
            if (lans === totalSum / 2 || rans === totalSum / 2) {
                ans = true;
               
            }
            return lans + rans + root.val;
        }

         sum2(root);
         return ans
        

    
};