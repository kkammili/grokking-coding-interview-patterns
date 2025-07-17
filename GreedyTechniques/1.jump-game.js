/*
PROBLEM STATEMENT:
Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.

PATTERN: Greedy Techniques
*/

// Solution implementation
function canJump(nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return true;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Iterate through the array, maintaining the maximum index that can be reached.
   - If at any point the current index is greater than the maximum reachable index, return false.
   - Update the maximum reachable index at each step.
3. Solution Walkthrough:
   - Initialize `maxReach` to 0.
   - Loop through the array, checking if the current index `i` is greater than `maxReach`.
   - If it is, return false as the end cannot be reached.
   - Update `maxReach` to the maximum of its current value and `i + nums[i]`.
   - If the loop completes, return true.
4. Complexity: Time O(n), Space O(1)
*/
