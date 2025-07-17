/*
PROBLEM STATEMENT:
Given an m x n board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

PATTERN: Backtracking
*/

// Solution implementation
function exist(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    
    function backtrack(r, c, index) {
        if (index === word.length) return true;
        if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index]) return false;
        
        const temp = board[r][c];
        board[r][c] = '#'; // mark as visited
        
        const found = backtrack(r + 1, c, index + 1) ||
                      backtrack(r - 1, c, index + 1) ||
                      backtrack(r, c + 1, index + 1) ||
                      backtrack(r, c - 1, index + 1);
        
        board[r][c] = temp; // unmark
        return found;
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (backtrack(r, c, 0)) return true;
        }
    }
    return false;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Backtracking pattern is used to explore all possible paths in the grid to find the word.
2. Approach:
   - Use a recursive function to explore each cell as a starting point.
   - Mark cells as visited to avoid revisiting.
   - Check all four possible directions from each cell.
3. Solution Walkthrough:
   - Define a helper function `backtrack` to explore paths.
   - Use nested loops to start the search from each cell.
   - If a path is found, return true.
   - If no path is found after exploring all cells, return false.
4. Complexity: Time O(m * n * 4^l), Space O(l)
*/
