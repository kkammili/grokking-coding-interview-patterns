/**
 * Split Linked List in Parts
 * 
 * Problem Statement:
 * Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.
 * The length of each part should be as equal as possible.
 * 
 * Example:
 * Input: head = [1,2,3], k = 5
 * Output: [[1],[2],[3],[],[]]
 * 
 * Approach:
 * 1. Calculate the total length of the list.
 * 2. Determine the size of each part.
 * 3. Split the list accordingly.
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function splitListToParts(head, k) {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    const partSize = Math.floor(length / k);
    let extraNodes = length % k;
    const result = new Array(k).fill(null);

    current = head;
    for (let i = 0; i < k && current; i++) {
        result[i] = current;
        let size = partSize + (extraNodes-- > 0 ? 1 : 0);
        for (let j = 1; j < size; j++) {
            current = current.next;
        }
        const next = current.next;
        current.next = null;
        current = next;
    }

    return result;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(splitListToParts(head, 5));  // Output: [[1],[2],[3],[],[]]
