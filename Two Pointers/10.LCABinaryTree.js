/*
Question:
You are given two nodes, p and q. The task is to return their lowest common ancestor (LCA). 
Both nodes have a reference to their parent node. The tree’s root is not provided; 
you must use the parent pointers to find the nodes' common ancestor.

Note:
- The lowest common ancestor of two nodes, p and q, is the lowest node in the binary tree, 
  with both p and q as descendants.
- A descendant of a node is any node reachable by following edges downward from that node, 
  including the node itself.

Constraints:
- -10^4 <= Node.data <= 10^4
*/

function lowestCommonAncestor(p, q) {
    // Use a Set to track the ancestors of p
    const ancestors = new Set();

    // Step 1: Traverse upward from node p to the root, storing all ancestors of p
    let current = p;
    while (current !== null) {
        ancestors.add(current);
        current = current.parent; // Move to the parent node
    }

    // Step 2: Traverse upward from node q and find the first common ancestor
    current = q;
    while (current !== null) {
        if (ancestors.has(current)) {
            return current; // Found the lowest common ancestor
        }
        current = current.parent; // Move to the parent node
    }

    return null; // Should not reach here if both p and q are in the tree
}

// Example Usage
class TreeNode {
    constructor(data, parent = null) {
        this.data = data;
        this.parent = parent;
    }
}

// Example Tree:
//       5
//      / \
//     3   8
//    / \   \
//   2   4   9

const root = new TreeNode(5);
const node3 = new TreeNode(3, root);
const node8 = new TreeNode(8, root);
const node2 = new TreeNode(2, node3);
const node4 = new TreeNode(4, node3);
const node9 = new TreeNode(9, node8);

// Finding LCA of 2 and 4
console.log(lowestCommonAncestor(node2, node4).data); // Output: 3

// Finding LCA of 2 and 9
console.log(lowestCommonAncestor(node2, node9).data); // Output: 5
