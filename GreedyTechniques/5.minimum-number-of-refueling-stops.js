/*
PROBLEM STATEMENT:
A car travels from a starting position to a destination which is target miles east of the starting position. Along the way, there are gas stations. Each station[i] represents a gas station that is station[i][0] miles east of the starting position, and has station[i][1] liters of gas. The car starts with an infinite tank of gas, but a limited amount of gas in the tank. Return the minimum number of refueling stops needed to reach the destination. If it cannot reach the destination, return -1.

PATTERN: Greedy Techniques
*/

// Solution implementation
function minRefuelStops(target, startFuel, stations) {
    let maxHeap = [];
    let fuel = startFuel;
    let stops = 0;
    let i = 0;
    
    while (fuel < target) {
        while (i < stations.length && stations[i][0] <= fuel) {
            maxHeap.push(stations[i][1]);
            i++;
        }
        
        if (maxHeap.length === 0) return -1;
        
        fuel += Math.max(...maxHeap);
        maxHeap = maxHeap.filter(x => x !== Math.max(...maxHeap));
        stops++;
    }
    
    return stops;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Use a max heap to store the gas available at stations within reach.
   - At each step, refuel with the maximum available gas.
3. Solution Walkthrough:
   - Initialize `fuel` with `startFuel` and `stops` to 0.
   - Use a loop to check if the current fuel is less than the target.
   - Add gas from reachable stations to the max heap.
   - If no stations are reachable and the target is not reached, return -1.
   - Refuel with the maximum gas from the heap and increment stops.
   - Return the number of stops.
4. Complexity: Time O(n log n), Space O(n)
*/
