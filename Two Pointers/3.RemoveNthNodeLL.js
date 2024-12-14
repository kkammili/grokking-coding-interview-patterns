/**
 * Problem
Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    // Create a dummy node to simplify edge cases (e.g., removing the head)
    const dummy = new ListNode(0, head);
    
    // Initialize two pointers: `first` and `second`, both starting at the dummy node
    let first = dummy;
    let second = dummy;

    // Move the `first` pointer `n + 1` steps ahead to maintain a gap of `n` between `first` and `second`
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers one step at a time until `first` reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // `second` is now pointing to the node just before the node to be removed
    second.next = second.next.next;

    // Return the updated list starting from `dummy.next`
    return dummy.next;
}

// Helper Function to Build a Linked List from an Array
function buildLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper Function to Convert Linked List to Array for Easy Testing
function linkedListToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Example Usage
const head = buildLinkedList([1, 2, 3, 4, 5]);
const n = 2;

const newHead = removeNthFromEnd(head, n);
console.log(linkedListToArray(newHead)); // Output: [1, 2, 3, 5]
