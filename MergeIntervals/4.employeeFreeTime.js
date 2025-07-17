/**
 * Employee Free Time
 * 
 * Problem Statement:
 * We are given a list schedule of employees, which represents the working time for each employee.
 * Each employee has a list of non-overlapping intervals, and these intervals are sorted.
 * Return the list of finite intervals representing the common, positive-length free time for all employees.
 * 
 * Example:
 * Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
 * Output: [[3,4]]
 * 
 * Approach:
 * 1. Flatten the schedule into a single list of intervals.
 * 2. Sort the intervals by start time.
 * 3. Iterate through the sorted intervals to find gaps between the end of one interval and the start of the next.
 */

function employeeFreeTime(schedule) {
    const intervals = [];
    for (const employee of schedule) {
        for (const interval of employee) {
            intervals.push(interval);
        }
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start > prevEnd) {
            result.push([prevEnd, start]);
        }
        prevEnd = Math.max(prevEnd, end);
    }

    return result;
}

// Example usage:
console.log(employeeFreeTime([[[1, 2], [5, 6]], [[1, 3]], [[4, 10]]]));  // Output: [[3, 4]]
