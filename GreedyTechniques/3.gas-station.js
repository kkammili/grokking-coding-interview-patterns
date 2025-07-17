/*
PROBLEM STATEMENT:
There are n gas stations along a circular route, where the amount of gas at the i-th station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station. You begin the journey with an empty tank at one of the gas stations. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

PATTERN: Greedy Techniques
*/

// Solution implementation
function canCompleteCircuit(gas, cost) {
    let totalGas = 0, totalCost = 0, start = 0, tank = 0;
    
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];
        
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    
    return totalGas >= totalCost ? start : -1;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Calculate the total gas and total cost.
   - Use a variable `tank` to track the current gas in the tank.
   - If `tank` becomes negative, reset the start position to the next station.
3. Solution Walkthrough:
   - Initialize `totalGas`, `totalCost`, `start`, and `tank`.
   - Loop through each station, updating `totalGas`, `totalCost`, and `tank`.
   - If `tank` is negative, set `start` to `i + 1` and reset `tank`.
   - After the loop, check if `totalGas` is greater than or equal to `totalCost`.
   - Return `start` if true, otherwise return -1.
4. Complexity: Time O(n), Space O(1)
*/
