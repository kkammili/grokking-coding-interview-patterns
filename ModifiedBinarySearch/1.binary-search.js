/*
PROBLEM STATEMENT:
Implement a basic binary search algorithm to find the position of a target value within a sorted array.

PATTERN: Modified Binary Search
*/

// Solution implementation
function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem is a classic example of binary search, a fundamental algorithm.
2. Approach:
   - Use a divide-and-conquer strategy to narrow down the search space.
3. Solution Walkthrough:
   - Calculate the middle index, compare with the target, and adjust the search range.
4. Complexity: Time O(log N), Space O(1)
*/
