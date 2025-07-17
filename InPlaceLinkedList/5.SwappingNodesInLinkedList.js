/**
 * Swapping Nodes in a Linked List
 * 
 * Problem Statement:
 * You are given the head of a linked list, and an integer k.
 * Swap the values of the k-th node from the beginning and the k-th node from the end (the list is 1-indexed).
 * 
 * Example:
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [1,4,3,2,5]
 * 
 * Approach:
 * 1. Find the k-th node from the beginning.
 * 2. Find the k-th node from the end.
 * 3. Swap their values.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapNodes(head, k) {
    let first = head;
    let second = head;
    let current = head;

    // Move first to the k-th node
    for (let i = 1; i < k; i++) {
        first = first.next;
    }

    // Move current to the end, and second to the k-th node from the end
    while (current.next) {
        current = current.next;
        if (k > 1) {
            k--;
        } else {
            second = second.next;
        }
    }

    // Swap the values
    [first.val, second.val] = [second.val, first.val];

    return head;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(swapNodes(head, 2));  // Output: [1,4,3,2,5]
