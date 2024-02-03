/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
   let sumGas = 0 
   let sumCost = 0 
    for(let i = 0 ; i < cost.length ; i++){
        sumGas = sumGas + gas[i]
        sumCost = sumCost + cost[i]
    }

    


    if(sumCost>sumGas){
        return -1
    }
     let currentGas = 0 
     let startingIndex = 0
    for(let i = 0 ; i < gas.length ; i++){

        currentGas = currentGas + (gas[i] - cost[i]);


        if(currentGas<0){
            currentGas = 0 
            startingIndex = i+1
        }

      


    }
      return startingIndex
    
};