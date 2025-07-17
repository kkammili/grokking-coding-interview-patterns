/*
PROBLEM STATEMENT:
Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps. You can assume that you can always reach the last index.

PATTERN: Greedy Techniques
*/

// Solution implementation
function jump(nums) {
    let jumps = 0, currentEnd = 0, farthest = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    
    return jumps;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Use a greedy approach to track the farthest point that can be reached.
   - Increment the jump count when reaching the end of the current jump range.
3. Solution Walkthrough:
   - Initialize `jumps`, `currentEnd`, and `farthest`.
   - Loop through the array, updating `farthest` with the maximum reachable index.
   - If the current index reaches `currentEnd`, increment `jumps` and update `currentEnd` to `farthest`.
   - Return the total number of jumps.
4. Complexity: Time O(n), Space O(1)
*/
