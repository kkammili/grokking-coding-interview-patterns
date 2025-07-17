/*
PROBLEM STATEMENT:
Find all subsets of a given set of numbers that sum up to a specific target.

PATTERN: Subsets
*/

// Solution implementation
function kSumSubsets(nums, target) {
    const result = [];
    const backtrack = (start, path, sum) => {
        if (sum === target) {
            result.push([...path]);
            return;
        }
        if (sum > target) return;
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path, sum + nums[i]);
            path.pop();
        }
    };
    backtrack(0, [], 0);
    return result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves finding subsets with a specific sum, a variation of subsets.
2. Approach:
   - Use backtracking to explore all possible subsets and check their sums.
3. Solution Walkthrough:
   - Recursively build subsets and track their sum to find valid ones.
4. Complexity: Time O(2^N), Space O(N)
*/
