/**
 * Swap Nodes in Pairs
 * 
 * Problem Statement:
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * Example:
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 * 
 * Approach:
 * 1. Use a dummy node to simplify edge cases.
 * 2. Swap pairs of nodes iteratively.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    const dummy = new ListNode(0, head);
    let current = dummy;

    while (current.next && current.next.next) {
        const first = current.next;
        const second = current.next.next;

        first.next = second.next;
        second.next = first;
        current.next = second;

        current = first;
    }

    return dummy.next;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(swapPairs(head));  // Output: [2,1,4,3]
