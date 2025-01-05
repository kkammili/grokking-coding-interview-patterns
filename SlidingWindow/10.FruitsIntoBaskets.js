/**
 * Problem: Fruit Into Baskets
 * 
 * Statement:
 * While visiting a farm of fruits, you have been given a row of fruits represented by 
 * an integer array `fruits`, where `fruits[i]` is the type of fruit the `i-th` tree produces.
 * You have to collect fruits following these rules:
 * 
 * Rules:
 * - You are given only two baskets, each capable of holding an unlimited quantity of a single type of fruit.
 * - You can start collecting from any tree but must collect exactly one fruit from each tree 
 *   (including the starting tree) while moving to the right.
 * - You must stop when encountering a tree with a fruit type that cannot fit into any of your baskets.
 * 
 * Task:
 * Return the maximum number of fruits you can collect following the above rules for the given array of fruits.
 * 
 * Constraints:
 * - 1 <= fruits.length <= 10^3
 * - 0 <= fruits[i] < 2^31
 * 
 * Example 1:
 * Input: fruits = [1, 2, 1]
 * Output: 3
 * Explanation: We can collect all fruits since there are only 2 types: [1, 2, 1].
 * 
 * Example 2:
 * Input: fruits = [0, 1, 2, 2]
 * Output: 3
 * Explanation: We can collect fruits [1, 2, 2]. If we start at tree 1 (fruit type 1) and stop at tree 3.
 * 
 * Example 3:
 * Input: fruits = [1, 2, 3, 2, 2]
 * Output: 4
 * Explanation: We can collect fruits [2, 3, 2, 2].
 * 
 * Approach:
 * - Use a sliding window to track the current sequence of fruit types in the two baskets.
 * - Move the `end` pointer to expand the window and include more fruits.
 * - When more than two types of fruits are encountered, shrink the window from the `start` 
 *   until only two types of fruits remain.
 * - Track the maximum number of fruits collected.
 */

function totalFruit(fruits) {
    let basket = new Map();  // Map to store the count of each fruit type in the current window.
    let maxFruits = 0;  // Maximum number of fruits collected.
    let start = 0;  // Start of the sliding window.

    // Iterate over the array with the `end` pointer.
    for (let end = 0; end < fruits.length; end++) {
        let fruit = fruits[end];  // Current fruit type at `end`.
        basket.set(fruit, (basket.get(fruit) || 0) + 1);  // Add the fruit to the basket.

        // If there are more than 2 types of fruits, shrink the window.
        while (basket.size > 2) {
            let startFruit = fruits[start];  // Fruit type at `start`.
            basket.set(startFruit, basket.get(startFruit) - 1);  // Remove one fruit of `start` type.
            if (basket.get(startFruit) === 0) {
                basket.delete(startFruit);  // Remove the fruit type if count becomes 0.
            }
            start++;  // Move the `start` pointer to the right.
        }

        // Calculate the number of fruits in the current window and update the maximum.
        maxFruits = Math.max(maxFruits, end - start + 1);
    }

    // Return the maximum number of fruits collected.
    return maxFruits;
}

// Example usage:
console.log(totalFruit([1, 2, 1]));  // Output: 3
console.log(totalFruit([0, 1, 2, 2]));  // Output: 3
console.log(totalFruit([1, 2, 3, 2, 2]));  // Output: 4
