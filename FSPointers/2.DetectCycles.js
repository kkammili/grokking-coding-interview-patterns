/*
Statement#
Check whether or not a linked list contains a cycle. If a cycle exists, return TRUE. Otherwise, return FALSE. The cycle means that at least one node can be reached again by traversing the next pointer.

Constraints:

Let n be the number of nodes in a linked list.

0<=n<=500
-10^5<Node.data<=10^5

*/


export function detectCycle(head){

    // Replace this placeholder return statement with your code
    let slow = head
    let fast = head
    
    while(fast && fast.next){
      slow = slow.next
      fast = fast.next.next
      if(slow === fast){
        return true
      }
    }
    
    return false;
}