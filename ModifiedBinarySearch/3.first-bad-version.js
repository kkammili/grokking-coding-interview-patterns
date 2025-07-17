/*
PROBLEM STATEMENT:
Find the first bad version in a series of versions using a given API.

PATTERN: Modified Binary Search
*/

// Solution implementation
function solution(isBadVersion) {
    return function(n) {
        let left = 1, right = n;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        return left;
    };
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem is a classic binary search problem with a specific condition.
2. Approach:
   - Use binary search to efficiently find the first occurrence of a bad version.
3. Solution Walkthrough:
   - Narrow down the search space by checking the middle version and adjusting the range.
4. Complexity: Time O(log N), Space O(1)
*/
