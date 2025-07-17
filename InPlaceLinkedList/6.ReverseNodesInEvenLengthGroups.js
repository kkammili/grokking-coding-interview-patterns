/**
 * Reverse Nodes in Even Length Groups
 * 
 * Problem Statement:
 * You are given the head of a linked list. The nodes in the linked list are sequentially assigned to non-empty groups whose lengths form the sequence of the natural numbers (1, 2, 3, 4, ...).
 * Reverse the nodes in each group with an even length, and return the head of the modified linked list.
 * 
 * Example:
 * Input: head = [1,2,3,4,5,6,7,8]
 * Output: [1,3,2,6,5,4,7,8]
 * 
 * Approach:
 * 1. Traverse the list and group nodes.
 * 2. Reverse nodes in groups with even lengths.
 * 3. Connect the groups back together.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseEvenLengthGroups(head) {
    let groupSize = 1;
    let current = head;
    let prevGroupEnd = null;

    while (current) {
        let groupStart = current;
        let count = 0;

        // Traverse the current group
        while (current && count < groupSize) {
            current = current.next;
            count++;
        }

        // If the group size is even, reverse the group
        if (count % 2 === 0) {
            let prev = current;
            let node = groupStart;
            for (let i = 0; i < count; i++) {
                let next = node.next;
                node.next = prev;
                prev = node;
                node = next;
            }
            if (prevGroupEnd) {
                prevGroupEnd.next = prev;
            } else {
                head = prev;
            }
            prevGroupEnd = groupStart;
        } else {
            prevGroupEnd = groupStart;
            for (let i = 0; i < count - 1; i++) {
                prevGroupEnd = prevGroupEnd.next;
            }
        }

        groupSize++;
    }

    return head;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))))));
console.log(reverseEvenLengthGroups(head));  // Output: [1,3,2,6,5,4,7,8]
