
var maxProfit = function (prices) { //Time =O(N), space = O(1)
    let minSoFar = prices[0], maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minSoFar) {
            minSoFar = prices[i];
        }
            let price = prices[i] - minSoFar;
            if (price < 0) { price *= -1; }
            maxProfit = price > maxProfit ? price : maxProfit;
        
    }
    return maxProfit
};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices))

/**
 *   minSoFar = Math.min(minSoFar,prices[i]);
        let profit = prices[i] - minSoFar;
        maxProfit = Math.max(profit,maxProfit);
 */