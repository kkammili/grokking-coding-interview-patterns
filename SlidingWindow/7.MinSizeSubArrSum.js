/**
 * Problem: Given an array of positive integers `nums` and a positive integer `target`, 
 * return the minimal length of a contiguous subarray of which the sum is greater than 
 * or equal to `target`. If there is no such subarray, return 0 instead.
 * 
 * Constraints:
 * - 1 <= target <= 10^9
 * - 1 <= nums.length <= 10^5
 * - 1 <= nums[i] <= 10^4
 * 
 * Example:
 * Input: target = 9, nums = [1, 2, 7, 1, 8]
 * Output: 1 (subarray [9] or [8, 1] meets the target with the shortest length)
 * 
 * Approach:
 * - Use the sliding window technique to dynamically adjust the start and end of a window.
 * - Expand the window by increasing the `end` pointer.
 * - Once the sum is greater than or equal to `target`, shrink the window by increasing the `start` pointer.
 */

function minSubArrayLen(target, nums) {
    let minWindowSize = Infinity;  // Initialize the minimum window size to Infinity (to find minimum).
    let start = 0;  // Start pointer of the window.
    let currSum = 0;  // Sum of the current window.

    // Iterate over the array using the `end` pointer.
    for (let end = 0; end < nums.length; end++) {
        currSum += nums[end];  // Add the current element to the window sum.

        // Shrink the window while the sum is greater than or equal to the target.
        while (currSum >= target) {
            // Update the minimum window size if the current window is smaller.
            minWindowSize = Math.min(minWindowSize, end - start + 1);
            currSum -= nums[start];  // Remove the element at the start of the window.
            start++;  // Move the start pointer to the right.
        }
    }

    // If no valid subarray was found, return 0.
    return minWindowSize === Infinity ? 0 : minWindowSize;
}

// Example usage:
console.log(minSubArrayLen(9, [1, 2, 7, 1, 8]));  // Output: 1

