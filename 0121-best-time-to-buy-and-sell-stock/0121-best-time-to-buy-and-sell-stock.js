/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxprofit = 0 
    let minSoFar =  Number.MAX_SAFE_INTEGER
    let n = prices.length

    for(let i = 0 ; i<n ; i++ ){
        if(prices[i]<minSoFar){
            minSoFar = prices[i]
        }else{
            maxprofit = Math.max(maxprofit,prices[i]-minSoFar)
        }
    }

    return maxprofit
    
};