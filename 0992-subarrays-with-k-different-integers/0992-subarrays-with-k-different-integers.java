class Solution {
    public int subarraysWithKDistinct(int[] nums, int k) {
       return slidingWindowAtMost(nums,k) - slidingWindowAtMost(nums,k-1);
    }

    public int slidingWindowAtMost(int nums[], int distinctk){
        Map<Integer,Integer> freqMap = new HashMap<>();
        int left = 0 ;
        int totalCount = 0;

        for(int right = 0;right<nums.length;right++){
            freqMap.put(nums[right],freqMap.getOrDefault(nums[right],0)+1);

            while(freqMap.size()>distinctk){
                freqMap.put(nums[left],freqMap.get(nums[left])-1);
                if(freqMap.get(nums[left])==0){
                    freqMap.remove(nums[left]);
                }
                 left++;
            }


        totalCount += (right-left+1);

           
        }

        return totalCount;

    }
}