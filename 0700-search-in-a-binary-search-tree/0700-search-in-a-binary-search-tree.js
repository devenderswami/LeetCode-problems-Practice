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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let temp = root
		while(temp!=null && temp.val != val){
		 if(temp.val < val){
				temp = temp.right
			}else{
				temp = temp.left
			}
		}

		return temp
    
};