/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length
    
    let a = new Array(n)
    for(let i = 0; i<n; i++){
       a[(i+k)%nums.length] = nums[i]


        }
    

    for(let i = 0 ; i<n ;i++){
        nums[i] = a[i]
    }
    
};