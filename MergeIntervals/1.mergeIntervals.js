/**
 * Problem: Merge Intervals
 * 
 * Statement:
 * You are given an array of closed intervals, `intervals`, where each interval has a start time and an end time.
 * The input array is sorted with respect to the start times of each interval.
 * Your task is to merge the overlapping intervals and return a new output array consisting of only 
 * the non-overlapping intervals.
 * 
 * Constraints:
 * - 1 <= intervals.length <= 10^3
 * - intervals[i].length == 2
 * - 0 <= start time <= end time <= 10^4
 * 
 * Example 1:
 * Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
 * Output: [[1, 6], [8, 10], [15, 18]]
 * Explanation: Intervals [1, 3] and [2, 6] overlap, so they are merged into [1, 6].
 * 
 * Example 2:
 * Input: intervals = [[1, 4], [4, 5]]
 * Output: [[1, 5]]
 * Explanation: Intervals [1, 4] and [4, 5] overlap and are merged into [1, 5].
 * 
 * Approach:
 * - Sort the intervals by their start time.
 * - Add the first interval to the merged array.
 * - Iterate through the intervals:
 *   - If the current interval overlaps with the previous one, merge them.
 *   - Otherwise, add the current interval to the merged array.
 */

/**
 * Merge Intervals
 * 
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * 
 * Approach:
 * 1. Sort the intervals by their start time.
 * 2. Iterate through the sorted intervals and merge overlapping intervals.
 * 3. Add the merged intervals to the result list.
 */

function mergeIntervals(intervals) {
    const merged = [];  // Array to store merged intervals.
    
    // Return empty array if no intervals.
    if (!intervals.length) {
        return merged;
    }

    // Sort intervals by their start time.
    intervals.sort((a, b) => a[0] - b[0]);

    let currentInterval = intervals[0];
    merged.push(currentInterval);

    for (let i = 1; i < intervals.length; i++) {
        const currentStart = currentInterval[0];
        const currentEnd = currentInterval[1];
        const nextStart = intervals[i][0];
        const nextEnd = intervals[i][1];

        if (currentEnd >= nextStart) {
            // Overlapping intervals, merge them.
            currentInterval[1] = Math.max(currentEnd, nextEnd);
        } else {
            // No overlap, add the current interval to the result.
            currentInterval = intervals[i];
            merged.push(currentInterval);
        }
    }

    return merged;
}

// Example usage:
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));  // Output: [[1, 6], [8, 10], [15, 18]]
console.log(mergeIntervals([[1, 4], [4, 5]]));  // Output: [[1, 5]]
console.log(mergeIntervals([[1, 6], [2, 4]]));  // Output: [[1, 6]]
