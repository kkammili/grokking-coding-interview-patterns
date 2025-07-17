/*
PROBLEM STATEMENT:
A car travels from a starting position to a destination which is target miles east of the starting position. Along the way, there are gas stations. Each station[i] represents a gas station that is station[i][0] miles east of the starting position, and has station[i][1] liters of gas.

Return the minimum number of refueling stops the car must make in order to reach its destination. If it cannot reach the destination, return -1.

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
