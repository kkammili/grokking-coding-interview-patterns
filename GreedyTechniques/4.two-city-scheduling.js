/*
PROBLEM STATEMENT:
There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1]. Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

PATTERN: Greedy Techniques
*/

// Solution implementation
function twoCitySchedCost(costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    let totalCost = 0;
    const n = costs.length / 2;
    
    for (let i = 0; i < n; i++) {
        totalCost += costs[i][0] + costs[i + n][1];
    }
    
    return totalCost;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Sort the costs array by the difference between the cost of flying to city A and city B.
   - Send the first N people to city A and the rest to city B.
3. Solution Walkthrough:
   - Sort the costs array based on the difference between costs for city A and city B.
   - Initialize `totalCost` to 0.
   - Loop through the first half of the sorted array, adding the cost for city A.
   - Loop through the second half, adding the cost for city B.
   - Return the total cost.
4. Complexity: Time O(n log n), Space O(1)
*/
