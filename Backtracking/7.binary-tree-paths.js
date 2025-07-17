/*
PROBLEM STATEMENT:
Given the root of a binary tree, return all root-to-leaf paths in any order. A leaf is a node with no children.

PATTERN: Backtracking
*/

// Solution implementation
function binaryTreePaths(root) {
    const paths = [];
    
    function constructPaths(node, path) {
        if (node) {
            path += node.val.toString();
            if (!node.left && !node.right) {
                paths.push(path);
            } else {
                path += '->';
                constructPaths(node.left, path);
                constructPaths(node.right, path);
            }
        }
    }
    
    constructPaths(root, '');
    return paths;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Backtracking pattern is used to explore all possible paths from the root to the leaves.
2. Approach:
   - Use a recursive function to build paths from the root to each leaf.
   - Append the current node's value to the path and check if it's a leaf.
   - If it's a leaf, add the path to the result list.
3. Solution Walkthrough:
   - Define a helper function `constructPaths` to build paths.
   - Check if the current node is a leaf and add the path to the result.
   - Recursively call `constructPaths` for left and right children.
   - Return the list of paths.
4. Complexity: Time O(n), Space O(n)
*/
