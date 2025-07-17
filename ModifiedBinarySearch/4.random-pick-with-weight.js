/*
PROBLEM STATEMENT:
Implement a function to randomly pick an index from an array where the probability of picking an index is proportional to its weight.

PATTERN: Modified Binary Search
*/

// Solution implementation
class Solution {
    constructor(w) {
        this.prefixSums = [];
        this.totalSum = 0;
        for (let weight of w) {
            this.totalSum += weight;
            this.prefixSums.push(this.totalSum);
        }
    }

    pickIndex() {
        const target = Math.random() * this.totalSum;
        let left = 0, right = this.prefixSums.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.prefixSums[mid] > target) right = mid;
            else left = mid + 1;
        }
        return left;
    }
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves using binary search to find a weighted random index.
2. Approach:
   - Use prefix sums to represent cumulative weights and binary search to find the target index.
3. Solution Walkthrough:
   - Calculate prefix sums, generate a random target, and use binary search to find the index.
4. Complexity: Time O(log N) for pickIndex, Space O(N)
*/
