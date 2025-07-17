/*
PROBLEM STATEMENT:
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc]. To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor. Return the modified image after performing the flood fill.

PATTERN: Backtracking
*/

// Solution implementation
function floodFill(image, sr, sc, newColor) {
    const originalColor = image[sr][sc];
    if (originalColor === newColor) return image;
    
    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= image.length || c >= image[0].length || image[r][c] !== originalColor) return;
        image[r][c] = newColor;
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
    
    dfs(sr, sc);
    return image;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Backtracking pattern is used to explore all possible configurations and backtrack when a configuration is invalid.
2. Approach:
   - Use a depth-first search (DFS) to explore all connected pixels of the same color.
   - Change the color of each connected pixel to the new color.
3. Solution Walkthrough:
   - Define a helper function `dfs` to perform the depth-first search.
   - Check if the current pixel is within bounds and has the original color.
   - Change the color of the current pixel to the new color.
   - Recursively call `dfs` for all 4-directionally connected pixels.
   - Return the modified image.
4. Complexity: Time O(m * n), Space O(m * n)
*/
