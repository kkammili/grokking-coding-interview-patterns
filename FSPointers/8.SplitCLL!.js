/**
 * Problem Statement:
 * Given a circular linked list, split it into two circular linked lists:
 * - The first list contains the first half of the nodes.
 * - The second list contains the remaining nodes.
 *
 * Input:
 * - `list`: Head node of a circular linked list with an even number of nodes.
 * Output:
 * - An array `answer`:
 *   - `answer[0]`: Head of the first circular linked list.
 *   - `answer[1]`: Head of the second circular linked list.
 *
 * Constraints:
 * - The list contains an even number of nodes.
 * - 1 ≤ Node.data ≤ 10^3.
 */

function splitCircularLinkedList(head) {
    if (!head || !head.next) return [null, null]; // Edge case: empty or single-node list
  
    // Step 1: Find the middle and end of the circular linked list
    let slow = head;
    let fast = head;
  
    // Use slow and fast pointers to find the middle
    while (fast.next !== head && fast.next.next !== head) {
      slow = slow.next; // Slow moves one step
      fast = fast.next.next; // Fast moves two steps
    }
  
    // Step 2: Split the list into two halves
    let firstHalfHead = head; // Head of the first half
    let secondHalfHead = slow.next; // Head of the second half
  
    // Break the circular link for the first half
    slow.next = firstHalfHead;
  
    // Find the end of the second half and close the circular link
    let current = secondHalfHead;
    while (current.next !== head) {
      current = current.next;
    }
    current.next = secondHalfHead;
  
    // Step 3: Return the two circular linked lists
    return [firstHalfHead, secondHalfHead];
  }
  
  // Example Usage
  
  // Define a simple linked list node structure
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Helper function to create a circular linked list
  function createCircularLinkedList(values) {
    let head = new ListNode(values[0]);
    let current = head;
  
    for (let i = 1; i < values.length; i++) {
      current.next = new ListNode(values[i]);
      current = current.next;
    }
  
    current.next = head; // Make it circular
    return head;
  }
  
  // Helper function to print a circular linked list (for debugging)
  function printCircularLinkedList(head, length) {
    const result = [];
    let current = head;
  
    for (let i = 0; i < length; i++) {
      result.push(current.value);
      current = current.next;
    }
  
    console.log(result.join(" -> "));
  }
  
  // Example
  const circularList = createCircularLinkedList([1, 2, 3, 4, 5, 6]);
  const [firstHalf, secondHalf] = splitCircularLinkedList(circularList);
  
  // Print the results
  printCircularLinkedList(firstHalf, 3); // Output: 1 -> 2 -> 3
  printCircularLinkedList(secondHalf, 3); // Output: 4 -> 5 -> 6
  