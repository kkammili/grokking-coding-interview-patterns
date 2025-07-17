/*
PROBLEM STATEMENT:
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place form a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night. Given the "root" of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

PATTERN: Backtracking
*/

// Solution implementation
function rob(root) {
    function helper(node) {
        if (!node) return [0, 0];
        
        const left = helper(node.left);
        const right = helper(node.right);
        
        const robCurrent = node.val + left[1] + right[1];
        const skipCurrent = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        
        return [robCurrent, skipCurrent];
    }
    
    const result = helper(root);
    return Math.max(result[0], result[1]);
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Backtracking pattern is used to explore all possible configurations and backtrack when a configuration is invalid.
2. Approach:
   - Use a helper function to return two values: the maximum money when robbing or not robbing the current node.
   - Recursively calculate the maximum money for left and right subtrees.
   - Calculate the maximum money for the current node by considering both robbing and not robbing it.
3. Solution Walkthrough:
   - Define a helper function that returns an array with two elements: robCurrent and skipCurrent.
   - Recursively call the helper function for left and right children.
   - Calculate robCurrent by adding the node's value and the skip values of its children.
   - Calculate skipCurrent by taking the maximum of rob and skip values of its children.
   - Return the maximum of robCurrent and skipCurrent for the root.
4. Complexity: Time O(n), Space O(n)
*/
