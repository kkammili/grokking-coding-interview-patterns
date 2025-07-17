/**
 * Problem Statement:
 * Given a set of intervals, for each interval i, find the minimum interval j
 * such that j.start >= i.end. If no such interval exists, return -1 for that interval.
 *
 * Description:
 * Use a sorted array of interval start times and binary search to efficiently
 * find the right interval for each interval in the input.
 */

function findRightInterval(intervals) {
    const startMap = new Map();
    const starts = [];

    for (let i = 0; i < intervals.length; i++) {
        startMap.set(intervals[i][0], i);
        starts.push(intervals[i][0]);
    }

    starts.sort((a, b) => a - b);

    const result = new Array(intervals.length).fill(-1);

    for (let i = 0; i < intervals.length; i++) {
        const end = intervals[i][1];
        let left = 0;
        let right = starts.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (starts[mid] >= end) {
                result[i] = startMap.get(starts[mid]);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return result;
}
