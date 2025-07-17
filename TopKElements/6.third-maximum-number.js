/*
PROBLEM STATEMENT:
Find the third maximum number in an array. If it does not exist, return the maximum number.

PATTERN: Top K Elements
*/

// Solution implementation
function thirdMax(nums) {
    const uniqueNums = Array.from(new Set(nums));
    uniqueNums.sort((a, b) => b - a);
    return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0];
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem is a variation of finding the Kth largest element.
2. Approach:
   - Use a set to filter duplicates, sort, and select the third maximum.
3. Solution Walkthrough:
   - Remove duplicates, sort, and check if the third maximum exists.
4. Complexity: Time O(N log N), Space O(N)
*/
