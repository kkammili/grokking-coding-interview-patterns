/**
 * Meeting Rooms II
 * 
 * Problem Statement:
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
 * 
 * Example:
 * Input: intervals = [[0, 30],[5, 10],[15, 20]]
 * Output: 2
 * 
 * Approach:
 * 1. Separate the start and end times of the meetings.
 * 2. Sort both the start and end times.
 * 3. Use two pointers to iterate over the start and end times.
 * 4. If a meeting starts before the earliest ending meeting ends, a new room is needed.
 * 5. If a meeting ends, a room is freed.
 */

function minMeetingRooms(intervals) {
    if (!intervals.length) return 0;

    const startTimes = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const endTimes = intervals.map(interval => interval[1]).sort((a, b) => a - b);

    let startPointer = 0;
    let endPointer = 0;
    let rooms = 0;

    while (startPointer < intervals.length) {
        if (startTimes[startPointer] >= endTimes[endPointer]) {
            rooms--;
            endPointer++;
        }
        rooms++;
        startPointer++;
    }

    return rooms;
}

// Example usage:
console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));  // Output: 2
console.log(minMeetingRooms([[7, 10], [2, 4]]));  // Output: 1
