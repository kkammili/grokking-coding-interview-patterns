/*
PROBLEM STATEMENT:
Find the top K frequent elements in an array.

PATTERN: Top K Elements
*/

// Solution implementation
function topKFrequent(nums, k) {
    const count = {};
    nums.forEach(num => count[num] = (count[num] || 0) + 1);
    return Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, k).map(entry => parseInt(entry[0]));
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem requires identifying the most frequent elements, a typical Top K Elements problem.
2. Approach:
   - Count frequencies and sort to find the top K.
3. Solution Walkthrough:
   - Use a hash map for counting, sort entries by frequency, and extract the top K.
4. Complexity: Time O(N log N), Space O(N)
*/
