/**
 * Problem: Best Time to Buy and Sell Stock
 * 
 * Statement:
 * Given an array where the element at index `i` represents the price of a stock on day `i`,
 * find the maximum profit you can achieve from buying and selling the stock once.
 * 
 * Rules:
 * - You can only buy the stock once and sell it later (i.e., buy before you sell).
 * - If no profit can be achieved, return `0`.
 * 
 * Constraints:
 * - 1 <= prices.length <= 10^3
 * - 0 <= prices[i] <= 10^5
 * 
 * Example 1:
 * Input: prices = [7, 1, 5, 3, 6, 4]
 * Output: 5
 * Explanation: Buy at day 1 (price = 1) and sell at day 4 (price = 6), profit = 6 - 1 = 5.
 * 
 * Example 2:
 * Input: prices = [7, 6, 4, 3, 1]
 * Output: 0
 * Explanation: No transaction is done, as prices always decrease.
 * 
 * Approach:
 * - Use a single pass to track the minimum price seen so far (`minPrice`) and the maximum profit.
 * - As we iterate, calculate the potential profit at each day by selling at the current price.
 * - Update the maximum profit if the new profit is higher.
 */

function maxProfit(prices) {
    let minPrice = Infinity;  // The minimum price seen so far.
    let maxProfit = 0;  // The maximum profit achievable.

    // Iterate over the prices array.
    for (let price of prices) {
        // Update the minimum price if the current price is lower.
        if (price < minPrice) {
            minPrice = price;
        }

        // Calculate the potential profit if sold at the current price.
        let profit = price - minPrice;

        // Update the maximum profit if the new profit is higher.
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    // Return the maximum profit. If no profit, this will be 0.
    return maxProfit;
}

// Example usage:
console.log(maxProfit([7, 1, 5, 3, 6, 4]));  // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));  // Output: 0
