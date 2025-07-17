/**
 * Remove Linked List Elements
 * 
 * Problem Statement:
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 * 
 * Approach:
 * 1. Use a dummy node to handle edge cases.
 * 2. Traverse the list and remove nodes with the given value.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeElements(head, val) {
    const dummy = new ListNode(0, head);
    let current = dummy;

    while (current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
console.log(removeElements(head, 6));  // Output: [1,2,3,4,5]
