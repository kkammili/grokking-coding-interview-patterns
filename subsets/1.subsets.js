/*
PROBLEM STATEMENT:
Generate all possible subsets of a given set of numbers.

PATTERN: Subsets
*/

// Solution implementation
function subsets(nums) {
    const result = [];
    const backtrack = (start, path) => {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    };
    backtrack(0, []);
    return result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves generating all combinations, a typical subsets problem.
2. Approach:
   - Use backtracking to explore all possible combinations.
3. Solution Walkthrough:
   - Recursively build subsets by including or excluding each element.
4. Complexity: Time O(2^N), Space O(N)
*/
