/**
 * Reorder List
 * 
 * Problem Statement:
 * Given a singly linked list L: L0 → L1 → … → Ln-1 → Ln,
 * reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …
 * 
 * Example:
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 * 
 * Approach:
 * 1. Find the middle of the linked list.
 * 2. Reverse the second half of the list.
 * 3. Merge the two halves.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reorderList(head) {
    if (!head || !head.next) return;

    // Step 1: Find the middle of the list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev = null;
    let current = slow;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Step 3: Merge the two halves
    let first = head;
    let second = prev;
    while (second.next) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
reorderList(head);
console.log(head);  // Output: [1,4,2,3]
