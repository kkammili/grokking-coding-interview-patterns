/*
PROBLEM STATEMENT:
Given a grid of integers where each cell represents the number of stones in that cell, determine the minimum number of moves required to spread the stones such that each cell has exactly one stone. A move consists of transferring a stone from one cell to an adjacent cell.

PATTERN: Backtracking
*/

// Solution implementation
function minMoves(grid) {
    let moves = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    
    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] <= 1) return;
        
        const excess = grid[r][c] - 1;
        grid[r][c] = 1;
        
        if (r > 0) {
            grid[r - 1][c] += excess;
            moves += excess;
            dfs(r - 1, c);
        }
        if (r < rows - 1) {
            grid[r + 1][c] += excess;
            moves += excess;
            dfs(r + 1, c);
        }
        if (c > 0) {
            grid[r][c - 1] += excess;
            moves += excess;
            dfs(r, c - 1);
        }
        if (c < cols - 1) {
            grid[r][c + 1] += excess;
            moves += excess;
            dfs(r, c + 1);
        }
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] > 1) {
                dfs(r, c);
            }
        }
    }
    
    return moves;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Backtracking pattern is used to explore all possible configurations and backtrack when a configuration is invalid.
2. Approach:
   - Use a depth-first search (DFS) to distribute excess stones to adjacent cells.
   - Track the number of moves required to achieve the distribution.
3. Solution Walkthrough:
   - Define a helper function `dfs` to perform the depth-first search.
   - Check if the current cell has more than one stone and distribute the excess.
   - Recursively call `dfs` for all 4-directionally connected cells.
   - Return the total number of moves.
4. Complexity: Time O(m * n), Space O(m * n)
*/
