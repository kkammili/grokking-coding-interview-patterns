/*
PROBLEM STATEMENT:
Reorganize a string such that no two adjacent characters are the same.

PATTERN: Top K Elements
*/

// Solution implementation
function reorganizeString(s) {
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    const maxHeap = Object.entries(charCount).sort((a, b) => b[1] - a[1]);
    let result = '';
    while (maxHeap.length > 1) {
        let [char1, count1] = maxHeap.shift();
        let [char2, count2] = maxHeap.shift();
        result += char1 + char2;
        if (--count1 > 0) maxHeap.push([char1, count1]);
        if (--count2 > 0) maxHeap.push([char2, count2]);
        maxHeap.sort((a, b) => b[1] - a[1]);
    }
    if (maxHeap.length) {
        let [char, count] = maxHeap.shift();
        if (count > 1) return '';
        result += char;
    }
    return result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem requires arranging elements based on frequency, a common Top K Elements pattern.
2. Approach:
   - Use a max heap to always pair the most frequent characters.
3. Solution Walkthrough:
   - Count character frequencies, use a heap to manage them, and build the result string.
4. Complexity: Time O(N log N), Space O(N)
*/
