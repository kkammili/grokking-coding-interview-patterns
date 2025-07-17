/*
PROBLEM STATEMENT:
Find the K closest elements to a target value in a sorted array.

PATTERN: Modified Binary Search
*/

// Solution implementation
function findClosestElements(arr, k, x) {
    let left = 0, right = arr.length - k;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (x - arr[mid] > arr[mid + k] - x) left = mid + 1;
        else right = mid;
    }
    return arr.slice(left, left + k);
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves finding a range of elements using binary search.
2. Approach:
   - Use binary search to find the starting point of the closest elements.
3. Solution Walkthrough:
   - Compare distances from the target and adjust the search range to find the optimal start.
4. Complexity: Time O(log(N-k) + k), Space O(1)
*/
