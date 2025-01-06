/**
 * Problem: Employee Free Time
 * 
 * Statement:
 * You are given a list containing the schedules of multiple employees.
 * Each person’s schedule is a list of non-overlapping intervals sorted in ascending order.
 * An interval is specified with the start and end time.
 * Your task is to find the list of finite intervals representing the free time for all the employees.
 * 
 * Note:
 * - The free time intervals are the common free intervals across all employees.
 * - These free intervals are calculated between the earliest start time and the latest end time of all meetings.
 * 
 * Constraints:
 * - 1 <= schedule.length, schedule[i].length <= 50
 * - 0 <= interval.start < interval.end <= 10^8
 * 
 * Example 1:
 * Input: schedule = [[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]]
 * Output: [[3, 4]]
 * Explanation: The free time interval common to all employees is [3, 4].
 * 
 * Example 2:
 * Input: schedule = [[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]]
 * Output: [[5, 6], [7, 9]]
 * Explanation: The free time intervals are [5, 6] and [7, 9].
 * 
 * Approach:
 * - Flatten all employee schedules into one list of intervals.
 * - Sort all intervals by their start time.
 * - Merge overlapping intervals to get a single timeline.
 * - Identify gaps between the merged intervals to find the free time.
 */

function employeeFreeTime(schedule) {
    const intervals = [];  // Flattened list of intervals.

    // Flatten the schedules into a single list of intervals.
    for (const employee of schedule) {
        for (const interval of employee) {
            intervals.push(interval);
        }
    }

    // Sort intervals based on their start times.
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];  // Array to store merged intervals.

    // Merge overlapping intervals.
    for (let i = 1; i < intervals.length; i++) {
        let lastMerged = merged[merged.length - 1];
        let currInterval = intervals[i];

        // If intervals overlap, merge them.
        if (lastMerged[1] >= currInterval[0]) {
            lastMerged[1] = Math.max(lastMerged[1], currInterval[1]);
        } else {
            // If they don't overlap, add the current interval to `merged`.
            merged.push(currInterval);
        }
    }

    const freeTime = [];  // Array to store the free time intervals.

    // Identify the gaps (free time) between the merged intervals.
    for (let i = 1; i < merged.length; i++) {
        const prevEnd = merged[i - 1][1];  // End time of the previous interval.
        const currStart = merged[i][0];  // Start time of the current interval.

        // The gap between intervals is the free time.
        if (prevEnd < currStart) {
            freeTime.push([prevEnd, currStart]);
        }
    }

    return freeTime;
}

// Example usage:
console.log(employeeFreeTime([[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]]));  // Output: [[3, 4]]
console.log(employeeFreeTime([[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]]));  // Output: [[5, 6], [7, 9]]
