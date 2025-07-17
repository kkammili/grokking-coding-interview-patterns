/*
PROBLEM STATEMENT:
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

PATTERN: Backtracking
*/

// Solution implementation
function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    
    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }
    
    function backtrack(row = 0) {
        if (row === n) {
            solutions.push(board.map(r => r.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    backtrack();
    return solutions;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Backtracking pattern is used to explore all possible configurations and backtrack when a configuration is invalid.
2. Approach:
   - Use a recursive function to place queens row by row.
   - Check if placing a queen in a position is valid.
   - If valid, place the queen and move to the next row.
   - If a solution is found, add it to the solutions list.
3. Solution Walkthrough:
   - Initialize the board and solutions list.
   - Define a helper function `isValid` to check if a queen can be placed.
   - Define a recursive function `backtrack` to explore configurations.
   - Use `backtrack` to find all solutions.
   - Return the list of solutions.
4. Complexity: Time O(n!), Space O(n^2)
*/
