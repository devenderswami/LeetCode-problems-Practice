/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
   public int count;

   public int countNodes(TreeNode root){
        if(root == null){
            return 0;
        }

        int left = countNodes(root.left);
        int right = countNodes(root.right);

        if(root.val == left + right){
            count++;
        }

        return  left + right + root.val;

   } 

    public int equalToDescendants(TreeNode root) {
        countNodes(root);
        return count ;
     
    }
}