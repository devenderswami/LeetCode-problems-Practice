class Solution {
    public long countSubarrays(int[] nums, int k) {
        int maxElement = Arrays.stream(nums).max().getAsInt();
        int start = 0;
        long ans = 0;
        int maxElementInWindow = 0;

        for(int end = 0 ; end < nums.length ; end++){
            if(nums[end] == maxElement){
                maxElementInWindow++;
            }
            while(k==maxElementInWindow){
                if(nums[start] == maxElement){
                maxElementInWindow--;
                }
                start++;
            }
            ans += start;
        }

        return ans;
        
    }
}