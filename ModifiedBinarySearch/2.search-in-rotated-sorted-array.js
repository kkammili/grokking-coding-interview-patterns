/*
PROBLEM STATEMENT:
Search for a target value in a rotated sorted array and return its index.

PATTERN: Modified Binary Search
*/

// Solution implementation
function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves searching in a rotated array, a variation of binary search.
2. Approach:
   - Determine which part of the array is sorted and adjust the search range accordingly.
3. Solution Walkthrough:
   - Compare the target with the middle element and adjust the search range based on sorted order.
4. Complexity: Time O(log N), Space O(1)
*/
