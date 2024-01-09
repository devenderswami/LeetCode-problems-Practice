/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = haystack.length
    let m = needle.length

    for(let windowstart = 0 ; windowstart<= n-m; windowstart++){
        for(let i = 0 ; i<m ; i++){
            if(needle[i]!= haystack[windowstart+i]){
                break
            }

            if(i == m-1){
                return windowstart
            }
        }
    }
   return -1
};