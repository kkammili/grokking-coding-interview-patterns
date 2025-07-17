/*
PROBLEM STATEMENT:
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

PATTERN: In-Place Manipulation of a Linked List
*/

// Solution implementation
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

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - Explain why this is an In-Place Manipulation of a Linked List problem
   - Identify pattern characteristics in the problem

2. Approach:
   - Step-by-step algorithmic reasoning
   - Time complexity: O(n)
   - Space complexity: O(1)

3. Solution Walkthrough:
   - Line-by-line explanation of the code
   - Edge cases handling
   - Optimization rationale
*/
