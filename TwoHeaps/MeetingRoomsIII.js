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
