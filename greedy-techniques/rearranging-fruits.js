/*
PROBLEM STATEMENT:
You are given two arrays of integers basket1 and basket2 representing the number of fruits in each basket. You want to rearrange the fruits in the baskets such that the total number of fruits in each basket is the same. You can swap any two fruits between the baskets.

Return the minimum number of swaps required to achieve this.

PATTERN: Greedy Techniques
*/

// Solution implementation
function minSwapsToBalance(basket1, basket2) {
    const total1 = basket1.reduce((a, b) => a + b, 0);
    const total2 = basket2.reduce((a, b) => a + b, 0);
    if ((total1 + total2) % 2 !== 0) return -1;
    const target = (total1 + total2) / 2;
    let swaps = 0;
    let diff = total1 - target;
    for (let i = 0; i < basket1.length; i++) {
        if (diff === 0) break;
        if (diff > 0 && basket1[i] > basket2[i]) {
            swaps++;
            diff -= (basket1[i] - basket2[i]);
        } else if (diff < 0 && basket1[i] < basket2[i]) {
            swaps++;
            diff += (basket2[i] - basket1[i]);
        }
    }
    return swaps;
}
