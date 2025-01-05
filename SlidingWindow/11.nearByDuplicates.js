/**
 * Problem: Contains Near by Duplicate II
 * 
 * Statement:
 * You are given an integer array `nums` and an integer `k`.
 * Determine whether two distinct indices `i` and `j` exist in the array such that:
 * - `nums[i] == nums[j]` (the values are the same)
 * - `|i - j| <= k` (the absolute difference between the indices is at most `k`)
 * Return `true` if such indices exist, otherwise return `false`.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^3
 * - -10^3 <= nums[i] <= 10^3
 * - 0 <= k <= 10^4
 * 
 * Example 1:
 * Input: nums = [1, 2, 3, 1], k = 3
 * Output: true
 * Explanation: nums[0] == nums[3] and |0 - 3| = 3 <= k.
 * 
 * Example 2:
 * Input: nums = [1, 0, 1, 1], k = 1
 * Output: true
 * Explanation: nums[2] == nums[3] and |2 - 3| = 1 <= k.
 * 
 * Example 3:
 * Input: nums = [1, 2, 3, 1, 2, 3], k = 2
 * Output: false
 * Explanation: No two same values exist with index difference <= k.
 * 
 * Approach:
 * - Use a sliding window approach with a HashSet to keep track of the last `k` elements.
 * - If a duplicate value is found within the window, return `true`.
 * - Slide the window by removing the oldest element when the size exceeds `k`.
 * - If no duplicates are found, return `false`.
 */

function containsNearbyDuplicate(nums, k) {
    let seen = new Set();  // A set to track the last `k` elements.

    // Iterate through the array with the index `i`.
    for (let i = 0; i < nums.length; i++) {
        // If the current element exists in the set, we found a duplicate within range `k`.
        if (seen.has(nums[i])) {
            return true;  // Return true if a duplicate is found.
        }

        // Add the current element to the set.
        seen.add(nums[i]);

        // If the size of the set exceeds `k`, remove the oldest element.
        if (seen.size > k) {
            seen.delete(nums[i - k]);  // Remove the element `k` steps behind the current index.
        }
    }

    // If no duplicate is found within the specified range, return false.
    return false;
}

// Example usage:
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));  // Output: true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));  // Output: true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));  // Output: false
