/**
 * Problem Statement:
 * Given a linked list of even length `n`, calculate the maximum twin sum, where the twin of a node at position `i`
 * is the node at position `n - 1 - i`. Twin sum is defined as the sum of a node's value and its twin's value.
 *
 * Constraints:
 * - The list contains an even number of nodes.
 * - 1 ≤ Node.data ≤ 1000.
 *
 * Approach:
 * 1. Use two pointers to find the middle of the list.
 * 2. Reverse the second half of the list.
 * 3. Traverse both halves simultaneously to calculate twin sums.
 * 4. Restore the original list if needed and return the maximum twin sum.
 */

function pairSum(head) {
    // Helper function to reverse a linked list
    function reverseLinkedList(node) {
      let prev = null;
      let current = node;
  
      while (current) {
        let next = current.next; // Store the next node
        current.next = prev; // Reverse the pointer
        prev = current; // Move prev to current node
        current = next; // Move to the next node
      }
  
      return prev; // Return the new head of the reversed list
    }
  
    // Step 1: Find the middle of the linked list using the slow and fast pointer technique
    let slow = head;
    let fast = head;
  
    while (fast && fast.next) {
      slow = slow.next; // Move slow pointer one step
      fast = fast.next.next; // Move fast pointer two steps
    }
  
    // Step 2: Reverse the second half of the linked list
    let secondHalf = reverseLinkedList(slow);
  
    // Step 3: Traverse both halves to calculate twin sums and find the maximum
    let maxTwinSum = 0;
    let firstHalf = head;
  
    while (secondHalf) {
      // Calculate twin sum
      let twinSum = firstHalf.value + secondHalf.value;
      // Update maxTwinSum
      maxTwinSum = Math.max(maxTwinSum, twinSum);
  
      // Move pointers
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  
    // Step 4: Restore the original list structure by reversing the second half again (optional)
    reverseLinkedList(slow);
  
    return maxTwinSum; // Return the maximum twin sum
}  