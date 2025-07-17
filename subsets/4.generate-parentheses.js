/*
PROBLEM STATEMENT:
Generate all combinations of well-formed parentheses given n pairs.

PATTERN: Subsets
*/

// Solution implementation
function generateParenthesis(n) {
    const result = [];
    const backtrack = (open, close, path) => {
        if (path.length === 2 * n) {
            result.push(path.join(''));
            return;
        }
        if (open < n) {
            path.push('(');
            backtrack(open + 1, close, path);
            path.pop();
        }
        if (close < open) {
            path.push(')');
            backtrack(open, close + 1, path);
            path.pop();
        }
    };
    backtrack(0, 0, []);
    return result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves generating valid combinations, a variation of subsets.
2. Approach:
   - Use backtracking to explore all valid parenthesis combinations.
3. Solution Walkthrough:
   - Recursively build combinations by adding open or close parentheses.
4. Complexity: Time O(4^N / sqrt(N)), Space O(N)
*/
