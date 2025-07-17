/*
PROBLEM STATEMENT:
Calculate the minimum cost to hire K workers given their quality and wage expectations.

PATTERN: Top K Elements
*/

// Solution implementation
function mincostToHireWorkers(quality, wage, K) {
    const workers = quality.map((q, i) => [wage[i] / q, q]).sort((a, b) => a[0] - b[0]);
    let result = Infinity, sumQ = 0, heap = [];
    for (let [ratio, q] of workers) {
        heap.push(-q);
        sumQ += q;
        if (heap.length > K) sumQ += heap.pop();
        if (heap.length === K) result = Math.min(result, sumQ * ratio);
    }
    return result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves selecting workers based on a cost metric, a Top K Elements problem.
2. Approach:
   - Use a min-heap to maintain the lowest quality workers for the given ratio.
3. Solution Walkthrough:
   - Calculate cost ratios, use a heap to track the top K, and compute the minimum cost.
4. Complexity: Time O(N log N), Space O(N)
*/
