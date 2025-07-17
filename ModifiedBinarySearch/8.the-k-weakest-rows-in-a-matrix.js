/*
PROBLEM STATEMENT:
Find the K weakest rows in a matrix based on the number of soldiers in each row.

PATTERN: Modified Binary Search
*/

// Solution implementation
function kWeakestRows(mat, k) {
    const rowStrengths = mat.map((row, index) => [row.reduce((a, b) => a + b), index]);
    rowStrengths.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return rowStrengths.slice(0, k).map(pair => pair[1]);
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves sorting based on a custom metric, a variation of binary search.
2. Approach:
   - Calculate the strength of each row and sort to find the weakest.
3. Solution Walkthrough:
   - Use a combination of sum and index to sort and select the top K weakest rows.
4. Complexity: Time O(M log M), Space O(M) where M is the number of rows
*/
