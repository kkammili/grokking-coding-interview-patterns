/**
 * Reverse Linked List II
 * 
 * Problem Statement:
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
 * 
 * Example:
 * Input: head = [1,2,3,4,5], left = 2, right = 4
 * Output: [1,4,3,2,5]
 * 
 * Approach:
 * 1. Traverse the list to the node just before the left position.
 * 2. Reverse the sublist from left to right.
 * 3. Connect the reversed sublist back to the list.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseBetween(head, left, right) {
    if (!head || left === right) return head;

    const dummy = new ListNode(0, head);
    let prev = dummy;

    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    const start = prev.next;
    let then = start.next;

    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseBetween(head, 2, 4));  // Output: [1,4,3,2,5]
