/*
PROBLEM STATEMENT:
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

PATTERN: Greedy Techniques
*/

// Solution implementation
function canCompleteCircuit(gas, cost) {
    let totalTank = 0, currTank = 0, startStation = 0;
    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i] - cost[i];
        currTank += gas[i] - cost[i];
        if (currTank < 0) {
            startStation = i + 1;
            currTank = 0;
        }
    }
    return totalTank >= 0 ? startStation : -1;
}
