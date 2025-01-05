/**
 * Problem: Maximum Average Subarray I
 * 
 * Statement:
 * Given an array of integers `nums` and an integer `k`, return the maximum average
 * of a contiguous subarray of length `k`.
 * 
 * Constraints:
 * - 1 <= k <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * 
 * Example 1:
 * Input: nums = [1, 12, -5, -6, 50, 3], k = 4
 * Output: 12.75
 * Explanation: The subarray [12, -5, -6, 50] has the maximum average of 12.75.
 * 
 * Example 2:
 * Input: nums = [-1, -2, -3, -4, -5], k = 2
 * Output: -1.5
 * Explanation: The subarray [-1, -2] has the maximum average of -1.5.
 * 
 * Approach:
 * - Use the sliding window technique to avoid recalculating the sum for each subarray.
 * - Maintain a running sum of the current subarray of length `k`.
 * - Slide the window by adding the next element and removing the first element of the window.
 */

function maxAvgSubArr(nums, k) {
    let currSum = 0;  // Holds the sum of the current subarray of length `k`.
    let maxSum;  // Holds the maximum sum of any subarray of length `k`.

    // Calculate the sum of the first `k` elements (initial window).
    for (let i = 0; i < k; i++) {
        currSum += nums[i];  // Add each of the first `k` elements to `currSum`.
    }

    // Set `maxSum` as the sum of the first window.
    maxSum = currSum;

    // Slide the window across the array.
    for (let end = k; end < nums.length; end++) {
        currSum += nums[end];  // Add the next element in the array to the sum.
        currSum -= nums[end - k];  // Subtract the element that is no longer in the window.

        // Update `maxSum` if the new window sum is greater.
        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }

    // Return the maximum average by dividing `maxSum` by `k`.
    return maxSum / k;
}

// Example usage:
console.log(maxAvgSubArr([-1, -2, -3, -4, -5], 2));  // Output: -1.5
