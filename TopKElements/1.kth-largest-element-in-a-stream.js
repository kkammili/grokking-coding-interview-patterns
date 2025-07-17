/*
PROBLEM STATEMENT:
Find the Kth largest element in a stream of numbers.

PATTERN: Top K Elements
*/

// Solution implementation
function KthLargest(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a).slice(0, k);
}

KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.nums.sort((a, b) => b - a);
    this.nums = this.nums.slice(0, this.k);
    return this.nums[this.k - 1];
};

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves maintaining the top K elements in a dynamic data stream.
2. Approach:
   - Use a sorted array to keep track of the top K elements.
3. Solution Walkthrough:
   - Initialize with the first K elements sorted.
   - On each addition, insert the new element, sort, and trim to K elements.
4. Complexity: Time O(N log N), Space O(K)
*/
