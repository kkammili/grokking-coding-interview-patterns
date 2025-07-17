/*
PROBLEM STATEMENT:
Find the single element in a sorted array where every other element appears twice.

PATTERN: Modified Binary Search
*/

// Solution implementation
function singleNonDuplicate(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (mid % 2 === 1) mid--; // Ensure mid is even
        if (nums[mid] === nums[mid + 1]) left = mid + 2;
        else right = mid;
    }
    return nums[left];
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves finding a unique element using binary search.
2. Approach:
   - Use binary search to find the element that does not have a duplicate.
3. Solution Walkthrough:
   - Adjust the search range based on the position of duplicates.
4. Complexity: Time O(log N), Space O(1)
*/
