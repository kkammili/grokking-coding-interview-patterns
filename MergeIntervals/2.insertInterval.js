function insertInterval(intervals, newInterval) {
    // Push the new interval into the intervals array.
    intervals.push(newInterval);

    // Sort intervals based on the start time.
    intervals.sort((a, b) => a[0] - b[0]);

    // Reuse the mergeIntervals function to merge overlapping intervals.
    return mergeIntervals(intervals);
}

function mergeIntervals(intervals) {
    const merged = [];

    if (!intervals.length) {
        return merged;
    }

    merged.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        let prevInterval = merged[merged.length - 1];
        let currInterval = intervals[i];

        if (prevInterval[1] >= currInterval[0]) {
            prevInterval[1] = Math.max(prevInterval[1], currInterval[1]);
        } else {
            merged.push(currInterval);
        }
    }

    return merged;
}

// Example usage:
console.log(insertInterval([[1, 3], [6, 9]], [2, 5]));  // Output: [[1, 5], [6, 9]]
console.log(insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));  // Output: [[1, 2], [3, 10], [12, 16]]

//Note: This is same as previous solution since we are sorting it after pushing newinterval into intervals.