/*
PROBLEM STATEMENT:
Given an integer array nums of unique elements, return all possible subsets (the power set).

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
   - Explain why this is a Subsets problem
   - Identify pattern characteristics in the problem

2. Approach:
   - Step-by-step algorithmic reasoning
   - Time complexity: O(2^n)
   - Space complexity: O(n)

3. Solution Walkthrough:
   - Line-by-line explanation of the code
   - Edge cases handling
   - Optimization rationale
*/
