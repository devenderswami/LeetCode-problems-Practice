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
var isValidBST = function(root) {
    const isBST = (root,l,r)=>{
          if(!root) return true
          if(root.val>=l && root.val<=r){
              let f1 = isBST(root.left,l,root.val-1)
              let f2 = isBST(root.right,root.val+1,r)
              return (f1 && f2) == true ? true: false

          }
          return false
      }     

      return isBST(root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY)
    
};