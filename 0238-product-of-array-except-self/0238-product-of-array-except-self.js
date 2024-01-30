/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
  let n = nums.length
  let answer = new Array(n)

  answer[0] = 1
  for(let i = 1; i<n ; i++){
     answer[i] = answer[i-1] * nums[i-1]
  }

  let right = 1
  for(let i = n-1; i>=0 ; i--){
     answer[i] = answer[i] * right
     right *= nums[i]
  }

  return answer

    
};