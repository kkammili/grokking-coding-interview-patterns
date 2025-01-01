/* Given the head of a singly linked list, return the middle node of the linked list. If the number of nodes in the linked list is even, there will be two middle nodes, so return the second one.

Constraints:

Let n be the number of nodes in a linked list.

1<=n<=100
1<=node.data<=100
head !== null

 */


export function getMiddleNode(head){
    
    // Replace this placeholder return statement with your code
    let slow = head
    let fast = head
    
    while(fast && fast.next){
      slow = slow.next
      fast = fast.next.next
    }

    return slow;
}