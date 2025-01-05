/**
 * Problem: Dieter Calorie Points
 * 
 * Statement:
 * A dieter consumes `calories[i]` calories on the `i-th` day.
 * Given an integer `k`, the dieter reviews their calorie intake over every sequence
 * of `k` consecutive days (from `calories[i]` to `calories[i + k - 1]`).
 * For each sequence, they calculate `T`, the total calories consumed over those `k` days:
 * 
 * Rules:
 * - If `T` is less than `lower`, the dieter performs poorly and loses 1 point.
 * - If `T` is greater than `upper`, the dieter performs better and gains 1 point.
 * - If `T` is between `lower` and `upper` (inclusive), their points remain the same.
 * 
 * The dieter starts with zero points. Return the total points after the dieter follows
 * this routine for all `calories.length` days.
 * 
 * Constraints:
 * - 1 <= k <= calories.length <= 10^5
 * - 0 <= calories[i] <= 20000
 * - 0 <= lower <= upper
 * 
 * Example 1:
 * Input: calories = [1, 2, 3, 4, 5], k = 2, lower = 3, upper = 6
 * Output: 2
 * Explanation:
 * Subarrays of length `k = 2`:
 * - [1, 2] -> Sum = 3 (within range [lower, upper]) → no points.
 * - [2, 3] -> Sum = 5 (within range [lower, upper]) → no points.
 * - [3, 4] -> Sum = 7 (> upper) → +1 point.
 * - [4, 5] -> Sum = 9 (> upper) → +1 point.
 * Total points = 2.
 * 
 * Example 2:
 * Input: calories = [10, 20, 30, 40, 50], k = 3, lower = 50, upper = 100
 * Output: 1
 * 
 * Approach:
 * - Use the sliding window technique to avoid recalculating the sum for each subarray.
 * - Maintain a running sum of the current subarray of length `k`.
 * - Slide the window by adding the next day's calories and removing the first day's calories.
 */

function dietPoints(calories, k, lower, upper) {
    let currSum = 0;  // Sum of the current window of `k` days.
    let points = 0;  // Total points the dieter has.

    // Calculate the sum of the first `k` days.
    for (let i = 0; i < k; i++) {
        currSum += calories[i];  // Add the first `k` elements to `currSum`.
    }

    // Check the points for the first `k` days.
    if (currSum < lower) points -= 1;  // Lose 1 point if sum is below `lower`.
    else if (currSum > upper) points += 1;  // Gain 1 point if sum is above `upper`.

    // Slide the window across the array.
    for (let end = k; end < calories.length; end++) {
        currSum += calories[end];  // Add the next day's calories to the sum.
        currSum -= calories[end - k];  // Remove the first day of the previous window.

        // Update points based on the new window sum.
        if (currSum < lower) points -= 1;  // Lose 1 point if sum is below `lower`.
        else if (currSum > upper) points += 1;  // Gain 1 point if sum is above `upper`.
    }

    // Return the total points.
    return points;
}

// Example usage:
console.log(dietPoints([1, 2, 3, 4, 5], 2, 3, 6));  // Output: 2
console.log(dietPoints([10, 20, 30, 40, 50], 3, 50, 100));  // Output: 1
