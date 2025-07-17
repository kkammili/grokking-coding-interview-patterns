/**
 * Reverse Nodes in k-Group
 * 
 * Problem Statement:
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 * k is a positive integer and is less than or equal to the length of the linked list.
 * If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
 * 
 * Example:
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 * 
 * Approach:
 * 1. Reverse the first k nodes of the list.
 * 2. Recursively call the function for the rest of the list.
 * 3. Connect the reversed part with the rest of the list.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head, k) {
    let count = 0;
    let node = head;

    // Find the k+1 node
    while (count < k && node !== null) {
        node = node.next;
        count++;
    }

    // If we have k nodes, then we reverse them
    if (count === k) {
        node = reverseKGroup(node, k); // Reverse the rest of the list
        while (count > 0) {
            count--;
            let temp = head.next;
            head.next = node;
            node = head;
            head = temp;
        }
        head = node;
    }

    return head;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseKGroup(head, 2));  // Output: [2,1,4,3,5]
