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
   - Explain why this is a Greedy Techniques problem
   - Identify pattern characteristics in the problem

2. Approach:
   - Step-by-step algorithmic reasoning
   - Time complexity: O(n)
   - Space complexity: O(1)

3. Solution Walkthrough:
   - Line-by-line explanation of the code
   - Edge cases handling
   - Optimization rationale
*/
