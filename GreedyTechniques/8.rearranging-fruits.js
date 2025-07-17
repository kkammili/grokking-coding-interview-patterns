/*
PROBLEM STATEMENT:
Given two arrays of integers representing the weights of fruits in two baskets, rearrange the fruits such that the total weight of fruits in each basket is equal. Return the minimum number of swaps required to achieve this. If it's not possible, return -1.

PATTERN: Greedy Techniques
*/

// Solution implementation
function minSwapsToEqualWeight(basket1, basket2) {
    const totalWeight1 = basket1.reduce((a, b) => a + b, 0);
    const totalWeight2 = basket2.reduce((a, b) => a + b, 0);
    
    if ((totalWeight1 + totalWeight2) % 2 !== 0) return -1;
    
    const targetWeight = (totalWeight1 + totalWeight2) / 2;
    const diff = totalWeight1 - targetWeight;
    
    const map = new Map();
    for (const weight of basket1) {
        map.set(weight, (map.get(weight) || 0) + 1);
    }
    
    let swaps = 0;
    for (const weight of basket2) {
        const needed = weight + diff;
        if (map.has(needed) && map.get(needed) > 0) {
            map.set(needed, map.get(needed) - 1);
            swaps++;
        }
    }
    
    return swaps;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Calculate the total weight of both baskets.
   - Determine the target weight for each basket.
   - Use a map to track the weights in the first basket.
   - Iterate through the second basket to find matching weights that can be swapped.
3. Solution Walkthrough:
   - Calculate the total weight of each basket.
   - Check if the total weight is even; if not, return -1.
   - Calculate the target weight and the difference needed.
   - Use a map to count occurrences of each weight in the first basket.
   - Iterate through the second basket, checking for weights that can be swapped to balance the baskets.
   - Return the number of swaps.
4. Complexity: Time O(n), Space O(n)
*/
