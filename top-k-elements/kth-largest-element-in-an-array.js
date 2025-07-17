/*
PROBLEM STATEMENT:
Find the kth largest element in an unsorted array. Note that it is the kth largest element in sorted order, not the kth distinct element.

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
   - Explain why this is a Top K Elements problem
   - Identify pattern characteristics in the problem

2. Approach:
   - Step-by-step algorithmic reasoning
   - Time complexity: O(n log n)
   - Space complexity: O(1)

3. Solution Walkthrough:
   - Line-by-line explanation of the code
   - Edge cases handling
   - Optimization rationale
*/
