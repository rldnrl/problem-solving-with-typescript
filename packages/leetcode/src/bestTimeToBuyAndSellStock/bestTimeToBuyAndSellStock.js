/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let answer = 0;
  let minPrice = Number.MAX_VALUE;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > answer) {
      answer = price - minPrice;
    }
  }

  return answer;
}

/**
 * @param {number[]} prices
 * @return {number}
 */
 function maxProfitWithSlidingWindow(prices) {
  let answer = 0;
  
  let left = 0;
  for (let right = 1; right < prices.length; right++) {
    if (prices[left] < prices[right]) {
      answer = Math.max(answer, prices[right] - prices[left])
    } else {
      left = right;
    }
  }

  return answer;
}

console.log(maxProfitWithSlidingWindow([7,1,5,3,6,4]));