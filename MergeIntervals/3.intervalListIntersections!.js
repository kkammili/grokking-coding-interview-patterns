/**
 * Problem: Interval List Intersections
 * 
 * Statement:
 * You are given two lists of closed intervals, `firstList` and `secondList`, where each interval
 * is represented as `[start, end]`.
 * Your task is to return a list of intervals representing the intersection of the two lists.
 * Each list of intervals is sorted in ascending order based on the start time.
 * 
 * Constraints:
 * - 0 <= firstList.length, secondList.length <= 1000
 * - firstList[i].length == 2, secondList[j].length == 2
 * - 0 <= start time <= end time <= 10^9
 * - The intervals in each list are disjoint and sorted by start time.
 * 
 * Example 1:
 * Input: firstList = [[0, 2], [5, 10], [13, 23], [24, 25]]
 *        secondList = [[1, 5], [8, 12], [15, 24], [25, 26]]
 * Output: [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]
 * Explanation: The intersections between the two lists are [1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25].
 * 
 * Example 2:
 * Input: firstList = [[1, 3], [5, 9]], secondList = []
 * Output: []
 * Explanation: Since `secondList` is empty, there are no intersections.
 * 
 * Approach:
 * - Use two pointers `i` and `j` to traverse `firstList` and `secondList`.
 * - Find the intersection of the intervals `firstList[i]` and `secondList[j]`:
 *   - The intersection is `[max(start1, start2), min(end1, end2)]` if they overlap.
 * - If the intersection is valid (`start <= end`), add it to the result.
 * - Move the pointer for the interval that ends earlier.
 */

function intervalIntersection(firstList, secondList) {
    let i = 0, j = 0;  // Pointers for `firstList` and `secondList`
    const result = [];  // Array to store the intersections.

    // Traverse both lists while there are intervals remaining in both.
    while (i < firstList.length && j < secondList.length) {
        // Get the start and end of the current intervals.
        const start1 = firstList[i][0], end1 = firstList[i][1];
        const start2 = secondList[j][0], end2 = secondList[j][1];

        // Find the intersection of the current intervals.
        const start = Math.max(start1, start2);  // Max of the start times.
        const end = Math.min(end1, end2);  // Min of the end times.

        // If the intervals intersect, add the intersection to the result.
        if (start <= end) {
            result.push([start, end]);
        }

        // Move the pointer for the interval that ends first.
        if (end1 < end2) {
            i++;  // Move to the next interval in `firstList`.
        } else {
            j++;  // Move to the next interval in `secondList`.
        }
    }

    // Return the array of intersections.
    return result;
}

// Example usage:
console.log(intervalIntersection(
    [[0, 2], [5, 10], [13, 23], [24, 25]],
    [[1, 5], [8, 12], [15, 24], [25, 26]]
));  
// Output: [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]

console.log(intervalIntersection(
    [[1, 3], [5, 9]], 
    []
));  
// Output: []
