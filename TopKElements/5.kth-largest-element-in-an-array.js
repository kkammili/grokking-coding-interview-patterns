/*
PROBLEM STATEMENT:
Find the Kth largest element in an unsorted array.

PATTERN: Top K Elements
*/

// Solution implementation
function findKthLargest(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves finding a specific order statistic, a common Top K Elements task.
2. Approach:
   - Sort the array and directly access the Kth largest element.
3. Solution Walkthrough:
   - Sort in descending order and return the element at index K-1.
4. Complexity: Time O(N log N), Space O(1)
*/
