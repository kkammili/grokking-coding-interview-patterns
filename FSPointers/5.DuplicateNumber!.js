/**
 * Problem Statement:
 * Given an array of positive integers `nums`, where the values are in the range [1, n] 
 * (inclusive), and there are n + 1 elements, find the duplicate number in the array.
 * The array cannot be modified, and the solution must use constant extra space.
 * 
 * Constraints:
 * - nums.length = n + 1
 * - Values in nums are between 1 and n.
 * - There is exactly one duplicate number.
 *
 * Approach:
 * We use Floyd's Tortoise and Hare (Cycle Detection) algorithm to detect the duplicate number.
 */

function findDuplicate(nums) {
    // Step 1: Initialize slow and fast pointers
    let slow = nums[0];
    let fast = nums[0];
  
    // Step 2: Detect the cycle using the Tortoise and Hare method
    do {
      slow = nums[slow]; // Move slow pointer by 1 step
      fast = nums[nums[fast]]; // Move fast pointer by 2 steps
    } while (slow !== fast); // Loop until they meet
  
    // Step 3: Find the entry point of the cycle (duplicate number)
    slow = nums[0]; // Reset slow to the start of the array
    while (slow !== fast) {
      slow = nums[slow]; // Move slow pointer by 1 step
      fast = nums[fast]; // Move fast pointer by 1 step
    }
  
    // The meeting point is the duplicate number
    return slow;
  }
  
  // Example Usage:
  const nums = [3, 1, 3, 4, 2];
  console.log(findDuplicate(nums)); // Output: 3
  