class Solution {
    public long countAlternatingSubarrays(int[] nums) {
   long res = 1, size = 1;
    for (int i = 1; i < nums.length; i++) {
        size = nums[i - 1] == nums[i] ? 1 : size + 1;
        res += size;
    }
    return res;
        
    }
}