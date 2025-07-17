/*
PROBLEM STATEMENT:
Generate all possible permutations of a given set of numbers.

PATTERN: Subsets
*/

// Solution implementation
function permute(nums) {
    const result = [];
    const backtrack = (path, used) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            path.push(nums[i]);
            used[i] = true;
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    };
    backtrack([], Array(nums.length).fill(false));
    return result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves generating all permutations, a variation of subsets.
2. Approach:
   - Use backtracking to explore all possible orderings.
3. Solution Walkthrough:
   - Recursively build permutations by choosing each element in turn.
4. Complexity: Time O(N!), Space O(N)
*/
