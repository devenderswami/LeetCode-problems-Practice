/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0 
    let right = height.length -1 
    let maxLeftHeight = height[left]
    let maxRightHeight = height[right]
    let water = 0 
    while(left<right){
        if(maxLeftHeight<maxRightHeight){
            left++
            if(height[left]<maxLeftHeight){
               water += maxLeftHeight - height[left]
            }else{
                maxLeftHeight = height[left] 
            }
        }else{
            right--
            if(height[right]<maxRightHeight){
               water += maxRightHeight - height[right]
            }else{
                maxRightHeight = height[right] 
            }

        }
    }

    return water
     
    
};