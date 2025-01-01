
/*
Given the head of a linked list, your task is to check whether the linked list is a palindrome or not. Return TRUE if the linked list is a palindrome; otherwise, return FALSE.

Note: The input linked list prior to the checking process should be identical to the list after the checking process has been completed.

Constraints:

Let n be the number of nodes in a linked list.

1<=n<=500
0<=Node.value<=9
*/



function palindrome(head) {
  if (!head || !head.next) return true; // A single node or empty list is a palindrome

  // Step 1: Find the middle of the list using slow and fast pointers
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next; // Move slow by 1 step
    fast = fast.next.next; // Move fast by 2 steps
  }

  // Step 2: Reverse the second half of the list using reverseLinkedList helper
  const secondHalfStart = reverseLinkedList(slow);

  // Step 3: Compare the first and second halves
  let left = head; // Start of the first half
  let right = secondHalfStart; // Start of the reversed second half
  let isPalindrome = true;

  while (right) { // Only traverse the second half
    if (left.value !== right.value) {
      isPalindrome = false; // Mismatch found
      break;
    }
    left = left.next; // Move left pointer forward
    right = right.next; // Move right pointer forward
  }

  // Step 4: Restore the reversed second half of the list
  reverseLinkedList(secondHalfStart);

  return isPalindrome; // Return whether the list is a palindrome
}
