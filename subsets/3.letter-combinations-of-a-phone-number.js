/*
PROBLEM STATEMENT:
Given a string containing digits from 2-9, return all possible letter combinations that the number could represent.

PATTERN: Subsets
*/

// Solution implementation
function letterCombinations(digits) {
    if (!digits.length) return [];
    const map = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    const result = [];
    const backtrack = (index, path) => {
        if (path.length === digits.length) {
            result.push(path.join(''));
            return;
        }
        for (let char of map[digits[index]]) {
            path.push(char);
            backtrack(index + 1, path);
            path.pop();
        }
    };
    backtrack(0, []);
    return result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves generating combinations based on a mapping, similar to subsets.
2. Approach:
   - Use backtracking to explore all possible letter combinations.
3. Solution Walkthrough:
   - Recursively build combinations by choosing each letter for the current digit.
4. Complexity: Time O(4^N), Space O(N)
*/
