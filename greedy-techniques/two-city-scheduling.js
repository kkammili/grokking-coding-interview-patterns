/*
PROBLEM STATEMENT:
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCost, bCost], the cost of flying the ith person to city A is aCost, and the cost of flying the ith person to city B is bCost.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

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
