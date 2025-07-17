/*
PROBLEM STATEMENT:
Find a subsequence of length K with the largest sum in an array.

PATTERN: Top K Elements
*/

// Solution implementation
function maxSubsequence(nums, k) {
    return nums.map((num, index) => [num, index])
               .sort((a, b) => b[0] - a[0])
               .slice(0, k)
               .sort((a, b) => a[1] - b[1])
               .map(item => item[0]);
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves selecting elements based on their contribution to the sum.
2. Approach:
   - Sort by value to get the largest, then by index to maintain order.
3. Solution Walkthrough:
   - Pair elements with indices, sort by value, select top K, and sort by index.
4. Complexity: Time O(N log N), Space O(N)
*/
