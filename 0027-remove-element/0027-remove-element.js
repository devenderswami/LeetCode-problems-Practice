/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {


    let reader = 0 
    let writer = 0 
    let n = nums.length 

    while(reader<n){
        if(nums[reader] == val){
            reader++
        }else{
             nums[writer] = nums[reader];
            writer++;
            reader++
        }
    }

    return writer
    
};