/**
 * Problem Statement:
 * Given two strings `s` and `t`, find the minimum window in `s` that contains all the characters in `t`.
 * If no such window exists, return an empty string `""`.
 *
 * Constraints:
 * 1. Both `s` and `t` consist of uppercase and lowercase English letters.
 * 2. The length of `s` is greater than or equal to the length of `t`.
 * 3. If there are multiple valid windows, return the one that appears first.
 */

function minWindow(s, t) {
    /**
     * Step 1: Create a frequency map for characters in `t`.
     * This will help track the required frequency of each character in `t`.
     */
    const tFreq = {};
    for (const char of t) {
        tFreq[char] = (tFreq[char] || 0) + 1;
    }

    /**
     * Step 2: Initialize variables for the sliding window.
     * - `windowFreq`: Tracks the frequency of characters in the current window.
     * - `left`, `right`: Pointers to define the window.
     * - `have`: Number of characters in the window that meet the required frequency.
     * - `need`: Total unique characters that need to be matched.
     * - `minLen`: Keeps track of the smallest window length.
     * - `result`: Stores the smallest valid window substring.
     */
    const windowFreq = {};
    let left = 0, right = 0;
    let have = 0;
    const need = Object.keys(tFreq).length;
    let minLen = Infinity;
    let result = "";

    /**
     * Step 3: Expand the window by moving the `right` pointer.
     * Add characters to the window and update `windowFreq`.
     */
    while (right < s.length) {
        const char = s[right];
        windowFreq[char] = (windowFreq[char] || 0) + 1;

        // If this character satisfies the frequency requirement in `t`, increment `have`.
        if (tFreq[char] && windowFreq[char] === tFreq[char]) {
            have++;
        }

        /**
         * Step 4: When the window is valid (i.e., `have` matches `need`),
         * try to shrink the window from the left to find the smallest valid window.
         */
        while (have === need) {
            const windowLength = right - left + 1;
            if (windowLength < minLen) {
                minLen = windowLength;
                result = s.slice(left, right + 1); // Update the result
            }

            // Shrink the window from the left
            const leftChar = s[left];
            if (tFreq[leftChar] && windowFreq[leftChar] === tFreq[leftChar]) {
                have--;
            }
            windowFreq[leftChar]--;
            left++;
        }

        // Step 5: Expand the window by moving the `right` pointer.
        right++;
    }

    /**
     * Step 6: Return the smallest valid window substring.
     * If no valid window is found, return an empty string.
     */
    return result;
}

// Example usage:
const s = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(s, t)); // Output: "BANC"
