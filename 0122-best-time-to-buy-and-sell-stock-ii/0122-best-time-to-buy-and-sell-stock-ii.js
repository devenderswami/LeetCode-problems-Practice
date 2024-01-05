/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0 
    let valley = Number.MAX_SAFE_INTEGER
    let peak = valley
    
    for(let i = 0 ; i<prices.length ; i++){
        if(prices[i]<peak){
          total += peak - valley
          valley = prices[i]
          peak = valley
        }else{
          peak = prices[i]
        }

       
    }

     total += peak-valley

        return total

    
};