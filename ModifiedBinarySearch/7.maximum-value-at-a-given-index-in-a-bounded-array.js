/*
PROBLEM STATEMENT:
Find the maximum value at a given index in a bounded array where the sum of the array is constrained.

PATTERN: Modified Binary Search
*/

// Solution implementation
function maxValue(n, index, maxSum) {
    let left = 1, right = maxSum;
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (isValid(mid, n, index, maxSum)) left = mid;
        else right = mid - 1;
    }
    return left;
}

function isValid(mid, n, index, maxSum) {
    let sum = mid;
    let leftCount = Math.min(index, mid - 1);
    sum += (mid - 1 + mid - leftCount) * leftCount / 2;
    let rightCount = Math.min(n - index - 1, mid - 1);
    sum += (mid - 1 + mid - rightCount) * rightCount / 2;
    return sum <= maxSum;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves maximizing a value under constraints using binary search.
2. Approach:
   - Use binary search to find the maximum possible value at the given index.
3. Solution Walkthrough:
   - Calculate the sum for a given mid value and check if it satisfies the constraints.
4. Complexity: Time O(log(maxSum)), Space O(1)
*/
