/* Problem Statement
We are given a circular array of non-zero integers, nums, where:

Each integer represents the number of steps to move forward or backward from the current index.
Positive values imply forward movement, and negative values imply backward movement.
The traversal wraps around the array when reaching the ends.
A cycle in the array is defined as:

The sequence starts and ends at the same index.
The cycle length is at least 2.
The loop must move in a single direction (either all forward or all backward).
Return TRUE if the array contains a cycle, otherwise return FALSE.

Constraints:
1≤nums.length≤10 
−5000≤nums[i]≤5000
nums[i]!=0
*/


function circularArrayLoop(nums) {
    const n = nums.length;
  
    // Helper function to get the next index in a circular manner
    const nextIndex = (current, direction) => {
      const step = nums[current];
      const next = (current + step) % n;
      // Handle wrapping for negative indices
      return next >= 0 ? next : next + n;
    };
  
    for (let i = 0; i < n; i++) {
      let slow = i; // Initialize slow pointer
      let fast = i; // Initialize fast pointer
  
      // Determine the direction (forward or backward)
      const direction = nums[i] > 0;
  
      // Iterate while the current direction matches the direction of movement
      while (
        nums[slow] !== 0 && // Check if the current value isn't zero (visited)
        nums[fast] !== 0 && // Same check for the fast pointer
        (nums[slow] > 0 === direction) && // Ensure same direction for slow
        (nums[fast] > 0 === direction) // Ensure same direction for fast
      ) {
        // Move the slow pointer
        slow = nextIndex(slow, direction);
  
        // Move the fast pointer twice
        fast = nextIndex(fast, direction);
        if (nums[fast] > 0 === direction) {
          fast = nextIndex(fast, direction);
        } else {
          break; // Break if direction changes
        }
  
        // Check if slow and fast pointers meet
        if (slow === fast) {
          // Ensure the cycle is of length >= 2
          if (slow === nextIndex(slow, direction)) break;
          return true; // Cycle detected
        }
      }
  
      // Mark the visited nodes as 0 to prevent revisiting
      let index = i;
      while (
        nums[index] !== 0 &&
        (nums[index] > 0 === direction)
      ) {
        const next = nextIndex(index, direction);
        nums[index] = 0; // Mark as visited
        index = next;
      }
    }
  
    return false; // No cycle found
  }
  