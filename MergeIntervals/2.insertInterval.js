/**
 * Insert Interval
 * 
 * Problem Statement:
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 * You may assume that the intervals were initially sorted according to their start times.
 * 
 * Example:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * Approach:
 * 1. Iterate through the intervals and add all intervals that end before the new interval starts.
 * 2. Merge all overlapping intervals with the new interval.
 * 3. Add the remaining intervals that start after the new interval ends.
 */

function insertInterval(intervals, newInterval) {
    const result = [];
    let i = 0;

    // Add all intervals ending before newInterval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals with newInterval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// Example usage:
console.log(insertInterval([[1, 3], [6, 9]], [2, 5]));  // Output: [[1, 5], [6, 9]]
console.log(insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));  // Output: [[1, 2], [3, 10], [12, 16]]
