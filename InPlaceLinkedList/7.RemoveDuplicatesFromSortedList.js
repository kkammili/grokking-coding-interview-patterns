/**
 * Remove Duplicates from Sorted List
 * 
 * Problem Statement:
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 * 
 * Example:
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 * 
 * Approach:
 * 1. Traverse the list.
 * 2. If the current node's value is the same as the next node's value, skip the next node.
 * 3. Continue until the end of the list.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteDuplicates(head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

// Example usage:
const head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
console.log(deleteDuplicates(head));  // Output: [1,2,3]
