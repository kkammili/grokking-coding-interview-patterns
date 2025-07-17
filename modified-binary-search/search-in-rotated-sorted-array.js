/*
PROBLEM STATEMENT:
You are given an integer array nums sorted in ascending order (with distinct values), and an integer target. Suppose that nums is rotated at some pivot unknown to you beforehand. If target is found in the array return its index, otherwise return -1.

PATTERN: Modified Binary Search
*/

// Solution implementation
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - Explain why this is a Modified Binary Search problem
   - Identify pattern characteristics in the problem

2. Approach:
   - Step-by-step algorithmic reasoning
   - Time complexity: O(log n)
   - Space complexity: O(1)

3. Solution Walkthrough:
   - Line-by-line explanation of the code
   - Edge cases handling
   - Optimization rationale
*/
